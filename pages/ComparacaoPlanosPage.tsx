import React, { useState, useEffect, useRef } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ArrowLeft, Check, Info, Plus, Minus, Star, CaretUp, CaretDown, Users, CaretRight, Trash, X, Pencil } from 'phosphor-react';
import { BackButton } from '../components/common/BackButton';

interface PlanData {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
}

interface ComparacaoPlanosFormProps {
  onBack: () => void;
  onContinue: (data: { 
    selectedPlans: string[];
    vidasDistributionByPlan: Record<string, Record<string, number>>;
  }) => void;
  companyName: string;
  selectedPlansData: PlanData[];
  vidasDistribution?: Record<string, number>;
  detailedAges?: Record<string, Array<{age: number, count: number}>>;
}

// Tipo para distribuição de vidas por plano
type VidasByPlan = Record<string, Record<string, number>>;

// Função para formatar valores monetários
const formatCurrency = (value: string): string => {
  // Remove 'R$' e espaços
  const cleanValue = value.replace(/R\$\s*/g, '').trim();
  
  // Converte para número
  const numericValue = parseFloat(cleanValue.replace(',', '.'));
  
  // Formata com separador de milhares e duas casas decimais
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numericValue);
};

// Mapear as faixas etárias para labels mais legíveis
const ageRangeLabels: Record<string, string> = {
  '0-18': '0 a 18',
  '19-23': '19 a 23',
  '24-28': '24 a 28',
  '29-33': '29 a 33',
  '34-38': '34 a 38',
  '39-43': '39 a 43',
  '44-48': '44 a 48',
  '49-53': '49 a 53',
  '54-58': '54 a 58',
  '59+': '59+'
};

// Função para extrair tipo do produto das features
const getProductType = (features: string[]): string => {
  const productFeature = features.find(f => f.includes('553') || f.includes('557'));
  if (productFeature?.includes('553')) return '553';
  if (productFeature?.includes('557')) return '557';
  return '557'; // default
};

// Função para extrair vigência das features
const getVigencia = (features: string[]): string => {
  const vigenciaFeature = features.find(f => f.includes('meses'));
  return vigenciaFeature || '12 meses';
};

// Função para extrair tipo de contratação das features
const getTipoContratacao = (features: string[]): string => {
  const tipoFeature = features.find(f => f === 'CBO' || f === 'Compulsória');
  return tipoFeature || 'CBO';
};

// Função para verificar se tem coparticipação
const hasCoparticipacao = (features: string[]): boolean => {
  return features.some(f => f.toLowerCase().includes('com coparticipação'));
};

// Componente para exibir o ícone de check
const CheckIcon = ({ isHighlighted = false }: { isHighlighted?: boolean }) => (
  <div className="relative shrink-0 size-4">
    <Check size={16} color="#000000" weight="bold" />
  </div>
);




// Componente de controle de vidas simplificado
const VidasInputControl = ({ 
  value, 
  onChange, 
  max,
  disabled = false
}: { 
  value: number; 
  onChange: (value: number) => void;
  max: number;
  disabled?: boolean;
}) => {
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || 0;
    if (newValue >= 0 && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={`flex items-center justify-center gap-3 ${disabled ? 'opacity-50' : ''}`}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={disabled || value === 0}
        className="w-[52px] h-[52px] flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Minus size={20} />
      </button>
      
      <div className="w-[52px] h-[52px]">
        <Input
          type="number"
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          className="w-full h-full text-center text-[14px] leading-[21px] rounded border border-[#ced4da] focus-visible:ring-[#F05223] bg-white px-1 disabled:bg-gray-100 disabled:cursor-not-allowed [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
          style={{ MozAppearance: 'textfield' }}
          min={0}
          max={max}
        />
      </div>
      
      <button
        type="button"
        onClick={handleIncrement}
        disabled={disabled || value === max}
        className="w-[52px] h-[52px] flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Plus size={20} />
      </button>
    </div>
  );
};


export function ComparacaoPlanosForm({ 
  onBack, 
  onContinue, 
  companyName,
  selectedPlansData,
  vidasDistribution = {},
  detailedAges = {}
}: ComparacaoPlanosFormProps) {
  // Estado para controlar a posição da barra
  const [bottomBarOffset, setBottomBarOffset] = useState(0);
  
  // Estado para controlar a sidebar
  const [showSpecificationSidebar, setShowSpecificationSidebar] = useState(false);
  const [selectedAgeRange, setSelectedAgeRange] = useState<'0-18' | '59+' | null>(null);
  const [selectedPlanForSpecification, setSelectedPlanForSpecification] = useState<string | null>(null);
  
  // Inicializar distribuição de vidas por plano
  const [vidasByPlan, setVidasByPlan] = useState<VidasByPlan>(() => {
    const initial: VidasByPlan = {};
    selectedPlansData.forEach(plan => {
      initial[plan.id] = {};
    });
    return initial;
  });

  // Estado para distribuição detalhada por idade específica
  // Estrutura: { planId: { "0-18": { "0": 2, "1": 1, ... }, "59+": { "60": 1, ... } } }
  const [detailedVidasByPlan, setDetailedVidasByPlan] = useState<Record<string, Record<string, Record<string, number>>>>(() => {
    const initial: Record<string, Record<string, Record<string, number>>> = {};
    selectedPlansData.forEach(plan => {
      initial[plan.id] = {};
    });
    return initial;
  });

  // Estado temporário para a sidebar (só aplica quando salvar)
  const [tempDetailedVidas, setTempDetailedVidas] = useState<Record<string, number>>({});
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Calcular totais
  const totalVidasGeral = Object.values(vidasDistribution).reduce((sum, count) => sum + count, 0);
  
  // Verificar se há faixas etárias especiais
  const hasSpecialAgeRanges = (vidasDistribution['0-18'] && vidasDistribution['0-18'] > 0) || 
                              (vidasDistribution['59+'] && vidasDistribution['59+'] > 0);
  
  const totalVidasByPlan = selectedPlansData.reduce((acc, plan) => {
    let planTotal = 0;
    
    // Somar vidas
    Object.entries(vidasByPlan[plan.id] || {}).forEach(([ageRange, count]) => {
      planTotal += count;
    });
    
    acc[plan.id] = planTotal;
    return acc;
  }, {} as Record<string, number>);

  const totalVidasDistribuidas = Object.values(totalVidasByPlan).reduce((sum, count) => sum + count, 0);

  // Handler para mudança de vidas
  const handleVidasChange = (planId: string, ageRange: string, value: number) => {
    setVidasByPlan(prev => ({
      ...prev,
      [planId]: {
        ...prev[planId],
        [ageRange]: value
      }
    }));
  };

  // Verificar se todas as vidas foram distribuídas
  const allVidasDistributed = totalVidasDistribuidas === totalVidasGeral;

  // Effect para detectar posição do footer e ajustar a barra
  useEffect(() => {
    const updateBarPosition = () => {
      const footer = document.querySelector('[data-footer="true"]') || document.querySelector('footer');
      if (!footer) return;
      
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const barHeight = 80; // Altura aproximada da barra
      
      // Se o footer está visível na viewport (começando a aparecer)
      if (footerRect.top < windowHeight) {
        // Calcular a distância que a barra precisa subir para não sobrepor o footer
        const footerOverlap = windowHeight - footerRect.top;
        setBottomBarOffset(Math.max(0, footerOverlap));
      } else {
        // Footer não está visível, barra fica no bottom: 0
        setBottomBarOffset(0);
      }
    };

    // Executar no carregamento inicial
    updateBarPosition();
    
    // Adicionar listener de scroll
    window.addEventListener('scroll', updateBarPosition);
    window.addEventListener('resize', updateBarPosition);
    
    return () => {
      window.removeEventListener('scroll', updateBarPosition);
      window.removeEventListener('resize', updateBarPosition);
    };
  }, []);

  // Handler para continuar
  const handleContinue = () => {
    if (allVidasDistributed) {
      // Filtrar apenas planos que têm vidas
      const plansWithVidas = selectedPlansData
        .filter(plan => totalVidasByPlan[plan.id] > 0)
        .map(plan => plan.id);
      
      onContinue({
        selectedPlans: plansWithVidas,
        vidasDistributionByPlan: vidasByPlan
      });
    }
  };

  // Inicializar tempDetailedVidas quando abrir a sidebar
  useEffect(() => {
    if (showSpecificationSidebar && selectedPlanForSpecification && selectedAgeRange) {
      const detailedAgesForRange = detailedAges?.[selectedAgeRange] || [];
      const initialValues: Record<string, number> = {};
      detailedAgesForRange.forEach(ageData => {
        initialValues[ageData.age.toString()] = 
          detailedVidasByPlan[selectedPlanForSpecification]?.[selectedAgeRange]?.[ageData.age.toString()] || 0;
      });
      setTempDetailedVidas(initialValues);
      setHasUnsavedChanges(false);
    }
  }, [showSpecificationSidebar, selectedPlanForSpecification, selectedAgeRange]);


  return (
    <div className="bg-white">
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-[80px] pb-24">
        {/* Header Card com Indicador de Vidas */}
        <Card className="mb-6 rounded-xl border border-[#e4e7ec] shadow-none">
          <CardContent className="p-6">
            <h1 className="font-['Roboto',_sans-serif] font-bold text-[#101213] text-[32px] leading-[40px] mb-2">
              Compare e distribua as vidas
            </h1>
            <p className="font-['Roboto',_sans-serif] text-[#6a7178] text-[16px] leading-[24px] mb-6">
              Análise detalhada para {companyName}
            </p>
            
            {/* Indicador de vidas */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Users size={20} className="text-gray-600" />
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(vidasDistribution)
                      .filter(([_, count]) => count > 0)
                      .map(([ageRange, count]) => (
                        <div key={ageRange} className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1 border border-gray-200">
                          <span className="font-['Roboto',_sans-serif] text-[12px] text-[#6a7178]">
                            {ageRangeLabels[ageRange]}:
                          </span>
                          <span className="font-['Roboto',_sans-serif] font-semibold text-[12px] text-[#272b30]">
                            {count}
                          </span>
                        </div>
                      ))}
                    <div className="flex items-center gap-1.5 bg-gray-100 rounded-full px-3 py-1 border border-gray-300">
                      <span className="font-['Roboto',_sans-serif] text-[12px] text-[#6a7178]">
                        Total:
                      </span>
                      <span className="font-['Roboto',_sans-serif] font-bold text-[12px] text-[#272b30]">
                        {totalVidasGeral}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Container para comparação e distribuição */}
        <Card className="mb-8 rounded-xl border border-[#e4e7ec] shadow-none overflow-hidden">
          
          {/* Container com scroll horizontal quando necessário */}
          <div className="overflow-x-auto bg-white">
            <div className="inline-flex min-w-full">
              {/* Coluna fixa de labels */}
              <div className="flex-shrink-0 w-[100px] sticky left-0 z-10 bg-white border-r border-gray-200">
                {/* Espaço vazio no topo para alinhar com cards */}
                <div className="h-[320px] border-b border-gray-200 bg-gray-50">
                </div>
                
                {/* Labels das faixas etárias */}
                <div>
                  {/* Header da tabela */}
                  <div className="h-[48px] px-3 flex items-center border-b border-gray-200 bg-gray-100">
                    <h3 className="font-['Roboto',_sans-serif] font-medium text-[14px] text-[#6a7178]">
                      Faixas
                    </h3>
                  </div>
                  
                  {/* Linhas de faixas etárias */}
                  {Object.entries(vidasDistribution)
                    .filter(([_, count]) => count > 0)
                    .map(([ageRange, totalVidas], index) => {
                      return (
                        <div 
                          key={ageRange} 
                          className={`h-[80px] px-3 flex items-center border-b border-gray-100 ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          }`}
                        >
                          <span className="font-['Roboto',_sans-serif] text-[14px] text-[#272b30]">
                            {ageRangeLabels[ageRange] || ageRange}
                          </span>
                        </div>
                      );
                    })}
                  
                </div>
              </div>


              {/* Colunas dos planos - integradas com cards e distribuição */}
              {selectedPlansData.map((plan, planIndex) => {
                const planHasVidas = totalVidasByPlan[plan.id] > 0;
                const isInactive = allVidasDistributed && !planHasVidas;
                
                return (
                  <div key={plan.id} className="flex-shrink-0 w-[320px] border-r border-gray-200">
                    {/* Área do plano sem card */}
                    <div className={`h-[320px] border-b border-gray-200 bg-white flex flex-col ${
                      isInactive ? 'opacity-40' : ''
                    }`}>
                      {/* Conteúdo direto do plano */}
                      <div className="flex-1 flex flex-col justify-between px-4 py-6">
                        {/* Título */}
                        <div className="w-full mb-4">
                          <h3 className={`font-['Roboto',_sans-serif] font-bold text-[20px] leading-[24px] ${
                            isInactive ? 'text-gray-400' : 'text-[#272b30]'
                          }`}>
                            {plan.title}
                          </h3>
                          <p className={`font-['Roboto',_sans-serif] font-medium text-[14px] leading-[18px] mt-2 ${
                            isInactive ? 'text-gray-400' : 'text-[#818181]'
                          }`}>
                            {plan.subtitle}
                          </p>
                        </div>

                      {/* Benefícios */}
                      <div className="flex-1 flex flex-col gap-2 mb-6">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2 py-1">
                            <div className="mt-0.5">
                              <CheckIcon />
                            </div>
                            <span className={`font-['Roboto',_sans-serif] font-medium text-[14px] leading-[20px] ${
                              isInactive ? 'text-gray-400' : 'text-[#000000]'
                            }`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Preço */}
                      <div className="w-full">
                        <p className={`font-['Roboto',_sans-serif] leading-[32px] ${
                          isInactive ? 'text-gray-400' : 'text-[#272b30]'
                        }`}>
                          <span className="text-[16px]">R$</span>
                          <span className="text-[12px]"> </span>
                          <span className="font-bold text-[26px]">
                            {formatCurrency(plan.price)}
                          </span>
                          <span className="text-[16px]">/mês</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                    {/* Distribuição de vidas do plano */}
                    <div className={isInactive ? 'opacity-40' : ''}>
                    {/* Header com contador de vidas */}
                    <div className={`h-[48px] px-4 flex items-center justify-center border-b border-gray-200 ${
                      isInactive ? 'bg-gray-50' : 'bg-gray-100'
                    }`}>
                      {isInactive ? (
                        <span className="font-['Roboto',_sans-serif] text-[12px] text-gray-400">
                          Não selecionado
                        </span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Users size={20} className={totalVidasByPlan[plan.id] > 0 ? 'text-[#F05223]' : 'text-gray-400'} />
                          <span className={`font-['Roboto',_sans-serif] font-bold text-[18px] ${
                            totalVidasByPlan[plan.id] > 0 ? 'text-[#F05223]' : 'text-gray-400'
                          }`}>
                            {totalVidasByPlan[plan.id] || 0}
                          </span>
                          <span className="font-['Roboto',_sans-serif] text-[14px] text-[#6a7178]">
                            vidas
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Distribuição por faixa etária */}
                    {Object.entries(vidasDistribution)
                      .filter(([_, count]) => count > 0)
                      .map(([ageRange, totalVidas], index) => {
                        const isSpecialRange = ageRange === '0-18' || ageRange === '59+';
                        const allocatedVidas = selectedPlansData.reduce((sum, p) => {
                          return sum + (vidasByPlan[p.id]?.[ageRange] || 0);
                        }, 0);
                        const remainingVidas = totalVidas - allocatedVidas;
                        
                        const displayValue = vidasByPlan[plan.id]?.[ageRange] || 0;
                        
                        // Para faixas especiais, verificar se há vidas disponíveis considerando idades detalhadas
                        const hasAvailableDetailedLives = (() => {
                          if (!isSpecialRange || !detailedAges?.[ageRange]) return remainingVidas > 0;
                          
                          // Verificar se há pelo menos uma idade com vidas disponíveis
                          return detailedAges[ageRange].some(ageData => {
                            const totalAllocatedForAge = selectedPlansData.reduce((sum, p) => {
                              return sum + (detailedVidasByPlan[p.id]?.[ageRange]?.[ageData.age.toString()] || 0);
                            }, 0);
                            return ageData.count > totalAllocatedForAge;
                          });
                        })();
                        
                        return (
                          <div 
                            key={ageRange}
                            className={`h-[80px] flex items-center justify-center border-b border-gray-100 ${
                              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                            }`}
                          >
                            {isSpecialRange ? (
                              displayValue > 0 ? (
                                <button
                                  onClick={() => {
                                    setSelectedAgeRange(ageRange as '0-18' | '59+');
                                    setSelectedPlanForSpecification(plan.id);
                                    setShowSpecificationSidebar(true);
                                  }}
                                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                  <span className="font-semibold text-[16px]">{displayValue}</span>
                                  <Pencil size={16} className="text-gray-500" />
                                </button>
                              ) : hasAvailableDetailedLives ? (
                                <button
                                  onClick={() => {
                                    setSelectedAgeRange(ageRange as '0-18' | '59+');
                                    setSelectedPlanForSpecification(plan.id);
                                    setShowSpecificationSidebar(true);
                                  }}
                                  className="h-11 px-4 flex items-center gap-2 bg-white border border-[#f05223] text-[#f05223] rounded-full hover:bg-gray-50 transition-colors font-['Roboto',_sans-serif] font-medium text-[14px]"
                                >
                                  <Users size={16} />
                                  Especificar
                                </button>
                              ) : (
                                <button
                                  disabled
                                  className="h-11 px-4 flex items-center gap-2 bg-gray-100 border border-gray-300 text-gray-400 rounded-full cursor-not-allowed font-['Roboto',_sans-serif] font-medium text-[14px]"
                                >
                                  <Users size={16} />
                                  Sem vidas
                                </button>
                              )
                            ) : (
                              <VidasInputControl
                                value={displayValue}
                                onChange={(value) => handleVidasChange(plan.id, ageRange, value)}
                                max={remainingVidas + displayValue}
                              />
                            )}
                          </div>
                        );
                      })}
                    
                  </div>
                  </div>
                );
              })}

            </div>
          </div>
        </Card>

        {/* Barra de ações fixa no bottom */}
        <div 
          className="fixed left-0 right-0 bg-white border-t border-gray-200 px-4 py-4 z-10"
          style={{ bottom: `${bottomBarOffset}px` }}
        >
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-2 ${
                allVidasDistributed ? 'text-green-600' : 'text-orange-600'
              }`}>
                {allVidasDistributed ? (
                  <>
                    <Check size={20} weight="bold" />
                    <span className="font-['Roboto',_sans-serif] font-medium text-[16px]">
                      Todas as vidas distribuídas
                    </span>
                  </>
                ) : (
                  <>
                    <Info size={20} weight="fill" />
                    <span className="font-['Roboto',_sans-serif] font-medium text-[16px]">
                      Faltam {totalVidasGeral - totalVidasDistribuidas} vidas
                    </span>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex gap-4">
              <BackButton onClick={onBack} />
              
              <Button
                variant="primary"
                onClick={handleContinue}
                disabled={!allVidasDistributed}
                className="px-8 rounded-full"
              >
                Continuar
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Sidebar de Especificação de Idades */}
      {showSpecificationSidebar && selectedAgeRange && selectedPlanForSpecification && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => {
              if (hasUnsavedChanges) {
                if (confirm('Você tem alterações não salvas. Deseja sair sem salvar?')) {
                  setShowSpecificationSidebar(false);
                  setSelectedAgeRange(null);
                  setSelectedPlanForSpecification(null);
                  setTempDetailedVidas({});
                  setHasUnsavedChanges(false);
                }
              } else {
                setShowSpecificationSidebar(false);
                setSelectedAgeRange(null);
                setSelectedPlanForSpecification(null);
              }
            }}
          />
          
          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-[480px] bg-white shadow-xl z-50 overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-['Roboto',_sans-serif] font-bold text-[24px] text-[#101213]">
                  Distribuir {selectedAgeRange === '0-18' ? '0 a 18' : '59+'} anos
                </h3>
                <button
                  onClick={() => {
                    if (hasUnsavedChanges) {
                      if (confirm('Você tem alterações não salvas. Deseja sair sem salvar?')) {
                        setShowSpecificationSidebar(false);
                        setSelectedAgeRange(null);
                        setSelectedPlanForSpecification(null);
                        setTempDetailedVidas({});
                        setHasUnsavedChanges(false);
                      }
                    } else {
                      setShowSpecificationSidebar(false);
                      setSelectedAgeRange(null);
                      setSelectedPlanForSpecification(null);
                    }
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
              
              {/* Conteúdo da sidebar */}
              {(() => {
                const selectedPlan = selectedPlansData.find(p => p.id === selectedPlanForSpecification);
                if (!selectedPlan) return null;
                
                const detailedAgesForRange = detailedAges?.[selectedAgeRange] || [];
                
                // Calcular totais
                const totalVidasForRange = vidasDistribution[selectedAgeRange] as number;
                const totalAllocatedInThisPlan = Object.values(tempDetailedVidas).reduce((sum, val) => sum + val, 0);
                
                return (
                  <>
                    {/* Plano selecionado */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <h4 className="font-['Roboto',_sans-serif] font-semibold text-[16px] text-[#272b30]">
                        {selectedPlan.title}
                      </h4>
                      <p className="font-['Roboto',_sans-serif] text-[14px] text-[#6a7178] mt-1">
                        {selectedPlan.subtitle}
                      </p>
                      
                      {/* Indicador simples */}
                      <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-[#6a7178]" />
                          <span className="font-['Roboto',_sans-serif] text-[14px] text-[#6a7178]">
                            Total neste plano:
                          </span>
                          <span className={`font-['Roboto',_sans-serif] font-bold text-[16px] ${
                            totalAllocatedInThisPlan > 0 ? 'text-[#F05223]' : 'text-[#272b30]'
                          }`}>
                            {totalAllocatedInThisPlan}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Lista de idades */}
                    <div className="space-y-3">
                      {detailedAgesForRange.map((ageData, index) => {
                        const currentValue = tempDetailedVidas[ageData.age.toString()] || 0;
                        
                        // Calcular quantas vidas desta idade já foram alocadas em outros planos
                        const allocatedInOtherPlans = selectedPlansData
                          .filter(p => p.id !== selectedPlanForSpecification)
                          .reduce((sum, plan) => {
                            return sum + (detailedVidasByPlan[plan.id]?.[selectedAgeRange]?.[ageData.age.toString()] || 0);
                          }, 0);
                        
                        const maxForThisAge = ageData.count - allocatedInOtherPlans;
                        const remainingForThisAge = maxForThisAge - currentValue;
                        
                        return (
                          <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="font-['Roboto',_sans-serif] text-[16px] font-medium text-[#272b30]">
                                  {ageData.age} {ageData.age === 1 ? 'ano' : 'anos'}
                                </span>
                                <div className="font-['Roboto',_sans-serif] text-[12px] text-[#6a7178] mt-1">
                                  {ageData.count} {ageData.count === 1 ? 'vida total' : 'vidas totais'}
                                  {allocatedInOtherPlans > 0 && (
                                    <span> • {allocatedInOtherPlans} em outros planos</span>
                                  )}
                                </div>
                              </div>
                              
                              <VidasInputControl
                                value={currentValue}
                                onChange={(value) => {
                                  setTempDetailedVidas(prev => ({
                                    ...prev,
                                    [ageData.age.toString()]: value
                                  }));
                                  setHasUnsavedChanges(true);
                                }}
                                max={maxForThisAge}
                                disabled={maxForThisAge === 0 && currentValue === 0}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Botão salvar */}
                    <div className="flex justify-end mt-8">
                      <Button
                        variant="primary"
                        onClick={() => {
                          // Aplicar as mudanças
                          setDetailedVidasByPlan(prev => ({
                            ...prev,
                            [selectedPlanForSpecification]: {
                              ...prev[selectedPlanForSpecification],
                              [selectedAgeRange]: tempDetailedVidas
                            }
                          }));
                          
                          // Calcular e atualizar o total
                          const newTotal = Object.values(tempDetailedVidas).reduce((sum, val) => sum + val, 0);
                          handleVidasChange(selectedPlanForSpecification, selectedAgeRange, newTotal);
                          
                          // Fechar sidebar
                          setShowSpecificationSidebar(false);
                          setSelectedAgeRange(null);
                          setSelectedPlanForSpecification(null);
                          setTempDetailedVidas({});
                          setHasUnsavedChanges(false);
                        }}
                        disabled={!hasUnsavedChanges}
                        className="px-8 rounded-full"
                      >
                        Salvar
                      </Button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
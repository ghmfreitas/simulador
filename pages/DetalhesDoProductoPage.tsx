import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, Info, Check, Users, FileText, Shield, Clock, Heart, Calendar, CreditCard, CalendarCheck } from 'phosphor-react';
import { BackButton } from '../components/common/BackButton';

// Interfaces
interface DetalhesDoProductoFormProps {
  onBack: () => void;
  companyName: string;
  selectedPlan?: string;
  selectedPlans?: string[];
  selectedPlanData?: any;
  selectedPlansData?: any[];
  vidasDistributionByPlan?: Record<string, Record<string, number>>;
  simulationData?: any;
}

interface PlanData {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  details?: {
    coberturas: any[];
    redeCredenciada: any;
  };
}

// Componente de Ícone Check
const CheckIcon = ({ isHighlighted = false }: { isHighlighted?: boolean }) => (
  <div className="relative shrink-0 size-4">
    <Check size={16} color="#000000" weight="bold" />
  </div>
);

// Formatar moeda
const formatCurrency = (value: string): string => {
  const cleanValue = value.replace(/R\$\s*/g, '').trim();
  const numericValue = parseFloat(cleanValue.replace(/\./g, '').replace(',', '.'));
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numericValue);
};

// Componente CotacaoInfo
const CotacaoInfo = ({ 
  companyName, 
  onBack, 
  totalVidas, 
  vigencia, 
  tipoContratacao 
}: { 
  companyName: string; 
  onBack: () => void; 
  totalVidas: number;
  vigencia: string;
  tipoContratacao: string;
}) => (
  <div className="bg-[#ffffff] border border-[#e4e7ec] rounded-xl p-6 shadow-sm">
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="font-['Lintel:Bold',_sans-serif] text-[#101213] text-[24px] leading-[32px]">
          Dados da Cotação
        </h1>
        <p className="font-['Lintel:Regular',_sans-serif] text-[#6a7178] text-[14px] leading-[20px] mt-1">
          Confirme as informações antes de prosseguir com a simulação
        </p>
      </div>
      <BackButton onClick={onBack} />
    </div>
    
    <div className="space-y-4">
      {/* Linha única - 3 colunas: Data, Validade e Vidas */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="font-['Lintel:Medium',_sans-serif] text-[14px] text-[#6a7178] leading-tight mb-1">Data da simulação</p>
          <p className="font-['Lintel:Bold',_sans-serif] text-[16px] text-[#272b30] leading-[20px]">{new Date().toLocaleDateString('pt-BR')}</p>
        </div>
        <div>
          <p className="font-['Lintel:Medium',_sans-serif] text-[14px] text-[#6a7178] leading-tight mb-1">Validade</p>
          <p className="font-['Lintel:Bold',_sans-serif] text-[16px] text-[#272b30] leading-[20px]">{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}</p>
        </div>
        <div>
          <p className="font-['Lintel:Medium',_sans-serif] text-[14px] text-[#6a7178] leading-tight mb-1">Vidas Saúde</p>
          <p className="font-['Lintel:Bold',_sans-serif] text-[16px] text-[#272b30] leading-[20px]">{totalVidas}</p>
        </div>
      </div>
    </div>
    
    {/* Divisória */}
    <div className="border-t border-[#e4e4e4] my-6"></div>
    
    {/* Definição do contrato */}
    <div>
      <h3 className="font-['Lintel:Bold',_sans-serif] text-[#101213] text-[24px] leading-[32px] mb-4">
        Definição do contrato
      </h3>
      
      {/* Carteira, Produto e Segmento */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="font-['Lintel:Medium',_sans-serif] text-[14px] text-[#6a7178] leading-tight mb-1">Carteira</p>
          <p className="font-['Lintel:Bold',_sans-serif] text-[16px] text-[#272b30] leading-[20px]">PME</p>
        </div>
        <div>
          <p className="font-['Lintel:Medium',_sans-serif] text-[14px] text-[#6a7178] leading-tight mb-1">Produto</p>
          <p className="font-['Lintel:Bold',_sans-serif] text-[16px] text-[#272b30] leading-[20px]">557 - Ambulatorial e Hospitalar</p>
        </div>
        <div>
          <p className="font-['Lintel:Medium',_sans-serif] text-[14px] text-[#6a7178] leading-tight mb-1">Segmento</p>
          <p className="font-['Lintel:Bold',_sans-serif] text-[16px] text-[#272b30] leading-[20px]">Saúde</p>
        </div>
      </div>
      
      {/* Vigência, Tipo de contratação e Empresa MEI */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="font-['Lintel:Medium',_sans-serif] text-[14px] text-[#6a7178] leading-tight mb-1">Vigência contratual</p>
          <p className="font-['Lintel:Bold',_sans-serif] text-[16px] text-[#272b30] leading-[20px]">{vigencia}</p>
        </div>
        <div>
          <p className="font-['Lintel:Medium',_sans-serif] text-[14px] text-[#6a7178] leading-tight mb-1">Tipo de contratação</p>
          <p className="font-['Lintel:Bold',_sans-serif] text-[16px] text-[#272b30] leading-[20px]">{tipoContratacao}</p>
        </div>
        <div>
          <p className="font-['Lintel:Medium',_sans-serif] text-[14px] text-[#6a7178] leading-tight mb-1">Empresa MEI</p>
          <p className="font-['Lintel:Bold',_sans-serif] text-[16px] text-[#272b30] leading-[20px]">Não</p>
        </div>
      </div>
    </div>
  </div>
);

// Componente InfoRow
const InfoRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-3">
      <div className="text-[#6a7178]">
        {icon}
      </div>
      <span className="font-['Lintel:Medium',_sans-serif] text-[#6a7178] text-[14px] leading-[20px]">
        {label}
      </span>
    </div>
    <span className="font-['Lintel:Medium',_sans-serif] text-[#272b30] text-[14px] leading-[20px]">
      {value}
    </span>
  </div>
);

// Componente SectionHeader
const SectionHeader = ({ 
  title, 
  subtitle 
}: { 
  title: string; 
  subtitle?: string;
}) => (
  <div className="mb-4">
    <h3 className="font-['Lintel:Bold',_sans-serif] text-[#272b30] text-[20px] leading-[28px]">
      {title}
    </h3>
    {subtitle && (
      <p className="font-['Lintel:Regular',_sans-serif] text-[#6a7178] text-[14px] leading-[20px] mt-1">
        {subtitle}
      </p>
    )}
  </div>
);

// Componente PlanCard
const PlanCard = ({ 
  plan, 
  vidasCount 
}: { 
  plan: PlanData;
  vidasCount: number;
}) => (
  <div className="bg-[#ffffff] border border-[#e4e7ec] rounded-xl p-6 shadow-sm">
    <div className="space-y-4">
      <div>
        <h3 className="font-['Lintel:Bold',_sans-serif] text-[#272b30] text-[20px] leading-[24px]">
          {plan.title}
        </h3>
        <p className="font-['Lintel:Medium',_sans-serif] text-[#818181] text-[14px] leading-[18px] mt-2">
          {plan.subtitle}
        </p>
      </div>
      
      <div className="space-y-2">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckIcon />
            <span className="font-['Lintel:Medium',_sans-serif] text-[#000000] text-[14px] leading-[20px]">
              {feature}
            </span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-[#e4e4e4] pt-4 flex items-center justify-between">
        <div>
          <p className="font-['Lintel:Regular',_sans-serif] text-[#272b30]">
            <span className="text-[16px]">R$</span>
            <span className="text-[12px]"> </span>
            <span className="font-bold text-[26px]">
              {formatCurrency(plan.price)}
            </span>
            <span className="text-[16px]">/mês</span>
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 text-[#F05223]">
            <Users size={20} />
            <span className="font-['Lintel:Bold',_sans-serif] text-[18px]">
              {vidasCount}
            </span>
            <span className="font-['Lintel:Medium',_sans-serif] text-[14px] text-[#6a7178]">
              vidas
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Componente CompactPlan para plano único
const CompactPlan = ({ 
  title, 
  subtitle, 
  price, 
  details 
}: { 
  title: string;
  subtitle: string;
  price: string;
  details?: any;
}) => (
  <div className="bg-[#ffffff] border border-[#e4e7ec] rounded-xl p-6 shadow-sm">
    <div className="space-y-4">
      <div>
        <h3 className="font-['Lintel:Bold',_sans-serif] text-[#272b30] text-[20px] leading-[24px]">
          {title}
        </h3>
        <p className="font-['Lintel:Medium',_sans-serif] text-[#818181] text-[14px] leading-[18px] mt-2">
          {subtitle}
        </p>
      </div>
      
      <div className="border-t border-[#e4e4e4] pt-4">
        <p className="font-['Lintel:Regular',_sans-serif] text-[#272b30]">
          <span className="text-[16px]">R$</span>
          <span className="text-[12px]"> </span>
          <span className="font-bold text-[26px]">
            {formatCurrency(price)}
          </span>
          <span className="text-[16px]">/mês</span>
        </p>
      </div>
    </div>
  </div>
);

// Componente SimulationAlert
const SimulationAlert = () => (
  <div className="bg-[#fef3cd] border border-[#fcdc6e] rounded-lg p-4 flex gap-3">
    <Info size={20} className="text-[#795e00] shrink-0 mt-0.5" />
    <div className="flex-1">
      <p className="font-['Lintel:Medium',_sans-serif] text-[#795e00] text-[14px] leading-[20px]">
        Esta é uma simulação. Os valores apresentados podem sofrer alterações.
      </p>
    </div>
  </div>
);

// Dados mockados do plano único
const getSinglePlanData = (planId: string): PlanData => {
  return {
    id: planId || 'default',
    title: 'Saúde Clássico',
    subtitle: 'Plano com cobertura nacional',
    features: [
      '557 - Ambulatorial e Hospitalar com Obstetrícia',
      'CBO',
      '12 meses',
      'Sem coparticipação'
    ],
    price: '850,00',
    details: {
      coberturas: [],
      redeCredenciada: {}
    }
  };
};

// Componente Principal
export function DetalhesDoProductoForm({ 
  onBack, 
  companyName, 
  selectedPlan, 
  selectedPlans,
  selectedPlanData,
  selectedPlansData,
  vidasDistributionByPlan,
  simulationData 
}: DetalhesDoProductoFormProps) {
  // Determinar se é um único plano ou múltiplos
  const isMultiplePlans = (selectedPlans && selectedPlans.length > 1) || (selectedPlansData && selectedPlansData.length > 1);
  
  // Filtrar apenas planos que receberam vidas
  const plansWithVidas = isMultiplePlans ? (selectedPlansData || []).filter((plan, index) => {
    const planId = selectedPlans?.[index] || plan.id;
    const vidasForPlan = vidasDistributionByPlan?.[planId] || {};
    const totalVidasPlan = Object.values(vidasForPlan).reduce((sum, count) => sum + count, 0);
    return totalVidasPlan > 0;
  }) : [selectedPlanData || getSinglePlanData(selectedPlan || '')];
  
  const plans = plansWithVidas;
  
  // Calcular total de vidas
  const totalVidas = simulationData?.vidasDistribution 
    ? Object.values(simulationData.vidasDistribution).reduce((sum, count) => sum + count, 0)
    : 0;
  
  // Pegar o primeiro plano disponível para extrair informações padrão
  const firstPlan = plans[0];
  const singlePlanData = !isMultiplePlans ? firstPlan : null;
  
  // Extrair informações dinâmicas
  const vigencia = simulationData?.contractVigencia || '12 meses';
  const tipoContratacao = simulationData?.contractType || 'CBO';
  const coparticipacao = simulationData?.hasCoparticipation || false;
  const coparticipacaoText = coparticipacao ? 'Com coparticipação' : 'Sem coparticipação';
  
  // Determinar o tipo de produto baseado no tipo de plano
  const tipoProduto = firstPlan?.features?.[0] || singlePlanData?.features?.[0] || '557 - Ambulatorial e Hospitalar com Obstetrícia';
  
  // Criar features dinâmicas baseadas nos dados extraídos
  const dynamicFeatures = [
    tipoProduto,
    tipoContratacao,
    vigencia,
    coparticipacaoText
  ];
  
  // Usar o preço real do plano selecionado se disponível
  const dynamicPrice = simulationData?.selectedPlanData?.price || singlePlanData?.price || '0,00';
  
  // Criar dados dinâmicos do plano único
  const dynamicPlanData = singlePlanData ? {
    ...singlePlanData,
    title: simulationData?.selectedPlanData?.title || singlePlanData.title,
    subtitle: simulationData?.selectedPlanData?.subtitle || singlePlanData.subtitle,
    features: dynamicFeatures,
    price: dynamicPrice
  } : null;
  
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[80px] pb-24">
        {isMultiplePlans ? (
          // Layout para múltiplos planos
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Coluna Esquerda - Cards dos Planos */}
              <div className="space-y-6">
                {plans.map((plan, index) => {
                  const planId = selectedPlans?.[index] || plan.id;
                  const vidasForPlan = vidasDistributionByPlan?.[planId] || {};
                  const totalVidasPlan = Object.values(vidasForPlan).reduce((sum, count) => sum + count, 0);
                  
                  return (
                    <PlanCard
                      key={plan.id || index}
                      plan={plan}
                      vidasCount={totalVidasPlan}
                    />
                  );
                })}
              </div>
              
              {/* Coluna Direita - Informações Compartilhadas */}
              <div className="space-y-6">
                {/* Cotação Info */}
                <CotacaoInfo 
                  companyName={companyName} 
                  onBack={onBack} 
                  totalVidas={totalVidas}
                  vigencia={vigencia}
                  tipoContratacao={tipoContratacao}
                />
                
                {/* Card de Valor Total */}
                <div className="bg-[#ffffff] border border-[#e4e7ec] rounded-xl p-6 shadow-sm">
                  <div className="flex flex-col items-end gap-4">
                    {/* Valor Total */}
                    <div className="text-right">
                      <h3 className="font-['Lintel:Bold',_sans-serif] text-[#6a7178] text-[14px] leading-[20px] uppercase tracking-wider mb-2">
                        Soma dos Planos Selecionados
                      </h3>
                      <div className="flex items-baseline gap-2 justify-end">
                        <span className="font-['Lintel:Bold',_sans-serif] text-[#272b30] text-[20px]">R$</span>
                        <span className="font-['Lintel:Bold',_sans-serif] text-[#272b30] text-[32px] leading-[40px]">
                          {(() => {
                            // Usar selectedPlansData em vez de plans para incluir TODOS os planos selecionados
                            const allSelectedPlans = selectedPlansData || [];
                            
                            const total = allSelectedPlans.reduce((sum, plan) => {
                              // Verificar se o preço já é um número ou string
                              let price;
                              if (typeof plan.price === 'number') {
                                price = plan.price;
                              } else {
                                // Se for string, fazer a conversão
                                const priceString = plan.price.toString();
                                price = parseFloat(priceString.replace(/\./g, '').replace(',', '.'));
                              }
                              
                              return sum + price;
                            }, 0);
                            
                            // Formatar diretamente sem passar pela função formatCurrency
                            return new Intl.NumberFormat('pt-BR', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2
                            }).format(total);
                          })()}
                        </span>
                        <span className="font-['Lintel:Medium',_sans-serif] text-[#6a7178] text-[20px]">/mês</span>
                      </div>
                    </div>
                    
                    {/* Botão e Alerta */}
                    <div className="w-full space-y-4">
                      <button className="bg-[#f05223] h-[44px] rounded-full w-full hover:bg-[#e04112] transition-colors flex items-center justify-center">
                        <span className="font-['Lintel:Bold',_sans-serif] text-[#ffffff] text-[16px] leading-[20px] text-center">
                          Gerar proposta comercial
                        </span>
                      </button>
                      <SimulationAlert />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Layout original para plano único
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Compact Plan */}
              {dynamicPlanData && (
                <CompactPlan
                  title={dynamicPlanData.title}
                  subtitle={dynamicPlanData.subtitle}
                  price={dynamicPlanData.price}
                  details={dynamicPlanData.details}
                />
              )}
              
              {/* Right Column - Quotation Info */}
              <CotacaoInfo 
                companyName={companyName} 
                onBack={onBack} 
                totalVidas={totalVidas}
                vigencia={vigencia}
                tipoContratacao={tipoContratacao}
              />
            </div>
            
            {/* Seção de Ação - Botão único */}
            {dynamicPlanData && (
              <div className="bg-[#ffffff] border border-[#e4e7ec] rounded-xl p-6 shadow-sm">
                <div className="flex flex-col items-center gap-6">
                  {/* Valor Total */}
                  <div className="flex flex-col items-center">
                    <h3 className="font-['Lintel:Bold',_sans-serif] text-[#6a7178] text-[14px] leading-[20px] uppercase tracking-wider mb-2">
                      Valor do Plano
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-['Lintel:Bold',_sans-serif] text-[#272b30] text-[20px]">R$</span>
                      <span className="font-['Lintel:Bold',_sans-serif] text-[#272b30] text-[32px] leading-[40px]">
                        {formatCurrency(dynamicPlanData.price)}
                      </span>
                      <span className="font-['Lintel:Medium',_sans-serif] text-[#6a7178] text-[20px]">/mês</span>
                    </div>
                  </div>
                  
                  {/* Botão e Alerta */}
                  <div className="w-full max-w-md space-y-4">
                    <button className="bg-[#f05223] h-[44px] rounded-full w-full hover:bg-[#e04112] transition-colors flex items-center justify-center">
                      <span className="font-['Lintel:Bold',_sans-serif] text-[#ffffff] text-[16px] leading-[20px] text-center">
                        Gerar proposta comercial
                      </span>
                    </button>
                    <SimulationAlert />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
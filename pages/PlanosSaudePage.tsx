import React, { useState, useEffect, useMemo } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Slider } from "../components/ui/slider";
import { BackButton } from '../components/common/BackButton';
import { GridPatterns, cn } from '../lib/grid-patterns';

// Single Value Price Slider Component
interface PriceSliderProps {
  value: number;
  onValueChange: (value: number) => void;
  max: number;
  min: number;
  step: number;
}

function PriceSlider({ value, onValueChange, max, min, step }: PriceSliderProps) {
  return (
    <Slider
      value={[value]}
      onValueChange={(values) => onValueChange(values[0])}
      max={max}
      min={min}
      step={step}
      className="w-full [&_[data-radix-slider-track]]:bg-[#F05223] [&_[data-radix-slider-range]]:bg-[#ced4da] [&_[data-radix-slider-thumb]]:border-[#F05223] [&_[data-radix-slider-thumb]]:bg-white [&_[data-radix-slider-thumb]]:shadow-sm"
    />
  );
}

import { ArrowLeft, Check, Info, Users, SignOut, Trash, CaretUp, CaretDown } from 'phosphor-react';
import svgPaths from "../imports/svg-7elsdmpcx6";
import { Tooltip } from "../components/ui/tooltip";

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

interface PlanosSaudeFormProps {
  onBack: () => void;
  onContinue: (data: { 
    selectedPlans?: string[]; 
    selectedPlanData?: {
      id: string;
      title: string;
      subtitle: string;
      features: string[];
      price: string;
    };
    selectedPlansData?: Array<{
      id: string;
      title: string;
      subtitle: string;
      features: string[];
      price: string;
    }>;
  }) => void;
  onEditLives?: () => void;
  onExitSimulation?: () => void;
  companyName: string;
  addCuidado360?: boolean;
  generatedPlans553?: Plan[];
  generatedPlans557?: Plan[];
  onGeneratePlans?: (plans553: Plan[], plans557: Plan[]) => void;
}

interface Filters {
  maxPrice: number;
  tipoProduto: '553' | '557';
  tipoContratacao: {
    cei: boolean;
    compulsoria: boolean;
  };
  vigenciaContratual: {
    doze: boolean;
    vintequatro: boolean;
  };
  coparticipacao: {
    sem: boolean;
    com: boolean;
  };
  sortOrder: 'asc' | 'desc';
}

function CheckboxIcon({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <div className="bg-[#f05223] relative rounded shrink-0 size-6 flex items-center justify-center">
        <Check size={16} color="white" weight="bold" />
      </div>
    );
  }
  
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-6">
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}


function CheckIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <path
          d={svgPaths.p991aa80}
          fill="var(--fill-0, black)"
        />
      </svg>
    </div>
  );
}



function ActionButton({ 
  onClick, 
  children, 
  icon 
}: { 
  onClick?: () => void; 
  children: React.ReactNode; 
  icon: React.ReactNode; 
}) {
  return (
    <button
      onClick={onClick}
      className="bg-[#ffffff] h-11 relative rounded-[100px] shrink-0 border border-[#f05223] hover:bg-[#fef2f0] transition-colors"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-11 items-center justify-center overflow-clip px-4 py-0 relative">
        <div className="box-border content-stretch flex flex-row gap-2 h-11 items-center justify-start p-0 relative shrink-0">
          {icon}
          <div className="flex flex-col font-['Lintel:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f05223] text-[14px] text-center text-nowrap">
            <p className="block leading-[21px] whitespace-pre">{children}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  tooltip?: string;
}

function FilterSection({ title, children, tooltip }: FilterSectionProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-base leading-6 font-bold font-['Roboto',_sans-serif] font-bold text-[#323232]">
          {title}
        </h3>
        {tooltip && (
          <Tooltip content={tooltip} side="right">
            <div className="cursor-help">
              <Info size={16} color="#666666" />
            </div>
          </Tooltip>
        )}
      </div>
      {children}
    </div>
  );
}

interface FilterCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function FilterCheckbox({ label, checked, onChange }: FilterCheckboxProps) {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <div 
        className="cursor-pointer" 
        onClick={() => onChange(!checked)}
      >
        <CheckboxIcon checked={checked} />
      </div>
      <label
        onClick={() => onChange(!checked)}
        className="font-['Roboto',_sans-serif] text-[#000000] text-[14px] leading-[21px] cursor-pointer flex-1"
      >
        {label}
      </label>
    </div>
  );
}

interface FilterRadioProps {
  label: string;
  selected: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

function FilterRadio({ label, selected, disabled = false, onClick }: FilterRadioProps) {
  return (
    <div 
      className="flex items-center space-x-2 mb-2"
      onClick={disabled ? undefined : onClick}
    >
      <div className={`relative shrink-0 size-6 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
        {selected ? (
          <>
            <div className="absolute bg-[#f05223] inset-0 rounded-full" />
            <div className="absolute bg-[#ffffff] inset-1/4 rounded-full" />
          </>
        ) : (
          <>
            <div className="bg-[#ffffff] relative rounded-full shrink-0 size-6" />
            <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded-full" />
          </>
        )}
      </div>
      <label
        className={`font-['Roboto',_sans-serif] text-[#000000] text-[14px] leading-[21px] flex-1 ${
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function FiltersPanel({ filters, onFiltersChange, addCuidado360 }: { 
  filters: Filters; 
  onFiltersChange: (filters: Filters) => void;
  addCuidado360?: boolean;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown-container]')) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);
  
  const updateFilters = (section: keyof Filters, key: string, value: any) => {
    const newFilters = { ...filters };
    if (section === 'maxPrice' || section === 'tipoProduto' || section === 'sortOrder') {
      newFilters[section] = value;
    } else {
      (newFilters[section] as any)[key] = value;
    }
    onFiltersChange(newFilters);
  };

  return (
    <div className="w-full lg:w-[280px] bg-white border-r border-[#e4e4e4] px-6 pt-6 pb-6 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
      <h2 className="text-xl leading-7 font-bold font-['Roboto',_sans-serif] font-bold text-[#101213] mb-6">
        Filtros
      </h2>

      {/* Ordenação */}
      <FilterSection 
        title="Ordenar por" 
        tooltip="Escolha como deseja ordenar os planos"
      >
        <div className="relative" data-dropdown-container>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between px-3 py-2 border border-[#ced4da] rounded-md hover:border-[#f05223] transition-colors"
          >
            <span className="font-['Roboto',_sans-serif] text-[#000000] text-[14px] leading-[21px]">
              {filters.sortOrder === 'asc' ? 'Menor valor' : 'Maior valor'}
            </span>
            <CaretDown 
              size={16} 
              className={`text-[#666666] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
              weight="bold" 
            />
          </button>
          
          {dropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-[#ced4da] rounded-md shadow-lg">
              <button
                onClick={() => {
                  updateFilters('sortOrder', '', 'asc');
                  setDropdownOpen(false);
                }}
                className={`w-full px-3 py-2 text-left font-['Roboto',_sans-serif] text-[14px] leading-[21px] hover:bg-gray-50 ${
                  filters.sortOrder === 'asc' ? 'text-[#f05223] bg-gray-50' : 'text-[#000000]'
                }`}
              >
                Menor valor
              </button>
              <button
                onClick={() => {
                  updateFilters('sortOrder', '', 'desc');
                  setDropdownOpen(false);
                }}
                className={`w-full px-3 py-2 text-left font-['Roboto',_sans-serif] text-[14px] leading-[21px] hover:bg-gray-50 ${
                  filters.sortOrder === 'desc' ? 'text-[#f05223] bg-gray-50' : 'text-[#000000]'
                }`}
              >
                Maior valor
              </button>
            </div>
          )}
        </div>
      </FilterSection>

      {/* Faixa de valores */}
      <FilterSection 
        title="Valor máximo" 
        tooltip="Defina o valor máximo que deseja pagar mensalmente pelo plano de saúde"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="font-['Roboto',_sans-serif] text-[#666666] text-[14px] leading-[21px]">
              Até
            </span>
            <span className="font-['Roboto',_sans-serif] text-[#000000] text-[14px] leading-[21px]">
              R$ {filters.maxPrice.toLocaleString()}
            </span>
          </div>
          <PriceSlider
            value={filters.maxPrice}
            onValueChange={(value) => updateFilters('maxPrice', '', value)}
            max={9000}
            min={0}
            step={100}
          />
        </div>
      </FilterSection>

      {/* Produto - Saúde PME */}
      <FilterSection 
        title="Produto - Saúde PME" 
        tooltip={addCuidado360 ? "Produto específico para o pacote Cuidado 360º" : "Escolha entre produtos com cobertura hospitalar (553) ou ambulatorial e hospitalar (557)"}
      >
        {addCuidado360 ? (
          <FilterRadio
            label="557 - AHO"
            selected={true}
            disabled={true}
          />
        ) : (
          <>
            <FilterRadio
              label="553 - Hospitalar com Obstetrícia"
              selected={filters.tipoProduto === '553'}
              onClick={() => updateFilters('tipoProduto', '', '553')}
            />
            <FilterRadio
              label="557 - AHO"
              selected={filters.tipoProduto === '557'}
              onClick={() => updateFilters('tipoProduto', '', '557')}
            />
          </>
        )}
      </FilterSection>

      {/* Tipo de contratação */}
      <FilterSection 
        title="Tipo de contratação" 
        tooltip="Escolha o tipo de contratação: CBO (Classificação Brasileira de Ocupações), Compulsória (obrigatória para todos) ou Flex (flexível)"
      >
        <FilterCheckbox
          label="CBO"
          checked={filters.tipoContratacao.cei}
          onChange={(checked) => updateFilters('tipoContratacao', 'cei', checked)}
        />
        <FilterCheckbox
          label="Compulsória"
          checked={filters.tipoContratacao.compulsoria}
          onChange={(checked) => updateFilters('tipoContratacao', 'compulsoria', checked)}
        />
      </FilterSection>

      {/* Vigência contratual */}
      <FilterSection 
        title="Vigência contratual" 
        tooltip="Período de duração do contrato. Você pode escolher entre 12 meses ou 24 meses de compromisso"
      >
        <FilterCheckbox
          label="12 meses"
          checked={filters.vigenciaContratual.doze}
          onChange={(checked) => updateFilters('vigenciaContratual', 'doze', checked)}
        />
        <FilterCheckbox
          label="24 meses"
          checked={filters.vigenciaContratual.vintequatro}
          onChange={(checked) => updateFilters('vigenciaContratual', 'vintequatro', checked)}
        />
      </FilterSection>

      {/* Coparticipação */}
      <FilterSection 
        title="Coparticipação" 
        tooltip="Escolha se deseja planos com ou sem coparticipa��ão. Com coparticipação você paga uma taxa adicional por uso dos serviços"
      >
        <FilterCheckbox
          label="Sem coparticipação"
          checked={filters.coparticipacao.sem}
          onChange={(checked) => updateFilters('coparticipacao', 'sem', checked)}
        />
        <FilterCheckbox
          label="Com coparticipação"
          checked={filters.coparticipacao.com}
          onChange={(checked) => updateFilters('coparticipacao', 'com', checked)}
        />
      </FilterSection>
    </div>
  );
}

interface PlanCardProps {
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  onDetailsClick: () => void;
  isSelected?: boolean;
}

function PlanCard({ title, subtitle, features, price, onDetailsClick, isSelected = false }: PlanCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className={`bg-[#ffffff] box-border flex flex-col gap-6 items-start justify-start px-0 py-6 relative rounded-xl w-full h-full border transition-colors ${
      isSelected ? 'border-[#f05223] hover:border-[#e04112]' : 'border-[#e4e4e4] hover:border-[#d1d5db]'
    }`}>
      {/* Título */}
      <div className="relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-4 py-0 relative w-full">
            <div className="box-border content-stretch flex flex-row gap-16 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[20px] text-left text-nowrap">
                <p className="block leading-[18px] whitespace-pre font-bold">{title}</p>
              </div>
            </div>
            <div className="font-['Lintel:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#818181] text-[14px] text-left w-full">
              <p className="block leading-[18px]">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefícios */}
      <div className="relative shrink-0 w-full">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start px-4 py-0 relative w-full">
            {features.map((feature, index) => (
              <div key={index} className="w-full">
                <div className="relative rounded-sm shrink-0 w-full">
                  <div className="flex flex-row items-center justify-start relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-1 py-1 relative w-full">
                      <CheckIcon />
                      <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
                        <p className="block leading-[18px] font-medium">{feature}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preço e Botão */}
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
        {/* Preço */}
        <div className="relative shrink-0 w-full">
          <div className="overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
              <div className="flex flex-col font-['Lintel:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#272b30] text-[0px] text-left w-full">
                <p className="leading-[32px]">
                  <span className="text-[16px]">R$</span>
                  <span className="text-[12px]"> </span>
                  <span className="font-['Lintel:Bold',_sans-serif] not-italic text-[26px]">
                    {formatCurrency(price)}
                  </span>
                  <span className="text-[16px]">/mês</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Botão */}
        <div className="relative shrink-0 w-full">
          <div className="overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
              <button
                onClick={onDetailsClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`h-11 relative rounded-[100px] shrink-0 w-full transition-colors ${
                  isSelected 
                    ? 'bg-[#e04112] hover:bg-[#d63912]' 
                    : 'bg-[#f05223] hover:bg-[#e04112]'
                }`}
              >
                <div className="flex flex-row justify-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 h-11 items-center justify-center px-2 py-0 relative w-full">
                    <div className="box-border content-stretch flex flex-row gap-2 h-11 items-center justify-start p-0 relative shrink-0">
                      {isSelected && isHovered && (
                        <Trash size={14} color="#ffffff" weight="bold" />
                      )}
                      <div className="flex flex-col font-['Lintel:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
                        <p className="block leading-[18px] whitespace-pre">
                          {isSelected ? (isHovered ? 'Remover plano' : 'Plano selecionado') : 'Selecionar plano'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlanosSaudeForm({ 
  onBack, 
  onContinue, 
  onEditLives, 
  onExitSimulation, 
  companyName,
  addCuidado360 = false,
  generatedPlans553,
  generatedPlans557,
  onGeneratePlans
}: PlanosSaudeFormProps) {
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bottomBarOffset, setBottomBarOffset] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Configuração de paginação responsiva
  const getPlansPerPage = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1920) return 8; // 4 colunas x 2 linhas
      if (width >= 1366) return 6; // 3 colunas x 2 linhas
      if (width >= 1024) return 6; // 3 colunas x 2 linhas
      if (width >= 640) return 4;  // 2 colunas x 2 linhas
      return 2; // 1 coluna x 2 linhas
    }
    return 6; // fallback
  };

  const [plansPerPage, setPlansPerPage] = useState(getPlansPerPage);

  // Atualizar plansPerPage quando a tela redimensionar
  useEffect(() => {
    const handleResize = () => {
      setPlansPerPage(getPlansPerPage());
      setCurrentPage(1); // Reset para primeira página ao redimensionar
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect para detectar posição do footer
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

  // Handlers padrão para os novos botões
  const handleEditLives = () => {
    if (onEditLives) {
      onEditLives();
    } else {
      alert('Funcionalidade de editar vidas será implementada');
    }
  };

  const handleExitSimulation = () => {
    if (onExitSimulation) {
      onExitSimulation();
    } else {
      if (window.confirm('Deseja realmente sair da simulação?')) {
        window.location.reload();
      }
    }
  };

  const [filters, setFilters] = useState<Filters>({
    maxPrice: 15000,
    tipoProduto: addCuidado360 ? '557' : '553',
    tipoContratacao: {
      cei: false,
      compulsoria: false
    },
    vigenciaContratual: {
      doze: false,
      vintequatro: false
    },
    coparticipacao: {
      sem: false,
      com: false
    },
    sortOrder: 'asc'
  });

  // Reset da página atual quando filtros mudam
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Interface para os planos com propriedades de filtragem
  interface Plan {
    id: string;
    title: string;
    subtitle: string;
    features: string[];
    price: string;
    tipoContratacao: 'CBO' | 'Compulsória';
    vigenciaContratual: 12 | 24;
    coparticipacao: boolean;
    tipoProduto?: '553' | '557';
  }

  // Função para gerar preço aleatório baseado em um preço base
  const generateRandomPrice = (basePrice: number, variation: number = 0.15): string => {
    const min = basePrice * (1 - variation);
    const max = basePrice * (1 + variation);
    const price = Math.random() * (max - min) + min;
    return price.toFixed(2).replace('.', ',');
  };

  // Definição dos planos base com seus preços base
  const basePlanDefinitions = [
    // Planos 553
    { id: 'direto-nacional', title: 'Direto Nacional - SP (CA1)', subtitle: 'Enfermaria', basePrice: 1900, type: '553' },
    { id: 'exato-enfermaria', title: 'Exato - SP (CA1)', subtitle: 'Enfermaria', basePrice: 2200, type: '553' },
    { id: 'direto-nacional-apt', title: 'Direto Nacional - SP (CA1)', subtitle: 'Apartamento', basePrice: 2800, type: '553' },
    { id: 'exato-apartamento', title: 'Exato - SP (CA1)', subtitle: 'Apartamento', basePrice: 3400, type: '553' },
    { id: 'classico-vital-enf', title: 'Clássico Vital - SP (CA1)', subtitle: 'Enfermaria', basePrice: 3800, type: '553' },
    { id: 'classico-100-enf', title: 'Clássico 100 - SP (CA1)', subtitle: 'Enfermaria', basePrice: 4200, type: '553' },
    { id: 'especial-vital-apt', title: 'Especial Vital - SP (CA1)', subtitle: 'Apartamento', basePrice: 5100, type: '553' },
    { id: 'especial-rc-apt', title: 'Especial RC - SP (CA1)', subtitle: 'Apartamento', basePrice: 5600, type: '553' },
    { id: 'especial-100-r1-apt', title: 'Especial 100 R1 - SP (CA1)', subtitle: 'Apartamento', basePrice: 6400, type: '553' },
    { id: 'executivo-r1-apt', title: 'Executivo R1 - SP (CA1)', subtitle: 'Apartamento', basePrice: 7200, type: '553' },
    { id: 'especial-vital-r1-apt', title: 'Especial Vital R1 - SP (CA1)', subtitle: 'Apartamento', basePrice: 8100, type: '553' },
    { id: 'executivo-r2-apt', title: 'Executivo R2 - SP (CA1)', subtitle: 'Apartamento', basePrice: 9200, type: '553' },
    { id: 'executivo-r3-apt', title: 'Executivo R3 - SP (CA1)', subtitle: 'Apartamento', basePrice: 10500, type: '553' },
    { id: 'prestige-apt', title: 'Prestige - SP (CA1)', subtitle: 'Apartamento', basePrice: 13000, type: '553' },
    // Planos 557
    { id: 'direto-nacional-557', title: 'Direto Nacional - SP (CA1)', subtitle: 'Enfermaria', basePrice: 2300, type: '557' },
    { id: 'exato-557-enf', title: 'Exato - SP (CA1)', subtitle: 'Enfermaria', basePrice: 2700, type: '557' },
    { id: 'direto-nacional-557-apt', title: 'Direto Nacional - SP (CA1)', subtitle: 'Apartamento', basePrice: 3300, type: '557' },
    { id: 'exato-557-apt', title: 'Exato - SP (CA1)', subtitle: 'Apartamento', basePrice: 4000, type: '557' },
    { id: 'classico-vital-557-enf', title: 'Clássico Vital - SP (CA1)', subtitle: 'Enfermaria', basePrice: 4400, type: '557' },
    { id: 'classico-100-557-enf', title: 'Clássico 100 - SP (CA1)', subtitle: 'Enfermaria', basePrice: 5000, type: '557' },
    { id: 'especial-vital-557-apt', title: 'Especial Vital - SP (CA1)', subtitle: 'Apartamento', basePrice: 5900, type: '557' },
    { id: 'especial-rc-557-apt', title: 'Especial RC - SP (CA1)', subtitle: 'Apartamento', basePrice: 6600, type: '557' },
    { id: 'especial-100-r1-557-apt', title: 'Especial 100 R1 - SP (CA1)', subtitle: 'Apartamento', basePrice: 7500, type: '557' },
    { id: 'executivo-r1-557-apt', title: 'Executivo R1 - SP (CA1)', subtitle: 'Apartamento', basePrice: 8400, type: '557' },
    { id: 'especial-vital-r1-557-apt', title: 'Especial Vital R1 - SP (CA1)', subtitle: 'Apartamento', basePrice: 9500, type: '557' },
    { id: 'executivo-r2-557-apt', title: 'Executivo R2 - SP (CA1)', subtitle: 'Apartamento', basePrice: 10800, type: '557' },
    { id: 'executivo-r3-557-apt', title: 'Executivo R3 - SP (CA1)', subtitle: 'Apartamento', basePrice: 12200, type: '557' },
    { id: 'prestige-557-apt', title: 'Prestige - SP (CA1)', subtitle: 'Apartamento', basePrice: 14500, type: '557' }
  ];

  // Função para gerar todas as variações de um plano base
  const generatePlanVariations = (basePlan: any): Plan[] => {
    const variations: Plan[] = [];
    const tiposContratacao: ('CBO' | 'Compulsória')[] = ['CBO', 'Compulsória'];
    const vigencias: (12 | 24)[] = [12, 24];
    const coparticipacoes = [true, false];

    tiposContratacao.forEach(tipo => {
      vigencias.forEach(vigencia => {
        coparticipacoes.forEach(copart => {
          const priceMultiplier = 
            (tipo === 'Compulsória' ? 1.05 : 1) * 
            (vigencia === 24 ? 1.08 : 1) * 
            (copart ? 0.85 : 1);
          
          const finalPrice = basePlan.basePrice * priceMultiplier;
          const copartText = copart ? 'Com coparticipação' : 'Sem coparticipação';
          const productType = basePlan.type === '553' ? '553 - Hospitalar com Obstetrícia' : '557 - Ambulatorial e Hospitalar com Obstetrícia';
          
          variations.push({
            id: `${basePlan.id}-${tipo.toLowerCase()}-${vigencia}-${copart ? 'com' : 'sem'}`,
            title: basePlan.title,
            subtitle: basePlan.subtitle,
            features: [productType, tipo, `${vigencia} meses`, copartText],
            price: generateRandomPrice(finalPrice),
            tipoContratacao: tipo,
            vigenciaContratual: vigencia,
            coparticipacao: copart,
            tipoProduto: basePlan.type as '553' | '557'
          });
        });
      });
    });

    return variations;
  };

  // Gerar todas as variações possíveis
  const allPlanVariations = basePlanDefinitions.flatMap(generatePlanVariations);

  // Função para selecionar planos aleatoriamente
  const selectRandomPlans = (plans: Plan[], minCount: number = 12): Plan[] => {
    // Garantir que temos pelo menos minCount planos
    const maxCount = Math.max(minCount, Math.floor(Math.random() * 20) + minCount);
    
    // Embaralhar os planos
    const shuffled = [...plans].sort(() => Math.random() - 0.5);
    
    // Selecionar uma quantidade aleatória (mas sempre >= minCount)
    return shuffled.slice(0, maxCount);
  };

  // Use os planos passados como props ou gere novos apenas se não existirem
  const plans553 = React.useMemo(() => {
    if (generatedPlans553 && generatedPlans553.length > 0) {
      return generatedPlans553;
    }
    
    const plans553Variations = allPlanVariations.filter(plan => 
      plan.features[0].startsWith('553')
    );
    const newPlans553 = selectRandomPlans(plans553Variations, 12);
    
    // Notificar o parent sobre os novos planos gerados
    if (onGeneratePlans) {
      const plans557Variations = allPlanVariations.filter(plan => 
        plan.features[0].startsWith('557')
      );
      const newPlans557 = selectRandomPlans(plans557Variations, 12);
      onGeneratePlans(newPlans553, newPlans557);
    }
    
    return newPlans553;
  }, [generatedPlans553]); // Só regenera se generatedPlans553 mudar

  const plans557 = React.useMemo(() => {
    if (generatedPlans557 && generatedPlans557.length > 0) {
      return generatedPlans557;
    }
    
    const plans557Variations = allPlanVariations.filter(plan => 
      plan.features[0].startsWith('557')
    );
    return selectRandomPlans(plans557Variations, 12);
  }, [generatedPlans557]); // Só regenera se generatedPlans557 mudar

  // Seleciona os planos baseado no tipo de produto selecionado
  const availablePlans = filters.tipoProduto === '553' ? plans553 : plans557;

  const handlePlanDetails = (planId: string) => {
    // Se o plano já está selecionado, remove; senão, adiciona
    if (selectedPlans.includes(planId)) {
      setSelectedPlans(prev => prev.filter(id => id !== planId));
    } else {
      setSelectedPlans(prev => [...prev, planId]);
    }
  };


  const handleContinue = () => {
    // Se apenas um plano foi selecionado, buscar seus dados completos
    let selectedPlanData = undefined;
    let selectedPlansData = undefined;
    
    if (selectedPlans.length === 1) {
      const planId = selectedPlans[0];
      const plan = filteredPlans.find(p => p.id === planId);
      if (plan) {
        selectedPlanData = {
          id: plan.id,
          title: plan.title,
          subtitle: plan.subtitle,
          features: plan.features,
          price: plan.price
        };
      }
    } else if (selectedPlans.length > 1) {
      // Validar se os planos são compatíveis para comparação
      const validation = validateSelectedPlans();
      if (!validation.isValid) {
        // Não continuar se houver erros de validação
        return;
      }

      // Se múltiplos planos foram selecionados, buscar dados de todos
      selectedPlansData = selectedPlans
        .map(planId => filteredPlans.find(p => p.id === planId))
        .filter(Boolean)
        .map(plan => ({
          id: plan!.id,
          title: plan!.title,
          subtitle: plan!.subtitle,
          features: plan!.features,
          price: plan!.price
        }));
    }
    
    onContinue({ 
      selectedPlans: selectedPlans.length > 0 ? selectedPlans : undefined,
      selectedPlanData,
      selectedPlansData
    });
  };


  // Filter plans based on filters
  const filteredPlans = useMemo(() => {
    const filtered = availablePlans.filter(plan => {
      const planPrice = parseFloat(plan.price.replace('.', '').replace(',', '.'));
      
      // Max price filter
      if (planPrice > filters.maxPrice) {
        return false;
      }
      
      // Tipo de produto já foi filtrado em availablePlans, não precisa filtrar novamente
      
      // Tipo de contratação filter - se nenhum checkbox está marcado, mostra todos
      const tipoContratacaoActive = filters.tipoContratacao.cei || filters.tipoContratacao.compulsoria;
      if (tipoContratacaoActive) {
        const matchesTipoContratacao = 
          (filters.tipoContratacao.cei && plan.tipoContratacao === 'CBO') ||
          (filters.tipoContratacao.compulsoria && plan.tipoContratacao === 'Compulsória');
        if (!matchesTipoContratacao) return false;
      }
      
      // Vigência contratual filter - se nenhum checkbox está marcado, mostra todos
      const vigenciaActive = filters.vigenciaContratual.doze || filters.vigenciaContratual.vintequatro;
      if (vigenciaActive) {
        const matchesVigencia = 
          (filters.vigenciaContratual.doze && plan.vigenciaContratual === 12) ||
          (filters.vigenciaContratual.vintequatro && plan.vigenciaContratual === 24);
        if (!matchesVigencia) return false;
      }
      
      // Coparticipação filter - se nenhum checkbox está marcado, mostra todos
      const coparticipacaoActive = filters.coparticipacao.sem || filters.coparticipacao.com;
      if (coparticipacaoActive) {
        const matchesCoparticipacao = 
          (filters.coparticipacao.sem && !plan.coparticipacao) ||
          (filters.coparticipacao.com && plan.coparticipacao);
        if (!matchesCoparticipacao) return false;
      }
      
      return true;
    });

    // Ordenar planos por preço
    const sorted = [...filtered].sort((a, b) => {
      const priceA = parseFloat(a.price.replace('.', '').replace(',', '.'));
      const priceB = parseFloat(b.price.replace('.', '').replace(',', '.'));
      
      if (filters.sortOrder === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    return sorted;
  }, [availablePlans, filters]);

  // Função para validar se os planos selecionados são compatíveis para comparação
  const validateSelectedPlans = () => {
    if (selectedPlans.length <= 1) {
      return { isValid: true, errors: [], errorMessage: '' };
    }

    const selectedPlansDetails = selectedPlans
      .map(planId => filteredPlans.find(p => p.id === planId))
      .filter(Boolean);

    if (selectedPlansDetails.length === 0) {
      return { isValid: false, errors: ['Nenhum plano válido selecionado'], errorMessage: 'Nenhum plano válido selecionado.' };
    }

    const errors: string[] = [];
    const firstPlan = selectedPlansDetails[0];

    // Verificar tipo de contratação
    const tiposContratacao = new Set(selectedPlansDetails.map(p => p!.tipoContratacao));
    if (tiposContratacao.size > 1) {
      errors.push('Todos os planos devem ter o mesmo tipo de contratação');
    }

    // Verificar vigência contratual
    const vigencias = new Set(selectedPlansDetails.map(p => p!.vigenciaContratual));
    if (vigencias.size > 1) {
      errors.push('Todos os planos devem ter a mesma vigência contratual');
    }

    // Coparticipação removida - agora permite diferentes opções de coparticipação

    // Verificar tipo de produto (553 ou 557)
    const tiposProduto = new Set(selectedPlansDetails.map(p => p!.tipoProduto));
    if (tiposProduto.size > 1) {
      errors.push('Todos os planos devem ter o mesmo produto de saúde');
    }

    // Criar mensagem personalizada
    let errorMessage = '';
    if (errors.length > 0) {
      const errorTerms = errors.map(error => {
        if (error.includes('contratação')) return 'tipo de contratação';
        if (error.includes('vigência')) return 'vigência';
        if (error.includes('produto de saúde')) return 'produto de saúde';
        return error;
      });
      
      if (errorTerms.length === 1) {
        errorMessage = `${errorTerms[0].charAt(0).toUpperCase() + errorTerms[0].slice(1)} deve ser igual para poder prosseguir.`;
      } else if (errorTerms.length === 2) {
        errorMessage = `${errorTerms[0].charAt(0).toUpperCase() + errorTerms[0].slice(1)} e ${errorTerms[1]} devem ser iguais para poder prosseguir.`;
      } else if (errorTerms.length === 3) {
        errorMessage = `${errorTerms[0].charAt(0).toUpperCase() + errorTerms[0].slice(1)}, ${errorTerms[1]} e ${errorTerms[2]} devem ser iguais para poder prosseguir.`;
      } else {
        errorMessage = `${errorTerms[0].charAt(0).toUpperCase() + errorTerms[0].slice(1)}, ${errorTerms[1]}, ${errorTerms[2]} e ${errorTerms[3]} devem ser iguais para poder prosseguir.`;
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      errorMessage,
      planDetails: {
        tipoContratacao: firstPlan!.tipoContratacao,
        vigencia: firstPlan!.vigenciaContratual,
        coparticipacao: firstPlan!.coparticipacao ? 'Com' : 'Sem'
      }
    };
  };

  // Obter estado da validação para exibir na UI
  const validationState = validateSelectedPlans();

  // Lógica de paginação
  const totalPages = Math.ceil(filteredPlans.length / plansPerPage);
  const startIndex = (currentPage - 1) * plansPerPage;
  const endIndex = startIndex + plansPerPage;
  const currentPlans = filteredPlans.slice(startIndex, endIndex);

  // Funções de navegação da paginação
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToPrevious = () => goToPage(currentPage - 1);
  const goToNext = () => goToPage(currentPage + 1);

  return (
    <div className="min-h-screen bg-white">
      {/* Layout principal com sidebar */}
      <div className="flex min-h-screen">
        {/* Sidebar fixa à esquerda - 280px */}
        <div className="hidden lg:block w-[280px] flex-shrink-0">
          <FiltersPanel filters={filters} onFiltersChange={setFilters} addCuidado360={addCuidado360} />
        </div>
        
        {/* Mobile Filters Overlay */}
        {showMobileFilters && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setShowMobileFilters(false)}>
            <div className="bg-white w-80 h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-bold">Filtros</h2>
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  ✕
                </button>
              </div>
              <FiltersPanel filters={filters} onFiltersChange={setFilters} addCuidado360={addCuidado360} />
            </div>
          </div>
        )}
        
        {/* Conteúdo principal */}
        <div className={cn("flex-1 px-4 lg:px-6 pt-6", selectedPlans.length > 0 ? 'pb-[120px]' : 'pb-20')}>
          <div className="max-w-[1400px] mx-auto">
          <Card className="w-full rounded-xl border-0 shadow-none">
            <CardContent className="p-6">
              <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
                {/* Header */}
                <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
                        <div className="font-['Roboto',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#101213] text-[24px] text-left text-nowrap">
                          <p className="block leading-[27px] whitespace-pre font-bold">Planos Saúde</p>
                        </div>
                      </div>
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-0 relative shrink-0">
                        {/* Botão Filtros Mobile */}
                        <div className="lg:hidden">
                          <ActionButton 
                            onClick={() => setShowMobileFilters(true)}
                            icon={<div className="w-4 h-4 flex flex-col gap-0.5"><div className="h-0.5 bg-[#f05223] rounded"/><div className="h-0.5 bg-[#f05223] rounded"/><div className="h-0.5 bg-[#f05223] rounded"/></div>}
                          >
                            Filtros
                          </ActionButton>
                        </div>
                        
                        <ActionButton 
                          onClick={handleEditLives}
                          icon={<Users size={16} color="#f05223" weight="fill" />}
                        >
                          Editar vidas
                        </ActionButton>
                        
                        <ActionButton 
                          onClick={handleExitSimulation}
                          icon={<SignOut size={16} color="#f05223" weight="bold" />}
                        >
                          Sair da simulação
                        </ActionButton>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results count */}
                <div className="w-full">
                  <p className="font-['Roboto',_sans-serif] text-[#666666] text-[14px] leading-[21px]">
                    {filteredPlans.length} planos encontrados
                  </p>
                </div>

                {/* Grid Específico de Planos de Saúde - 6 cards em 1366px, 8 cards em 1920px */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 w-full">
                  {currentPlans.map((plan) => (
                    <PlanCard
                      key={plan.id}
                      title={plan.title}
                      subtitle={plan.subtitle}
                      features={plan.features}
                      price={plan.price}
                      onDetailsClick={() => handlePlanDetails(plan.id)}
                      isSelected={selectedPlans.includes(plan.id)}
                    />
                  ))}
                </div>

                {/* Paginação Dinâmica */}
                {totalPages > 1 && (
                  <div className="box-border content-stretch flex flex-row gap-2 h-8 items-start justify-center p-0 relative shrink-0 w-full mb-6">
                    {/* Botão Anterior */}
                    <button
                      onClick={goToPrevious}
                      disabled={currentPage === 1}
                      className={`relative shrink-0 size-8 rounded border transition-colors ${
                        currentPage === 1
                          ? 'bg-[#f4f4f4] border-[#f4f4f4] cursor-not-allowed'
                          : 'bg-[#ffffff] border-[#ced4da] hover:border-[#f05223] cursor-pointer'
                      }`}
                    >
                      <div className={`absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 size-6 text-[14px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] ${
                        currentPage === 1 ? 'text-[#adb5bd]' : 'text-[#101213]'
                      }`}>
                        <p className="block leading-[21px]">←</p>
                      </div>
                    </button>

                    {/* Números das páginas */}
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNumber;
                      if (totalPages <= 5) {
                        pageNumber = i + 1;
                      } else if (currentPage <= 3) {
                        pageNumber = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i;
                      } else {
                        pageNumber = currentPage - 2 + i;
                      }

                      const isActive = pageNumber === currentPage;
                      
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => goToPage(pageNumber)}
                          className={`relative shrink-0 size-8 rounded border transition-colors ${
                            isActive
                              ? 'bg-[#ffffff] border-[#f05223]'
                              : 'bg-[#ffffff] border-[#ced4da] hover:border-[#f05223]'
                          }`}
                        >
                          <div className={`absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 size-6 text-[14px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] ${
                            isActive ? 'text-[#f05223]' : 'text-[#4f575e]'
                          }`}>
                            <p className="block leading-[21px]">{pageNumber}</p>
                          </div>
                        </button>
                      );
                    })}

                    {/* Indicador de mais páginas */}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#4f575e] text-[14px] text-center w-4">
                        <p className="block leading-[21px]">...</p>
                      </div>
                    )}

                    {/* Última página (se necessário) */}
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <button
                        onClick={() => goToPage(totalPages)}
                        className="relative shrink-0 size-8 bg-[#ffffff] rounded border border-[#ced4da] hover:border-[#f05223] transition-colors"
                      >
                        <div className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 size-6 text-[#4f575e] text-[14px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]">
                          <p className="block leading-[21px]">{totalPages}</p>
                        </div>
                      </button>
                    )}

                    {/* Botão Próximo */}
                    <button
                      onClick={goToNext}
                      disabled={currentPage === totalPages}
                      className={`relative shrink-0 size-8 rounded border transition-colors ${
                        currentPage === totalPages
                          ? 'bg-[#f4f4f4] border-[#f4f4f4] cursor-not-allowed'
                          : 'bg-[#ffffff] border-[#ced4da] hover:border-[#f05223] cursor-pointer'
                      }`}
                    >
                      <div className={`absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 size-6 text-[14px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] ${
                        currentPage === totalPages ? 'text-[#adb5bd]' : 'text-[#101213]'
                      }`}>
                        <p className="block leading-[21px]">→</p>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>

      {/* Barra fixa que só aparece quando planos estão selecionados */}
      {selectedPlans.length > 0 && (
        <div 
          className="fixed left-0 right-0 bg-white border-t border-[#e4e7ec] z-40"
          style={{ bottom: `${bottomBarOffset}px` }}
        >
          <div className="max-w-[1400px] mx-auto px-4 py-4">
            <div className="flex flex-col gap-3">
              {/* Header com contador e status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="font-['Roboto',_sans-serif] font-bold text-[#272b30] text-[18px] leading-[24px]">
                    {selectedPlans.length === 1 ? 'Plano selecionado' : `${selectedPlans.length} planos selecionados`}
                  </div>
                  
                  {/* Mensagem de erro na mesma linha */}
                  {selectedPlans.length > 1 && !validationState.isValid && (
                    <div className="flex items-center gap-2">
                      <Info size={16} color="#dc2626" />
                      <p className="font-['Roboto',_sans-serif] text-red-700 text-[14px] leading-[20px]">
                        {validationState.errorMessage}
                      </p>
                    </div>
                  )}
                </div>
                
                <Button
                  onClick={handleContinue}
                  variant="primary"
                  size="xl"
                  disabled={selectedPlans.length > 1 && !validationState.isValid}
                  className={`px-6 text-[16px] leading-[24px] rounded-full transition-all duration-300 ease-in-out ${
                    selectedPlans.length > 1 && !validationState.isValid 
                      ? 'opacity-50 cursor-not-allowed' 
                      : ''
                  }`}
                >
                  {selectedPlans.length === 1 ? 'Ver detalhes' : 'Comparar planos'}
                </Button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
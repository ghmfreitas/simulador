import { useState, useEffect } from 'react';
import svgPaths from "./imports/svg-ndi6q01q4m";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";
import { ArrowLeft } from 'phosphor-react';
import { Navbar } from './components/layout/Navbar';
import { Group238150 } from './components/common/Group238150';
import { BackButton } from './components/common/BackButton';
import { CuidadoForm } from './pages/CuidadoPage';
import { CuidadoDetailsForm } from './pages/CuidadoDetailsPage';
import { PrimeiroSeguroForm } from './pages/PrimeiroSeguroPage';
import { EscolhaProdutoForm } from './pages/EscolhaProdutoPage';
import { SimuleParaSaudeForm } from './pages/SimuleParaSaudePage';
import { PlanosSaudeForm } from './pages/PlanosSaudePage';
import { DetalhesDoProductoForm } from './pages/DetalhesDoProductoPage';
import { ComparacaoPlanosForm } from './pages/ComparacaoPlanosPage';
import { EspecificacaoIdadesForm } from './pages/EspecificacaoIdadesPage';



function Icone() {
  return (
    <div
      className="h-[12.125px] relative shrink-0 w-[58.523px]"
      data-name="ÍCONE"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 59 13"
      >
        <g id="ÃCONE">
          <path
            d={svgPaths.p3d4d100}
            fill="var(--fill-0, #001D5F)"
            id="Vector"
          />
          <path
            d={svgPaths.p28354a00}
            fill="var(--fill-0, #F98900)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p9ef5400}
            fill="var(--fill-0, #F05223)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

function FooterHeader() {
  return (
    <div className="box-border content-stretch flex flex-row h-6 items-center justify-between p-0 relative shrink-0 w-full">
      <Group238150 />
      <Icone />
    </div>
  );
}

function FooterLinks() {
  const sections = [
    {
      title: "Apps",
      links: [
        "Saúde - iOS",
        "Saúde - Android", 
        "Odonto - iOS",
        "Odonto - Android",
        "Investimentos - Android"
      ]
    },
    {
      title: "A SulAmérica", 
      links: [
        "Sobre a SulAmérica",
        "Sala de imprensa",
        "Sustentabilidade",
        "Endereço e CNPJ",
        "Faça parte do time",
        "Mapa do site",
        "Dicionário", 
        "Notícias"
      ]
    },
    {
      title: "Termos e políticas",
      links: [
        "Segurança online",
        "Portal de privacidade", 
        "Política de privacidade",
        "Termos e condições",
        "Direitos do consumidor",
        "Open insurance",
        "Investidores",
        "Demonstrações financeiras"
      ]
    },
    {
      title: "Atendimento",
      links: [
        "Canais de atendimento",
        "Ouvidoria",
        "Atendimento via WhatsApp",
        "Canal de denúncias"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <h3 className="text-lg leading-6 font-bold font-['Roboto',_sans-serif] font-bold text-[#323232]">
            {section.title}
          </h3>
          <div className="flex flex-col space-y-2">
            {section.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                className="text-sm leading-[18px] font-['Roboto',_sans-serif] text-[#F05223] underline hover:no-underline hover:text-[#E04213] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#f4f4f4] border-t border-white" data-footer="true">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col gap-12">
          <FooterHeader />
          <FooterLinks />
          <div className="text-center">
            <p className="text-xs leading-4 font-normal font-['Roboto',_sans-serif] text-[#323232]">
              Copyright © 2009-2025 SulAmérica
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Função para formatar CNPJ
function formatCNPJ(value: string): string {
  const cleanValue = value.replace(/\D/g, '');
  
  if (cleanValue.length <= 2) {
    return cleanValue;
  } else if (cleanValue.length <= 5) {
    return `${cleanValue.slice(0, 2)}.${cleanValue.slice(2)}`;
  } else if (cleanValue.length <= 8) {
    return `${cleanValue.slice(0, 2)}.${cleanValue.slice(2, 5)}.${cleanValue.slice(5)}`;
  } else if (cleanValue.length <= 12) {
    return `${cleanValue.slice(0, 2)}.${cleanValue.slice(2, 5)}.${cleanValue.slice(5, 8)}/${cleanValue.slice(8)}`;
  } else {
    return `${cleanValue.slice(0, 2)}.${cleanValue.slice(2, 5)}.${cleanValue.slice(5, 8)}/${cleanValue.slice(8, 12)}-${cleanValue.slice(12, 14)}`;
  }
}

// Função para validar CNPJ
function isValidCNPJ(cnpj: string): boolean {
  const cleanCNPJ = cnpj.replace(/\D/g, '');
  
  if (cleanCNPJ.length !== 14) return false;
  
  if (/^(\d)\1+$/.test(cleanCNPJ)) return false;
  
  let sum = 0;
  let pos = 5;
  
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleanCNPJ[i]) * pos--;
    if (pos < 2) pos = 9;
  }
  
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(cleanCNPJ[12])) return false;
  
  sum = 0;
  pos = 6;
  
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cleanCNPJ[i]) * pos--;
    if (pos < 2) pos = 9;
  }
  
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return result === parseInt(cleanCNPJ[13]);
}

// Interface para dados da empresa
interface CompanyData {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  endereco: string;
  status: 'Ativo' | 'Inativo' | 'Suspensa';
}

// Dados mock para simulação
const mockCompanyData: Record<string, CompanyData> = {
  '24448288000120': {
    cnpj: '24.448.288/0001-20',
    razaoSocial: 'JOSEFA TANIA DOS SANTOS LIMA 11165789485',
    nomeFantasia: 'LUCAS GAS',
    endereco: 'Rua Pirapora do Bom Jesus, 153 - Jd. Santa Clara - Guarulhos, SP',
    status: 'Ativo'
  },
  '45242288000149': {
    cnpj: '45.242.288/0001-49',
    razaoSocial: 'EMPRESA EXEMPLO LTDA',
    nomeFantasia: 'EXEMPLO CORP',
    endereco: 'Av. Paulista, 1000 - Bela Vista - São Paulo, SP',
    status: 'Ativo'
  },
  '11222333000181': {
    cnpj: '11.222.333/0001-81',
    razaoSocial: 'CONSULTORIA BRASIL EIRELI',
    nomeFantasia: 'BRASIL CONSULT',
    endereco: 'Rua das Flores, 456 - Centro - Rio de Janeiro, RJ',
    status: 'Ativo'
  },
  '11444777000161': {
    cnpj: '11.444.777/0001-61',
    razaoSocial: 'GOOGLE BRASIL INTERNET LTDA',
    nomeFantasia: 'GOOGLE BRASIL',
    endereco: 'Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi - São Paulo, SP',
    status: 'Ativo'
  },
  '07526557000191': {
    cnpj: '07.526.557/0001-91',
    razaoSocial: 'BRASTEMP ELETRODOMESTICOS SA',
    nomeFantasia: 'BRASTEMP',
    endereco: 'Rua Olimpíadas, 205 - Vila Olímpia - São Paulo, SP',
    status: 'Ativo'
  }
};

// Função para simular consulta de CNPJ
function queryCompanyData(cnpj: string): CompanyData | null {
  const cleanCNPJ = cnpj.replace(/\D/g, '');
  return mockCompanyData[cleanCNPJ] || null;
}

function StatusTag({ status }: { status: CompanyData['status'] }) {
  const getStatusColor = (status: CompanyData['status']) => {
    switch (status) {
      case 'Ativo':
        return 'bg-[#f1f8e8] text-[#51810f]';
      case 'Inativo':
        return 'bg-[#f8f1f1] text-[#810f0f]';
      case 'Suspensa':
        return 'bg-[#fff8e1] text-[#f57c00]';
      default:
        return 'bg-[#f1f8e8] text-[#51810f]';
    }
  };

  return (
    <div className={`inline-flex items-center justify-center px-2 py-0 rounded-full ${getStatusColor(status)}`}>
      <span className="font-['Roboto',_sans-serif] font-bold text-[12px] leading-[18px]">
        {status}
      </span>
    </div>
  );
}

function CompanyDetails({ data }: { data: CompanyData }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-4 relative shrink-0 w-full bg-gray-50 rounded-lg border border-gray-200 transition-all duration-300 ease-in-out">
      {/* CNPJ */}
      <div className="flex flex-col gap-1 w-full">
        <div className="font-['Roboto',_sans-serif] font-bold text-[#272b30] text-[16px] leading-[21px]">
          CNPJ
        </div>
        <div className="font-['Roboto',_sans-serif] text-[#272b30] text-[14px] leading-[21px]">
          {data.cnpj}
        </div>
      </div>

      {/* Razão Social */}
      <div className="flex flex-col gap-1 w-full">
        <div className="font-['Roboto',_sans-serif] font-bold text-[#272b30] text-[16px] leading-[21px]">
          Razão Social
        </div>
        <div className="font-['Roboto',_sans-serif] text-[#272b30] text-[14px] leading-[21px]">
          {data.razaoSocial}
        </div>
      </div>

      {/* Nome Fantasia */}
      <div className="flex flex-col gap-1 w-full">
        <div className="font-['Roboto',_sans-serif] font-bold text-[#272b30] text-[16px] leading-[21px]">
          Nome Fantasia
        </div>
        <div className="font-['Roboto',_sans-serif] text-[#272b30] text-[14px] leading-[21px]">
          {data.nomeFantasia}
        </div>
      </div>

      {/* Endereço */}
      <div className="flex flex-col gap-1 w-full">
        <div className="font-['Roboto',_sans-serif] font-bold text-[#272b30] text-[16px] leading-[21px]">
          Endereço
        </div>
        <div className="font-['Roboto',_sans-serif] text-[#272b30] text-[14px] leading-[21px]">
          {data.endereco}
        </div>
      </div>

      {/* Status */}
      <div className="flex flex-row gap-2 items-center w-full">
        <div className="font-['Roboto',_sans-serif] font-bold text-[#272b30] text-[16px] leading-[21px]">
          Status:
        </div>
        <StatusTag status={data.status} />
      </div>
    </div>
  );
}

interface CNPJInputProps {
  onDataChange: (data: { isValid: boolean | null, companyData: CompanyData | null, isLoading: boolean }) => void;
  initialCompanyData?: CompanyData | null;
}

function CNPJInput({ onDataChange, initialCompanyData }: CNPJInputProps) {
  const [cnpj, setCNPJ] = useState(initialCompanyData?.cnpj || '');
  const [isValid, setIsValid] = useState<boolean | null>(initialCompanyData ? true : null);
  const [companyData, setCompanyData] = useState<CompanyData | null>(initialCompanyData || null);
  const [isLoading, setIsLoading] = useState(false);

  // Efeito para inicializar o componente com dados existentes
  useEffect(() => {
    if (initialCompanyData) {
      // Notifica o parent sobre os dados iniciais
      onDataChange({
        isValid: true,
        companyData: initialCompanyData,
        isLoading: false
      });
    }
  }, [initialCompanyData, onDataChange]);

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCNPJ(e.target.value);
    setCNPJ(formattedValue);
    
    const cleanValue = formattedValue.replace(/\D/g, '');
    console.log('Clean value:', cleanValue, 'Length:', cleanValue.length);
    
    if (cleanValue.length === 14) {
      const valid = isValidCNPJ(formattedValue);
      console.log('CNPJ valid:', valid);
      setIsValid(valid);
      
      if (valid) {
        console.log('Starting company data query...');
        // Simular consulta com loading
        setIsLoading(true);
        setCompanyData(null);
        onDataChange({ isValid: true, companyData: null, isLoading: true });
        
        setTimeout(() => {
          const data = queryCompanyData(formattedValue);
          console.log('Company data found:', data);
          setCompanyData(data);
          setIsLoading(false);
          onDataChange({ isValid: true, companyData: data, isLoading: false });
        }, 500); // Reduzindo o delay para 500ms
      } else {
        setCompanyData(null);
        setIsLoading(false);
        onDataChange({ isValid: false, companyData: null, isLoading: false });
      }
    } else {
      setIsValid(null);
      setCompanyData(null);
      setIsLoading(false);
      onDataChange({ isValid: null, companyData: null, isLoading: false });
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Input do CNPJ */}
      <div className="flex flex-col gap-2 w-full">
        <div className="relative">
          <Input
            type="text"
            value={cnpj}
            onChange={handleCNPJChange}
            placeholder="00.000.000/0000-00"
            maxLength={18}
            className={`text-[16px] leading-[24px] ${
              isValid === false ? 'border-red-500 focus-visible:ring-red-500' : 
              isValid === true ? 'border-green-500 focus-visible:ring-green-500' : 
              'border-[#ced4da] focus-visible:ring-[#F05223]'
            }`}
          />
        </div>
        
        {isValid === false && (
          <p className="text-sm leading-[18px] text-red-500 font-['Roboto',_sans-serif]">
            CNPJ inválido
          </p>
        )}
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#F05223]"></div>
          <span className="ml-2 font-['Roboto',_sans-serif] text-[#272b30] text-[14px]">
            Consultando CNPJ...
          </span>
        </div>
      )}

      {/* Dados da empresa */}
      {companyData && !isLoading && (
        <div>
          <div className="mb-2">
            <span className="font-['Roboto',_sans-serif] font-bold text-[#272b30] text-[16px] leading-[21px]">
              Dados da Empresa:
            </span>
          </div>
          <CompanyDetails data={companyData} />
        </div>
      )}

      {/* CNPJ não encontrado */}
      {isValid === true && !companyData && !isLoading && (
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm leading-[18px] text-amber-500 font-['Roboto',_sans-serif]">
            CNPJ válido, mas empresa não encontrada na base de dados.
          </p>
        </div>
      )}
    </div>
  );
}

function BackIcon() {
  return (
    <ArrowLeft 
      size={20} 
      color="#F05223" 
      weight="bold"
    />
  );
}

function ExitButton() {
  const handleExit = () => {
    if (window.confirm('Deseja realmente sair da cotação?')) {
      window.location.reload();
    }
  };

  return (
    <Button
      onClick={handleExit}
      variant="ghost"
      className="inline-flex items-center justify-center h-[48px] px-6 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm gap-2 font-['Aestetico:Medium',_sans-serif]"
    >
      <BackIcon />
      Sair da cotação
    </Button>
  );
}

interface CNPJFormProps {
  onContinue: (data: CompanyData) => void;
  initialCompanyData?: CompanyData | null;
}

function CNPJForm({ onContinue, initialCompanyData }: CNPJFormProps) {
  const [cnpjData, setCnpjData] = useState<{ isValid: boolean | null, companyData: CompanyData | null, isLoading: boolean }>({
    isValid: initialCompanyData ? true : null,
    companyData: initialCompanyData || null,
    isLoading: false
  });

  const handleContinue = () => {
    if (cnpjData.isValid && cnpjData.companyData) {
      onContinue(cnpjData.companyData);
    }
  };

  return (
    <div className="flex justify-center px-4 pt-[80px] pb-20">
      <Card className="w-[560px] rounded-xl border border-[#e4e7ec] shadow-none">
        <CardContent className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl leading-8 font-bold font-['Roboto',_sans-serif] font-bold text-[#101213] mb-4">
              Comece por aqui
            </h1>
            <p className="text-base leading-6 font-normal font-['Roboto',_sans-serif] text-[#272b30] mb-6">
              Digite abaixo o CNPJ da empresa do seu cliente:
            </p>
            <CNPJInput 
              onDataChange={setCnpjData} 
              initialCompanyData={initialCompanyData}
            />
          </div>
          
          {/* Container dos botões */}
          <div className="flex flex-row items-center justify-between gap-4">
            <ExitButton />
            
            {/* Botão continuar - só aparece quando tem dados válidos */}
            {cnpjData.isValid === true && cnpjData.companyData && !cnpjData.isLoading && (
              <Button
                onClick={handleContinue}
                variant="primary"
                size="xl"
                className="px-6 text-[16px] leading-[24px] rounded-full transition-all duration-300 ease-in-out"
              >
                Continuar
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

type AppStep = 'cnpj-form' | 'cuidado-360' | 'cuidado-details' | 'escolha-produto' | 'primeiro-seguro' | 'simule-saude' | 'especificacao-idades' | 'planos-saude' | 'comparacao-planos' | 'detalhes-produto' | 'cotacao-complete';

interface SimulationData {
  companyData: CompanyData;
  addCuidado360: boolean;
  selectedProducts?: string[];
  isNewInsurance?: boolean;
  congeneres?: string[];
  vidasDistribution?: Record<string, number>;
  vidasToSpecify?: { '0-18'?: number; '59+'?: number };
  detailedAges?: Record<string, Array<{age: number, count: number}>>;
  routing?: 'adults' | 'kids-only' | 'seniors-only' | 'mixed-ages';
  selectedPlans?: string[];
  selectedPlan?: string;
  selectedPlanData?: {
    id: string;
    title: string;
    subtitle: string;
    features: string[];
    price: string;
  };
  generatedPlans553?: any[];
  generatedPlans557?: any[];
  selectedPlansData?: Array<{
    id: string;
    title: string;
    subtitle: string;
    features: string[];
    price: string;
  }>;
  vidasDistributionByPlan?: Record<string, Record<string, number>>;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState<AppStep>('cnpj-form');
  const [simulationData, setSimulationData] = useState<Partial<SimulationData>>({});
  const [showEditLivesModal, setShowEditLivesModal] = useState(false);

  const handleCNPJContinue = (companyData: CompanyData) => {
    setSimulationData({ companyData });
    setCurrentStep('cuidado-360');
  };

  const handleCuidadoBack = () => {
    setCurrentStep('cnpj-form');
  };

  const handleCuidadoMoreDetails = () => {
    setCurrentStep('cuidado-details');
  };

  const handleViewCuidadoDetails = () => {
    setCurrentStep('cuidado-details');
  };

  const handleCuidadoContinue = (data: { addCuidado360: boolean }) => {
    setSimulationData(prev => ({ ...prev, ...data }));
    console.log('Variável mapeada - addCuidado360:', data.addCuidado360);
    
    // Lógica condicional baseada na escolha do Cuidado 360º
    if (data.addCuidado360 === true) {
      // Se 'Sim' foi selecionado, vai para 'Primeiro seguro'
      setCurrentStep('primeiro-seguro');
    } else {
      // Se 'Não' foi selecionado, vai para 'Escolha o produto'
      setCurrentStep('escolha-produto');
    }
  };

  const handleCuidadoDetailsBack = () => {
    setCurrentStep('cnpj-form');
  };

  const handleCuidadoDetailsContinue = (data: { addCuidado360: boolean }) => {
    setSimulationData(prev => ({ ...prev, ...data }));
    console.log('Variável mapeada - addCuidado360:', data.addCuidado360);
    
    // Lógica condicional baseada na escolha do Cuidado 360º
    if (data.addCuidado360 === true) {
      // Se 'Sim' foi selecionado, vai para 'Primeiro seguro'
      setCurrentStep('primeiro-seguro');
    } else {
      // Se 'Não' foi selecionado, vai para 'Escolha o produto'
      setCurrentStep('escolha-produto');
    }
  };

  const handleEscolhaProdutoBack = () => {
    setCurrentStep('cuidado-360');
  };

  const handleEscolhaProdutoContinue = (data: { selectedProducts: string[] }) => {
    setSimulationData(prev => ({ ...prev, ...data }));
    setCurrentStep('cotacao-complete');
  };

  const handlePrimeiroSeguroBack = () => {
    setCurrentStep('cuidado-360');
  };

  const handlePrimeiroSeguroContinue = (data: { isNewInsurance: boolean; congeneres?: string[] }) => {
    setSimulationData(prev => ({ ...prev, ...data }));
    
    // Independente da resposta, ambos os caminhos vão para simulação de saúde
    setCurrentStep('simule-saude');
  };

  const handleSimuleSaudeBack = () => {
    setCurrentStep('primeiro-seguro');
  };

  const handleSimuleSaudeContinue = (data: { 
    vidasDistribution: Record<string, number>; 
    routing?: 'adults' | 'kids-only' | 'seniors-only' | 'mixed-ages';
    needsAgeSpecification?: boolean;
    vidasToSpecify?: { '0-18'?: number; '59+'?: number };
  }) => {
    setSimulationData(prev => ({ ...prev, ...data }));
    
    // Se precisa de especificação de idades, ir para essa tela
    if (data.needsAgeSpecification) {
      setCurrentStep('especificacao-idades');
      return;
    }
    
    // Determinar próximo passo baseado no roteamento
    if (data.routing === 'adults') {
      setCurrentStep('planos-saude');
    } else {
      // Por enquanto, outros roteamentos vão para cotação completa
      // Posteriormente implementaremos as telas específicas
      setCurrentStep('cotacao-complete');
    }
  };

  const handleEspecificacaoIdadesBack = () => {
    setCurrentStep('simule-saude');
  };

  const handleEspecificacaoIdadesContinue = (data: { 
    detailedAges: Record<string, Array<{age: number, count: number}>>
  }) => {
    setSimulationData(prev => ({ ...prev, ...data }));
    
    // Após especificar idades, determinar roteamento
    const vidasData = simulationData.vidasDistribution!;
    let routing: 'adults' | 'kids-only' | 'seniors-only' | 'mixed-ages' = 'adults';
    
    const hasKids = vidasData['0-18'] > 0;
    const hasSeniors = vidasData['59+'] > 0;
    const hasAdults = Object.entries(vidasData)
      .filter(([range]) => !['0-18', '59+'].includes(range))
      .some(([_, count]) => count > 0);

    if (hasKids && hasSeniors) {
      routing = 'mixed-ages';
    } else if (hasKids && !hasSeniors) {
      routing = 'kids-only';
    } else if (!hasKids && hasSeniors) {
      routing = 'seniors-only';
    } else if (hasAdults) {
      routing = 'adults';
    }
    
    setSimulationData(prev => ({ ...prev, routing }));
    
    // Após especificar idades, sempre ir para tela de planos
    setCurrentStep('planos-saude');
  };

  const handlePlanosSaudeBack = () => {
    setCurrentStep('simule-saude');
  };

  const handlePlanosSaudeContinue = (data: { 
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
  }) => {
    setSimulationData(prev => ({ ...prev, ...data }));
    
    // Se apenas 1 plano foi selecionado, vai para detalhes do produto
    if (data.selectedPlans && data.selectedPlans.length === 1) {
      setSimulationData(prev => ({ 
        ...prev, 
        selectedPlan: data.selectedPlans![0],
        selectedPlanData: data.selectedPlanData 
      }));
      setCurrentStep('detalhes-produto');
    } else if (data.selectedPlans && data.selectedPlans.length > 1) {
      // Se múltiplos planos foram selecionados, vai para comparação
      setSimulationData(prev => ({ 
        ...prev, 
        selectedPlansData: data.selectedPlansData 
      }));
      setCurrentStep('comparacao-planos');
    } else {
      // Se nenhum plano foi selecionado, vai para cotação completa
      setCurrentStep('cotacao-complete');
    }
  };

  const handleDetalhesProductoBack = () => {
    // Se tem múltiplos planos, volta para comparação
    if (simulationData.selectedPlans && simulationData.selectedPlans.length > 1) {
      setCurrentStep('comparacao');
    } else {
      setCurrentStep('planos-saude');
    }
  };
  
  const handleComparacaoPlanosBack = () => {
    setCurrentStep('planos-saude');
  };
  
  const handleComparacaoPlanosContinue = (data: {
    selectedPlans: string[];
    vidasDistributionByPlan: Record<string, Record<string, number>>;
  }) => {
    setSimulationData(prev => ({ ...prev, ...data }));
    
    // Ir para detalhes do produto com suporte a múltiplos planos
    setCurrentStep('detalhes-produto');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'cnpj-form':
        return (
          <CNPJForm 
            onContinue={handleCNPJContinue} 
            initialCompanyData={simulationData.companyData || null}
          />
        );
        
      case 'cuidado-360':
        return (
          <CuidadoForm
            onBack={handleCuidadoBack}
            onContinue={handleCuidadoContinue}
            onMoreDetails={handleCuidadoMoreDetails}
            onViewCuidadoDetails={handleViewCuidadoDetails}
            companyName={simulationData.companyData?.nomeFantasia || ''}
          />
        );
        
      case 'cuidado-details':
        return (
          <CuidadoDetailsForm
            onBack={handleCuidadoDetailsBack}
            onContinue={handleCuidadoDetailsContinue}
            companyName={simulationData.companyData?.nomeFantasia || ''}
          />
        );
        
      case 'escolha-produto':
        return (
          <EscolhaProdutoForm
            onBack={handleEscolhaProdutoBack}
            onContinue={handleEscolhaProdutoContinue}
            companyName={simulationData.companyData?.nomeFantasia || ''}
          />
        );
        
      case 'primeiro-seguro':
        return (
          <PrimeiroSeguroForm
            onBack={handlePrimeiroSeguroBack}
            onContinue={handlePrimeiroSeguroContinue}
            companyName={simulationData.companyData?.nomeFantasia || ''}
          />
        );

      case 'simule-saude':
        return (
          <SimuleParaSaudeForm
            onBack={handleSimuleSaudeBack}
            onContinue={handleSimuleSaudeContinue}
            companyName={simulationData.companyData?.nomeFantasia || ''}
            initialVidasDistribution={simulationData.vidasDistribution}
          />
        );

      case 'especificacao-idades':
        return (
          <EspecificacaoIdadesForm
            onBack={handleEspecificacaoIdadesBack}
            onContinue={handleEspecificacaoIdadesContinue}
            companyName={simulationData.companyData?.nomeFantasia || ''}
            vidasToSpecify={simulationData.vidasToSpecify || {}}
          />
        );

      case 'planos-saude':
        return (
          <PlanosSaudeForm
            onBack={handlePlanosSaudeBack}
            onContinue={handlePlanosSaudeContinue}
            onEditLives={() => setShowEditLivesModal(true)}
            onExitSimulation={() => {
              if (window.confirm('Deseja realmente sair da simulação? Todos os dados serão perdidos.')) {
                setCurrentStep('cnpj-form');
                setSimulationData({});
              }
            }}
            companyName={simulationData.companyData?.nomeFantasia || ''}
            addCuidado360={simulationData.addCuidado360}
            generatedPlans553={simulationData.generatedPlans553}
            generatedPlans557={simulationData.generatedPlans557}
            onGeneratePlans={(plans553, plans557) => {
              setSimulationData(prev => ({ 
                ...prev, 
                generatedPlans553: plans553,
                generatedPlans557: plans557
              }));
            }}
          />
        );

      case 'comparacao-planos':
        return (
          <ComparacaoPlanosForm
            onBack={handleComparacaoPlanosBack}
            onContinue={handleComparacaoPlanosContinue}
            companyName={simulationData.companyData?.nomeFantasia || ''}
            selectedPlansData={simulationData.selectedPlansData || []}
            vidasDistribution={simulationData.vidasDistribution}
            detailedAges={simulationData.detailedAges}
          />
        );

      case 'detalhes-produto':
        return (
          <DetalhesDoProductoForm
            onBack={handleDetalhesProductoBack}
            companyName={simulationData.companyData?.nomeFantasia || ''}
            selectedPlan={simulationData.selectedPlan}
            selectedPlans={simulationData.selectedPlans}
            selectedPlanData={simulationData.selectedPlanData}
            selectedPlansData={simulationData.selectedPlansData}
            vidasDistributionByPlan={simulationData.vidasDistributionByPlan}
            simulationData={simulationData}
          />
        );

      case 'cotacao-complete':
        return (
          <div className="flex justify-center px-4 pt-[80px] pb-20">
            <Card className="w-[560px] rounded-xl border border-[#e4e7ec] shadow-none">
              <CardContent className="p-6">
                <div className="text-center">
                  <h1 className="text-2xl leading-8 font-bold font-['Roboto',_sans-serif] font-bold text-[#101213] mb-4">
                    Cotação Configurada
                  </h1>
                  <div className="space-y-2 text-left bg-gray-50 p-4 rounded-lg">
                    <p><span className="font-['Roboto',_sans-serif] font-bold">Empresa:</span> {simulationData.companyData?.nomeFantasia}</p>
                    <p><span className="font-['Roboto',_sans-serif] font-bold">CNPJ:</span> {simulationData.companyData?.cnpj}</p>
                    <p><span className="font-['Roboto',_sans-serif] font-bold">Cuidado 360º:</span> {simulationData.addCuidado360 ? 'Sim' : 'Não'}</p>
                    {simulationData.selectedProducts && simulationData.selectedProducts.length > 0 && (
                      <p><span className="font-['Roboto',_sans-serif] font-bold">Produtos selecionados:</span> {simulationData.selectedProducts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(', ')}</p>
                    )}
                    {simulationData.isNewInsurance !== undefined && (
                      <p><span className="font-['Roboto',_sans-serif] font-bold">Seguro novo:</span> {simulationData.isNewInsurance ? 'Sim' : 'Não'}</p>
                    )}
                    {simulationData.congeneres && simulationData.congeneres.length > 0 && (
                      <p><span className="font-['Roboto',_sans-serif] font-bold">Congêneres:</span> {simulationData.congeneres.join(', ')}</p>
                    )}
                    {simulationData.vidasDistribution && (
                      <div>
                        <p><span className="font-['Roboto',_sans-serif] font-bold">Distribuição de vidas:</span></p>
                        <div className="ml-4 text-sm">
                          {Object.entries(simulationData.vidasDistribution)
                            .filter(([_, count]) => count > 0)
                            .map(([range, count]) => (
                              <p key={range}>• {range} anos: {count} vida{count > 1 ? 's' : ''}</p>
                            ))}
                        </div>
                      </div>
                    )}
                    {simulationData.routing && (
                      <p><span className="font-['Roboto',_sans-serif] font-bold">Roteamento:</span> {simulationData.routing}</p>
                    )}
                    {simulationData.selectedPlans && simulationData.selectedPlans.length > 0 && (
                      <p><span className="font-['Roboto',_sans-serif] font-bold">Planos selecionados:</span> {simulationData.selectedPlans.join(', ')}</p>
                    )}
                    {simulationData.selectedPlan && (
                      <p><span className="font-['Roboto',_sans-serif] font-bold">Plano para proposta:</span> {simulationData.selectedPlan}</p>
                    )}
                  </div>
                  <Button
                    onClick={() => {
                      setCurrentStep('cnpj-form');
                      setSimulationData({});
                    }}
                    variant="outline"
                    className="mt-6"
                  >
                    Nova Cotação
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      default:
        return (
          <CNPJForm 
            onContinue={handleCNPJContinue} 
            initialCompanyData={simulationData.companyData || null}
          />
        );
    }
  };

  const handleConfirmEditLives = () => {
    setShowEditLivesModal(false);
    // Regenerar planos (valores randômicos)
    setSimulationData(prev => ({
      ...prev,
      generatedPlans553: undefined,
      generatedPlans557: undefined
    }));
    setCurrentStep('simule-saude');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-white flex flex-col">
        <Navbar />
        <div className="flex-1">
          {renderCurrentStep()}
        </div>
      </div>
      <Footer />
      
      {/* Modal de confirmação para editar vidas */}
      {showEditLivesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md mx-4 shadow-2xl">
            <h3 className="font-['Roboto',_sans-serif] font-bold text-[#272b30] text-[20px] leading-[28px] mb-3">
              Confirmar alteração
            </h3>
            <p className="font-['Roboto',_sans-serif] text-[#6a7178] text-[16px] leading-[24px] mb-6">
              Você tem certeza que deseja alterar as vidas distribuídas? Os planos e condições poderão sofrer alterações.
            </p>
            <div className="flex gap-4 justify-end">
              <Button
                variant="outline"
                onClick={() => setShowEditLivesModal(false)}
                className="px-6"
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                onClick={handleConfirmEditLives}
                className="px-6"
              >
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
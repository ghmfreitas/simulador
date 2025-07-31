import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { BackButton } from '../components/common/BackButton';
import { GridPatterns, cn } from '../lib/grid-patterns';

interface SimuleParaSaudeFormProps {
  onBack: () => void;
  onContinue: (data: { 
    vidasDistribution: Record<string, number>; 
    routing?: 'adults' | 'kids-only' | 'seniors-only' | 'mixed-ages';
    needsAgeSpecification?: boolean;
    vidasToSpecify?: { '0-18'?: number; '59+'?: number };
  }) => void;
  companyName: string;
  initialVidasDistribution?: Record<string, number>;
}


export function SimuleParaSaudeForm({ onBack, onContinue, companyName, initialVidasDistribution }: SimuleParaSaudeFormProps) {
  const [vidasData, setVidasData] = useState({
    '0-18': initialVidasDistribution?.['0-18'] || 0,
    '19-23': initialVidasDistribution?.['19-23'] || 0,
    '24-28': initialVidasDistribution?.['24-28'] || 0,
    '29-33': initialVidasDistribution?.['29-33'] || 0,
    '34-38': initialVidasDistribution?.['34-38'] || 0,
    '39-43': initialVidasDistribution?.['39-43'] || 0,
    '44-48': initialVidasDistribution?.['44-48'] || 0,
    '49-53': initialVidasDistribution?.['49-53'] || 0,
    '54-58': initialVidasDistribution?.['54-58'] || 0,
    '59+': initialVidasDistribution?.['59+'] || 0
  });

  const handleVidasChange = (range: string, value: string) => {
    const numValue = value === '' ? 0 : Math.max(0, Math.min(999, parseInt(value) || 0));
    setVidasData(prev => ({
      ...prev,
      [range]: numValue
    }));
  };

  const totalVidas = Object.values(vidasData).reduce((sum, count) => sum + count, 0);
  const canContinue = totalVidas >= 3;

  // Função para determinar o roteamento baseado na distribuição de idades
  const determineRouting = (vidas: Record<string, number>) => {
    const hasKids = vidas['0-18'] > 0; // 0-18 anos
    const hasAdults = Object.entries(vidas)
      .filter(([range, _]) => ['19-23', '24-28', '29-33', '34-38', '39-43', '44-48', '49-53', '54-58'].includes(range))
      .some(([_, count]) => count > 0); // 19-58 anos
    const hasSeniors = vidas['59+'] > 0; // 59+ anos

    if (hasKids && hasSeniors) {
      return 'mixed-ages'; // Condição 4: 0-18 e 59+
    } else if (hasKids && !hasSeniors) {
      return 'kids-only'; // Condição 2: apenas 0-18 anos
    } else if (!hasKids && hasSeniors) {
      return 'seniors-only'; // Condição 3: apenas 59+ anos
    } else if (hasAdults) {
      return 'adults'; // Condição 1: vidas entre 19-58 anos
    }
    
    return 'adults'; // Fallback para adultos
  };

  const handleContinue = () => {
    if (canContinue) {
      // Verificar se precisa de especificação de idades
      const needsSpecification = vidasData['0-18'] > 0 || vidasData['59+'] > 0;
      
      if (needsSpecification) {
        // Determinar quais faixas precisam de especificação
        const vidasToSpecify: { '0-18'?: number; '59+'?: number } = {};
        if (vidasData['0-18'] > 0) vidasToSpecify['0-18'] = vidasData['0-18'];
        if (vidasData['59+'] > 0) vidasToSpecify['59+'] = vidasData['59+'];
        
        // Ir para tela de especificação
        onContinue({ 
          vidasDistribution: vidasData, 
          needsAgeSpecification: true,
          vidasToSpecify 
        });
        return;
      }

      // Determinar qual caminho seguir baseado na distribuição de idades
      const routingData = determineRouting(vidasData);
      onContinue({ vidasDistribution: vidasData, routing: routingData });
    }
  };

  const ageRanges = [
    { key: '0-18', label: '0 - 18' },
    { key: '19-23', label: '19 - 23' },
    { key: '24-28', label: '24 - 28' },
    { key: '29-33', label: '29 - 33' },
    { key: '34-38', label: '34 - 38' },
    { key: '39-43', label: '39 - 43' },
    { key: '44-48', label: '44 - 48' },
    { key: '49-53', label: '49 - 53' },
    { key: '54-58', label: '54 - 58' },
    { key: '59+', label: '59+' }
  ];

  return (
    <div className="flex justify-center px-4 pt-[80px] pb-20">
      <Card className="w-[560px] rounded-xl border border-[#e4e7ec] shadow-none">
        <CardContent className="p-6">
          <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
            {/* Header */}
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full">
                  <div className="basis-0 font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#101213] text-[24px] text-left">
                    <p className="block leading-[27px]">Simule para Saúde</p>
                  </div>
                </div>
                <div className="text-[#6b7280] text-[14px] leading-[20px]">
                  Simulação para: <span className="font-bold text-[#272b30]">{companyName}</span>
                </div>
              </div>
            </div>

            {/* Instruction */}
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="leading-[0] min-w-full not-italic relative shrink-0 text-[#272b30] text-[14px] text-left">
                <p className="block leading-[21px]">
                  Distribua a quantidade mínima de 3 vidas para realizar a simulação:
                </p>
              </div>
            </div>

            {/* Age Range Inputs Grid */}
            <div className="w-full">
              <div className="grid grid-cols-5 gap-4">
                {ageRanges.map((range) => (
                  <div key={range.key} className="flex flex-col items-center gap-2">
                    <div className="font-['Lintel:Bold',_sans-serif] text-[#000000] text-[12px] leading-[21px] text-center">
                      {range.label}
                    </div>
                    <div className="w-[52px] h-[52px] relative">
                      <Input
                        type="number"
                        min="0"
                        max="999"
                        value={vidasData[range.key] === 0 ? '' : vidasData[range.key].toString()}
                        onChange={(e) => handleVidasChange(range.key, e.target.value)}
                        placeholder="0"
                        className="w-full h-full text-center text-[14px] leading-[21px] rounded border border-[#ced4da] focus-visible:ring-[#F05223] bg-white px-1 placeholder:text-center [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
                        style={{ MozAppearance: 'textfield' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>





            {/* Buttons Container */}
            <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
              <BackButton onClick={onBack} />
              
              {canContinue && (
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
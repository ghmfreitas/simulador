import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { BackButton } from '../components/common/BackButton';
import { Check } from 'phosphor-react';
import { GridPatterns, cn } from '../lib/grid-patterns';

interface EscolhaProdutoFormProps {
  onBack: () => void;
  onContinue: (data: { selectedProducts: string[] }) => void;
  companyName: string;
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

function CheckboxOption({ 
  checked, 
  onClick, 
  label 
}: { 
  checked: boolean; 
  onClick: () => void; 
  label: string;
}) {
  return (
    <div 
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 cursor-pointer" 
      onClick={onClick}
    >
      <CheckboxIcon checked={checked} />
      <div className="leading-[0] relative shrink-0 text-[#272b30] text-[14px] text-left">
        <p className="block leading-[21px]">{label}</p>
      </div>
    </div>
  );
}


export function EscolhaProdutoForm({ onBack, onContinue, companyName }: EscolhaProdutoFormProps) {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleProductToggle = (product: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(product)) {
        return prev.filter(p => p !== product);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleContinue = () => {
    if (selectedProducts.length > 0) {
      onContinue({ selectedProducts });
    }
  };

  const canContinue = selectedProducts.length > 0;

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
                    <p className="block leading-[27px]">Escolha o produto</p>
                  </div>
                </div>
                <div className="text-[#6b7280] text-[14px] leading-[20px]">
                  Simulação para: <span className="font-bold text-[#272b30]">{companyName}</span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="leading-[0] min-w-full not-italic relative shrink-0 text-[#272b30] text-[14px] text-left">
                <p className="block leading-[21px]">Selecione abaixo o(s) produto(s) que deseja simular:</p>
              </div>
            </div>

            {/* Product Options */}
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
              <CheckboxOption
                checked={selectedProducts.includes('saude')}
                onClick={() => handleProductToggle('saude')}
                label="Saúde"
              />
              <CheckboxOption
                checked={selectedProducts.includes('odonto')}
                onClick={() => handleProductToggle('odonto')}
                label="Odonto"
              />
            </div>

            {/* Buttons Container */}
            <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
              <BackButton onClick={onBack} />
              
              {canContinue ? (
                <Button
                  onClick={handleContinue}
                  variant="primary"
                  size="xl"
                  className="px-6 text-[16px] leading-[24px] rounded-full transition-all duration-300 ease-in-out"
                >
                  Continuar
                </Button>
              ) : (
                <Button
                  disabled
                  variant="secondary"
                  size="xl"
                  className="px-6 text-[16px] leading-[24px] rounded-full bg-[#f1f3f5] text-[#adb5bd] border border-[#dee2e6] cursor-not-allowed"
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
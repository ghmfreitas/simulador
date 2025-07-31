import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { BackButton } from '../components/common/BackButton';
import svgPaths from "../imports/svg-5psbbwhogv";
import { CuidadoConfirmationModal } from '../components/modals/CuidadoConfirmationModal';
import { GridPatterns, cn } from '../lib/grid-patterns';

interface CuidadoFormProps {
  onBack: () => void;
  onContinue: (data: { addCuidado360: boolean }) => void;
  onMoreDetails: () => void;
  onViewCuidadoDetails: () => void;
  companyName: string;
}

function RadioButton({ 
  selected, 
  onClick, 
  label 
}: { 
  selected: boolean; 
  onClick: () => void; 
  label: string;
}) {
  return (
    <div 
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 cursor-pointer" 
      onClick={onClick}
    >
      <div className="relative shrink-0 size-6">
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
      <div className="leading-[0] relative shrink-0 text-[#272b30] text-[14px] text-left">
        <p className="block leading-[21px]">{label}</p>
      </div>
    </div>
  );
}


function ExternalLinkIcon() {
  return (
    <span className="h-[9.406px] relative w-[10.974px] inline-block">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 11 10"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.pada7300}
          fill="var(--fill-0, #F05223)"
          fillRule="evenodd"
          id="external-link"
        />
      </svg>
    </span>
  );
}

function DescriptionText({ onMoreDetails }: { onMoreDetails: () => void }) {
  return (
    <div className="flex flex-row items-start justify-start p-0 relative w-full">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6a7178] text-[14px] text-left w-full">
        <p className="leading-[21px]">
          <span>
            O Cuidado 360º é um benefício da SulAmérica onde você pode incluir Seguro Odontológico e Seguro de Vida sem custo adicional. 
          </span>
          <span 
            className="font-bold text-[#f05223] cursor-pointer hover:underline inline-flex items-center gap-1"
            onClick={onMoreDetails}
          >
            Mais detalhes
            <ExternalLinkIcon />
          </span>
        </p>
      </div>
    </div>
  );
}

export function CuidadoForm({ onBack, onContinue, onMoreDetails, onViewCuidadoDetails, companyName }: CuidadoFormProps) {
  const [addCuidado360, setAddCuidado360] = useState<boolean | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleContinue = () => {
    if (addCuidado360 !== null) {
      if (addCuidado360 === true) {
        // Se "Sim" foi selecionado, mostra o modal de confirmação
        setShowConfirmationModal(true);
      } else {
        // Se "Não" foi selecionado, continua diretamente
        onContinue({ addCuidado360 });
      }
    }
  };

  const handleConfirmModal = () => {
    setShowConfirmationModal(false);
    onContinue({ addCuidado360: true });
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
  };

  const handleViewDetailsFromModal = () => {
    setShowConfirmationModal(false);
    onViewCuidadoDetails();
  };

  const canContinue = addCuidado360 !== null;

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
                    <p className="block leading-[27px] font-bold">Deseja adicionar o Cuidado 360º?</p>
                  </div>
                </div>
                <div className="text-[#6b7280] text-[14px] leading-[20px]">
                  Cotação para: <span className="font-bold text-[#272b30]">{companyName}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
              <DescriptionText onMoreDetails={onMoreDetails} />
            </div>

            {/* Radio Button Question */}
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="flex flex-col gap-2">
                <RadioButton
                  selected={addCuidado360 === true}
                  onClick={() => setAddCuidado360(true)}
                  label="Sim"
                />
                <RadioButton
                  selected={addCuidado360 === false}
                  onClick={() => setAddCuidado360(false)}
                  label="Não"
                />
              </div>
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
      
      {/* Modal de Confirmação */}
      <CuidadoConfirmationModal
        isOpen={showConfirmationModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
        onViewDetails={handleViewDetailsFromModal}
      />
    </div>
  );
}
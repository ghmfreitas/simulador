import { Button } from "../ui/button";
import { X } from 'phosphor-react';
import { useEffect } from 'react';

interface CuidadoConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onViewDetails: () => void;
}

function CancelIcon() {
  return (
    <X 
      size={20} 
      color="#F05223" 
      weight="bold"
    />
  );
}

function CancelButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className="inline-flex items-center justify-center h-[48px] px-6 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm gap-2 font-medium"
    >
      <CancelIcon />
      Cancelar
    </Button>
  );
}

export function CuidadoConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  onViewDetails 
}: CuidadoConfirmationModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center pt-[140px]">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-[500px] max-w-[90vw] rounded-xl border border-[#e4e7ec] shadow-none p-6 bg-white h-fit">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
          {/* Header */}
          <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full">
              <div className="basis-0 font-bold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#101213] text-[24px] text-left">
                <p className="block leading-[27px]">Confirmação</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="w-full">
              <p className="text-[#272b30] text-[14px] leading-[21px]">
                Ao prosseguir, você concorda os termos de aceite da{' '}
                <span 
                  className="font-bold text-[#f05223] cursor-pointer underline hover:no-underline"
                  onClick={onViewDetails}
                >
                  contratação do Cuidado 360º
                </span>
                {' '}na sua proposta de cotação. Deseja prosseguir?
              </p>
            </div>
          </div>

          {/* Buttons Container */}
          <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
            <CancelButton onClick={onClose} />
            
            <Button
              onClick={onConfirm}
              variant="primary"
              size="xl"
              className="px-6 text-[16px] leading-[24px] rounded-full transition-all duration-300 ease-in-out"
            >
              Prosseguir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
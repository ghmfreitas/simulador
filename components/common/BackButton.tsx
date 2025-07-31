import { Button } from "../ui/button";
import { ArrowLeft } from 'phosphor-react';

function BackIcon() {
  return (
    <ArrowLeft 
      size={20} 
      color="#F05223" 
      weight="bold"
    />
  );
}

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className="inline-flex items-center justify-center h-[48px] px-6 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm gap-2 font-medium"
    >
      <BackIcon />
      Voltar
    </Button>
  );
}
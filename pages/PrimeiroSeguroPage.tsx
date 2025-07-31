import { useState, useRef, useEffect } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { BackButton } from '../components/common/BackButton';
import { X } from 'phosphor-react';
import { GridPatterns, cn } from '../lib/grid-patterns';

interface PrimeiroSeguroFormProps {
  onBack: () => void;
  onContinue: (data: { isNewInsurance: boolean; congeneres?: string[] }) => void;
  companyName: string;
}

// Lista de congêneres disponíveis
const CONGENERES_LIST = [
  'Amil',
  'Alice', 
  'Bradesco Saúde',
  'NotreDame Intermédica',
  'Porto Seguro Saúde',
  'Unimed',
  'SulAmérica',
  'Hapvida',
  'Prevent Senior',
  'Golden Cross',
  'Assim Saúde',
  'Care Plus',
  'Omint',
  'São Cristóvão',
  'Marítima Seguros'
];

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


interface CongenereTagProps {
  congenere: string;
  onRemove: () => void;
}

function CongenereTag({ congenere, onRemove }: CongenereTagProps) {
  return (
    <div className="bg-[#e9ecef] box-border content-stretch flex flex-row gap-1 h-7 items-center justify-start pl-3 pr-2 py-0 relative rounded-[100px] shrink-0">
      <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#6a7178] text-[12px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">{congenere}</p>
      </div>
      <button
        onClick={onRemove}
        className="relative shrink-0 size-[22px] flex items-center justify-center hover:bg-[#d3d3d3] rounded-full transition-colors"
      >
        <X size={14} color="#6A7178" />
      </button>
    </div>
  );
}

interface CongenereAutocompleteProps {
  selectedCongeneres: string[];
  onAddCongenere: (congenere: string) => void;
  onRemoveCongenere: (congenere: string) => void;
}

function CongenereAutocomplete({ selectedCongeneres, onAddCongenere, onRemoveCongenere }: CongenereAutocompleteProps) {
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Filtrar congêneres disponíveis (excluindo os já selecionados)
  const availableCongeneres = CONGENERES_LIST.filter(c => !selectedCongeneres.includes(c));
  
  // Filtrar sugestões baseado no input
  const filteredSuggestions = availableCongeneres.filter(congenere =>
    congenere.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    if (showSuggestions && filteredSuggestions.length > 0) {
      setHighlightedIndex(0);
    } else {
      setHighlightedIndex(-1);
    }
  }, [showSuggestions, filteredSuggestions.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setShowSuggestions(value.length > 0 && filteredSuggestions.length > 0);
  };

  const handleInputFocus = () => {
    if (inputValue.length > 0 && filteredSuggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    // Delay para permitir clique nas sugestões
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  const handleSelectCongenere = (congenere: string) => {
    onAddCongenere(congenere);
    setInputValue('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || filteredSuggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < filteredSuggestions.length) {
          handleSelectCongenere(filteredSuggestions[highlightedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setInputValue('');
        break;
    }
  };

  return (
    <div className="space-y-2">
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder="Digite a congênere"
          className="w-[200px] h-11 text-[14px] leading-[21px] border-[#ced4da] focus-visible:ring-[#F05223]"
        />
        
        {showSuggestions && filteredSuggestions.length > 0 && (
          <div
            ref={suggestionsRef}
            className="absolute top-full left-0 right-0 bg-white border border-[#ced4da] rounded mt-1 shadow-lg z-10 max-h-48 overflow-auto"
          >
            {filteredSuggestions.map((congenere, index) => (
              <div
                key={congenere}
                className={`px-4 py-2 cursor-pointer text-[#272b30] text-[14px] leading-[21px] ${
                  index === highlightedIndex ? 'bg-[#f1f3f5]' : 'bg-white hover:bg-[#f1f3f5]'
                }`}
                onMouseDown={(e) => {
                  e.preventDefault(); // Previne o blur do input
                  handleSelectCongenere(congenere);
                }}
              >
                {congenere}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tags das congêneres selecionadas */}
      {selectedCongeneres.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCongeneres.map((congenere) => (
            <CongenereTag
              key={congenere}
              congenere={congenere}
              onRemove={() => onRemoveCongenere(congenere)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function PrimeiroSeguroForm({ onBack, onContinue, companyName }: PrimeiroSeguroFormProps) {
  const [isNewInsurance, setIsNewInsurance] = useState<boolean | null>(null);
  const [selectedCongeneres, setSelectedCongeneres] = useState<string[]>([]);

  const handleAddCongenere = (congenere: string) => {
    if (!selectedCongeneres.includes(congenere)) {
      setSelectedCongeneres(prev => [...prev, congenere]);
    }
  };

  const handleRemoveCongenere = (congenere: string) => {
    setSelectedCongeneres(prev => prev.filter(c => c !== congenere));
  };

  const handleContinue = () => {
    if (isNewInsurance !== null) {
      onContinue({
        isNewInsurance,
        congeneres: selectedCongeneres.length > 0 ? selectedCongeneres : undefined
      });
    }
  };

  // O botão continuar deve estar habilitado quando:
  // - "Sim" foi selecionado, ou
  // - "Não" foi selecionado E pelo menos uma congênere foi adicionada
  const canContinue = isNewInsurance === true || (isNewInsurance === false && selectedCongeneres.length > 0);

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
                    <p className="block leading-[27px]">Preencha os campos abaixo</p>
                  </div>
                </div>
                <div className="text-[#6b7280] text-[14px] leading-[20px]">
                  Simulação para: <span className="font-bold text-[#272b30]">{companyName}</span>
                </div>
              </div>
            </div>

            {/* Radio Button Question */}
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="leading-[0] min-w-full not-italic relative shrink-0 text-[#272b30] text-[14px] text-left">
                <p className="block leading-[21px]">É um seguro novo?</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <RadioButton
                  selected={isNewInsurance === true}
                  onClick={() => {
                    setIsNewInsurance(true);
                    // Limpar congêneres quando mudamos para "Sim"
                    setSelectedCongeneres([]);
                  }}
                  label="Sim"
                />
                <RadioButton
                  selected={isNewInsurance === false}
                  onClick={() => setIsNewInsurance(false)}
                  label="Não"
                />
              </div>
            </div>

            {/* Autocomplete de Congênere - só aparece quando "Não" é selecionado */}
            {isNewInsurance === false && (
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full animate-in slide-in-from-top-2 duration-300">
                <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#272b30] text-[14px] text-left text-nowrap">
                  <p className="block leading-[21px] whitespace-pre">
                    Informe a congênere anterior do seu cliente:
                  </p>
                </div>
                <CongenereAutocomplete
                  selectedCongeneres={selectedCongeneres}
                  onAddCongenere={handleAddCongenere}
                  onRemoveCongenere={handleRemoveCongenere}
                />
              </div>
            )}

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
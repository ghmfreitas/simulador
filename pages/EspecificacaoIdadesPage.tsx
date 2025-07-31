import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { BackButton } from '../components/common/BackButton';
import { Plus, Minus, X, Info } from 'phosphor-react';

interface EspecificacaoIdadesFormProps {
  onBack: () => void;
  onContinue: (data: { 
    detailedAges: Record<string, Array<{age: number, count: number}>>
  }) => void;
  companyName: string;
  vidasToSpecify: {
    '0-18'?: number;
    '59+'?: number;
  };
}

interface AgeEntry {
  age: number | null;
  count: number;
}

export function EspecificacaoIdadesForm({ 
  onBack, 
  onContinue, 
  companyName, 
  vidasToSpecify 
}: EspecificacaoIdadesFormProps) {
  const [ageSpecifications, setAgeSpecifications] = useState<{
    '0-18': AgeEntry[];
    '59+': AgeEntry[];
  }>(() => {
    const initial: { '0-18': AgeEntry[]; '59+': AgeEntry[] } = {
      '0-18': [],
      '59+': []
    };
    
    // Adicionar campo inicial para 0-18 se necessário - agora com count = 1 e age vazio
    if (vidasToSpecify['0-18']) {
      initial['0-18'] = [{ age: null, count: 1 }];
    }
    
    // Adicionar campo inicial para 59+ se necessário - agora com count = 1 e age vazio
    if (vidasToSpecify['59+']) {
      initial['59+'] = [{ age: null, count: 1 }];
    }
    
    return initial;
  });

  const [currentPhase, setCurrentPhase] = useState<'0-18' | '59+' | 'both'>(() => {
    if (vidasToSpecify['0-18'] && vidasToSpecify['59+']) return 'both';
    if (vidasToSpecify['0-18']) return '0-18';
    return '59+';
  });

  const [activeRange, setActiveRange] = useState<'0-18' | '59+'>(() => {
    if (vidasToSpecify['0-18']) return '0-18';
    return '59+';
  });

  // Calcular totals - conta apenas entradas com idade preenchida (não null)
  const getTotalSpecified = (range: '0-18' | '59+') => {
    return ageSpecifications[range]
      .filter(entry => entry.age !== null)
      .reduce((sum, entry) => sum + entry.count, 0);
  };

  const getRequiredTotal = (range: '0-18' | '59+') => {
    return vidasToSpecify[range] || 0;
  };

  const addAgeEntry = (range: '0-18' | '59+') => {
    // Adicionar novo campo com idade null (que será exibido como vazio)
    setAgeSpecifications(prev => ({
      ...prev,
      [range]: [...prev[range], { age: null, count: 1 }]
    }));
  };

  const removeAgeEntry = (range: '0-18' | '59+', index: number) => {
    setAgeSpecifications(prev => ({
      ...prev,
      [range]: prev[range].filter((_, i) => i !== index)
    }));
  };

  const updateAgeEntry = (range: '0-18' | '59+', index: number, field: 'age' | 'count', value: number | null, skipValidation: boolean = false) => {
    const minAge = range === '0-18' ? 0 : 59;
    const maxAge = range === '0-18' ? 18 : 120;
    
    if (field === 'age') {
      // Só aplica validação se não for para pular ou se realmente estiver fora dos limites
      if (value !== null && !skipValidation && (value < minAge || value > maxAge)) {
        value = Math.max(minAge, Math.min(maxAge, value));
      }
    } else {
      // Limitar o count ao máximo de vidas restantes disponíveis
      const currentEntry = ageSpecifications[range][index];
      // Só conta na distribuição se a idade estiver preenchida
      const otherEntriesTotal = ageSpecifications[range]
        .filter((entry, i) => i !== index && entry.age !== null)
        .reduce((sum, entry) => sum + entry.count, 0);
      
      // Se a idade atual não está preenchida, o máximo é o total disponível
      const maxAllowed = currentEntry.age === null 
        ? getRequiredTotal(range) - otherEntriesTotal
        : getRequiredTotal(range) - otherEntriesTotal;
      
      value = Math.max(1, Math.min(maxAllowed, value as number));
    }

    setAgeSpecifications(prev => ({
      ...prev,
      [range]: prev[range].map((entry, i) => 
        i === index ? { ...entry, [field]: value } : entry
      )
    }));
  };

  const validateAgeOnBlur = (range: '0-18' | '59+', index: number, value: number) => {
    const minAge = range === '0-18' ? 0 : 59;
    const maxAge = range === '0-18' ? 18 : 120;
    
    // Aplica validação somente se estiver fora dos limites
    if (value < minAge || value > maxAge) {
      const correctedValue = Math.max(minAge, Math.min(maxAge, value));
      updateAgeEntry(range, index, 'age', correctedValue);
    }
  };

  const canContinue = () => {
    if (currentPhase === 'both') {
      // Para fase dupla, precisa ser exato
      if (activeRange === '0-18') {
        return getTotalSpecified('0-18') === getRequiredTotal('0-18');
      } else {
        return getTotalSpecified('0-18') === getRequiredTotal('0-18') && 
               getTotalSpecified('59+') === getRequiredTotal('59+');
      }
    }
    // Para fase única, deve ser exato
    return getTotalSpecified(activeRange) === getRequiredTotal(activeRange);
  };

  const handleNext = () => {
    if (currentPhase === 'both' && activeRange === '0-18') {
      setActiveRange('59+');
    } else {
      onContinue({ detailedAges: ageSpecifications });
    }
  };

  const renderAgeSpecificationSection = (range: '0-18' | '59+') => {
    const required = getRequiredTotal(range);
    const specified = getTotalSpecified(range);
    const isComplete = specified === required;
    const remaining = required - specified;

    return (
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-3">
          <h2 className="font-['Roboto',_sans-serif] font-bold text-[#272b30] text-[22px] leading-[28px]">
            Especifique as idades - {range === '0-18' ? '0 a 18 anos' : '59 anos ou mais'}
          </h2>
          <p className="font-['Roboto',_sans-serif] text-[#6a7178] text-[15px] leading-[22px]">
            Você informou {required} vida{required > 1 ? 's' : ''} nesta faixa. Especifique a idade exata de cada uma.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                isComplete 
                  ? 'bg-green-100' 
                  : remaining < 0 
                    ? 'bg-red-100'
                    : 'bg-orange-100'
              }`}>
                <span className={`font-['Roboto',_sans-serif] font-bold text-[18px] ${
                  isComplete 
                    ? 'text-green-700' 
                    : remaining < 0
                      ? 'text-red-700'
                      : 'text-orange-700'
                }`}>
                  {specified}
                </span>
              </div>
              <div>
                <p className="font-['Roboto',_sans-serif] text-[#272b30] text-[16px] leading-[22px] font-semibold">
                  {isComplete 
                    ? 'Distribuição completa' 
                    : remaining < 0 
                      ? 'Limite excedido'
                      : 'Vidas distribuídas'
                  }
                </p>
                <p className="font-['Roboto',_sans-serif] text-[#6a7178] text-[14px] leading-[18px]">
                  Total necessário: {required} vida{required > 1 ? 's' : ''}
                </p>
              </div>
            </div>
            {remaining !== 0 && (
              <div className={`flex items-center gap-3 px-4 py-2 rounded-full border ${
                remaining > 0 
                  ? 'bg-orange-50 border-orange-200' 
                  : 'bg-red-50 border-red-200'
              }`}>
                {remaining > 0 ? (
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                ) : (
                  <Info size={20} weight="fill" className="text-red-600" />
                )}
                <span className={`font-['Roboto',_sans-serif] text-[14px] leading-[18px] font-semibold ${
                  remaining > 0 
                    ? 'text-orange-700' 
                    : 'text-red-700'
                }`}>
                  {remaining > 0 
                    ? `${remaining} ${remaining === 1 ? 'restante' : 'restantes'}`
                    : `${Math.abs(remaining)} ${Math.abs(remaining) === 1 ? 'vida' : 'vidas'} a mais`
                  }
                </span>
              </div>
            )}
            {isComplete && (
              <div className="flex items-center gap-3 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M15 4.5L6.75 12.75L3 9" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-['Roboto',_sans-serif] text-green-700 text-[14px] leading-[18px] font-semibold">
                  Completo
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Age entries */}
        <div className="space-y-3">
          {ageSpecifications[range].map((entry, index) => {
            // Verificar se o total já foi atingido e este campo está vazio
            const totalDistributed = getTotalSpecified(range);
            const isDisabled = totalDistributed >= getRequiredTotal(range) && entry.age === null;
            
            return (
              <div key={index} className={`border rounded-lg p-5 transition-colors duration-200 ${
                isDisabled 
                  ? 'border-gray-100 bg-gray-50 opacity-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <div className="flex items-end">
                  <div>
                    <label className="font-['Roboto',_sans-serif] text-[#6a7178] text-[13px] leading-[18px] block mb-2 font-medium">
                      Idade
                    </label>
                    <div className="w-[52px] h-[52px]">
                      <Input
                        type="number"
                        value={entry.age === null ? '' : entry.age}
                        onChange={(e) => {
                          const val = e.target.value;
                          updateAgeEntry(range, index, 'age', val === '' ? null : parseInt(val), true);
                        }}
                        onBlur={(e) => {
                          const val = e.target.value;
                          if (val !== '') {
                            validateAgeOnBlur(range, index, parseInt(val));
                          }
                        }}
                        min={range === '0-18' ? 0 : 59}
                        max={range === '0-18' ? 18 : 120}
                        placeholder={range === '0-18' ? '0' : '59'}
                        disabled={isDisabled}
                        className="w-full h-full text-center text-[14px] leading-[21px] rounded border border-[#ced4da] focus-visible:ring-[#F05223] bg-white px-1 placeholder:text-center placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
                        style={{ MozAppearance: 'textfield' }}
                      />
                    </div>
                  </div>
                <div className="flex-1">
                  <label className="font-['Roboto',_sans-serif] text-[#6a7178] text-[13px] leading-[18px] block mb-2 font-medium text-center">
                    Quantidade de vidas
                  </label>
                  <div className="flex items-center gap-3 justify-center">
                    <button
                      type="button"
                      onClick={() => updateAgeEntry(range, index, 'count', entry.count - 1)}
                      disabled={entry.count <= 1 || isDisabled}
                      className="w-[52px] h-[52px] flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Minus size={20} />
                    </button>
                    <div className="w-[52px] h-[52px]">
                      <Input
                        type="number"
                        value={entry.count}
                        onChange={(e) => updateAgeEntry(range, index, 'count', parseInt(e.target.value) || 1)}
                        min={1}
                        max={999}
                        disabled={isDisabled}
                        className="w-full h-full text-center text-[14px] leading-[21px] rounded border border-[#ced4da] focus-visible:ring-[#F05223] bg-white px-1 disabled:bg-gray-100 disabled:cursor-not-allowed [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
                        style={{ MozAppearance: 'textfield' }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => updateAgeEntry(range, index, 'count', entry.count + 1)}
                      disabled={getTotalSpecified(range) >= getRequiredTotal(range) || isDisabled}
                      className="w-[52px] h-[52px] flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
                <div className="ml-auto">
                  <button
                    type="button"
                    onClick={() => removeAgeEntry(range, index)}
                    disabled={ageSpecifications[range].length === 1 || isDisabled}
                    className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400"
                    title="Remover idade"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>
            );
          })}
        </div>

      </div>
    );
  };

  return (
    <div className="flex justify-center px-4 pt-[80px] pb-20">
      <Card className="w-[560px] rounded-xl border border-[#e4e7ec] shadow-none">
        <CardContent className="p-6">
          <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">


            {/* Main content */}
            {renderAgeSpecificationSection(activeRange)}

            {/* Buttons Container */}
            <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
              <BackButton onClick={onBack} />
              
              {/* Add button in the middle */}
              <div className="flex-1 flex justify-center">
                {getTotalSpecified(activeRange) < getRequiredTotal(activeRange) && 
                 ageSpecifications[activeRange].length < getRequiredTotal(activeRange) && (
                  <button
                    type="button"
                    onClick={() => addAgeEntry(activeRange)}
                    className="group flex items-center gap-3 px-6 h-11 bg-white border-2 border-dashed border-gray-300 rounded-full hover:border-[#F05223] hover:bg-orange-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F05223] focus:ring-offset-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#F05223] flex items-center justify-center transition-colors duration-200">
                      <Plus size={18} className="text-gray-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="font-['Roboto',_sans-serif] text-[14px] leading-[20px] text-gray-700 group-hover:text-[#F05223] font-medium transition-colors duration-200">
                      Adicionar idade
                    </span>
                  </button>
                )}
              </div>
              
              {canContinue() ? (
                <Button
                  onClick={handleNext}
                  variant="primary"
                  size="xl"
                  className="px-6 text-[16px] leading-[24px] rounded-full transition-all duration-300 ease-in-out"
                >
                  {currentPhase === 'both' && activeRange === '0-18' ? 'Próximo' : 'Continuar'}
                </Button>
              ) : (
                <div className="w-[120px]" />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
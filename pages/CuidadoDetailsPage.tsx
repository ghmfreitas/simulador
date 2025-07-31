import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { BackButton } from '../components/common/BackButton';

interface CuidadoDetailsFormProps {
  onBack: () => void;
  onContinue: (data: { addCuidado360: boolean }) => void;
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


export function CuidadoDetailsForm({ onBack, onContinue, companyName }: CuidadoDetailsFormProps) {
  const [addCuidado360, setAddCuidado360] = useState<boolean | null>(null);

  const handleContinue = () => {
    if (addCuidado360 !== null) {
      onContinue({ addCuidado360 });
    }
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
                    <p className="block leading-[27px]">Você conhece o Cuidado 360º?</p>
                  </div>
                </div>
                <div className="text-[#6b7280] text-[14px] leading-[20px]">
                  Cotação para: <span className="font-bold text-[#272b30]">{companyName}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
              {/* Main Description */}
              <div className="w-full">
                <p className="text-[#272b30] text-[14px] leading-[21px] mb-4">
                  O <span className="font-bold">CUIDADO 360º SEGURO SAÚDE</span> oferece um <span className="font-bold">benefício adicional</span> do <span className="font-bold">SEGURO DE VIDA + SEGURO ODONTOLÓGICO</span>.
                </p>
                
                <ul className="list-disc pl-4 space-y-3 mb-4">
                  <li className="text-[#272b30] text-[14px] leading-[21px]">
                    <span className="font-bold">Seguro de Vida</span> custeado pela SulAmérica com as possíveis seguintes coberturas e assistências aos beneficiários, dependendo do plano de saúde que for contratado, durante a campanha: Morte, Morte Acidental, Invalidez Permanente Total ou Parcial por Acidente, Assistência Funeral Individual e Assistência Funeral Familiar.
                  </li>
                  <li className="text-[#272b30] text-[14px] leading-[21px]">
                    <span className="font-bold">Plano Odontológico</span> custeado pela SulAmérica: um produto completo, com diversas coberturas que proporcionam aos seus clientes bem-estar para cuidar da saúde bucal. <span className="font-bold">A vigência inicial escolhida, será a mesma do plano de saúde</span>.
                  </li>
                </ul>

                <p className="font-bold text-[#272b30] text-[14px] leading-[21px] mb-4">
                  Para mais informações, veja a descrição abaixo da contratação:
                </p>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-bold text-[#272b30] text-[14px] leading-[21px] mb-3">
                    CUIDADO 360º: PLANO DE SAÚDE, considerando um benefício adicional de SEGURO DE VIDA (+) PLANO ODONTOLÓGICO
                  </p>
                  
                  <p className="text-[#272b30] text-[12px] leading-[18px]">
                    Ao aceitar a contratação, opta-se por contratar (a) 1(um) ou mais Planos de Saúde, para cobertura de custos assistenciais, com a finalidade de garantir a assistência à saúde ao grupo de beneficiários, pela facilidade de acesso e atendimento por profissionais escolhidos, integrantes ou não à rede credenciada, nos termos e limites do plano contratado, tendo como benefício adicional um Seguro de Vida; mais (b) 1(um) Plano Odontológico, para a cobertura de custos assistenciais, com a finalidade de garantir a assistência odontológica ao grupo de beneficiários, pela facilidade de acesso e atendimento por profissionais escolhidos, pertencentes ou não à rede credenciada, nos termos e limites do plano contratado. Importante destacar que Cada produto vigerá de forma individualizada. O benefício adicional do Seguro de Vida é estabelecido por prazo determinado para durante o período de vigência inicial do Plano de Saúde Médico-Hospitalar, limitado a 24 (vinte e quatro) meses e/ou enquanto estiver vigente o Plano de Saúde Médico-Hospitalar, o que ocorrer primeiro, sendo automaticamente cancelado, sem qualquer cobrança adicional para a Contratante pelo período em que esteve vigente, ocasião em que o beneficiário poderá optar pela contratação individualizada do Seguro de Vida. O Plano Odontológico será integralmente subsidiado pela SulAmérica pelo período para durante a vigência inicial do Plano de Saúde Médico-Hospitalar, limitado a 24 (vinte e quatro) meses e/ou enquanto estiver vigente o Plano de Saúde Médico-Hospitalar, o que ocorrer primeiro. Após o término do período de vigência inicial do Plano de Saúde Médico-Hospitalar, limitado a 24 (vinte e quatro) meses, tal subsídio será automaticamente cancelado e a Contratante tornar-se-á imediatamente e integralmente responsável pelo pagamento da mensalidade do Plano Odontológico, devidamente atualizado.
                  </p>
                </div>
              </div>
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
    </div>
  );
}
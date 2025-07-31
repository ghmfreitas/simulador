import svgPaths from "./svg-7elsdmpcx6";

function Frame1533210709() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left w-full">
        <p className="block leading-[27px]">Filtros</p>
      </div>
    </div>
  );
}

function Pip() {
  return (
    <div
      className="[grid-area:1_/_1] h-1 ml-[2.098px] mt-[22px] relative w-[2.098px]"
      data-name="Pip"
    >
      <div className="absolute bg-[#ced4da] inset-0" data-name="Shape Sharp" />
    </div>
  );
}

function Pip1() {
  return (
    <div
      className="[grid-area:1_/_1] h-1 ml-[175.213px] mt-[22px] relative w-[2.098px]"
      data-name="Pip"
    >
      <div className="absolute bg-[#ced4da] inset-0" data-name="Shape Sharp" />
    </div>
  );
}

function BarBackground() {
  return (
    <div
      className="[grid-area:1_/_1] h-1 ml-[2.098px] mt-3.5 relative w-[175.213px]"
      data-name="Bar background"
    >
      <div
        className="absolute bg-[#ced4da] inset-0 rounded-[45px]"
        data-name="Shape Rounded"
      />
    </div>
  );
}

function BarColor() {
  return (
    <div
      className="[grid-area:1_/_1] h-1 ml-[2.098px] mt-3.5 relative w-[175.213px]"
      data-name="Bar color"
    >
      <div
        className="absolute bg-[#f05223] bottom-0 left-0 right-[1.198%] rounded-[45px] top-0"
        data-name="Shape Rounded"
      />
    </div>
  );
}

function Circle() {
  return (
    <div
      className="absolute size-6 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Circle"
      style={{ left: "calc(50% + 0.213px)" }}
    >
      <div
        className="absolute bg-[#ffffff] inset-0 rounded-[45px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]"
        data-name="Shape Rounded"
      />
    </div>
  );
}

function Slash() {
  return (
    <div
      className="absolute h-2.5 top-1/2 translate-x-[-50%] translate-y-[-50%] w-px"
      data-name="Slash"
      style={{ left: "calc(50% - 4px)" }}
    >
      <div className="absolute bg-[#adb5bd] inset-0" data-name="Shape Sharp" />
    </div>
  );
}

function Slash1() {
  return (
    <div
      className="absolute h-2.5 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-px"
      data-name="Slash"
    >
      <div className="absolute bg-[#adb5bd] inset-0" data-name="Shape Sharp" />
    </div>
  );
}

function Slash2() {
  return (
    <div
      className="absolute h-2.5 top-1/2 translate-x-[-50%] translate-y-[-50%] w-px"
      data-name="Slash"
      style={{ left: "calc(50% + 4px)" }}
    >
      <div className="absolute bg-[#adb5bd] inset-0" data-name="Shape Sharp" />
    </div>
  );
}

function Bars() {
  return (
    <div
      className="absolute h-2.5 overflow-clip top-1/2 translate-x-[-50%] translate-y-[-50%] w-[9px]"
      data-name="Bars"
      style={{ left: "calc(50% - 0.287px)" }}
    >
      <Slash />
      <Slash1 />
      <Slash2 />
    </div>
  );
}

function Circle1() {
  return (
    <div
      className="[grid-area:1_/_1] h-8 ml-[158.426px] mt-0 relative w-[33.574px]"
      data-name="Circle"
    >
      <Circle />
      <Bars />
    </div>
  );
}

function Range() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Range"
    >
      <div
        className="[grid-area:1_/_1] font-['Roboto:Regular',_sans-serif] font-normal leading-[0] ml-0 mt-[27px] relative text-[#4f575e] text-[14px] text-left w-[29.377px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[21px]">R$ 0</p>
      </div>
      <Pip />
      <Pip1 />
      <div
        className="[grid-area:1_/_1] font-['Roboto:Regular',_sans-serif] font-normal leading-[0] ml-[179.41px] mt-[27px] relative text-[#4f575e] text-[14px] text-right translate-x-[-100%] w-[54.557px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[21px]">R$ 9000</p>
      </div>
      <BarBackground />
      <BarColor />
      <Circle1 />
    </div>
  );
}

function FaixaDeValores() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start leading-[0] p-0 relative shrink-0 w-48"
      data-name="Faixa de valores"
    >
      <div
        className="font-['Lintel:Bold',_sans-serif] min-w-full not-italic relative shrink-0 text-[#000000] text-[16px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[27px]">Faixa de valores</p>
      </div>
      <Range />
    </div>
  );
}

function ProdutosSaudePme() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Produtos Saúde PME"
    >
      <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left w-full">
        <p className="block leading-[27px]">Produto Saúde PME</p>
      </div>
    </div>
  );
}

function RadioButtonSelected() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="Radio Button / Selected"
    >
      <div
        className="absolute bg-[#f05223] inset-0 rounded-[45px]"
        data-name="Radio Background"
      />
      <div
        className="absolute bg-[#ffffff] inset-1/4 rounded-[45px]"
        data-name="Active"
      />
    </div>
  );
}

function RadioButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-[97px]"
      data-name="Radio Button"
    >
      <RadioButtonSelected />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#272b30] text-[14px] text-left w-28"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[21px]">557 - AHO</p>
      </div>
    </div>
  );
}

function IconsInfoCircle() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[17px]"
      data-name="Icons / info-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 18"
      >
        <g id="Icons / info-circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p3d7b7c80}
            fill="var(--fill-0, #ADB5BD)"
            fillRule="evenodd"
            id="info-circle"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210819() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <RadioButton />
      <IconsInfoCircle />
    </div>
  );
}

function Frame1533210790() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <ProdutosSaudePme />
      <Frame1533210819 />
    </div>
  );
}

function Checkbox() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 size-6"
      data-name="Checkbox"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Checkbox1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <Checkbox />
    </div>
  );
}

function Frame1533210781() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-[58px]">
      <Checkbox1 />
      <div className="font-['Lintel:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[14px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">CBO</p>
      </div>
    </div>
  );
}

function IconsInfoCircle1() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[17px]"
      data-name="Icons / info-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 18"
      >
        <g id="Icons / info-circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p3d7b7c80}
            fill="var(--fill-0, #ADB5BD)"
            fillRule="evenodd"
            id="info-circle"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Radio Button"
    >
      <Frame1533210781 />
      <IconsInfoCircle1 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 size-6"
      data-name="Checkbox"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Checkbox3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <Checkbox2 />
    </div>
  );
}

function Frame1533210786() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Checkbox3 />
      <div className="font-['Lintel:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[14px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Compulsória</p>
      </div>
    </div>
  );
}

function IconsInfoCircle2() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[17px]"
      data-name="Icons / info-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 18"
      >
        <g id="Icons / info-circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p3d7b7c80}
            fill="var(--fill-0, #ADB5BD)"
            fillRule="evenodd"
            id="info-circle"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Radio Button"
    >
      <Frame1533210786 />
      <IconsInfoCircle2 />
    </div>
  );
}

function T4RadioContratacao() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-32"
      data-name="T4 - Radio - Contratação"
    >
      <RadioButton1 />
      <RadioButton2 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 size-6"
      data-name="Checkbox"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Checkbox5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <Checkbox4 />
    </div>
  );
}

function Frame1533210787() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Checkbox5 />
      <div className="font-['Lintel:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[14px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Flex</p>
      </div>
    </div>
  );
}

function IconsInfoCircle3() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[17px]"
      data-name="Icons / info-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 18"
      >
        <g id="Icons / info-circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p3d7b7c80}
            fill="var(--fill-0, #ADB5BD)"
            fillRule="evenodd"
            id="info-circle"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[7px] items-center justify-start p-0 relative shrink-0"
      data-name="Radio Button"
    >
      <Frame1533210787 />
      <IconsInfoCircle3 />
    </div>
  );
}

function TipoDeContratacao() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Tipo de Contratação"
    >
      <div
        className="font-['Lintel:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[16px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[27px]">Tipo de contratação</p>
      </div>
      <T4RadioContratacao />
      <RadioButton3 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 size-6"
      data-name="Checkbox"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Checkbox7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <Checkbox6 />
    </div>
  );
}

function IconsInfoCircle4() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[17px]"
      data-name="Icons / info-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 18"
      >
        <g id="Icons / info-circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p3d7b7c80}
            fill="var(--fill-0, #ADB5BD)"
            fillRule="evenodd"
            id="info-circle"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Radio Button"
    >
      <Checkbox7 />
      <div className="font-['Lintel:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[14px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">12 meses</p>
      </div>
      <IconsInfoCircle4 />
    </div>
  );
}

function Checkbox8() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 size-6"
      data-name="Checkbox"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Checkbox9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <Checkbox8 />
    </div>
  );
}

function IconsInfoCircle5() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[17px]"
      data-name="Icons / info-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 18"
      >
        <g id="Icons / info-circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p3d7b7c80}
            fill="var(--fill-0, #ADB5BD)"
            fillRule="evenodd"
            id="info-circle"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Radio Button"
    >
      <Checkbox9 />
      <div className="font-['Lintel:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[14px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">24 meses</p>
      </div>
      <IconsInfoCircle5 />
    </div>
  );
}

function T4RadioVigencia() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-28"
      data-name="T4 - Radio - Vigência"
    >
      <RadioButton4 />
      <RadioButton5 />
    </div>
  );
}

function VigenciaContratual() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Vigência Contratual"
    >
      <div
        className="font-['Lintel:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[16px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[27px]">Vigência contratual</p>
      </div>
      <T4RadioVigencia />
    </div>
  );
}

function Checkbox10() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 size-6"
      data-name="Checkbox"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Checkbox11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <Checkbox10 />
    </div>
  );
}

function IconsInfoCircle6() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[17px]"
      data-name="Icons / info-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 18"
      >
        <g id="Icons / info-circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p3d7b7c80}
            fill="var(--fill-0, #ADB5BD)"
            fillRule="evenodd"
            id="info-circle"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Radio Button"
    >
      <Checkbox11 />
      <div className="font-['Lintel:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[14px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">
          Sem coparticipação
        </p>
      </div>
      <IconsInfoCircle6 />
    </div>
  );
}

function Checkbox12() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 size-6"
      data-name="Checkbox"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function Checkbox13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <Checkbox12 />
    </div>
  );
}

function IconsInfoCircle7() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[17px]"
      data-name="Icons / info-circle"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17 18"
      >
        <g id="Icons / info-circle">
          <path
            clipRule="evenodd"
            d={svgPaths.p3d7b7c80}
            fill="var(--fill-0, #ADB5BD)"
            fillRule="evenodd"
            id="info-circle"
          />
        </g>
      </svg>
    </div>
  );
}

function RadioButton7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Radio Button"
    >
      <Checkbox13 />
      <div className="font-['Lintel:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[14px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">
          Com coparticipação
        </p>
      </div>
      <IconsInfoCircle7 />
    </div>
  );
}

function T4RadioCoparticipacao() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[171px]"
      data-name="T4 - Radio - Coparticipação"
    >
      <RadioButton6 />
      <RadioButton7 />
    </div>
  );
}

function Coparticipacao() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Coparticipação"
    >
      <div
        className="font-['Lintel:Bold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[16px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[27px]">Coparticipação</p>
      </div>
      <T4RadioCoparticipacao />
    </div>
  );
}

function Frame1533210747() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1533210709 />
      <FaixaDeValores />
      <Frame1533210790 />
      <TipoDeContratacao />
      <VigenciaContratual />
      <Coparticipacao />
    </div>
  );
}

function Filtros() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-6 items-start justify-start left-20 p-0 top-[92px]"
      data-name="Filtros"
    >
      <Frame1533210747 />
    </div>
  );
}

function PhoneSideMenuSidebar() {
  return (
    <div
      className="absolute bottom-[38.803%] left-0 right-[82.656%] top-0"
      data-name="Phone / Side Menu / Sidebar"
    >
      <div className="absolute border-[#000000] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div
        className="absolute bg-[#ffffff] inset-0"
        data-name="Background Side"
      />
      <Filtros />
    </div>
  );
}

function Component1() {
  return (
    <div
      className="h-[31px] relative shrink-0 w-[119px]"
      data-name="Component 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 119 31"
      >
        <g id="Component 1">
          <g id="Group 9">
            <path
              d={svgPaths.p10155a00}
              fill="var(--fill-0, #F05223)"
              id="path22"
            />
            <path
              d={svgPaths.p76ba500}
              fill="var(--fill-0, #F98900)"
              id="path26"
            />
          </g>
          <path
            d={svgPaths.p56ee400}
            fill="var(--fill-0, #001D5F)"
            id="Union"
          />
        </g>
      </svg>
    </div>
  );
}

function Navbar() {
  return (
    <div
      className="absolute backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.1)] bottom-[95.965%] box-border content-stretch flex flex-row items-center justify-between left-0 px-[100px] py-0 right-0 top-0"
      data-name="Navbar"
    >
      <div className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none" />
      <Component1 />
    </div>
  );
}

function Group238150() {
  return (
    <div className="h-5 relative shrink-0 w-[228.494px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 229 20"
      >
        <g id="Group 238150">
          <path
            d={svgPaths.p3a892b00}
            fill="var(--fill-0, #5C5C5C)"
            id="Vector"
          />
          <path
            d={svgPaths.p3dbba140}
            fill="var(--fill-0, #5C5C5C)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p3711de80}
            fill="var(--fill-0, #5C5C5C)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p206d6c00}
            fill="var(--fill-0, #5C5C5C)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p1ce6d100}
            fill="var(--fill-0, #5C5C5C)"
            id="Vector_5"
          />
        </g>
      </svg>
    </div>
  );
}

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
        <g id="ÃCONE">
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

function Frame1533210113() {
  return (
    <div className="box-border content-stretch flex flex-row h-6 items-center justify-between p-0 relative shrink-0 w-full">
      <Group238150 />
      <Icone />
    </div>
  );
}

function Group238140() {
  return (
    <div className="[grid-area:1_/_1] font-['Aestetico:regular',_sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[28.147%] not-italic place-items-start relative text-[#323232] text-[0px] text-left">
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[138.503px] relative translate-y-[-50%] w-44">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Investimentos - Android
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[7px] relative translate-y-[-50%] w-[85.086px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Saúde - iOS
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-10 relative translate-y-[-50%] w-[116.556px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Saúde - Android
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[73px] relative translate-y-[-50%] w-[95.576px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Odonto - iOS
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[106px] relative translate-y-[-50%] w-[127.046px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] not-italic text-[14px]">
          Odonto - Android
        </p>
      </div>
    </div>
  );
}

function Group238139() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Aestetico:bold',_sans-serif] justify-center ml-0 mt-2.5 not-italic relative text-[#323232] text-[20px] text-left translate-y-[-50%] w-[50.119px]">
        <p className="block leading-[20px]">Apps</p>
      </div>
      <Group238140 />
    </div>
  );
}

function Group238141() {
  return (
    <div className="[grid-area:1_/_1] font-['Aestetico:regular',_sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[18.964%] not-italic place-items-start relative text-[#323232] text-[0px] text-left">
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[138.503px] relative translate-y-[-50%] w-[168.727px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Faça parte do time
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[7px] relative translate-y-[-50%] w-44">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Sobre a SulAmérica
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[105.503px] relative translate-y-[-50%] w-[152.727px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Endereço e CNPJ
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-10 relative translate-y-[-50%] w-[154.182px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Sala de imprensa
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[73px] relative translate-y-[-50%] w-[154.182px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Sustentabilidade
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[171.503px] relative translate-y-[-50%] w-[116.364px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Mapa do site
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[204.503px] relative translate-y-[-50%] w-[93.091px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Dicionário
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[236.555px] relative translate-y-[-50%] w-[74.182px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] not-italic text-[14px]">
          Notícias
        </p>
      </div>
    </div>
  );
}

function Group238144() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Aestetico:bold',_sans-serif] justify-center ml-[0.485px] mt-2.5 not-italic relative text-[#323232] text-[20px] text-left translate-y-[-50%] w-40">
        <p className="block leading-[20px]">A SulAmérica</p>
      </div>
      <Group238141 />
    </div>
  );
}

function Group238142() {
  return (
    <div className="[grid-area:1_/_1] font-['Aestetico:regular',_sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[21.621%] not-italic place-items-start relative text-[#323232] text-[0px] text-left">
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[106px] relative translate-y-[-50%] w-[128.095px]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[#323232] text-[14px]">
          Termos e condições
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-10 relative translate-y-[-50%] w-[137.467px]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[#323232] text-[14px]">
          Portal de privacidade
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[139px] relative translate-y-[-50%] w-[152.047px]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[#323232] text-[14px]">
          Direitos do consumidor
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[7px] relative translate-y-[-50%] w-[112.473px]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[#323232] text-[14px]">
          Segurança online
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[73px] relative translate-y-[-50%] w-[145.799px]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[#323232] text-[14px]">
          Política de privacidade
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[237.503px] relative translate-y-[-50%] w-44">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[#323232] text-[14px]">
          Demonstrações financeiras
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[172px] relative translate-y-[-50%] w-[102.059px]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[#323232] text-[14px]">
          Open insurance
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[205px] relative translate-y-[-50%] w-[80.189px]">
        <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] not-italic text-[#323232] text-[14px]">
          Investidores
        </p>
      </div>
    </div>
  );
}

function Group238145() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Aestetico:bold',_sans-serif] justify-center ml-[0.333px] mt-2.5 not-italic relative text-[#323232] text-[20px] text-left translate-y-[-50%] w-44">
        <p className="block leading-[20px]">Termos e políticas</p>
      </div>
      <Group238142 />
    </div>
  );
}

function Group238143() {
  return (
    <div className="[grid-area:1_/_1] font-['Aestetico:regular',_sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[37.377%] not-italic place-items-start relative text-[#323232] text-[0px] text-left">
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[7px] relative translate-y-[-50%] w-[149.24px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Canais de atendimento
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[106px] relative translate-y-[-50%] w-[123.509px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Canal de denúncias
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-10 relative translate-y-[-50%] w-[62.784px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] text-[14px]">
          Ouvidoria
        </p>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col justify-center ml-0 mt-[73px] relative translate-y-[-50%] w-44">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Aestetico:Regular',_sans-serif] leading-[14px] not-italic text-[14px]">
          Atendimento via WhatsApp
        </p>
      </div>
    </div>
  );
}

function Group238146() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Aestetico:bold',_sans-serif] justify-center ml-0 mt-2.5 not-italic relative text-[#323232] text-[20px] text-left translate-y-[-50%] w-36">
        <p className="block leading-[20px]">Atendimento</p>
      </div>
      <Group238143 />
    </div>
  );
}

function Frame1533210114() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between leading-[0] p-0 relative shrink-0 w-full">
      <Group238139 />
      <Group238144 />
      <Group238145 />
      <Group238146 />
    </div>
  );
}

function Frame1533210710() {
  return (
    <div className="box-border content-stretch flex flex-col gap-12 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame1533210113 />
      <Frame1533210114 />
    </div>
  );
}

function Group238148() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] flex flex-col font-['Aestetico:regular',_sans-serif] h-[5.996px] justify-center ml-[117px] mt-[2.998px] not-italic relative text-[#323232] text-[14px] text-center translate-x-[-50%] translate-y-[-50%] w-[234px]">
        <p className="block leading-[14px]">{`Copyright © 2009-2025 SulAmérica `}</p>
      </div>
    </div>
  );
}

function Group238149() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group238148 />
    </div>
  );
}

function Frame1533210711() {
  return (
    <div className="box-border content-stretch flex flex-col gap-12 h-[488px] items-center justify-start p-0 relative shrink-0 w-[1231px]">
      <Frame1533210710 />
      <Group238149 />
    </div>
  );
}

function SectionFooter1366Px() {
  return (
    <div
      className="absolute bg-[#f4f4f4] bottom-[-0.008%] box-border content-stretch flex flex-col gap-24 items-center justify-start left-0 p-0 right-0 top-[61.175%]"
      data-name="Section footer_1366px"
    >
      <div className="h-0 relative shrink-0 w-full">
        <div
          className="absolute bottom-0 left-0 right-0 top-[-1px]"
          style={
            { "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 1920 1"
          >
            <line
              id="Line 230"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              x1="0.5"
              x2="1919.5"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <Frame1533210711 />
    </div>
  );
}

function Frame1533210694() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
      <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#101213] text-[24px] text-left text-nowrap">
        <p className="block leading-[27px] whitespace-pre">Planos Saúde</p>
      </div>
    </div>
  );
}

function Frame1533210713() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Frame1533210694 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['Lintel:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f05223] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Comparar planos</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#ffffff] h-10 relative rounded-[100px] shrink-0"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-10 items-start justify-center overflow-clip px-4 py-0 relative">
        <Frame7 />
      </div>
      <div className="absolute border border-[#f05223] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function T8BtnCompararPlanos1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="T8 - Btn - Comparar planos 1"
    >
      <Button />
    </div>
  );
}

function IconsUsers() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons / users">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icons / users">
          <path
            clipRule="evenodd"
            d={svgPaths.p17b34b80}
            fill="var(--fill-0, #F05223)"
            fillRule="evenodd"
            id="users"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start p-0 relative shrink-0">
      <IconsUsers />
    </div>
  );
}

function T8BtnDistribuicaoDeVidas() {
  return (
    <div
      className="bg-[#ffffff] h-10 relative rounded-[100px] shrink-0 w-14"
      data-name="T8 - Btn - Distribuição de vidas"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-10 items-start justify-center overflow-clip px-4 py-0 relative w-14">
        <Frame8 />
      </div>
      <div className="absolute border border-[#f05223] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function IconsSignOut() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icons / sign-out">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icons / sign-out">
          <path
            clipRule="evenodd"
            d={svgPaths.pddc4c00}
            fill="var(--fill-0, #DC2020)"
            fillRule="evenodd"
            id="sign-out"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 size-6">
      <IconsSignOut />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#ffffff] h-10 relative rounded-[100px] shrink-0"
      data-name="Button"
    >
      <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center overflow-clip px-4 py-0 relative">
        <Frame9 />
      </div>
      <div className="absolute border border-[#dc2020] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function T8BtnSetaVoltar1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center p-0 relative shrink-0"
      data-name="T8 - Btn - Seta Voltar 1"
    >
      <Button1 />
    </div>
  );
}

function Frame1533210712() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-end p-0 relative shrink-0">
      <T8BtnCompararPlanos1 />
      <T8BtnDistribuicaoDeVidas />
      <T8BtnSetaVoltar1 />
    </div>
  );
}

function Frame1533210739() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-between left-[19.844%] p-0 right-[8.281%] translate-y-[-50%]"
      style={{ top: "calc(50% - 639.5px)" }}
    >
      <Frame1533210713 />
      <Frame1533210712 />
    </div>
  );
}

function Frame1533210731() {
  return (
    <div className="box-border content-stretch flex flex-row gap-16 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[20px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Direto Nacional - SP (CA1)
        </p>
      </div>
    </div>
  );
}

function Frame1533210766() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0">
      <Frame1533210731 />
    </div>
  );
}

function Titulo() {
  return (
    <div className="relative shrink-0 w-full" data-name="TÍTULO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210766 />
          <div
            className="font-['Lintel:Medium',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#818181] text-[14px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[18px]">Enfermaria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210727() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[18px]">553 - CBO - 12 meses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded1() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210728() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded1 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[18px]">Sem coparticipação</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Beneficios() {
  return (
    <div className="relative shrink-0 w-full" data-name="BENEFÍCIOS">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210727 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
          <Frame1533210728 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1533210732() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Titulo />
      <Beneficios />
    </div>
  );
}

function Preco() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="PREÇO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[21px] items-start justify-start px-4 py-0 relative w-full">
          <div className="flex flex-col font-['Lintel:Medium',_sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#272b30] text-[0px] text-left w-full">
            <p className="leading-[18px]">
              <span className="text-[16px]">R$</span>
              <span className="text-[12px]"> </span>
              <span className="font-['Lintel:Bold',_sans-serif] not-italic text-[26px]">
                2.742,69
              </span>
              <span className="text-[16px]">/mês</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsList() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons / list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icons / list">
          <path
            clipRule="evenodd"
            d={svgPaths.p50b01b0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="list"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-0 relative shrink-0">
      <IconsList />
      <div className="flex flex-col font-['Lintel:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Mais detalhes</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-[#f05223] h-8 relative rounded-[100px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-start justify-center px-2 py-0 relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Botao() {
  return (
    <div className="relative shrink-0 w-full" data-name="BOTÃO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Frame1533210730() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Preco />
      <Botao />
    </div>
  );
}

function Plano01Sc553Cbo12Meses() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-10 h-[275px] items-start justify-start px-0 py-6 relative rounded-xl shrink-0 w-[309px]"
      data-name="Plano 01 - SC - 553 - CBO - 12 meses"
    >
      <div className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame1533210732 />
      <Frame1533210730 />
    </div>
  );
}

function Frame1533210733() {
  return (
    <div className="box-border content-stretch flex flex-row gap-16 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[20px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Direto Nacional - SP (CA1)
        </p>
      </div>
    </div>
  );
}

function Titulo1() {
  return (
    <div className="relative shrink-0 w-full" data-name="TÍTULO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210733 />
          <div className="font-['Lintel:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#818181] text-[14px] text-left w-full">
            <p className="block leading-[18px]">Apartamento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded2() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210729() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded2 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[18px]">553 - CBO - 12 meses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded3() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210734() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded3 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[18px]">Sem coparticipação</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Beneficios1() {
  return (
    <div className="relative shrink-0 w-full" data-name="BENEFÍCIOS">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210729 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
          <Frame1533210734 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1533210735() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Titulo1 />
      <Beneficios1 />
    </div>
  );
}

function Preco1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="PREÇO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[21px] items-start justify-start px-4 py-0 relative w-full">
          <div className="flex flex-col font-['Lintel:Bold',_sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#272b30] text-[0px] text-left w-full">
            <p className="leading-[18px]">
              <span className="font-['Lintel:Medium',_sans-serif] text-[16px]">
                R$
              </span>
              <span className="font-['Lintel:Medium',_sans-serif] text-[12px]">
                {" "}
              </span>
              <span className="font-['Lintel:Bold',_sans-serif] text-[26px]">
                3.742,69
              </span>
              <span className="font-['Lintel:Medium',_sans-serif] text-[16px]">
                /mês
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsList1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons / list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icons / list">
          <path
            clipRule="evenodd"
            d={svgPaths.p50b01b0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="list"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-0 relative shrink-0">
      <IconsList1 />
      <div className="flex flex-col font-['Lintel:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Mais detalhes</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="bg-[#f05223] h-8 relative rounded-[100px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-start justify-center px-2 py-0 relative w-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Botao1() {
  return (
    <div className="relative shrink-0 w-full" data-name="BOTÃO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Frame1533210737() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Preco1 />
      <Botao1 />
    </div>
  );
}

function Plano02Sc553Cbo12Meses() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-10 items-start justify-start px-0 py-6 relative rounded-xl shrink-0 w-[309px]"
      data-name="Plano 02 - SC - 553 - CBO - 12 meses"
    >
      <div className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame1533210735 />
      <Frame1533210737 />
    </div>
  );
}

function Frame1533210740() {
  return (
    <div className="box-border content-stretch flex flex-row gap-16 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[20px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Clássico Vital - SP (CA1)
        </p>
      </div>
    </div>
  );
}

function Titulo2() {
  return (
    <div className="relative shrink-0 w-full" data-name="TÍTULO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210740 />
          <div className="font-['Lintel:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#818181] text-[14px] text-left w-full">
            <p className="block leading-[18px]">Enfermaria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded4() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210741() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded4 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[18px]">553 - CBO - 12 meses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded5() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210742() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded5 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[21px]">Sem coparticipação</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Beneficios2() {
  return (
    <div className="relative shrink-0 w-full" data-name="BENEFÍCIOS">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210741 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
          <Frame1533210742 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1533210743() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Titulo2 />
      <Beneficios2 />
    </div>
  );
}

function Preco2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="PREÇO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[21px] items-start justify-start px-4 py-0 relative w-full">
          <div className="flex flex-col font-['Lintel:Bold',_sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#272b30] text-[0px] text-left w-full">
            <p className="leading-[18px]">
              <span className="font-['Lintel:Medium',_sans-serif] text-[16px]">
                R$
              </span>
              <span className="font-['Lintel:Medium',_sans-serif] text-[12px]">
                {" "}
              </span>
              <span className="font-['Lintel:Bold',_sans-serif] text-[26px]">
                4.742,69
              </span>
              <span className="font-['Lintel:Medium',_sans-serif] text-[16px]">
                /mês
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsList2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons / list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icons / list">
          <path
            clipRule="evenodd"
            d={svgPaths.p50b01b0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="list"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-0 relative shrink-0">
      <IconsList2 />
      <div className="flex flex-col font-['Lintel:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Mais detalhes</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="bg-[#f05223] h-8 relative rounded-[100px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-start justify-center px-2 py-0 relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Botao2() {
  return (
    <div className="relative shrink-0 w-full" data-name="BOTÃO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Frame1533210744() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Preco2 />
      <Botao2 />
    </div>
  );
}

function Plano03Sc553Cbo12Meses() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-[37px] items-start justify-start px-0 py-6 relative rounded-xl shrink-0 w-[309px]"
      data-name="Plano 03 - SC - 553 - CBO - 12 meses"
    >
      <div className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame1533210743 />
      <Frame1533210744 />
    </div>
  );
}

function Frame1533210745() {
  return (
    <div className="box-border content-stretch flex flex-row gap-16 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[20px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">
          Clássico 100 - SP (CA1)
        </p>
      </div>
    </div>
  );
}

function Titulo3() {
  return (
    <div className="relative shrink-0 w-full" data-name="TÍTULO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210745 />
          <div className="font-['Lintel:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#818181] text-[14px] text-left w-full">
            <p className="block leading-[21px]">Enfermaria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded6() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210746() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded6 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[21px]">553 - CBO - 12 meses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded7() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210748() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded7 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[21px]">Sem coparticipação</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Beneficios3() {
  return (
    <div className="relative shrink-0 w-full" data-name="BENEFÍCIOS">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210746 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
          <Frame1533210748 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1533210749() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Titulo3 />
      <Beneficios3 />
    </div>
  );
}

function Preco3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="PREÇO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[21px] items-start justify-start px-4 py-0 relative w-full">
          <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[0px] text-left w-full">
            <p className="leading-[21px]">
              <span className="font-['Lintel:Medium',_sans-serif] not-italic text-[16px]">
                R$
              </span>
              <span className="text-[21px]"> </span>
              <span className="font-['Lintel:Bold',_sans-serif] not-italic text-[#272b30] text-[26px]">
                5.742,69
              </span>
              <span className="font-['Lintel:Medium',_sans-serif] not-italic text-[16px]">
                /mês
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsList3() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons / list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icons / list">
          <path
            clipRule="evenodd"
            d={svgPaths.p50b01b0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="list"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-0 relative shrink-0">
      <IconsList3 />
      <div className="flex flex-col font-['Lintel:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Mais detalhes</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div
      className="bg-[#f05223] h-8 relative rounded-[100px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-start justify-center px-2 py-0 relative w-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Botao3() {
  return (
    <div className="relative shrink-0 w-full" data-name="BOTÃO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Frame1533210750() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Preco3 />
      <Botao3 />
    </div>
  );
}

function Plano04Sc553Cbo12Meses() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-8 items-start justify-start px-0 py-6 relative rounded-xl shrink-0 w-[309px]"
      data-name="Plano 04 - SC - 553 - CBO - 12 meses"
    >
      <div className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame1533210749 />
      <Frame1533210750 />
    </div>
  );
}

function Frame1533210736() {
  return (
    <div className="box-border content-stretch flex flex-row gap-12 items-start justify-start p-0 relative shrink-0">
      <Plano01Sc553Cbo12Meses />
      <Plano02Sc553Cbo12Meses />
      <Plano03Sc553Cbo12Meses />
      <Plano04Sc553Cbo12Meses />
    </div>
  );
}

function Frame1533210751() {
  return (
    <div className="box-border content-stretch flex flex-row gap-16 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[20px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">
          Especial 100 R1 - SP (CA1)
        </p>
      </div>
    </div>
  );
}

function Titulo4() {
  return (
    <div className="relative shrink-0 w-full" data-name="TÍTULO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210751 />
          <div className="font-['Lintel:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#818181] text-[14px] text-left w-full">
            <p className="block leading-[21px]">Apartamento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded8() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210752() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded8 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[21px]">553 - CBO - 12 meses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded9() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210753() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded9 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[21px]">Sem coparticipação</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Beneficios4() {
  return (
    <div className="relative shrink-0 w-full" data-name="BENEFÍCIOS">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210752 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
          <Frame1533210753 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1533210754() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Titulo4 />
      <Beneficios4 />
    </div>
  );
}

function Preco4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="PREÇO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[21px] items-start justify-start px-4 py-0 relative w-full">
          <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[0px] text-left w-full">
            <p className="leading-[21px]">
              <span className="font-['Lintel:Medium',_sans-serif] not-italic text-[16px]">
                R$
              </span>
              <span className="text-[21px]"> </span>
              <span className="font-['Lintel:Bold',_sans-serif] not-italic text-[#272b30] text-[26px]">
                6.742,69
              </span>
              <span className="font-['Lintel:Regular',_sans-serif] not-italic text-[16px]">
                /mês
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsList4() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons / list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icons / list">
          <path
            clipRule="evenodd"
            d={svgPaths.p50b01b0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="list"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-0 relative shrink-0">
      <IconsList4 />
      <div className="flex flex-col font-['Lintel:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Mais detalhes</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div
      className="bg-[#f05223] h-8 relative rounded-[100px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-start justify-center px-2 py-0 relative w-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Botao4() {
  return (
    <div className="relative shrink-0 w-full" data-name="BOTÃO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Frame1533210755() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Preco4 />
      <Botao4 />
    </div>
  );
}

function Plano05Sc553Cbo12Meses() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-8 items-start justify-start px-0 py-6 relative rounded-xl shrink-0 w-[309px]"
      data-name="Plano 05 - SC - 553 - CBO - 12 meses"
    >
      <div className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame1533210754 />
      <Frame1533210755 />
    </div>
  );
}

function Frame1533210756() {
  return (
    <div className="box-border content-stretch flex flex-row gap-16 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[20px] text-left text-nowrap">
        <p className="block leading-[21px] whitespace-pre">
          Especial Vital R1 - SP (CA1)
        </p>
      </div>
    </div>
  );
}

function Titulo5() {
  return (
    <div className="relative shrink-0 w-full" data-name="TÍTULO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210756 />
          <div className="font-['Lintel:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#818181] text-[14px] text-left w-full">
            <p className="block leading-[21px]">Apartamento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded10() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210757() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded10 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[21px]">553 - CBO - 12 meses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded11() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210758() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded11 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[21px]">Sem coparticipação</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Beneficios5() {
  return (
    <div className="relative shrink-0 w-full" data-name="BENEFÍCIOS">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210757 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
          <Frame1533210758 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1533210759() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Titulo5 />
      <Beneficios5 />
    </div>
  );
}

function Preco5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="PREÇO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[21px] items-start justify-start px-4 py-0 relative w-full">
          <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[0px] text-left w-full">
            <p className="leading-[21px]">
              <span className="font-['Lintel:Medium',_sans-serif] not-italic text-[16px]">
                R$
              </span>
              <span className="text-[21px]"> </span>
              <span className="font-['Lintel:Bold',_sans-serif] not-italic text-[#272b30] text-[26px]">
                7.742,69
              </span>
              <span className="font-['Lintel:Regular',_sans-serif] not-italic text-[16px]">
                /mês
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsList5() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons / list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icons / list">
          <path
            clipRule="evenodd"
            d={svgPaths.p50b01b0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="list"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-0 relative shrink-0">
      <IconsList5 />
      <div className="flex flex-col font-['Lintel:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Mais detalhes</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="bg-[#f05223] h-8 relative rounded-[100px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-start justify-center px-2 py-0 relative w-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Botao5() {
  return (
    <div className="relative shrink-0 w-full" data-name="BOTÃO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Frame1533210760() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Preco5 />
      <Botao5 />
    </div>
  );
}

function Plano06Sc553Cbo12Meses() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-8 items-start justify-start px-0 py-6 relative rounded-xl shrink-0 w-[309px]"
      data-name="Plano 06 - SC - 553 - CBO - 12 meses"
    >
      <div className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame1533210759 />
      <Frame1533210760 />
    </div>
  );
}

function Frame1533210761() {
  return (
    <div className="box-border content-stretch flex flex-row gap-16 items-start justify-start p-0 relative shrink-0">
      <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[20px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Direto Nacional - SP (CA1)
        </p>
      </div>
    </div>
  );
}

function Frame1533210767() {
  return (
    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0">
      <Frame1533210761 />
    </div>
  );
}

function Titulo6() {
  return (
    <div className="relative shrink-0 w-full" data-name="TÍTULO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210767 />
          <div
            className="font-['Lintel:Medium',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#818181] text-[14px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[18px]">Enfermaria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded12() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210762() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded12 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[18px]">557 - Compulsória - 12 meses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded13() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210763() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded13 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[18px]">Sem coparticipação</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Beneficios6() {
  return (
    <div className="relative shrink-0 w-full" data-name="BENEFÍCIOS">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210762 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
          <Frame1533210763 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1533210764() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Titulo6 />
      <Beneficios6 />
    </div>
  );
}

function Preco6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="PREÇO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[21px] items-start justify-start px-4 py-0 relative w-full">
          <div className="flex flex-col font-['Lintel:Medium',_sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#272b30] text-[0px] text-left w-full">
            <p className="leading-[18px]">
              <span className="text-[16px]">R$</span>
              <span className="text-[12px]"> </span>
              <span className="font-['Lintel:Bold',_sans-serif] not-italic text-[26px]">
                2.852,69
              </span>
              <span className="text-[16px]">/mês</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsList6() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons / list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icons / list">
          <path
            clipRule="evenodd"
            d={svgPaths.p50b01b0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="list"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-0 relative shrink-0">
      <IconsList6 />
      <div className="flex flex-col font-['Lintel:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Mais detalhes</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="bg-[#f05223] h-8 relative rounded-[100px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-start justify-center px-2 py-0 relative w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Botao6() {
  return (
    <div className="relative shrink-0 w-full" data-name="BOTÃO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Frame1533210765() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Preco6 />
      <Botao6 />
    </div>
  );
}

function Plano01Sc557Compulsoria12Meses() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-10 h-[275px] items-start justify-start px-0 py-6 relative rounded-xl shrink-0 w-[309px]"
      data-name="Plano 01 - SC - 557 - Compulsória - 12 meses"
    >
      <div className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame1533210764 />
      <Frame1533210765 />
    </div>
  );
}

function Frame1533210768() {
  return (
    <div className="box-border content-stretch flex flex-row gap-16 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Lintel:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#272b30] text-[20px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Direto Nacional - SP (CA1)
        </p>
      </div>
    </div>
  );
}

function Titulo7() {
  return (
    <div className="relative shrink-0 w-full" data-name="TÍTULO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210768 />
          <div className="font-['Lintel:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#818181] text-[14px] text-left w-full">
            <p className="block leading-[18px]">Apartamento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded14() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210769() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded14 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[21px]">557 - Compulsória - 12 meses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsCheckRounded15() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="material-symbols:check-rounded"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:check-rounded">
          <path d={svgPaths.p991aa80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1533210770() {
  return (
    <div className="relative rounded-sm shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-1 py-0 relative w-full">
          <MaterialSymbolsCheckRounded15 />
          <div className="basis-0 font-['Lintel:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
            <p className="block leading-[21px]">Sem coparticipação</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Beneficios7() {
  return (
    <div className="relative shrink-0 w-full" data-name="BENEFÍCIOS">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-0 relative w-full">
          <Frame1533210769 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
          <Frame1533210770 />
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 277 1"
              >
                <g id="Line 2">
                  <line
                    stroke="var(--stroke-0, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-1, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                  <line
                    stroke="var(--stroke-2, #EAEAEA)"
                    x2="277"
                    y1="0.5"
                    y2="0.5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1533210771() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Titulo7 />
      <Beneficios7 />
    </div>
  );
}

function Preco7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="PREÇO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[21px] items-start justify-start px-4 py-0 relative w-full">
          <div className="flex flex-col font-['Lintel:Bold',_sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#272b30] text-[0px] text-left w-full">
            <p className="leading-[18px]">
              <span className="font-['Lintel:Medium',_sans-serif] text-[16px]">
                R$
              </span>
              <span className="font-['Lintel:Medium',_sans-serif] text-[12px]">
                {" "}
              </span>
              <span className="font-['Lintel:Bold',_sans-serif] text-[26px]">
                3.862,69
              </span>
              <span className="font-['Lintel:Medium',_sans-serif] text-[16px]">
                /mês
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsList7() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icons / list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icons / list">
          <path
            clipRule="evenodd"
            d={svgPaths.p50b01b0}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="list"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-start p-0 relative shrink-0">
      <IconsList7 />
      <div className="flex flex-col font-['Lintel:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Mais detalhes</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div
      className="bg-[#f05223] h-8 relative rounded-[100px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-8 items-start justify-center px-2 py-0 relative w-full">
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Botao7() {
  return (
    <div className="relative shrink-0 w-full" data-name="BOTÃO">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-0 relative w-full">
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Frame1533210772() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Preco7 />
      <Botao7 />
    </div>
  );
}

function Plano02Sc557Compulsoria12Meses() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-8 items-start justify-start px-0 py-6 relative rounded-xl shrink-0 w-[309px]"
      data-name="Plano 02 - SC - 557 - Compulsória - 12 meses"
    >
      <div className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-xl" />
      <Frame1533210771 />
      <Frame1533210772 />
    </div>
  );
}

function SegundaLinha() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-12 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Segunda Linha"
    >
      <Plano05Sc553Cbo12Meses />
      <Plano06Sc553Cbo12Meses />
      <Plano01Sc557Compulsoria12Meses />
      <Plano02Sc557Compulsoria12Meses />
    </div>
  );
}

function Frame1533210738() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 h-[574px] items-start justify-start p-0 relative shrink-0">
      <Frame1533210736 />
      <SegundaLinha />
    </div>
  );
}

function IconsAngleLeft() {
  return (
    <div
      className="absolute left-1/2 size-6 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Icons / angle-left"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icons / angle-left">
          <path
            clipRule="evenodd"
            d={svgPaths.p3318da00}
            fill="var(--fill-0, #CED4DA)"
            fillRule="evenodd"
            id="angle-left"
          />
        </g>
      </svg>
    </div>
  );
}

function BasePaginationItemIcon() {
  return (
    <div
      className="absolute bg-[#ffffff] inset-0 rounded"
      data-name="Base / pagination / item / icon"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
      <IconsAngleLeft />
    </div>
  );
}

function PaginationDesktopItemIconBackwardDisabled() {
  return (
    <div
      className="relative shrink-0 size-8"
      data-name="Pagination / Desktop / item / icon / backward / disabled"
    >
      <BasePaginationItemIcon />
    </div>
  );
}

function BasePaginationItemNumber() {
  return (
    <div
      className="absolute bg-[#ffffff] inset-0 rounded"
      data-name="Base / pagination / item / number"
    >
      <div className="absolute border border-[#f05223] border-solid inset-0 pointer-events-none rounded" />
      <div
        className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 size-6 text-[#f05223] text-[14px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[21px]">1</p>
      </div>
    </div>
  );
}

function PaginationDesktopItemNumberSelected() {
  return (
    <div
      className="relative shrink-0 size-8"
      data-name="Pagination / Desktop / item / number / selected"
    >
      <BasePaginationItemNumber />
    </div>
  );
}

function BasePaginationItemNumber1() {
  return (
    <div
      className="absolute bg-[#ffffff] inset-0 rounded"
      data-name="Base / pagination / item / number"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
      <div
        className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 size-6 text-[#4f575e] text-[14px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[21px]">2</p>
      </div>
    </div>
  );
}

function PaginationDesktopItemNumberDefault() {
  return (
    <div
      className="relative shrink-0 size-8"
      data-name="Pagination / Desktop / item / number / default"
    >
      <BasePaginationItemNumber1 />
    </div>
  );
}

function BasePaginationItemNumber2() {
  return (
    <div
      className="absolute bg-[#ffffff] inset-0 rounded"
      data-name="Base / pagination / item / number"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
      <div
        className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 size-6 text-[#4f575e] text-[14px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[21px]">3</p>
      </div>
    </div>
  );
}

function PaginationDesktopItemNumberDefault1() {
  return (
    <div
      className="relative shrink-0 size-8"
      data-name="Pagination / Desktop / item / number / default"
    >
      <BasePaginationItemNumber2 />
    </div>
  );
}

function BasePaginationItemNumber3() {
  return (
    <div
      className="absolute bg-[#ffffff] inset-0 rounded"
      data-name="Base / pagination / item / number"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
      <div
        className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 size-6 text-[#4f575e] text-[14px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[21px]">4</p>
      </div>
    </div>
  );
}

function PaginationDesktopItemNumberDefault2() {
  return (
    <div
      className="relative shrink-0 size-8"
      data-name="Pagination / Desktop / item / number / default"
    >
      <BasePaginationItemNumber3 />
    </div>
  );
}

function BasePaginationItemNumber4() {
  return (
    <div
      className="absolute bg-[#ffffff] inset-0 rounded"
      data-name="Base / pagination / item / number"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
      <div
        className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-1/2 size-6 text-[#4f575e] text-[14px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[21px]">10</p>
      </div>
    </div>
  );
}

function PaginationDesktopItemNumberDefault3() {
  return (
    <div
      className="relative shrink-0 size-8"
      data-name="Pagination / Desktop / item / number / default"
    >
      <BasePaginationItemNumber4 />
    </div>
  );
}

function IconsAngleRight1() {
  return (
    <div
      className="absolute left-1/2 size-6 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Icons / angle-right"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icons / angle-right">
          <path
            clipRule="evenodd"
            d={svgPaths.p25cd7a00}
            fill="var(--fill-0, #101213)"
            fillRule="evenodd"
            id="angle-right"
          />
        </g>
      </svg>
    </div>
  );
}

function BasePaginationItemIcon1() {
  return (
    <div
      className="absolute bg-[#ffffff] inset-0 rounded"
      data-name="Base / pagination / item / icon"
    >
      <div className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded" />
      <IconsAngleRight1 />
    </div>
  );
}

function PaginationDesktopItemIconForwardDefault() {
  return (
    <div
      className="relative shrink-0 size-8"
      data-name="Pagination / Desktop / item / icon / forward / default"
    >
      <BasePaginationItemIcon1 />
    </div>
  );
}

function PaginationGroupDesktop() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 items-start justify-start left-[533px] p-0 top-[622px]"
      data-name="Pagination / Group / Desktop"
    >
      <PaginationDesktopItemIconBackwardDisabled />
      <PaginationDesktopItemNumberSelected />
      <PaginationDesktopItemNumberDefault />
      <PaginationDesktopItemNumberDefault1 />
      <PaginationDesktopItemNumberDefault2 />
      <div
        className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#4f575e] text-[14px] text-center w-4"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="block leading-[21px]">...</p>
      </div>
      <PaginationDesktopItemNumberDefault3 />
      <PaginationDesktopItemIconForwardDefault />
    </div>
  );
}

function BlocoCadastroEmpresa() {
  return (
    <div
      className="absolute bottom-[51.446%] box-border content-stretch flex flex-col gap-3 items-start justify-start left-[19.844%] p-0 right-[8.281%] top-[9.953%]"
      data-name="Bloco Cadastro Empresa"
    >
      <Frame1533210738 />
      <PaginationGroupDesktop />
    </div>
  );
}

export default function JTela8PlanosSaude() {
  return (
    <div
      className="bg-[#ffffff] relative size-full"
      data-name="[J] Tela 8 - Planos Saúde"
    >
      <PhoneSideMenuSidebar />
      <Navbar />
      <SectionFooter1366Px />
      <Frame1533210739 />
      <BlocoCadastroEmpresa />
    </div>
  );
}
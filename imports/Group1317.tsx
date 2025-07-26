function Frame1981() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1.5 relative shrink-0">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Seleccionar imagen
        </p>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-full relative shrink-0 w-px" data-name="Divider">
      <div className="absolute border border-[#ffffff] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Divider1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-start p-0 relative shrink-0"
      data-name="Divider"
    >
      <Divider />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-4" data-name="chevron-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="chevron-down">
          <path
            d="M4 6L8 10L12 6"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-5"
      data-name="Icon Container"
    >
      <ChevronDown />
    </div>
  );
}

function UnstyledButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip px-3 py-0 relative shrink-0"
      data-name="UnstyledButton"
    >
      <Frame1981 />
      <div className="flex flex-row items-center self-stretch">
        <Divider1 />
      </div>
      <IconContainer />
    </div>
  );
}

function ButtonContained() {
  return (
    <div
      className="bg-zinc-900 box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-md shrink-0"
      data-name="Button/Contained"
    >
      <UnstyledButton />
    </div>
  );
}

function Frame1409() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-1/2 p-0 translate-x-[-50%] translate-y-[-50%]"
      style={{ top: "calc(50% - 84px)" }}
    >
      <ButtonContained />
    </div>
  );
}

function Typography() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Typography"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#2f2f32] text-[14px] text-left text-nowrap tracking-[0.15px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Video
        </p>
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div
      className="bg-[rgba(204,204,204,0.6)] relative shrink-0 w-full"
      data-name="MenuItem"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-1.5 relative w-full">
          <Typography />
        </div>
      </div>
    </div>
  );
}

function Typography1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Typography"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900 tracking-[0.15px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">{`Widget `}</p>
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-4 py-1.5 relative w-full">
          <Typography1 />
        </div>
      </div>
    </div>
  );
}

function Typography2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Typography"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900 tracking-[0.15px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          iFrame
        </p>
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-4 py-1.5 relative w-full">
          <Typography2 />
        </div>
      </div>
    </div>
  );
}

function Typography3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Typography"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900 tracking-[0.15px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Audio
        </p>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-4 py-1.5 relative w-full">
          <Typography3 />
        </div>
      </div>
    </div>
  );
}

function Typography4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Typography"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900 tracking-[0.15px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Galería de imagenes
        </p>
      </div>
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="MenuItem">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-4 py-1.5 relative w-full">
          <Typography4 />
        </div>
      </div>
    </div>
  );
}

function Ul() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-0 py-1 relative shrink-0 w-full"
      data-name="ul"
    >
      <MenuItem />
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem3 />
      <MenuItem4 />
    </div>
  );
}

function Menu() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start left-1/2 overflow-clip p-0 rounded shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] translate-x-[-50%] translate-y-[-50%] w-[193px]"
      data-name="Menu"
      style={{ top: "calc(50% + 18px)" }}
    >
      <Ul />
    </div>
  );
}

export default function Group1317() {
  return (
    <div className="relative size-full">
      <Frame1409 />
      <Menu />
    </div>
  );
}
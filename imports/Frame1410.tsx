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

export default function Frame1410() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative size-full">
      <ButtonContained />
    </div>
  );
}
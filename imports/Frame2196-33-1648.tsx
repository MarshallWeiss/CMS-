function Frame1777() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Grande</p>
      </div>
    </div>
  );
}

function Frame1781() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 w-[57px]">
      <Frame1777 />
    </div>
  );
}

function Frame1543() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[0.638px] items-start justify-start p-0 relative shrink-0 w-full">
      <div className="bg-[rgba(204,204,204,0.4)] h-0.5 rounded-[1.078px] shrink-0 w-[43px]" />
      <div className="bg-[rgba(204,204,204,0.4)] h-0.5 rounded-[1.078px] shrink-0 w-[34px]" />
    </div>
  );
}

function Frame1544() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[0.638px] items-start justify-start p-0 relative shrink-0 w-full">
      <div className="bg-[rgba(204,204,204,0.4)] h-0 rounded-[1.078px] shrink-0 w-[30px]" />
    </div>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[0.947px] items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="bg-[rgba(204,204,204,0.4)] h-[1.28px] rounded-[1.078px] shrink-0 w-3.5" />
      <Frame1543 />
      <Frame1544 />
    </div>
  );
}

function Picture() {
  return (
    <div
      className="bg-[rgba(204,204,204,0.4)] h-[25px] order-1 overflow-clip relative rounded-[2.55px] shrink-0 w-full"
      data-name="Picture"
    >
      <div
        className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[10px] text-left text-nowrap text-zinc-900"
        style={{ top: "calc(50% - 6.406px)", left: "calc(50% - 10.354px)" }}
      >
        <p className="block leading-[14px] whitespace-pre">16:9</p>
      </div>
    </div>
  );
}

function Figure() {
  return (
    <div
      className="box-border content-stretch flex flex-col-reverse gap-[0.44px] h-[25px] items-start justify-start p-0 relative shrink-0 w-[43px]"
      data-name="Figure"
    >
      <Picture />
    </div>
  );
}

function Frame1772() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px h-7 items-start justify-center p-0 relative shrink-0">
      <Header />
      <Figure />
    </div>
  );
}

function Frame1779() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-[133px]">
      <Frame1781 />
      <Frame1772 />
    </div>
  );
}

function Frame1778() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0">
      <Frame1779 />
    </div>
  );
}

function CropMenuAspectRatio() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0"
      data-name="Crop/Menu/Aspect Ratio"
    >
      <Frame1778 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="chevron-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="chevron-down">
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            id="Vector"
            stroke="var(--stroke-0, #18181B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.875"
          />
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-5"
      data-name="Icon Container"
    >
      <ChevronDown />
    </div>
  );
}

function Active() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-0 py-2 relative shrink-0"
      data-name="Active"
    >
      <CropMenuAspectRatio />
      <IconContainer4 />
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start px-3 py-0 relative rounded-md shrink-0"
      data-name="Input"
    >
      <div className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-md" />
      <Active />
    </div>
  );
}

function CropMenu() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-2 h-[66px] items-start justify-start left-0 p-0 top-0"
      data-name="Crop/Menu"
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
        <p className="block leading-none whitespace-pre">Apertura</p>
      </div>
      <Input />
    </div>
  );
}

export default function Frame2196() {
  return (
    <div className="relative size-full">
      <CropMenu />
    </div>
  );
}
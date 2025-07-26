function Frame1777() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">{`Mediana `}</p>
      </div>
    </div>
  );
}

function Frame1781() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
      <Frame1777 />
    </div>
  );
}

function Frame1543() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[0.661px] items-start justify-start p-0 relative shrink-0 w-[23.47px]">
      <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-full" />
      <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-full" />
      <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-[19.172px]" />
    </div>
  );
}

function Frame1544() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[0.661px] h-[5.95px] items-start justify-start p-0 relative shrink-0 w-[23.965px]">
      <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[22.147px]" />
      <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[23.8px]" />
      <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[19.503px]" />
    </div>
  );
}

function Header() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[1.556px] items-start justify-center max-w-[25.436px] pb-[6.222px] pt-[3.111px] px-0 relative shrink-0"
      data-name="Header"
    >
      <div className="bg-[rgba(204,204,204,0.4)] h-[1.322px] rounded-[1.273px] shrink-0 w-[16.197px]" />
      <Frame1543 />
      <Frame1544 />
    </div>
  );
}

function FElconfidencialCom2Foriginal2Fea72F1032F7E02Fea71037E008Fc4D20Fa89Fb3F319555BJpg() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[rgba(204,204,204,0.4)] h-7 ml-0 mt-0 overflow-clip relative rounded-[2.545px] w-[37.333px]"
      data-name="f.elconfidencial.com%2Foriginal%2Fea7%2F103%2F7e0%2Fea71037e008fc4d20fa89fb3f319555b.jpg"
    >
      <div
        className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[10.182px] text-left text-nowrap text-zinc-900"
        style={{ top: "calc(50% - 7px)", left: "calc(50% - 8.596px)" }}
      >
        <p className="block leading-[14px] whitespace-pre">4:3</p>
      </div>
    </div>
  );
}

function Group1316() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] order-1 place-items-start relative shrink-0 w-full">
      <FElconfidencialCom2Foriginal2Fea72F1032F7E02Fea71037E008Fc4D20Fa89Fb3F319555BJpg />
    </div>
  );
}

function Figure() {
  return (
    <div
      className="box-border content-stretch flex flex-col-reverse gap-[0.452px] h-7 items-start justify-start p-0 relative shrink-0 w-[37.333px]"
      data-name="Figure"
    >
      <Group1316 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[3.111px] items-start justify-end p-0 relative shrink-0"
      data-name="Container"
    >
      <Header />
      <Figure />
    </div>
  );
}

function Frame1779() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <Frame1781 />
      <Container2 />
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
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-[133.409px]"
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

export default function Frame2194() {
  return (
    <div className="relative size-full">
      <CropMenu />
    </div>
  );
}
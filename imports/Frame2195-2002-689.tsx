import svgPaths from "./svg-qp4q8fa6f0";

function Frame1777() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Alto libre</p>
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
      <div className="absolute flex h-[17.297px] items-center justify-center left-[18.667px] top-[5.35px] w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[17.301px]">
            <div className="absolute bottom-[-3.682px] left-[-2.89%] right-[-2.89%] top-[-3.682px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 19 8"
              >
                <path
                  d={svgPaths.p2b1d8800}
                  fill="var(--stroke-0, black)"
                  id="Line 2"
                />
              </svg>
            </div>
          </div>
        </div>
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
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-[133px]">
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
      className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0"
      data-name="Crop/Menu/Aspect Ratio"
    >
      <Frame1778 />
    </div>
  );
}

function Active() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-0 overflow-clip px-0 py-2 top-0"
      data-name="Active"
    >
      <CropMenuAspectRatio />
    </div>
  );
}

export default function Frame2195() {
  return (
    <div className="relative size-full">
      <Active />
    </div>
  );
}
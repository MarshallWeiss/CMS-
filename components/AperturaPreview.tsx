import React from 'react';
import svgPaths from "../imports/svg-qp4q8fa6f0";

interface AperturaPreviewProps {
  aspectRatio: string;
}

function AspectRatioPreview({ ratio }: { ratio: string }) {
  if (ratio === 'grande') {
    return (
      <div className="box-border content-stretch flex flex-col gap-[1.5px] h-[40px] items-start justify-center p-0 relative shrink-0">
        {/* Header - Document lines */}
        <div className="box-border content-stretch flex flex-col gap-[1.4px] items-start justify-center p-0 relative shrink-0 w-full">
          <div className="bg-[rgba(204,204,204,0.4)] h-[1.8px] rounded-[1.5px] shrink-0 w-[21px]" />
          <div className="box-border content-stretch flex flex-col gap-[0.9px] items-start justify-start p-0 relative shrink-0 w-full">
            <div className="bg-[rgba(204,204,204,0.4)] h-[0.7px] rounded-[1.5px] shrink-0 w-[62px]" />
            <div className="bg-[rgba(204,204,204,0.4)] h-[0.7px] rounded-[1.5px] shrink-0 w-[48px]" />
          </div>
          <div className="box-border content-stretch flex flex-col gap-[0.9px] items-start justify-start p-0 relative shrink-0 w-full">
            <div className="bg-[rgba(204,204,204,0.4)] h-0 rounded-[1.5px] shrink-0 w-[43px]" />
          </div>
        </div>
        
        {/* Figure - Aspect ratio box */}
        <div className="box-border content-stretch flex flex-col-reverse gap-[0.6px] h-[36px] items-start justify-start p-0 relative shrink-0 w-[62px]">
          <div className="bg-[rgba(204,204,204,0.4)] h-[36px] order-1 overflow-clip relative rounded-[3.6px] shrink-0 w-full">
            <div
              className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[14px] text-left text-nowrap text-zinc-900"
              style={{ top: "calc(50% - 9px)", left: "calc(50% - 15px)" }}
            >
              <p className="block leading-[20px] whitespace-pre">16:9</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (ratio === 'alto-libre') {
    return (
      <div className="box-border content-stretch flex flex-row gap-[4.5px] items-start justify-start p-0 relative shrink-0">
        {/* Header - Document lines (scaled up from dropdown) */}
        <div className="box-border content-stretch flex flex-col gap-[2.2px] items-start justify-center max-w-[36px] pb-[8.8px] pt-[4.4px] px-0 relative shrink-0">
          <div className="bg-[rgba(204,204,204,0.4)] h-[1.8px] rounded-[1.8px] shrink-0 w-[23px]" />
          <div className="box-border content-stretch flex flex-col gap-[0.9px] items-start justify-start p-0 relative shrink-0 w-[33px]">
            <div className="bg-[rgba(204,204,204,0.4)] h-[2.3px] rounded-[1.8px] shrink-0 w-full" />
            <div className="bg-[rgba(204,204,204,0.4)] h-[2.3px] rounded-[1.8px] shrink-0 w-full" />
            <div className="bg-[rgba(204,204,204,0.4)] h-[2.3px] rounded-[1.8px] shrink-0 w-[27px]" />
          </div>
          <div className="box-border content-stretch flex flex-col gap-[0.9px] h-[8.4px] items-start justify-start p-0 relative shrink-0 w-[34px]">
            <div className="bg-[rgba(204,204,204,0.4)] h-[1.4px] rounded-[1.8px] shrink-0 w-[31px]" />
            <div className="bg-[rgba(204,204,204,0.4)] h-[1.4px] rounded-[1.8px] shrink-0 w-[33px]" />
            <div className="bg-[rgba(204,204,204,0.4)] h-[1.4px] rounded-[1.8px] shrink-0 w-[28px]" />
          </div>
        </div>
        
        {/* Figure with variable height indicators (scaled up from dropdown) */}
        <div className="box-border content-stretch flex flex-col-reverse gap-[0.6px] h-[40px] items-start justify-start p-0 relative shrink-0 w-[53px]">
          <div className="bg-[rgba(204,204,204,0.4)] h-[40px] overflow-clip relative rounded-[3.6px] shrink-0 w-full">
            {/* Horizontal line with arrows rotated 90 degrees for vertical resizing (scaled up) */}
            <div className="absolute flex h-[24.4px] items-center justify-center left-[26.5px] top-[7.8px] w-[0px]">
              <div className="flex-none rotate-[90deg]">
                <div className="h-0 relative w-[24.4px]">
                  <div className="absolute bottom-[-5.2px] left-[-2.89%] right-[-2.89%] top-[-5.2px]">
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
        </div>
      </div>
    );
  }
  
  return (
    <div className="box-border content-stretch flex flex-row gap-[4.5px] items-center justify-start p-0 relative shrink-0">
      {/* Document Header Icon first */}
      <div className="box-border content-stretch flex flex-col gap-[1.4px] items-start justify-center p-0 relative shrink-0">
        <div className="bg-[rgba(204,204,204,0.4)] h-[1.8px] rounded-[1.5px] shrink-0 w-[14px]" />
        <div className="box-border content-stretch flex flex-col gap-[0.8px] items-start justify-start p-0 relative shrink-0 w-full">
          <div className="bg-[rgba(204,204,204,0.4)] h-[2.2px] rounded-[1.5px] shrink-0 w-[44px]" />
          <div className="bg-[rgba(204,204,204,0.4)] h-[2.2px] rounded-[1.5px] shrink-0 w-[34px]" />
          <div className="bg-[rgba(204,204,204,0.4)] h-[1.4px] rounded-[1.5px] shrink-0 w-[25px]" />
        </div>
        <div className="box-border content-stretch flex flex-col gap-[0.8px] items-start justify-start p-0 relative shrink-0 w-full">
          <div className="bg-[rgba(204,204,204,0.4)] h-[1.4px] rounded-[1.5px] shrink-0 w-[30px]" />
          <div className="bg-[rgba(204,204,204,0.4)] h-[1.4px] rounded-[1.5px] shrink-0 w-[32px]" />
          <div className="bg-[rgba(204,204,204,0.4)] h-[1.4px] rounded-[1.5px] shrink-0 w-[27px]" />
        </div>
      </div>
      
      {/* Then Aspect Ratio Box */}
      <div className={`bg-[rgba(204,204,204,0.4)] overflow-clip relative rounded-[3.5px] flex items-center justify-center ${
        ratio === 'horizontal' ? 'h-[40px] w-[53px]' : 'h-[45px] w-[34px]' // vertical is taller
      }`}>
        <div className="font-semibold leading-[0] not-italic text-[14px] text-left text-nowrap text-zinc-900">
          <p className="block leading-[20px] whitespace-pre">
            {ratio === 'horizontal' ? '4:3' : '3:4'}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AperturaPreview({ aspectRatio }: AperturaPreviewProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
          <div className="h-11 relative shrink-0 w-[93px]">
            <div className="absolute box-border content-stretch flex flex-row gap-[4.889px] items-center justify-center p-0 translate-x-[-50%] translate-y-[-50%]" style={{ top: "calc(50% + 0.000181198px)", left: "calc(50% - 0.166721px)" }}>
              <AspectRatioPreview ratio={aspectRatio} />
            </div>
          </div>
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col font-normal items-start justify-center leading-[0] p-0 relative shrink-0 text-left text-nowrap">
              <div className="relative shrink-0 text-[#7a7a7a] text-[14px] tracking-[0.17px]">
                <p className="block leading-[1.43] text-nowrap whitespace-pre text-[12px]">Apertura</p>
              </div>
              <div className="relative shrink-0 text-[0px] text-[rgba(0,0,0,0.87)] tracking-[0.15px]">
                <p className="block font-bold leading-[1.5] text-[14px] text-nowrap whitespace-pre">
                  {aspectRatio === 'horizontal' ? 'Mediana' : 
                   aspectRatio === 'vertical' ? 'Vertical' : 
                   aspectRatio === 'grande' ? 'Grande' : 
                   aspectRatio === 'alto-libre' ? 'Alto libre' : 
                   'Mediana'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
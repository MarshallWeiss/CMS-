import React from 'react';
import { CroppedImage } from './CroppedImage';

function Plus() {
  return (
    <div className="relative shrink-0 size-4" data-name="plus">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="plus">
          <path
            d="M3.33125 7.99987H12.6646M7.99792 3.3332V12.6665"
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

function IconButtonFilled() {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 rounded-[200px] top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ left: "calc(50% + 0.00260353px)" }}>
      <div className="bg-zinc-900 box-border content-stretch flex flex-row items-center justify-start p-[7px] relative rounded-[200px] shrink-0">
        <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-3.5">
          <Plus />
        </div>
      </div>
    </div>
  );
}

function ImagePlaceholder({ onClick, selectedImage, hasError }: { 
  onClick?: () => void; 
  selectedImage?: { 
    url: string; 
    caption: string; 
    aspectRatio: string; 
    title: string; 
    source: string; 
    date: string;
    cropData?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  } | null;
  hasError?: boolean;
}) {
  if (selectedImage) {
    return (
      <div className="[grid-area:1_/_1] h-11 ml-0 mt-0 overflow-clip relative rounded-sm w-[58.667px]">
        <div
          className="h-full w-full rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onClick}
        >
          <CroppedImage
            src={selectedImage.url}
            cropData={selectedImage.cropData}
            containerClassName="w-full h-full rounded-sm"
          />
        </div>
      </div>
    );
  }

  return (
    <button 
      onClick={onClick}
      className="[grid-area:1_/_1] bg-[rgba(204,204,204,0.4)] h-11 ml-0 mt-0 overflow-clip relative rounded-sm w-[58.667px] hover:bg-[rgba(204,204,204,0.6)] transition-colors cursor-pointer border-none"
    >
      <IconButtonFilled />
    </button>
  );
}

function Group1317({ onClick, selectedImage, hasError }: { 
  onClick?: () => void; 
  selectedImage?: { 
    url: string; 
    caption: string; 
    aspectRatio: string; 
    title: string; 
    source: string; 
    date: string;
    cropData?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  } | null;
  hasError?: boolean;
}) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] order-1 place-items-start relative shrink-0 w-full">
      <ImagePlaceholder onClick={onClick} selectedImage={selectedImage} hasError={hasError} />
    </div>
  );
}

function Figure({ onClick, selectedImage, hasError }: { 
  onClick?: () => void; 
  selectedImage?: { 
    url: string; 
    caption: string; 
    aspectRatio: string; 
    title: string; 
    source: string; 
    date: string;
    cropData?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  } | null;
  hasError?: boolean;
}) {
  return (
    <div className="box-border content-stretch flex flex-col-reverse gap-[0.71px] h-11 items-start justify-start p-0 relative shrink-0 w-[58.667px]">
      <Group1317 onClick={onClick} selectedImage={selectedImage} hasError={hasError} />
    </div>
  );
}

export function ImagenAsociada({ onClick, selectedImage, hasError }: { 
  onClick?: () => void; 
  selectedImage?: { 
    url: string; 
    caption: string; 
    aspectRatio: string; 
    title: string; 
    source: string; 
    date: string;
    cropData?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  } | null;
  hasError?: boolean;
}) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
          <Figure onClick={onClick} selectedImage={selectedImage} hasError={hasError} />
          <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
            <div className={`font-normal leading-[1.2] not-italic relative shrink-0 text-[14px] text-left text-nowrap whitespace-pre ${
              hasError ? 'text-[#d4183d]' : 'text-[#7a7a7a]'
            }`}>
              {hasError ? (
                <p className="block">Sin imagen asociada</p>
              ) : (
                <>
                  <p className="block mb-0">Imagen</p>
                  <p className="block">Asociada</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
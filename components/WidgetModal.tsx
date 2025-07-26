import React from 'react';
import svgPaths from "../imports/svg-9kadp1xik4";
import { AperturaDropdown } from './AperturaDropdown';

interface WidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (htmlCode: string, aspectRatio: string) => void;
  initialData?: {
    htmlCode: string;
    aspectRatio: string;
  };
}

function X() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="x">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="x">
          <path
            d={svgPaths.p26740b90}
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

export function WidgetModal({ isOpen, onClose, onInsert, initialData }: WidgetModalProps) {
  const [htmlCode, setHtmlCode] = React.useState('');
  const [aspectRatio, setAspectRatio] = React.useState('horizontal');

  // Set initial data when modal opens
  React.useEffect(() => {
    if (isOpen && initialData) {
      setHtmlCode(initialData.htmlCode);
      setAspectRatio(initialData.aspectRatio);
    } else if (isOpen && !initialData) {
      setHtmlCode('');
      setAspectRatio('horizontal');
    }
  }, [isOpen, initialData]);



  const handleInsert = () => {
    if (htmlCode.trim()) {
      onInsert(htmlCode, aspectRatio);
      setHtmlCode('');
      onClose();
    }
  };

  const handleClose = () => {
    setHtmlCode('');
    onClose();
  };

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="bg-white box-border content-stretch flex flex-col gap-4 h-[360px] items-start justify-start p-4 relative rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] w-[600px] z-10">
        {/* Header */}
        <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-row gap-3 h-[22px] items-start justify-start p-0 relative shrink-0 w-full">
              <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-zinc-900">
                <p className="block leading-[22px] whitespace-pre">Insertar Widget</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-between min-h-px min-w-px p-0 relative shrink-0 w-full">
          {/* HTML Code Input */}
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                <p className="block leading-none whitespace-pre">ID Widget</p>
              </div>
            </div>
            <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]">
              <input
                type="text"
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                placeholder="ID Widget"
                className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Aspect Ratio and Insert Button */}
          <div className="box-border content-stretch flex flex-row gap-4 items-end justify-start p-0 relative shrink-0 w-full">
            {/* Aspect Ratio Dropdown */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow h-[66px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              <AperturaDropdown
                selectedAspectRatio={aspectRatio}
                onAspectRatioChange={setAspectRatio}
                mediaType="widget"
              />
            </div>

            {/* Insert Button */}
            <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
              <button
                onClick={handleInsert}
                disabled={!htmlCode.trim()}
                className={`box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-md shrink-0 ${
                  htmlCode.trim() 
                    ? 'bg-zinc-900' 
                    : 'bg-[rgba(204,204,204,0.45)]'
                }`}
              >
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-3 py-1.5 relative shrink-0">
                  <div className={`font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${
                    htmlCode.trim() 
                      ? 'text-white' 
                      : 'text-[rgba(24,24,27,0.4)]'
                  }`}>
                    <p className="block leading-[24px] whitespace-pre">Insertar</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute box-border content-stretch flex flex-col items-start justify-start p-0 rounded-md top-2 right-2"
        >
          <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative rounded-md shrink-0">
            <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-4">
              <X />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
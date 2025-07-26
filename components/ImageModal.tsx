import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (url: string, caption: string, aspectRatio: string) => void;
  initialData?: {
    url: string;
    caption: string;
    aspectRatio: string;
  };
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

function AspectRatioPreview({ ratio }: { ratio: string }) {
  const getRatioDisplay = () => {
    switch (ratio) {
      case 'horizontal':
        return '4:3';
      case 'vertical':
        return '3:4';
      case 'grande':
        return '16:9';
      default:
        return '4:3';
    }
  };

  return (
    <div className="box-border content-stretch flex flex-row gap-[3.111px] items-start justify-end p-0 relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-[1.556px] items-start justify-center max-w-[25.436px] pb-[6.222px] pt-[3.111px] px-0 relative shrink-0">
        <div className="bg-[rgba(204,204,204,0.4)] h-[1.322px] rounded-[1.27273px] shrink-0 w-[16.197px]" />
        <div className="box-border content-stretch flex flex-col gap-[0.661px] items-start justify-start p-0 relative shrink-0 w-[23.47px]">
          <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.27273px] shrink-0 w-full" />
          <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.27273px] shrink-0 w-full" />
          <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.27273px] shrink-0 w-[19.172px]" />
        </div>
        <div className="box-border content-stretch flex flex-col gap-[0.661px] h-[5.95px] items-start justify-start p-0 relative shrink-0 w-[23.965px]">
          <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.27273px] shrink-0 w-[22.147px]" />
          <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.27273px] shrink-0 w-[23.8px]" />
          <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.27273px] shrink-0 w-[19.503px]" />
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col-reverse gap-[0.452px] h-7 items-start justify-start p-0 relative shrink-0 w-[37.333px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] order-1 place-items-start relative shrink-0 w-full">
          <div className="[grid-area:1_/_1] bg-[rgba(204,204,204,0.4)] h-7 ml-0 mt-0 overflow-clip relative rounded-[2.54545px] w-[37.333px]">
            <div
              className="absolute font-semibold leading-[0] not-italic text-[10.1818px] text-left text-nowrap text-zinc-900"
              style={{ top: "calc(50% - 7px)", left: "calc(50% - 8.59636px)" }}
            >
              <p className="block leading-[14px] whitespace-pre">{getRatioDisplay()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AspectRatioDropdownPreview({ ratio }: { ratio: string }) {
  const getPreviewStyle = () => {
    switch (ratio) {
      case 'horizontal':
        return { width: '32px', height: '24px' }; // 4:3 ratio
      case 'vertical':
        return { width: '24px', height: '32px' }; // 3:4 ratio
      case 'grande':
        return { width: '32px', height: '18px' }; // 16:9 ratio
      default:
        return { width: '32px', height: '24px' };
    }
  };

  const getRatioText = () => {
    switch (ratio) {
      case 'horizontal':
        return '4:3';
      case 'vertical':
        return '3:4';
      case 'grande':
        return '16:9';
      default:
        return '4:3';
    }
  };

  const style = getPreviewStyle();

  return (
    <div className="flex items-center gap-2">
      <div 
        className="bg-[rgba(204,204,204,0.4)] rounded flex items-center justify-center text-[10px] text-zinc-900"
        style={style}
      >
        {getRatioText()}
      </div>
    </div>
  );
}

export function ImageModal({ isOpen, onClose, onInsert, initialData }: ImageModalProps) {
  const [url, setUrl] = React.useState('');
  const [caption, setCaption] = React.useState('');
  const [aspectRatio, setAspectRatio] = React.useState('horizontal');
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const aspectRatios = [
    { id: 'horizontal', label: 'Horizontal', ratio: '4:3' },
    { id: 'vertical', label: 'Vertical', ratio: '3:4' },
    { id: 'grande', label: 'Grande', ratio: '16:9' }
  ];

  // Set initial data when modal opens
  React.useEffect(() => {
    if (isOpen && initialData) {
      setUrl(initialData.url);
      setCaption(initialData.caption);
      setAspectRatio(initialData.aspectRatio);
    } else if (isOpen && !initialData) {
      setUrl('');
      setCaption('');
      setAspectRatio('horizontal');
    }
  }, [isOpen, initialData]);

  const handleInsert = () => {
    if (url.trim()) {
      onInsert(url.trim(), caption.trim(), aspectRatio);
      setUrl('');
      setCaption('');
      setAspectRatio('horizontal');
      onClose();
    }
  };

  const handleClose = () => {
    setUrl('');
    setCaption('');
    setAspectRatio('horizontal');
    setIsDropdownOpen(false);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div 
        className="bg-white rounded-lg shadow-lg w-[600px] h-[360px] p-4 relative"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 p-2 rounded-md hover:bg-gray-100"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Content */}
        <div className="flex flex-col gap-4 h-full">
          {/* Header */}
          <div className="flex flex-row gap-6 items-start justify-start w-full">
            <div className="flex-1">
              <h2 className="text-base font-semibold text-zinc-900 leading-[22px]">Seleccionar Imagen</h2>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-6">
            {/* URL Input */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-zinc-900 text-[14px]">
                URL de Imagen
              </label>
              <div className="flex-1 bg-white border border-[#cccccc] rounded">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="URL de la imagen"
                  className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Caption Input */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-zinc-900 text-[14px]">
                Pie de imagen
              </label>
              <div className="bg-white border border-[#cccccc] rounded">
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Insertar el pie de la imagen"
                  className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Aspect Ratio and Insert Button */}
          <div className="box-border content-stretch flex flex-row gap-4 items-end justify-start p-0 relative shrink-0 w-full">
            {/* Aspect Ratio Dropdown */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow h-[66px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                <p className="block leading-none whitespace-pre">Apertura</p>
              </div>
              <div className="bg-white box-border content-stretch flex flex-col items-start justify-start px-3 py-0 relative rounded-md shrink-0 border border-[#cccccc]">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-0 py-2 relative shrink-0 w-full"
                >
                  <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0">
                    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0">
                      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
                        <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
                          <div className="font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-[rgba(0,0,0,0.87)]">
                            <p className="block leading-[20px] whitespace-pre">
                              {aspectRatios.find(ar => ar.id === aspectRatio)?.label || 'Horizontal'}
                            </p>
                          </div>
                        </div>
                        <AspectRatioPreview ratio={aspectRatio} />
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-5">
                    <ChevronDown />
                  </div>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute bg-white border border-[#cccccc] rounded-md shadow-lg mt-1 w-full z-20 top-full left-0">
                    {aspectRatios.map((ratio) => (
                      <button
                        key={ratio.id}
                        onClick={() => {
                          setAspectRatio(ratio.id);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-50 text-[14px] text-zinc-900 flex items-center justify-between"
                      >
                        <span>{ratio.label}</span>
                        <AspectRatioDropdownPreview ratio={ratio.id} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Insert Button */}
            <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
              <button
                onClick={handleInsert}
                disabled={!url.trim()}
                className={`box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-md shrink-0 ${
                  url.trim() 
                    ? 'bg-zinc-900' 
                    : 'bg-[rgba(204,204,204,0.45)]'
                }`}
              >
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-3 py-1.5 relative shrink-0">
                  <div className={`font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${
                    url.trim() 
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
      </div>
    </div>
  );
}
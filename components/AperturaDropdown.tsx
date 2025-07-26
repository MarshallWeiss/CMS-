import React from 'react';
import svgPaths from "../imports/svg-qp4q8fa6f0";

interface AperturaDropdownProps {
  selectedAspectRatio: string;
  onAspectRatioChange: (ratio: string) => void;
  mediaType?: 'image' | 'video' | 'iframe' | 'audio' | 'gallery' | 'widget';
  label?: string;
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
      case 'alto-libre':
        return 'Alto libre';
      default:
        return '4:3';
    }
  };

  return (
    <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start p-0 relative shrink-0">
      {ratio === 'grande' ? (
        // For Grande: Use exact Figma structure (Header first, then Figure)
        <div className="box-border content-stretch flex flex-col gap-px h-7 items-start justify-center p-0 relative shrink-0">
          {/* Header - Document lines */}
          <div className="box-border content-stretch flex flex-col gap-[0.947px] items-start justify-center p-0 relative shrink-0 w-full">
            <div className="bg-[rgba(204,204,204,0.4)] h-[1.28px] rounded-[1.078px] shrink-0 w-3.5" />
            <div className="box-border content-stretch flex flex-col gap-[0.638px] items-start justify-start p-0 relative shrink-0 w-full">
              <div className="bg-[rgba(204,204,204,0.4)] h-0.5 rounded-[1.078px] shrink-0 w-[43px]" />
              <div className="bg-[rgba(204,204,204,0.4)] h-0.5 rounded-[1.078px] shrink-0 w-[34px]" />
            </div>
            <div className="box-border content-stretch flex flex-col gap-[0.638px] items-start justify-start p-0 relative shrink-0 w-full">
              <div className="bg-[rgba(204,204,204,0.4)] h-0 rounded-[1.078px] shrink-0 w-[30px]" />
            </div>
          </div>
          
          {/* Figure - Aspect ratio box */}
          <div className="box-border content-stretch flex flex-col-reverse gap-[0.44px] h-[25px] items-start justify-start p-0 relative shrink-0 w-[43px]">
            <div className="bg-[rgba(204,204,204,0.4)] h-[25px] order-1 overflow-clip relative rounded-[2.55px] shrink-0 w-full">
              <div
                className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[10px] text-left text-nowrap text-zinc-900"
                style={{ top: "calc(50% - 6.406px)", left: "calc(50% - 10.354px)" }}
              >
                <p className="block leading-[14px] whitespace-pre">16:9</p>
              </div>
            </div>
          </div>
        </div>
      ) : ratio === 'alto-libre' ? (
        // For Alto libre: Header with variable height figure
        <div className="box-border content-stretch flex flex-row gap-[3.111px] items-start justify-end p-0 relative shrink-0">
          {/* Header - Document lines */}
          <div className="box-border content-stretch flex flex-col gap-[1.556px] items-start justify-center max-w-[25.436px] pb-[6.222px] pt-[3.111px] px-0 relative shrink-0">
            <div className="bg-[rgba(204,204,204,0.4)] h-[1.322px] rounded-[1.273px] shrink-0 w-[16.197px]" />
            <div className="box-border content-stretch flex flex-col gap-[0.661px] items-start justify-start p-0 relative shrink-0 w-[23.47px]">
              <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-full" />
              <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-full" />
              <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-[19.172px]" />
            </div>
            <div className="box-border content-stretch flex flex-col gap-[0.661px] h-[5.95px] items-start justify-start p-0 relative shrink-0 w-[23.965px]">
              <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[22.147px]" />
              <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[23.8px]" />
              <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[19.503px]" />
            </div>
          </div>
          
          {/* Figure with variable height indicators */}
          <div className="box-border content-stretch flex flex-col-reverse gap-[0.452px] h-7 items-start justify-start p-0 relative shrink-0 w-[37.333px]">
            <div className="bg-[rgba(204,204,204,0.4)] h-7 overflow-clip relative rounded-[2.545px] shrink-0 w-full">
              {/* Horizontal line with arrows rotated 90 degrees for vertical resizing */}
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
          </div>
        </div>
      ) : (
        <>
          {/* For Horizontal/Vertical: Document Header Icon first */}
          <div className="box-border content-stretch flex flex-col gap-[1px] items-start justify-center p-0 relative shrink-0">
            <div className="bg-[rgba(204,204,204,0.4)] h-[1.3px] rounded-[1.1px] shrink-0 w-[10px]" />
            <div className="box-border content-stretch flex flex-col gap-[0.6px] items-start justify-start p-0 relative shrink-0 w-full">
              <div className="bg-[rgba(204,204,204,0.4)] h-[1.6px] rounded-[1.1px] shrink-0 w-[31px]" />
              <div className="bg-[rgba(204,204,204,0.4)] h-[1.6px] rounded-[1.1px] shrink-0 w-[24px]" />
              <div className="bg-[rgba(204,204,204,0.4)] h-[1px] rounded-[1.1px] shrink-0 w-[18px]" />
            </div>
            <div className="box-border content-stretch flex flex-col gap-[0.6px] items-start justify-start p-0 relative shrink-0 w-full">
              <div className="bg-[rgba(204,204,204,0.4)] h-[1px] rounded-[1.1px] shrink-0 w-[21px]" />
              <div className="bg-[rgba(204,204,204,0.4)] h-[1px] rounded-[1.1px] shrink-0 w-[23px]" />
              <div className="bg-[rgba(204,204,204,0.4)] h-[1px] rounded-[1.1px] shrink-0 w-[19px]" />
            </div>
          </div>
          
          {/* Then Aspect Ratio Box */}
          <div className={`bg-[rgba(204,204,204,0.4)] overflow-clip relative rounded-[2.5px] flex items-center justify-center ${
            ratio === 'horizontal' ? 'h-7 w-[37px]' : 'h-8 w-6' // vertical
          }`}>
            <div className="font-semibold leading-[0] not-italic text-[10px] text-left text-nowrap text-zinc-900">
              <p className="block leading-[14px] whitespace-pre">
                {ratio === 'horizontal' ? '4:3' : '3:4'}
              </p>
            </div>
          </div>
        </>
      )}
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
      case 'alto-libre':
        return { width: '32px', height: '28px' }; // Variable height
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
      case 'alto-libre':
        return 'Libre';
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

export function AperturaDropdown({ selectedAspectRatio, onAspectRatioChange, mediaType = 'image', label }: AperturaDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const aspectRatios = [
    { id: 'horizontal', label: 'Mediana' },
    { id: 'vertical', label: 'Vertical' },
    { id: 'grande', label: 'Grande' },
    { id: 'alto-libre', label: 'Alto libre' }
  ];

  // Define which aspect ratios are available for each media type
  const getAvailableRatios = (type: string) => {
    switch (type) {
      case 'image':
        return ['horizontal', 'vertical', 'grande']; // All available except alto-libre
      case 'video':
        return ['horizontal', 'vertical']; // No grande or alto-libre
      case 'iframe':
        return ['horizontal', 'vertical', 'alto-libre']; // Include alto-libre for iframe
      case 'audio':
        return ['horizontal']; // Only horizontal
      case 'gallery':
        return ['grande']; // Only grande
      case 'widget':
        return ['horizontal', 'vertical', 'grande', 'alto-libre']; // All available for widget including alto-libre
      default:
        return ['horizontal', 'vertical', 'grande'];
    }
  };

  const availableRatios = getAvailableRatios(mediaType);
  
  const isRatioDisabled = (ratioId: string) => {
    return !availableRatios.includes(ratioId);
  };

  const currentAspectRatio = aspectRatios.find(ar => ar.id === selectedAspectRatio) || aspectRatios[0];

  // Auto-select first available option if current selection is disabled
  React.useEffect(() => {
    if (isRatioDisabled(selectedAspectRatio)) {
      const firstAvailable = aspectRatios.find(ratio => !isRatioDisabled(ratio.id));
      if (firstAvailable) {
        onAspectRatioChange(firstAvailable.id);
      }
    }
  }, [selectedAspectRatio, mediaType, onAspectRatioChange]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isDropdownOpen && !target.closest('[data-dropdown-container]')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="flex flex-col gap-2 h-[66px] items-start justify-start p-0 relative shrink-0 m-[0px] px-[0px] py-[-1px]">
      <div className="font-medium leading-none not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
        <p className="block whitespace-pre">{label || 'Apertura'}</p>
      </div>
      <div className="bg-white box-border content-stretch flex flex-col items-start justify-start px-3 py-0 relative rounded-md shrink-0 border border-[#cccccc] min-w-[140px]" data-dropdown-container>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip px-0 py-2 relative shrink-0 cursor-pointer"
        >
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
                <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
                  <div className="font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-[rgba(0,0,0,0.87)]">
                    <p className="block leading-[20px] whitespace-pre">
                      {currentAspectRatio.label}
                    </p>
                  </div>
                </div>
                <AspectRatioPreview ratio={selectedAspectRatio} />
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
            {aspectRatios.map((ratio) => {
              const isDisabled = isRatioDisabled(ratio.id);
              return (
                <button
                  key={ratio.id}
                  onClick={() => {
                    if (!isDisabled) {
                      onAspectRatioChange(ratio.id);
                      setIsDropdownOpen(false);
                    }
                  }}
                  disabled={isDisabled}
                  className={`w-full px-3 py-2 text-left border-b border-gray-100 last:border-b-0 ${
                    isDisabled 
                      ? 'opacity-50 cursor-not-allowed text-gray-400' 
                      : 'hover:bg-gray-50 text-[14px] text-zinc-900 cursor-pointer'
                  } ${selectedAspectRatio === ratio.id ? 'bg-gray-50' : ''}`}
                >
                  <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                    {/* Label */}
                    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 w-[57px]">
                      <div className={`font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${
                        isDisabled ? 'text-gray-400' : 'text-[rgba(0,0,0,0.87)]'
                      }`}>
                        <p className="block leading-[20px] whitespace-pre">{ratio.label}</p>
                      </div>
                    </div>
                    
                    {/* Visual Preview */}
                    <div className={`box-border content-stretch flex flex-row gap-[3px] items-center justify-start p-0 relative shrink-0 ${
                      isDisabled ? 'opacity-50' : ''
                    }`}>
                      {ratio.id === 'grande' ? (
                        // For Grande: Use exact Figma structure (Header first, then Figure)
                        <div className="box-border content-stretch flex flex-col gap-px h-7 items-start justify-center p-0 relative shrink-0">
                          {/* Header - Document lines */}
                          <div className="box-border content-stretch flex flex-col gap-[0.947px] items-start justify-center p-0 relative shrink-0 w-full">
                            <div className="bg-[rgba(204,204,204,0.4)] h-[1.28px] rounded-[1.078px] shrink-0 w-3.5" />
                            <div className="box-border content-stretch flex flex-col gap-[0.638px] items-start justify-start p-0 relative shrink-0 w-full">
                              <div className="bg-[rgba(204,204,204,0.4)] h-0.5 rounded-[1.078px] shrink-0 w-[43px]" />
                              <div className="bg-[rgba(204,204,204,0.4)] h-0.5 rounded-[1.078px] shrink-0 w-[34px]" />
                            </div>
                            <div className="box-border content-stretch flex flex-col gap-[0.638px] items-start justify-start p-0 relative shrink-0 w-full">
                              <div className="bg-[rgba(204,204,204,0.4)] h-0 rounded-[1.078px] shrink-0 w-[30px]" />
                            </div>
                          </div>
                          
                          {/* Figure - Aspect ratio box */}
                          <div className="box-border content-stretch flex flex-col-reverse gap-[0.44px] h-[25px] items-start justify-start p-0 relative shrink-0 w-[43px]">
                            <div className="bg-[rgba(204,204,204,0.4)] h-[25px] order-1 overflow-clip relative rounded-[2.55px] shrink-0 w-full">
                              <div
                                className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[10px] text-left text-nowrap text-zinc-900"
                                style={{ top: "calc(50% - 6.406px)", left: "calc(50% - 10.354px)" }}
                              >
                                <p className="block leading-[14px] whitespace-pre">16:9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : ratio.id === 'alto-libre' ? (
                        // For Alto libre: Header with variable height figure
                        <div className="box-border content-stretch flex flex-row gap-[3.111px] items-start justify-end p-0 relative shrink-0">
                          {/* Header - Document lines */}
                          <div className="box-border content-stretch flex flex-col gap-[1.556px] items-start justify-center max-w-[25.436px] pb-[6.222px] pt-[3.111px] px-0 relative shrink-0">
                            <div className="bg-[rgba(204,204,204,0.4)] h-[1.322px] rounded-[1.273px] shrink-0 w-[16.197px]" />
                            <div className="box-border content-stretch flex flex-col gap-[0.661px] items-start justify-start p-0 relative shrink-0 w-[23.47px]">
                              <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-full" />
                              <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-full" />
                              <div className="bg-[rgba(204,204,204,0.4)] h-[1.653px] rounded-[1.273px] shrink-0 w-[19.172px]" />
                            </div>
                            <div className="box-border content-stretch flex flex-col gap-[0.661px] h-[5.95px] items-start justify-start p-0 relative shrink-0 w-[23.965px]">
                              <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[22.147px]" />
                              <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[23.8px]" />
                              <div className="bg-[rgba(204,204,204,0.4)] h-[0.992px] rounded-[1.273px] shrink-0 w-[19.503px]" />
                            </div>
                          </div>
                          
                          {/* Figure with variable height indicators */}
                          <div className="box-border content-stretch flex flex-col-reverse gap-[0.452px] h-7 items-start justify-start p-0 relative shrink-0 w-[37.333px]">
                            <div className="bg-[rgba(204,204,204,0.4)] h-7 overflow-clip relative rounded-[2.545px] shrink-0 w-full">
                              {/* Horizontal line with arrows rotated 90 degrees for vertical resizing */}
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
                          </div>
                        </div>
                      ) : (
                        <>
                          {/* For Horizontal/Vertical: Document Header Icon first */}
                          <div className="box-border content-stretch flex flex-col gap-[1px] items-start justify-center p-0 relative shrink-0">
                            <div className="bg-[rgba(204,204,204,0.4)] h-[1.3px] rounded-[1.1px] shrink-0 w-[10px]" />
                            <div className="box-border content-stretch flex flex-col gap-[0.6px] items-start justify-start p-0 relative shrink-0 w-full">
                              <div className="bg-[rgba(204,204,204,0.4)] h-[1.6px] rounded-[1.1px] shrink-0 w-[31px]" />
                              <div className="bg-[rgba(204,204,204,0.4)] h-[1.6px] rounded-[1.1px] shrink-0 w-[24px]" />
                              <div className="bg-[rgba(204,204,204,0.4)] h-[1px] rounded-[1.1px] shrink-0 w-[18px]" />
                            </div>
                            <div className="box-border content-stretch flex flex-col gap-[0.6px] items-start justify-start p-0 relative shrink-0 w-full">
                              <div className="bg-[rgba(204,204,204,0.4)] h-[1px] rounded-[1.1px] shrink-0 w-[21px]" />
                              <div className="bg-[rgba(204,204,204,0.4)] h-[1px] rounded-[1.1px] shrink-0 w-[23px]" />
                              <div className="bg-[rgba(204,204,204,0.4)] h-[1px] rounded-[1.1px] shrink-0 w-[19px]" />
                            </div>
                          </div>
                          
                          {/* Then Aspect Ratio Box */}
                          <div className={`bg-[rgba(204,204,204,0.4)] overflow-clip relative rounded-[2.5px] flex items-center justify-center ${
                            ratio.id === 'horizontal' ? 'h-7 w-[37px]' : 'h-8 w-6' // vertical
                          }`}>
                            <div className="font-semibold leading-[0] not-italic text-[10px] text-left text-nowrap text-zinc-900">
                              <p className="block leading-[14px] whitespace-pre">
                                {ratio.id === 'horizontal' ? '4:3' : '3:4'}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
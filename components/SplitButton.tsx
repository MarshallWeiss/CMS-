import React from 'react';

interface SplitButtonProps {
  onMainClick?: () => void;
  onOptionSelect?: (option: string) => void;
  hasWidget?: boolean;
  selectedMediaType?: string;
  editMode?: boolean;
  customMainText?: string;
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
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-full relative shrink-0 w-px" data-name="Divider">
      <div className="absolute border border-white border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export function SplitButton({ 
  onMainClick, 
  onOptionSelect, 
  hasWidget = false, 
  selectedMediaType = 'image',
  editMode = false,
  customMainText
}: SplitButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const allMenuOptions = [
    { id: 'image', label: 'Imagen' },
    { id: 'video', label: 'Video' },
    { id: 'widget', label: 'Widget' },
    { id: 'iframe', label: 'iFrame' },
    { id: 'audio', label: 'Audio' },
    { id: 'gallery', label: 'Galería de imagenes' }
  ];

  // Filter out the currently selected multimedia type from the dropdown
  const menuOptions = React.useMemo(() => {
    // If we're in the initial state (no multimedia selected), filter out "Imagen" 
    // when the main button shows "Seleccionar imagen" to avoid redundancy
    if (!hasWidget && !selectedMediaType) {
      return allMenuOptions.filter(option => option.id !== 'image');
    }
    
    // If we have multimedia selected, filter out the currently selected type
    if (hasWidget && selectedMediaType) {
      return allMenuOptions.filter(option => option.id !== selectedMediaType);
    }
    
    // Default case - show all options
    return allMenuOptions;
  }, [hasWidget, selectedMediaType]);

  const getMediaTypeLabel = (type: string) => {
    const option = allMenuOptions.find(opt => opt.id === type);
    return option ? option.label : 'Imagen';
  };

  const getButtonText = () => {
    if (customMainText) {
      return customMainText;
    }
    
    if (editMode) {
      return `Editar ${getMediaTypeLabel(selectedMediaType).toLowerCase()}`;
    }
    
    if (hasWidget) {
      return 'Widget seleccionado';
    }
    
    return 'Seleccionar imagen';
  };

  const handleMainClick = () => {
    if (onMainClick) {
      onMainClick();
    }
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    if (onOptionSelect) {
      onOptionSelect(option);
    }
    setIsOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="bg-zinc-900 box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative rounded-md shrink-0">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip px-3 py-0 relative shrink-0 pt-[0px] pr-[4px] pb-[0px] pl-[10px]">
          {/* Main button */}
          <button
            onClick={handleMainClick}
            className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0 py-1.5 relative shrink-0"
          >
            <div className="font-medium leading-[0] not-italic relative shrink-0 text-white text-[14px] text-left text-nowrap">
              <p className="block leading-[24px] whitespace-pre">{getButtonText()}</p>
            </div>
          </button>

          {/* Dropdown button - includes divider and chevron area */}
          <button
            onClick={handleDropdownClick}
            className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 self-stretch"
          >
            {/* Divider */}
            <div className="flex flex-row items-center self-stretch">
              <div className="box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-start p-0 relative shrink-0">
                <Divider />
              </div>
            </div>
            
            {/* Chevron area - centered within remaining space */}
            <div className="flex items-center justify-center w-8 h-full">
              <ChevronDown />
            </div>
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute bg-white box-border content-stretch flex flex-col items-start justify-start left-0 mt-1 overflow-clip p-0 rounded shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] w-[193px] z-10">
          <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-1 relative shrink-0 w-full">
            {menuOptions.map((option, index) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className="bg-white hover:bg-gray-50 relative shrink-0 w-full text-left transition-colors"
              >
                <div className="relative size-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start px-4 py-1.5 relative w-full">
                    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                      <div className="font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap tracking-[0.15px] text-zinc-900">
                        <p className="block leading-[20px] whitespace-pre">{option.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
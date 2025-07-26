import React from 'react';
import { X, Download } from 'lucide-react';
import { AperturaDropdown } from './AperturaDropdown';

interface ImageCropModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (imageData: { 
    url: string; 
    caption: string; 
    aspectRatio: string;
    cropData?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  }) => void;
  onChangeImage: () => void;
  imageData?: {
    url: string;
    title: string;
    source: string;
    date: string;
  };
  originalImageData?: {
    url: string;
    title: string;
    source: string;
    date: string;
  };
  initialCaption?: string;
  initialAspectRatio?: string;
  initialCropData?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  isImagenAsociada?: boolean;
  imageDescription?: string;
}



export function ImageCropModal({ 
  isOpen, 
  onClose, 
  onSave, 
  onChangeImage,
  imageData,
  originalImageData,
  initialCaption = '',
  initialAspectRatio = 'horizontal',
  initialCropData,
  isImagenAsociada = false,
  imageDescription = ''
}: ImageCropModalProps) {
  const [caption, setCaption] = React.useState(initialCaption);
  const [selectedAspectRatio, setSelectedAspectRatio] = React.useState(initialAspectRatio);
  const [showDescription, setShowDescription] = React.useState(false);
  
  // Crop area state
  const [cropArea, setCropArea] = React.useState({ x: 24.369, y: 0.059, width: 413.185, height: 308.154 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [isResizing, setIsResizing] = React.useState(false);
  const [resizeHandle, setResizeHandle] = React.useState('');
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });
  const [cropStart, setCropStart] = React.useState({ x: 0, y: 0, width: 0, height: 0 });
  
  const imageContainerRef = React.useRef<HTMLDivElement>(null);
  const containerWidth = 461.898;
  const containerHeight = 308;

  // Track if we should load initial crop data and the last aspect ratio used
  const [hasLoadedInitialCrop, setHasLoadedInitialCrop] = React.useState(false);
  const [lastProcessedAspectRatio, setLastProcessedAspectRatio] = React.useState('');

  React.useEffect(() => {
    setCaption(initialCaption);
    // For Imagen Asociada flow, always use 'grande' (16:9) regardless of initialAspectRatio
    setSelectedAspectRatio(isImagenAsociada ? 'grande' : initialAspectRatio);
    
    // Reset the crop loading flag when modal opens/closes
    if (isOpen) {
      setHasLoadedInitialCrop(false);
      setLastProcessedAspectRatio('');
    }
  }, [initialCaption, initialAspectRatio, isOpen, isImagenAsociada]);

  // Reset crop area and states when imageData changes
  React.useEffect(() => {
    if (isOpen && (imageData || originalImageData)) {
      // Reset crop-related states when a new image is loaded
      setHasLoadedInitialCrop(false);
      setLastProcessedAspectRatio('');
      setIsDragging(false);
      setIsResizing(false);
      setResizeHandle('');
      
      // Reset crop area to default position for the current aspect ratio
      const aspectRatio = getAspectRatio();
      const maxWidth = containerWidth - 50;
      const maxHeight = containerHeight - 10;
      
      let newWidth, newHeight;
      
      if (aspectRatio >= 1) {
        // Landscape or square
        newWidth = Math.min(maxWidth, maxHeight * aspectRatio);
        newHeight = newWidth / aspectRatio;
      } else {
        // Portrait
        newHeight = Math.min(maxHeight, maxWidth / aspectRatio);
        newWidth = newHeight * aspectRatio;
      }
      
      // Center the crop area
      const x = (containerWidth - newWidth) / 2;
      const y = (containerHeight - newHeight) / 2;
      
      setCropArea({ x, y, width: newWidth, height: newHeight });
    }
  }, [imageData?.url, originalImageData?.url, isOpen]);

  // Get aspect ratio value
  const getAspectRatio = () => {
    switch (selectedAspectRatio) {
      case 'horizontal': return 4 / 3;
      case 'vertical': return 3 / 4;
      case 'grande': return 16 / 9;
      case 'alto-libre': return 16 / 9; // Use 16:9 as default for alto-libre (free height would be handled differently)
      default: return 4 / 3;
    }
  };

  // Update crop area when aspect ratio changes or load initial crop data
  React.useEffect(() => {
    // If we have initial crop data and haven't loaded it yet, load it first
    if (initialCropData && !hasLoadedInitialCrop && isOpen && lastProcessedAspectRatio === '') {
      const x = initialCropData.x * containerWidth;
      const y = initialCropData.y * containerHeight;
      const width = initialCropData.width * containerWidth;
      const height = initialCropData.height * containerHeight;
      
      setCropArea({ x, y, width, height });
      setHasLoadedInitialCrop(true);
      setLastProcessedAspectRatio(selectedAspectRatio);
      return;
    }
    
    // Always update crop area when aspect ratio changes, even if we loaded initial data
    // Only skip if this is the same aspect ratio we just processed
    if (lastProcessedAspectRatio === selectedAspectRatio) {
      return;
    }
    
    const aspectRatio = getAspectRatio();
    const maxWidth = containerWidth - 50; // Leave some margin
    const maxHeight = containerHeight - 10;
    
    let newWidth, newHeight;
    
    if (aspectRatio >= 1) {
      // Landscape or square
      newWidth = Math.min(maxWidth, maxHeight * aspectRatio);
      newHeight = newWidth / aspectRatio;
    } else {
      // Portrait
      newHeight = Math.min(maxHeight, maxWidth / aspectRatio);
      newWidth = newHeight * aspectRatio;
    }
    
    // Center the crop area
    const x = (containerWidth - newWidth) / 2;
    const y = (containerHeight - newHeight) / 2;
    
    setCropArea({ x, y, width: newWidth, height: newHeight });
    setLastProcessedAspectRatio(selectedAspectRatio);
  }, [selectedAspectRatio, initialCropData, hasLoadedInitialCrop, isOpen, lastProcessedAspectRatio]);

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent, action: 'drag' | 'resize', handle?: string) => {
    e.preventDefault();
    const rect = imageContainerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setDragStart({ x: mouseX, y: mouseY });
    setCropStart({ ...cropArea });

    if (action === 'drag') {
      setIsDragging(true);
    } else if (action === 'resize' && handle) {
      setIsResizing(true);
      setResizeHandle(handle);
    }
  };

  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    if (!isDragging && !isResizing) return;
    
    const rect = imageContainerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const deltaX = mouseX - dragStart.x;
    const deltaY = mouseY - dragStart.y;

    if (isDragging) {
      // Move the crop area
      const newX = Math.max(0, Math.min(containerWidth - cropStart.width, cropStart.x + deltaX));
      const newY = Math.max(0, Math.min(containerHeight - cropStart.height, cropStart.y + deltaY));
      
      setCropArea(prev => ({ ...prev, x: newX, y: newY }));
    } else if (isResizing) {
      // Resize the crop area while maintaining aspect ratio
      const aspectRatio = getAspectRatio();
      let newWidth = cropStart.width;
      let newHeight = cropStart.height;
      let newX = cropStart.x;
      let newY = cropStart.y;

      switch (resizeHandle) {
        case 'top-left':
          newWidth = cropStart.width - deltaX;
          newHeight = newWidth / aspectRatio;
          newX = cropStart.x + deltaX;
          newY = cropStart.y + (cropStart.height - newHeight);
          break;
        case 'top-right':
          newWidth = cropStart.width + deltaX;
          newHeight = newWidth / aspectRatio;
          newY = cropStart.y + (cropStart.height - newHeight);
          break;
        case 'bottom-left':
          newWidth = cropStart.width - deltaX;
          newHeight = newWidth / aspectRatio;
          newX = cropStart.x + deltaX;
          break;
        case 'bottom-right':
          newWidth = cropStart.width + deltaX;
          newHeight = newWidth / aspectRatio;
          break;
      }

      // Ensure minimum size
      const minSize = 50;
      if (newWidth < minSize) {
        newWidth = minSize;
        newHeight = newWidth / aspectRatio;
      }

      // Ensure crop area stays within bounds
      if (newX < 0) {
        newWidth += newX;
        newHeight = newWidth / aspectRatio;
        newX = 0;
      }
      if (newY < 0) {
        newHeight += newY;
        newWidth = newHeight * aspectRatio;
        newY = 0;
      }
      if (newX + newWidth > containerWidth) {
        newWidth = containerWidth - newX;
        newHeight = newWidth / aspectRatio;
      }
      if (newY + newHeight > containerHeight) {
        newHeight = containerHeight - newY;
        newWidth = newHeight * aspectRatio;
      }

      setCropArea({ x: newX, y: newY, width: newWidth, height: newHeight });
    }
  }, [isDragging, isResizing, dragStart, cropStart, resizeHandle, getAspectRatio]);

  const handleMouseUp = React.useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeHandle('');
  }, []);

  // Add global mouse event listeners
  React.useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, handleMouseMove, handleMouseUp]);

  const handleSave = () => {
    // Use originalImageData if editing existing image, otherwise use imageData for new selection
    const currentImageData = originalImageData || imageData;
    if (currentImageData) {
      // Calculate crop percentages for the backend
      const cropData = {
        x: cropArea.x / containerWidth,
        y: cropArea.y / containerHeight,
        width: cropArea.width / containerWidth,
        height: cropArea.height / containerHeight
      };
      
      onSave({
        url: currentImageData.url,
        caption,
        aspectRatio: selectedAspectRatio,
        cropData
      });
    }
    onClose();
  };

  const handleChangeImage = () => {
    onChangeImage();
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen || (!imageData && !originalImageData)) return null;
  
  // Use originalImageData if editing existing image, otherwise use imageData for new selection
  const currentImageData = originalImageData || imageData;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isDragging ? 'crop-dragging' : ''} ${isResizing ? 'crop-resizing' : ''}`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div 
        className="bg-white rounded-lg shadow-lg w-[796px] p-4 relative z-10"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 p-2 rounded-md hover:bg-gray-100 z-10"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Content */}
        <div className="flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
          {/* Header */}
          <div className="flex flex-row gap-3 h-[22px] items-start justify-start p-0 relative shrink-0 w-full">
            <div className="font-semibold leading-[22px] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-zinc-900">
              <p className="block whitespace-pre">Editar foco</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-4 items-center justify-center p-0 relative shrink-0 w-full">
            {/* Crop Area and Controls */}
            <div className="flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
              {/* Crop Selection */}
              <div className="flex flex-col gap-[19.096px] h-[308px] items-start justify-start p-0 relative shrink-0 w-[461.769px]">
                <div className="flex flex-row gap-[17.321px] h-[308px] items-start justify-start p-0 relative shrink-0 w-[461.898px]">
                  <div 
                    ref={imageContainerRef}
                    className="bg-center bg-cover bg-no-repeat h-[308px] shrink-0 w-[461.898px] relative overflow-hidden"
                    style={{
                      backgroundImage: `url('${currentImageData!.url}')`,
                    }}
                  >
                    {/* Top overlay */}
                    <div 
                      className="absolute bg-[rgba(18,18,18,0.5)] left-0 top-0 w-full"
                      style={{ height: `${cropArea.y}px` }}
                    />
                    
                    {/* Bottom overlay */}
                    <div 
                      className="absolute bg-[rgba(18,18,18,0.5)] left-0 w-full"
                      style={{ 
                        top: `${cropArea.y + cropArea.height}px`,
                        height: `${containerHeight - (cropArea.y + cropArea.height)}px`
                      }}
                    />
                    
                    {/* Left overlay */}
                    <div 
                      className="absolute bg-[rgba(18,18,18,0.5)] left-0"
                      style={{
                        top: `${cropArea.y}px`,
                        width: `${cropArea.x}px`,
                        height: `${cropArea.height}px`
                      }}
                    />
                    
                    {/* Right overlay */}
                    <div 
                      className="absolute bg-[rgba(18,18,18,0.5)]"
                      style={{
                        left: `${cropArea.x + cropArea.width}px`,
                        top: `${cropArea.y}px`,
                        width: `${containerWidth - (cropArea.x + cropArea.width)}px`,
                        height: `${cropArea.height}px`
                      }}
                    />
                    
                    {/* Crop selection area with handles */}
                    <div 
                      className={`absolute border-[0.538036px] border-dashed cursor-move transition-colors ${
                        isDragging || isResizing ? 'border-blue-400' : 'border-[#dddddd]'
                      }`}
                      style={{
                        left: `${cropArea.x}px`,
                        top: `${cropArea.y}px`,
                        width: `${cropArea.width}px`,
                        height: `${cropArea.height}px`
                      }}
                      onMouseDown={(e) => handleMouseDown(e, 'drag')}
                    >
                      {/* Corner handles */}
                      <div 
                        className={`absolute h-[5.898px] w-[5.935px] border cursor-nw-resize transition-colors hover:bg-blue-200 ${
                          isResizing && resizeHandle === 'top-left' 
                            ? 'bg-blue-300 border-blue-400' 
                            : 'bg-[#d9d9d9] border-[#dddddd]'
                        }`}
                        style={{ left: '-3px', top: '-3px' }}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          handleMouseDown(e, 'resize', 'top-left');
                        }}
                      />
                      <div 
                        className={`absolute h-[5.898px] w-[5.935px] border cursor-ne-resize transition-colors hover:bg-blue-200 ${
                          isResizing && resizeHandle === 'top-right' 
                            ? 'bg-blue-300 border-blue-400' 
                            : 'bg-[#d9d9d9] border-[#dddddd]'
                        }`}
                        style={{ right: '-3px', top: '-3px' }}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          handleMouseDown(e, 'resize', 'top-right');
                        }}
                      />
                      <div 
                        className={`absolute h-[5.898px] w-[5.935px] border cursor-sw-resize transition-colors hover:bg-blue-200 ${
                          isResizing && resizeHandle === 'bottom-left' 
                            ? 'bg-blue-300 border-blue-400' 
                            : 'bg-[#d9d9d9] border-[#dddddd]'
                        }`}
                        style={{ left: '-3px', bottom: '-3px' }}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          handleMouseDown(e, 'resize', 'bottom-left');
                        }}
                      />
                      <div 
                        className={`absolute h-[5.898px] w-[5.935px] border cursor-se-resize transition-colors hover:bg-blue-200 ${
                          isResizing && resizeHandle === 'bottom-right' 
                            ? 'bg-blue-300 border-blue-400' 
                            : 'bg-[#d9d9d9] border-[#dddddd]'
                        }`}
                        style={{ right: '-3px', bottom: '-3px' }}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          handleMouseDown(e, 'resize', 'bottom-right');
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className={`flex flex-col items-start p-0 relative shrink-0 h-[308px] grow min-w-0 ${isImagenAsociada ? 'justify-end' : 'justify-between'}`}>
                {/* Aspect Ratio Control - Only show for main image flow */}
                {!isImagenAsociada && (
                  <AperturaDropdown
                    selectedAspectRatio={selectedAspectRatio}
                    onAspectRatioChange={setSelectedAspectRatio}
                    mediaType="image"
                    label="Aspect Ratio"
                  />
                )}

                {/* Image Source Info */}
                <div className="flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
                    <div className="h-7 overflow-clip relative rounded-tr-[2px] shrink-0 w-[42px] bg-[#e5e5e5] flex items-center justify-center">
                      <span className="text-[10px] font-medium text-gray-600 uppercase">
                        {currentImageData!.source.slice(0, 3)}
                      </span>
                    </div>
                    <div className="flex flex-col items-start justify-center p-0 relative shrink-0">
                      <div className="font-normal leading-[1.57] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-left tracking-[0.1px]">
                        <p className="block mb-0">
                          {currentImageData!.source === 'Propio' ? 'Propio' : `Agencia ${currentImageData!.source}`}
                        </p>
                        <p className="block">{currentImageData!.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption Field */}
            <div className="flex flex-col gap-1 items-start justify-end p-0 relative shrink-0 w-full">
              <div className="flex flex-col gap-2 items-start justify-start p-0 w-[764px]">
                <div className="flex flex-row items-center justify-between w-full">
                  <label className="font-medium leading-none not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                    <p className="block whitespace-pre">Pie de foto</p>
                  </label>
                  <button 
                    onClick={() => setShowDescription(!showDescription)}
                    className="text-[12px] text-zinc-900 underline hover:no-underline"
                  >
                    {showDescription ? 'Ocultar descripción' : 'Mostrar descripción'}
                  </button>
                </div>
                <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]">
                  <div className="relative size-full">
                    <input
                      type="text"
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      placeholder="Una flor primaveral rosado con un tallo verde"
                      className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Description Field - shown conditionally */}
            {showDescription && (
              <div className="flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                <label className="font-medium leading-none not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block whitespace-pre">Descripción</p>
                </label>
                <div className="bg-gray-50 relative rounded shrink-0 w-full border border-[#cccccc]">
                  <textarea
                    value={imageDescription || 'No hay descripción disponible para esta imagen.'}
                    readOnly
                    rows={6}
                    className="w-full px-3 py-3 text-[14px] text-zinc-700 border-none outline-none bg-transparent resize-none cursor-default select-text"
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-row items-start justify-between p-0 relative shrink-0 w-full">
              <div className="flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
                <button
                  onClick={handleChangeImage}
                  className="bg-white relative rounded-md shrink-0 border border-[#cccccc] hover:bg-gray-50"
                >
                  <div className="flex flex-col items-center justify-center overflow-clip px-3 py-1.5">
                    <div className="font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                      <p className="block whitespace-pre">Cambiar imagen</p>
                    </div>
                  </div>
                </button>
                
                <button className="border border-[#cccccc] rounded-md p-2 hover:bg-gray-50">
                  <Download className="w-4 h-4" />
                </button>
              </div>
              
              <button
                onClick={handleSave}
                className="bg-zinc-900 relative rounded-md shrink-0"
              >
                <div className="flex flex-col items-center justify-center overflow-clip px-3 py-1.5">
                  <div className="font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-white">
                    <p className="block whitespace-pre">Guardar</p>
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
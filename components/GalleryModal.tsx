import React from 'react';
import { X } from 'lucide-react';
import { AperturaDropdown } from './AperturaDropdown';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (images: string[], caption: string, aspectRatio: string) => void;
  initialData?: {
    images: string[];
    caption: string;
    aspectRatio: string;
  };
}



export function GalleryModal({ isOpen, onClose, onInsert, initialData }: GalleryModalProps) {
  const [images, setImages] = React.useState('');
  const [caption, setCaption] = React.useState('');
  const [aspectRatio, setAspectRatio] = React.useState('horizontal');

  // Set initial data when modal opens
  React.useEffect(() => {
    if (isOpen && initialData) {
      setImages(initialData.images.join('\n'));
      setCaption(initialData.caption);
      setAspectRatio(initialData.aspectRatio);
    } else if (isOpen && !initialData) {
      setImages('');
      setCaption('');
      setAspectRatio('horizontal');
    }
  }, [isOpen, initialData]);



  const handleInsert = () => {
    if (images.trim()) {
      const imageList = images.split('\n').filter(img => img.trim()).map(img => img.trim());
      onInsert(imageList, caption.trim(), aspectRatio);
      setImages('');
      setCaption('');
      setAspectRatio('horizontal');
      onClose();
    }
  };

  const handleClose = () => {
    setImages('');
    setCaption('');
    setAspectRatio('horizontal');
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
              <h2 className="text-base font-semibold text-zinc-900 leading-[22px]">Insertar Galería de Imágenes</h2>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Images Input */}
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-medium text-zinc-900 text-[14px]">
                URLs de Imágenes
              </label>
              <div className="flex-1 bg-white border border-[#cccccc] rounded flex flex-col">
                <textarea
                  value={images}
                  onChange={(e) => setImages(e.target.value)}
                  placeholder="Insertar URLs de imágenes (una por línea)"
                  className="w-full h-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent resize-none overflow-auto flex-1 min-h-[100px]"
                />
              </div>
            </div>

            {/* Caption Input */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-zinc-900 text-[14px]">
                Pie de galería
              </label>
              <div className="bg-white border border-[#cccccc] rounded">
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Insertar el pie de la galería"
                  className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Aspect Ratio and Insert Button */}
          <div className="box-border content-stretch flex flex-row gap-4 items-end justify-start p-0 relative shrink-0 w-full">
            {/* Aspect Ratio Dropdown */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow h-[66px] items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              <AperturaDropdown
                selectedAspectRatio={aspectRatio}
                onAspectRatioChange={setAspectRatio}
                mediaType="gallery"
                label="Aspect Ratio"
              />
            </div>

            {/* Insert Button */}
            <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0">
              <button
                onClick={handleInsert}
                disabled={!images.trim()}
                className={`box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-md shrink-0 ${
                  images.trim() 
                    ? 'bg-zinc-900' 
                    : 'bg-[rgba(204,204,204,0.45)]'
                }`}
              >
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-3 py-1.5 relative shrink-0">
                  <div className={`font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${
                    images.trim() 
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
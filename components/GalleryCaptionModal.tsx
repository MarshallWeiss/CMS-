import React from 'react';
import { X, Trash2 } from 'lucide-react';

interface GalleryCaptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (imagesWithCaptions: { url: string; title: string; source: string; date: string; caption: string }[]) => void;
  uploadedImages: { url: string; title: string; source: string; date: string }[];
}

export function GalleryCaptionModal({ 
  isOpen, 
  onClose, 
  onSave,
  uploadedImages
}: GalleryCaptionModalProps) {
  const [imageCaptions, setImageCaptions] = React.useState<Record<string, string>>({});
  const [images, setImages] = React.useState(uploadedImages);

  // Reset captions when modal opens with new images
  React.useEffect(() => {
    if (isOpen && uploadedImages.length > 0) {
      setImages(uploadedImages);
      // Initialize captions with image titles
      const initialCaptions: Record<string, string> = {};
      uploadedImages.forEach(image => {
        initialCaptions[image.url] = image.title;
      });
      setImageCaptions(initialCaptions);
    }
  }, [isOpen, uploadedImages]);

  const handleCaptionChange = (imageUrl: string, caption: string) => {
    setImageCaptions(prev => ({
      ...prev,
      [imageUrl]: caption
    }));
  };

  const handleDeleteImage = (imageUrl: string) => {
    setImages(prev => prev.filter(img => img.url !== imageUrl));
    setImageCaptions(prev => {
      const { [imageUrl]: deleted, ...rest } = prev;
      return rest;
    });
    // Clean up blob URL
    if (imageUrl.startsWith('blob:')) {
      URL.revokeObjectURL(imageUrl);
    }
  };

  const canSave = images.every(image => imageCaptions[image.url]?.trim());

  const handleSave = () => {
    if (!canSave) return;
    
    const imagesWithCaptions = images.map(image => ({
      ...image,
      caption: imageCaptions[image.url] || image.title
    }));
    
    onSave(imagesWithCaptions);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div 
        className="bg-white rounded-lg shadow-lg w-[800px] max-h-[80vh] p-6 relative z-10 overflow-hidden flex flex-col"
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-md hover:bg-gray-100 z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-[16px] font-semibold text-zinc-900">
            Añadir pies de foto
          </h2>
          <p className="text-[14px] text-zinc-600">
            Añade un pie de foto para cada imagen antes de continuar
          </p>
        </div>

        {/* Images List */}
        <div className="flex-1 overflow-y-auto mb-6">
          <div className="flex flex-col gap-4">
            {images.map((image, index) => (
              <div key={image.url} className="flex flex-row gap-4 items-start p-4 border border-gray-200 rounded-lg">
                {/* Image Thumbnail */}
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100 relative group">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Delete button */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                      <button
                        onClick={() => handleDeleteImage(image.url)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 rounded-md bg-red-500 hover:bg-red-600"
                      >
                        <Trash2 className="w-3 h-3 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image Info and Caption */}
                <div className="flex-1 flex flex-col gap-3">
                  {/* Image Info */}
                  <div className="flex flex-col gap-1">
                    <div className="text-[14px] font-medium text-zinc-900">
                      Imagen {index + 1}
                    </div>
                    <div className="flex flex-row gap-2 items-center text-[12px] text-zinc-500">
                      <span className="bg-gray-100 px-2 py-1 rounded text-[10px] font-medium uppercase">
                        {image.source === 'Propio' ? 'PROP' : image.source.slice(0, 3)}
                      </span>
                      <span>{image.source === 'Propio' ? 'Propio' : `Agencia ${image.source}`}</span>
                      <span>•</span>
                      <span>{image.date}</span>
                    </div>
                  </div>

                  {/* Caption Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] font-medium text-zinc-900">
                      Pie de foto
                      {!imageCaptions[image.url]?.trim() && (
                        <span className="text-red-500 ml-1">*</span>
                      )}
                    </label>
                    <div className="bg-white border border-gray-300 rounded-md">
                      <input
                        type="text"
                        value={imageCaptions[image.url] || ''}
                        onChange={(e) => handleCaptionChange(image.url, e.target.value)}
                        placeholder="Escribe un pie de foto"
                        className="w-full px-3 py-2 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                        autoFocus={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-[12px] text-zinc-500">
            {images.filter(img => imageCaptions[img.url]?.trim()).length} de {images.length} imágenes con pie de foto
          </div>
          
          <div className="flex flex-row gap-3">
            <button
              onClick={onClose}
              className="bg-white border border-gray-300 rounded-md px-4 py-2 text-[14px] font-medium text-zinc-900 hover:bg-gray-50"
            >
              Cancelar
            </button>
            
            <button
              onClick={handleSave}
              disabled={!canSave}
              className={`rounded-md px-4 py-2 text-[14px] font-medium ${
                canSave 
                  ? 'bg-zinc-900 text-white hover:bg-zinc-800' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
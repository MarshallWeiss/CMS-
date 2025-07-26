import React from 'react';
import { ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
import { SplitButton } from './SplitButton';

interface GalleryPreviewProps {
  images: string[];
  onEditGallery: () => void;
  onMediaOptionSelect: (option: string) => void;
  onDeleteGallery?: () => void;
}

export function GalleryPreview({ images, onEditGallery, onMediaOptionSelect, onDeleteGallery }: GalleryPreviewProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[566/425] bg-white box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded shrink-0 w-full">
        <div className="aspect-[557/418] bg-[rgba(204,204,204,0.4)] rounded-md shrink-0 w-full relative">
          <div className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2">
            <div className="font-medium text-zinc-600 text-[14px]">No hay imágenes en la galería</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-[566/425] bg-white box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded shrink-0 w-full">
      <div className="aspect-[557/418] rounded-md shrink-0 w-full relative group">
        {/* Current Image */}
        <img
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1} de ${images.length}`}
          className="w-full h-full object-cover rounded-md"
        />

        {/* Navigation Arrows - Always visible */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200 z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200 z-10"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        )}

        {/* Hover overlay with edit buttons */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-md flex flex-col items-center justify-center gap-2"
          style={{
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)'
          }}
        >
          <div className="w-[153px]">
            <SplitButton 
              onMainClick={onEditGallery}
              onOptionSelect={onMediaOptionSelect}
              hasWidget={true}
              selectedMediaType="gallery"
              editMode={true}
              customMainText="Sustituir galería"
            />
          </div>
          
          <button
            onClick={onEditGallery}
            className="bg-gray-500 box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-md shrink-0 w-[153px]"
          >
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-3 py-1.5 relative shrink-0">
              <div className="font-medium leading-[0] not-italic relative shrink-0 text-white text-[14px] text-left text-nowrap">
                <p className="block leading-[24px] whitespace-pre">Editar galería</p>
              </div>
            </div>
          </button>
          
          {/* Delete button */}
          {onDeleteGallery && (
            <button
              onClick={onDeleteGallery}
              className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-red-500 hover:text-red-600 p-2 rounded-md transition-colors duration-200 shadow-sm border border-gray-200"
              title="Eliminar galería"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
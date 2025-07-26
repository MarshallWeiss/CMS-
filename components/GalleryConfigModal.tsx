import React from 'react';
import { X, Plus, Edit2, Trash2, GripVertical } from 'lucide-react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AperturaDropdown } from './AperturaDropdown';

interface GalleryConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (images: string[], caption: string, aspectRatio: string) => void;
  onAddMore: () => void;
  selectedImages: { url: string; title: string; source: string; date: string }[];
  onEditImage?: (imageData: { url: string; title: string; source: string; date: string }) => void;
  onDeleteImage?: (imageIndex: number) => void;
  onReorderImages?: (reorderedImages: { url: string; title: string; source: string; date: string }[]) => void;
  initialCaption?: string;
}

interface DraggableImageProps {
  image: { url: string; title: string; source: string; date: string };
  index: number;
  moveImage: (dragIndex: number, hoverIndex: number) => void;
  onEditImage: (imageData: { url: string; title: string; source: string; date: string }) => void;
  onDeleteImage: (index: number) => void;
}

const ItemType = 'GALLERY_IMAGE';

function DraggableImage({ image, index, moveImage, onEditImage, onDeleteImage }: DraggableImageProps) {
  const [hoveredImageIndex, setHoveredImageIndex] = React.useState<boolean>(false);
  
  const [{ isDragging }, dragRef] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: ItemType,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div 
      ref={(node) => dragRef(dropRef(node))}
      className={`h-[120px] overflow-clip relative w-[180px] group cursor-grab active:cursor-grabbing transition-opacity duration-200 ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
      onMouseEnter={() => setHoveredImageIndex(true)}
      onMouseLeave={() => setHoveredImageIndex(false)}
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[120px] left-0 top-0 w-[180px]"
        style={{ backgroundImage: `url('${image.url}')` }}
      />
      
      {/* Drag handle - always visible */}
      <div className="absolute top-2 left-2 bg-white bg-opacity-80 rounded-sm p-1 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
        <GripVertical className="w-3 h-3 text-zinc-600" />
      </div>
      
      {/* Dark overlay on hover */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-200 ${
          hoveredImageIndex ? 'opacity-60' : 'opacity-0'
        }`}
      />
      
      {/* Edit and Delete icons on hover */}
      {hoveredImageIndex && (
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEditImage(image);
            }}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-md p-2 transition-all duration-200 hover:scale-110"
            title="Editar imagen"
          >
            <Edit2 className="w-4 h-4 text-zinc-900" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteImage(index);
            }}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-md p-2 transition-all duration-200 hover:scale-110"
            title="Eliminar imagen"
          >
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      )}
      
      {/* Source indicator */}
      <div className="absolute bg-[#ffffff] bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px] z-10">
        <div className="absolute flex items-center justify-center inset-0 text-[10px] font-medium text-black">
          {image.source.slice(0, 3).toUpperCase()}
        </div>
      </div>
    </div>
  );
}

function GalleryConfigModalContent({
  isOpen,
  onClose,
  onInsert,
  onAddMore,
  selectedImages,
  onEditImage,
  onDeleteImage,
  onReorderImages,
  initialCaption
}: GalleryConfigModalProps) {
  const [description, setDescription] = React.useState(initialCaption || '');
  const [aspectRatio, setAspectRatio] = React.useState('grande');
  const [images, setImages] = React.useState(selectedImages);

  // Update local images state when selectedImages prop changes
  React.useEffect(() => {
    setImages(selectedImages);
  }, [selectedImages]);

  // Update description when initialCaption changes
  React.useEffect(() => {
    setDescription(initialCaption || '');
  }, [initialCaption]);

  const moveImage = React.useCallback((dragIndex: number, hoverIndex: number) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const draggedImage = newImages[dragIndex];
      
      // Remove the dragged image from its current position
      newImages.splice(dragIndex, 1);
      
      // Insert it at the new position
      newImages.splice(hoverIndex, 0, draggedImage);
      
      // Notify parent of the reordering if callback is provided
      if (onReorderImages) {
        onReorderImages(newImages);
      }
      
      return newImages;
    });
  }, [onReorderImages]);

  const handleInsert = () => {
    const imageUrls = images.map(img => img.url);
    onInsert(imageUrls, description, aspectRatio);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleEditImage = (imageData: { url: string; title: string; source: string; date: string }) => {
    if (onEditImage) {
      onEditImage(imageData);
    }
  };

  const handleDeleteImage = (imageIndex: number) => {
    if (onDeleteImage) {
      // Find the original index in selectedImages
      const imageToDelete = images[imageIndex];
      const originalIndex = selectedImages.findIndex(img => 
        img.url === imageToDelete.url && 
        img.title === imageToDelete.title &&
        img.source === imageToDelete.source &&
        img.date === imageToDelete.date
      );
      
      if (originalIndex !== -1) {
        onDeleteImage(originalIndex);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div 
        className="bg-white rounded-lg shadow-lg w-[796px] h-[512px] p-4 relative z-10"
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
        <div className="flex flex-col justify-between h-full">
          {/* Header */}
          <div className="flex flex-row gap-3 h-[22px] items-start justify-start w-full">
            <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-zinc-900">
              <p className="block leading-[22px] whitespace-pre">Insertar Galería</p>
            </div>
          </div>

          {/* Selected Images */}
          <div className="flex-1 flex flex-col gap-2 items-center justify-start overflow-clip p-0 relative w-full">
            <div className="flex flex-col gap-4 items-start justify-start p-0 relative w-full">
              <div className="flex flex-row flex-wrap gap-4 items-start justify-start p-0 relative">
                {/* Display all selected images */}
                {images.map((image, index) => (
                  <DraggableImage
                    key={`${image.url}-${index}`}
                    image={image}
                    index={index}
                    moveImage={moveImage}
                    onEditImage={handleEditImage}
                    onDeleteImage={handleDeleteImage}
                  />
                ))}

                {/* Add More Images Button */}
                <div className="h-[120px] w-[180px] relative">
                  <div className="bg-[rgba(204,204,204,0.4)] h-[120px] w-[180px] relative">
                    <button
                      onClick={onAddMore}
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg border border-[#cccccc] hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex flex-row gap-1 items-center justify-start overflow-clip px-2.5 py-[5px]">
                        <div className="font-medium leading-[0] not-italic relative text-[13px] text-left text-nowrap text-zinc-900">
                          <p className="block leading-[22px] whitespace-pre">Añadir imágen</p>
                        </div>
                        <div className="flex flex-row items-center justify-center relative size-4">
                          <Plus className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Input */}
          <div className="flex flex-row gap-6 items-start justify-start p-0 relative w-full">
            <div className="flex-1 flex flex-col gap-2 items-start justify-start p-0 mx-[0px] my-[12px]">
              <label className="flex flex-row gap-2.5 items-center justify-start p-0 relative">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block leading-none whitespace-pre">Pie de galeria</p>
                </div>
              </label>
              <div className="bg-white relative rounded w-full border border-[#cccccc]">
                <div className="flex flex-row gap-2 items-start justify-start px-0 py-3 relative w-full">
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Pie de galeria"
                    className="flex-1 font-normal text-[14px] text-zinc-900 placeholder-[rgba(24,24,27,0.45)] border-none outline-none bg-transparent px-3"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="box-border content-stretch flex flex-row gap-4 items-end justify-start p-0 relative shrink-0 w-full">
            {/* Apertura Dropdown */}
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
                  disabled={images.length === 0}
                  className={`box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-md shrink-0 ${
                    images.length > 0
                      ? 'bg-zinc-900'
                      : 'bg-[rgba(204,204,204,0.45)]'
                  }`}
                >
                  <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-3 py-1.5 relative shrink-0">
                    <div className={`font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${
                      images.length > 0
                        ? 'text-white'
                        : 'text-[rgba(24,24,27,0.4)]'
                    }`}>
                      <p className="block leading-[24px] whitespace-pre">Insertar Galería</p>
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

export function GalleryConfigModal(props: GalleryConfigModalProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <GalleryConfigModalContent {...props} />
    </DndProvider>
  );
}
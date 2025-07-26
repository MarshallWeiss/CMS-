import React from 'react';
import svgPaths from "./imports/svg-uon9u5fbth";
import { SplitButton } from "./components/SplitButton";
import { WidgetModal } from "./components/WidgetModal";
import { VideoModal } from "./components/VideoModal";
import { IFrameModal } from "./components/IFrameModal";
import { AudioModal } from "./components/AudioModal";
import { GalleryConfigModal } from "./components/GalleryConfigModal";
import { GalleryCaptionModal } from "./components/GalleryCaptionModal";
import { ImageSearchModal } from "./components/ImageSearchModal";
import { ImageCropModal } from "./components/ImageCropModal";
import { AperturaPreview } from "./components/AperturaPreview";
import { ImagenAsociada } from "./components/ImagenAsociada";
import { WidgetPreview } from "./components/WidgetPreview";
import { GalleryPreview } from "./components/GalleryPreview";
import { CroppedImage } from "./components/CroppedImage";
import { LogotipoEc, Newspaper } from "./components/Icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./components/ui/alert-dialog";
import { Info, Trash2, X } from "lucide-react";
import { apiClient } from "./utils/supabase/client";
import { useNewsArticleEditor } from "./hooks/useNewsArticleEditor";
import { tabs, getImageDescription } from "./constants/imageDescriptions";
import { checkTextOverflow, calculateRows } from "./utils/pieFotoUtils";

function NewsArticleEditor() {
  const {
    // All state and handlers from the hook
    activeTab, setActiveTab,
    isPublished, setIsPublished,
    currentArticleId,
    isLoading,
    
    // Modal states
    isWidgetModalOpen, setIsWidgetModalOpen,
    isVideoModalOpen, setIsVideoModalOpen,
    isIFrameModalOpen, setIsIFrameModalOpen,
    isAudioModalOpen, setIsAudioModalOpen,
    isGalleryConfigModalOpen, setIsGalleryConfigModalOpen,
    isGalleryCaptionModalOpen, setIsGalleryCaptionModalOpen,
    isImageSearchModalOpen, setIsImageSearchModalOpen,
    isImageCropModalOpen, setIsImageCropModalOpen,
    
    // Upload states
    isUploadingImages, setIsUploadingImages,
    uploadProgress, setUploadProgress,
    
    // Media states
    hasMultimedia, setHasMultimedia,
    selectedMultimediaType, setSelectedMultimediaType,
    selectedAspectRatio, setSelectedAspectRatio,
    multimediaData, setMultimediaData,
    
    // Image states
    selectedImageData, setSelectedImageData,
    imagenAsociadaData, setImagenAsociadaData,
    selectedImagenAsociadaData, setSelectedImagenAsociadaData,
    activeImageFlow, setActiveImageFlow,
    selectedGalleryImages, setSelectedGalleryImages,
    uploadedGalleryImages, setUploadedGalleryImages,
    editingGalleryImageIndex, setEditingGalleryImageIndex,
    
    // Search state
    previousSearchState, setPreviousSearchState,
    
    // UI states
    showDescription, setShowDescription,
    isPieFotoFocused, setIsPieFotoFocused,
    showImagenAsociadaWarning, setShowImagenAsociadaWarning,
    imagenAsociadaError, setImagenAsociadaError,
    showDeleteConfirmation, setShowDeleteConfirmation,
    
    // Article data
    articleData, setArticleData,
    
    // Handlers
    handleInputChange,
    handleSave,
    handleSaveWithoutImagenAsociada
  } = useNewsArticleEditor();

  const pieFotoRef = React.useRef<HTMLInputElement>(null);

  // Function to check if text overflows the input field
  const checkTextOverflowWrapper = React.useCallback(() => {
    return checkTextOverflow(pieFotoRef, articleData.pieFoto);
  }, [articleData.pieFoto]);

  // Calculate number of rows needed for the text
  const calculateRowsWrapper = React.useCallback(() => {
    return calculateRows(pieFotoRef, articleData.pieFoto, isPieFotoFocused, checkTextOverflowWrapper);
  }, [articleData.pieFoto, isPieFotoFocused, checkTextOverflowWrapper]);

  const handleAddImagenAsociadaFromWarning = () => {
    // Close warning dialog
    setShowImagenAsociadaWarning(false);
    
    // Trigger imagen asociada flow
    setActiveImageFlow('asociada');
    
    // Clear previous search state for fresh search
    setPreviousSearchState(prev => ({
      ...prev,
      asociada: undefined
    }));
    
    // Open image search modal
    setIsImageSearchModalOpen(true);
  };

  const handleDeleteMultimedia = () => {
    // Show confirmation dialog instead of immediately deleting
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    console.log('Deleting multimedia:', selectedMultimediaType);
    
    try {
      // Delete images from Supabase if they exist
      if (selectedMultimediaType === 'image' && multimediaData.image?.imageId) {
        await apiClient.deleteImage(multimediaData.image.imageId);
      }
      if (selectedMultimediaType === 'gallery' && multimediaData.gallery?.imageIds) {
        for (const imageId of multimediaData.gallery.imageIds) {
          await apiClient.deleteImage(imageId);
        }
      }
    } catch (error) {
      console.error('Error deleting images from Supabase:', error);
    }
    
    // Clean up object URLs if they exist
    if (selectedMultimediaType === 'image' && multimediaData.image?.url && multimediaData.image.url.startsWith('blob:')) {
      URL.revokeObjectURL(multimediaData.image.url);
    }
    if (selectedMultimediaType === 'gallery' && multimediaData.gallery?.images) {
      multimediaData.gallery.images.forEach(url => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    }
    
    // Clear multimedia data
    setHasMultimedia(false);
    setSelectedMultimediaType('');
    setSelectedAspectRatio('horizontal');
    setMultimediaData({});
    
    // Clear the pie de foto field if it was synced with multimedia caption
    if (selectedMultimediaType === 'image' || selectedMultimediaType === 'gallery') {
      setArticleData(prev => ({
        ...prev,
        pieFoto: ''
      }));
    }
    
    // Close the confirmation dialog
    setShowDeleteConfirmation(false);
  };

  const handleImageSelect = () => {
    console.log('Main image button clicked');
    setActiveImageFlow('main');
    // Clear previous search state for fresh search
    setPreviousSearchState(prev => ({
      ...prev,
      main: undefined
    }));
    // Open image search modal first
    setIsImageSearchModalOpen(true);
  };

  const handleImagenAsociadaSelect = () => {
    console.log('Imagen Asociada button clicked');
    setActiveImageFlow('asociada');
    
    // If we already have an imagen asociada, open crop modal for editing
    // Otherwise, open search modal for new selection
    if (imagenAsociadaData) {
      setSelectedImagenAsociadaData({
        url: imagenAsociadaData.url,
        title: imagenAsociadaData.title,
        source: imagenAsociadaData.source,
        date: imagenAsociadaData.date
      });
      setIsImageCropModalOpen(true);
    } else {
      // Clear previous search state for fresh search
      setPreviousSearchState(prev => ({
        ...prev,
        asociada: undefined
      }));
      setIsImageSearchModalOpen(true);
    }
  };

  const handleMediaOptionSelect = (option: string) => {
    console.log('Media option selected:', option);
    
    // Check if we're switching away from an image to another multimedia type
    // and automatically transfer the image to imagen asociada if none exists
    const isCurrentlyImage = hasMultimedia && selectedMultimediaType === 'image' && multimediaData.image;
    const isNewTypeRequiringImagenAsociada = option !== 'image' && option !== 'gallery';
    const hasNoImagenAsociada = !imagenAsociadaData;
    
    if (isCurrentlyImage && isNewTypeRequiringImagenAsociada && hasNoImagenAsociada) {
      console.log('Auto-transferring current image to imagen asociada');
      
      // Transfer the current image to imagen asociada
      const currentImage = multimediaData.image;
      setImagenAsociadaData({
        url: currentImage.url,
        caption: currentImage.caption,
        aspectRatio: 'grande', // Always 16:9 for Imagen Asociada
        cropData: currentImage.cropData,
        imageId: currentImage.imageId,
        title: currentImage.originalData?.title || '',
        source: currentImage.originalData?.source || '',
        date: currentImage.originalData?.date || ''
      });
      
      // Clear the current multimedia data
      setMultimediaData(prev => ({
        ...prev,
        image: undefined
      }));
      setHasMultimedia(false);
      setSelectedMultimediaType('');
      
      // Clear error state since we're adding an imagen asociada
      setImagenAsociadaError(false);
    }
    
    // Execute action directly based on option
    switch (option) {
      case 'image':
        setActiveImageFlow('main');
        // Clear previous search state for fresh search
        setPreviousSearchState(prev => ({
          ...prev,
          main: undefined
        }));
        setIsImageSearchModalOpen(true);
        break;
      case 'video':
        setIsVideoModalOpen(true);
        break;
      case 'widget':
        setIsWidgetModalOpen(true);
        break;
      case 'iframe':
        setIsIFrameModalOpen(true);
        break;
      case 'audio':
        setIsAudioModalOpen(true);
        break;
      case 'gallery':
        setActiveImageFlow('gallery');
        // Clear previous search state for fresh search
        setPreviousSearchState(prev => ({
          ...prev,
          gallery: undefined
        }));
        setIsImageSearchModalOpen(true);
        break;
      default:
        console.log(`Option ${option} not implemented yet`);
    }
  };

  const handleEditMultimedia = () => {
    console.log('Edit multimedia clicked for type:', selectedMultimediaType);
    
    // Open appropriate modal for editing
    switch (selectedMultimediaType) {
      case 'image':
        // For image editing, set up the image data and open the crop modal directly
        setActiveImageFlow('main');
        if (multimediaData.image?.originalData) {
          setSelectedImageData({
            url: multimediaData.image.url,
            title: multimediaData.image.originalData.title,
            source: multimediaData.image.originalData.source,
            date: multimediaData.image.originalData.date
          });
        }
        setIsImageCropModalOpen(true);
        break;
      case 'video':
        setIsVideoModalOpen(true);
        break;
      case 'widget':
        setIsWidgetModalOpen(true);
        break;
      case 'iframe':
        setIsIFrameModalOpen(true);
        break;
      case 'audio':
        setIsAudioModalOpen(true);
        break;
      case 'gallery':
        // For editing existing gallery, go directly to config modal
        // For new gallery, go to image search first
        if (selectedMultimediaType === 'gallery' && multimediaData.gallery) {
          // Convert existing gallery URLs to image data format for GalleryConfigModal
          const existingImages = multimediaData.gallery.images.map((url, index) => ({
            url: url,
            title: `Imagen ${index + 1}`,
            source: 'Galería',
            date: new Date().toLocaleDateString('es-ES')
          }));
          setSelectedGalleryImages(existingImages);
          setIsGalleryConfigModalOpen(true);
        } else {
          setActiveImageFlow('gallery');
          // Clear previous search state for fresh search
          setPreviousSearchState(prev => ({
            ...prev,
            gallery: undefined
          }));
          setIsImageSearchModalOpen(true);
        }
        break;
      default:
        console.log(`Edit ${selectedMultimediaType} - functionality not implemented yet`);
    }
  };

  const handleUploadImage = async () => {
    console.log('Upload image from search modal');
    
    // Create file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.png,.jpeg,.jpg';
    fileInput.style.display = 'none';
    
    // For gallery flow, allow multiple file selection
    if (activeImageFlow === 'gallery') {
      fileInput.multiple = true;
    }
    
    // Handle file selection
    fileInput.onchange = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const files = target.files;
      
      if (files && files.length > 0) {
        // Validate file types
        const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        const invalidFiles = Array.from(files).filter(file => !validTypes.includes(file.type));
        
        if (invalidFiles.length > 0) {
          alert('Por favor, selecciona solo archivos PNG o JPEG.');
          return;
        }
        
        // Start upload loading state - DO NOT close search modal yet
        setIsUploadingImages(true);
        setUploadProgress('');
        
        try {
          if (activeImageFlow === 'gallery') {
            // For gallery flow with multiple files, upload all files and show caption modal
            const uploadedImages = [];
            
            for (let i = 0; i < files.length; i++) {
              const file = files[i];
              setUploadProgress(`Subiendo imagen ${i + 1} de ${files.length}...`);
              
              const result = await apiClient.uploadImage(file, 'gallery', currentArticleId || undefined);
              uploadedImages.push({
                url: result.url,
                title: file.name.replace(/\.[^/.]+$/, ""), // Remove file extension
                source: 'Propio',
                date: new Date().toLocaleDateString('es-ES'),
                imageId: result.imageId
              });
            }
            
            // Upload complete - close search modal and open caption modal
            setIsUploadingImages(false);
            setUploadProgress('');
            setIsImageSearchModalOpen(false);
            setUploadedGalleryImages(uploadedImages);
            setIsGalleryCaptionModalOpen(true);
          } else {
            // Single file flow for main image and imagen asociada
            const file = files[0];
            const imageType = activeImageFlow === 'asociada' ? 'asociada' : 'main';
            
            setUploadProgress('Subiendo imagen...');
            
            const result = await apiClient.uploadImage(file, imageType, currentArticleId || undefined);
            
            const imageData = {
              url: result.url,
              title: file.name.replace(/\.[^/.]+$/, ""), // Remove file extension
              source: 'Propio',
              date: new Date().toLocaleDateString('es-ES'),
              imageId: result.imageId
            };
            
            // Upload complete - close search modal and proceed to crop modal
            setIsUploadingImages(false);
            setUploadProgress('');
            setIsImageSearchModalOpen(false);
            
            if (activeImageFlow === 'asociada') {
              setSelectedImagenAsociadaData(imageData);
              setIsImageCropModalOpen(true);
            } else {
              // Main image flow
              setSelectedImageData(imageData);
              setIsImageCropModalOpen(true);
            }
          }
        } catch (error) {
          console.error('Error uploading image:', error);
          
          // Stop loading and show error - keep modal open
          setIsUploadingImages(false);
          setUploadProgress('');
          alert('Error al subir la imagen. Por favor, inténtalo de nuevo.');
        }
      }
      
      // Clean up
      document.body.removeChild(fileInput);
    };
    
    // Trigger file picker
    document.body.appendChild(fileInput);
    fileInput.click();
  };

  const handleImageSearchSelected = (imageData: { url: string; title: string; source: string; date: string }, searchState?: { searchTerm: string; selectedSources: string[]; searchResults: { url: string; title: string; source: string; date: string }[] }) => {
    console.log('Image selected from search:', imageData);
    
    // Store the search state for returning later
    if (searchState) {
      setPreviousSearchState(prev => ({
        ...prev,
        [activeImageFlow]: searchState
      }));
    }
    
    if (activeImageFlow === 'asociada') {
      setSelectedImagenAsociadaData(imageData);
      // Clear existing imagen asociada data when selecting a new image
      setImagenAsociadaData(null);
      setIsImageSearchModalOpen(false);
      setIsImageCropModalOpen(true);
    } else {
      setSelectedImageData(imageData);
      // Clear existing multimedia data when selecting a new image
      if (hasMultimedia && selectedMultimediaType === 'image') {
        setMultimediaData(prev => ({
          ...prev,
          image: undefined
        }));
      }
      setIsImageSearchModalOpen(false);
      setIsImageCropModalOpen(true);
    }
  };

  const handleMultipleImagesSelected = (imagesData: { url: string; title: string; source: string; date: string }[], searchState?: { searchTerm: string; selectedSources: string[]; searchResults: { url: string; title: string; source: string; date: string }[] }) => {
    console.log('Multiple images selected from search:', imagesData);
    
    // Store the search state for returning later
    if (searchState) {
      setPreviousSearchState(prev => ({
        ...prev,
        [activeImageFlow]: searchState
      }));
    }
    
    // For gallery flow, store selected images and go to gallery config modal
    // If we already have selected images (adding more), append to existing selection
    if (selectedGalleryImages.length > 0) {
      // Remove duplicates based on URL
      const existingUrls = selectedGalleryImages.map(img => img.url);
      const newImages = imagesData.filter(img => !existingUrls.includes(img.url));
      setSelectedGalleryImages(prev => [...prev, ...newImages]);
    } else {
      setSelectedGalleryImages(imagesData);
    }
    setIsImageSearchModalOpen(false);
    setIsGalleryConfigModalOpen(true);
  };

  const handleImageCropSave = async (imageData: { 
    url: string; 
    caption: string; 
    aspectRatio: string;
    cropData?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  }) => {
    console.log('Image crop saved:', imageData);
    
    try {
      let imageId: string | undefined;
      
      // Get the image ID from the selected image data
      if (activeImageFlow === 'asociada' && selectedImagenAsociadaData) {
        imageId = (selectedImagenAsociadaData as any).imageId;
      } else if (activeImageFlow === 'main' && selectedImageData) {
        imageId = (selectedImageData as any).imageId;
      }
      
      // Save crop data to Supabase if we have an image ID
      if (imageId && imageData.cropData) {
        await apiClient.saveCropData(imageId, imageData.cropData, imageData.caption, imageData.aspectRatio);
      }
      
      if (activeImageFlow === 'asociada') {
        handleImagenAsociadaInsert(imageData.url, imageData.caption, imageData.aspectRatio, imageData.cropData, imageId);
        setSelectedImagenAsociadaData(null);
        setIsImageCropModalOpen(false);
      } else if (activeImageFlow === 'gallery') {
        if (selectedImageData) {
          const updatedGalleryImage = {
            url: imageData.url,
            title: selectedImageData.title,
            source: selectedImageData.source,
            date: selectedImageData.date
          };
          
          if (editingGalleryImageIndex !== null) {
            // We're editing an existing gallery image - update it
            setSelectedGalleryImages(prev => {
              const updated = [...prev];
              updated[editingGalleryImageIndex] = updatedGalleryImage;
              return updated;
            });
            console.log('Updated existing gallery image at index:', editingGalleryImageIndex);
          } else {
            // We're adding a new uploaded image to the gallery
            setSelectedGalleryImages(prev => [...prev, updatedGalleryImage]);
            console.log('Added new uploaded image to gallery selection:', updatedGalleryImage);
          }
        }
        
        setSelectedImageData(null);
        setEditingGalleryImageIndex(null);
        setIsImageCropModalOpen(false);
        setIsGalleryConfigModalOpen(true);
      } else {
        handleImageInsert(imageData.url, imageData.caption, imageData.aspectRatio, imageData.cropData, imageId);
        setSelectedImageData(null);
        setIsImageCropModalOpen(false);
      }
    } catch (error) {
      console.error('Error saving crop data:', error);
      // Continue with the flow even if crop data saving fails
      if (activeImageFlow === 'asociada') {
        handleImagenAsociadaInsert(imageData.url, imageData.caption, imageData.aspectRatio, imageData.cropData);
        setSelectedImagenAsociadaData(null);
        setIsImageCropModalOpen(false);
      } else {
        handleImageInsert(imageData.url, imageData.caption, imageData.aspectRatio, imageData.cropData);
        setSelectedImageData(null);
        setIsImageCropModalOpen(false);
      }
    }
  };

  const handleImageCropChangeImage = () => {
    console.log('Change image from crop modal');
    setIsImageCropModalOpen(false);
    setIsImageSearchModalOpen(true);
  };

  const handleImagenAsociadaInsert = (url: string, caption: string, aspectRatio: string, cropData?: { x: number; y: number; width: number; height: number }, imageId?: string) => {
    console.log('Imagen Asociada inserted:', { url, caption, aspectRatio, cropData, imageId });
    const currentImageData = activeImageFlow === 'asociada' ? selectedImagenAsociadaData : selectedImageData;
    
    // Clean up previous object URL if it exists and is a blob URL
    if (imagenAsociadaData?.url && imagenAsociadaData.url.startsWith('blob:')) {
      URL.revokeObjectURL(imagenAsociadaData.url);
    }
    
    // Clear error state when imagen asociada is added
    setImagenAsociadaError(false);
    
    setImagenAsociadaData({
      url,
      caption,
      aspectRatio,
      cropData,
      imageId,
      title: currentImageData?.title || '',
      source: currentImageData?.source || '',
      date: currentImageData?.date || ''
    });
  };

  const handleWidgetInsert = (htmlCode: string, aspectRatio: string) => {
    console.log('Widget inserted:', { htmlCode, aspectRatio });
    setHasMultimedia(true);
    setSelectedMultimediaType('widget');
    setSelectedAspectRatio(aspectRatio);
    setMultimediaData(prev => ({
      ...prev,
      widget: { htmlCode, aspectRatio }
    }));
    setArticleData(prev => ({
      ...prev,
      contenido: prev.contenido + `\n\n[WIDGET: ${aspectRatio}]\n${htmlCode}\n[/WIDGET]\n`
    }));
  };

  const handleVideoInsert = (url: string, caption: string, aspectRatio: string) => {
    console.log('Video inserted:', { url, caption, aspectRatio });
    setHasMultimedia(true);
    setSelectedMultimediaType('video');
    setSelectedAspectRatio(aspectRatio);
    setMultimediaData(prev => ({
      ...prev,
      video: { url, caption, aspectRatio }
    }));
    setArticleData(prev => ({
      ...prev,
      contenido: prev.contenido + `\n\n[VIDEO: ${aspectRatio}]\nURL: ${url}\nCaption: ${caption}\n[/VIDEO]\n`
    }));
  };

  const handleIFrameInsert = (code: string, caption: string, aspectRatio: string) => {
    console.log('iFrame inserted:', { code, caption, aspectRatio });
    setHasMultimedia(true);
    setSelectedMultimediaType('iframe');
    setSelectedAspectRatio(aspectRatio);
    setMultimediaData(prev => ({
      ...prev,
      iframe: { code, caption, aspectRatio }
    }));
    setArticleData(prev => ({
      ...prev,
      contenido: prev.contenido + `\n\n[IFRAME: ${aspectRatio}]\nCode: ${code}\nCaption: ${caption}\n[/IFRAME]\n`
    }));
  };

  const handleAudioInsert = (url: string, caption: string, aspectRatio: string) => {
    console.log('Audio inserted:', { url, caption, aspectRatio });
    setHasMultimedia(true);
    setSelectedMultimediaType('audio');
    setSelectedAspectRatio(aspectRatio);
    setMultimediaData(prev => ({
      ...prev,
      audio: { url, caption, aspectRatio }
    }));
    setArticleData(prev => ({
      ...prev,
      contenido: prev.contenido + `\n\n[AUDIO: ${aspectRatio}]\nURL: ${url}\nCaption: ${caption}\n[/AUDIO]\n`
    }));
  };

  const handleGalleryInsert = async (images: string[], caption: string, aspectRatio: string) => {
    console.log('Gallery inserted:', { images, caption, aspectRatio });
    
    try {
      // Upload any new images from the gallery that need to be uploaded
      const imageIds: string[] = [];
      const processedImages: string[] = [];
      
      for (let i = 0; i < images.length; i++) {
        const imageUrl = images[i];
        const selectedImage = selectedGalleryImages[i];
        
        if (imageUrl.startsWith('blob:')) {
          // This is a blob URL, we need to upload it
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const file = new File([blob], selectedImage?.title || `gallery-image-${i}.jpg`, { type: blob.type });
          
          const result = await apiClient.uploadImage(file, 'gallery', currentArticleId || undefined);
          imageIds.push(result.imageId);
          processedImages.push(result.url);
        } else {
          // This is already an uploaded image
          const imageId = (selectedImage as any)?.imageId;
          if (imageId) {
            imageIds.push(imageId);
          }
          processedImages.push(imageUrl);
        }
      }
      
      setHasMultimedia(true);
      setSelectedMultimediaType('gallery');
      setSelectedAspectRatio(aspectRatio);
      setMultimediaData(prev => ({
        ...prev,
        gallery: { images: processedImages, caption, aspectRatio, imageIds }
      }));
      setArticleData(prev => ({
        ...prev,
        pieFoto: caption, // Sync the gallery caption with the "Pie de foto" field
        contenido: prev.contenido + `\n\n[GALLERY: ${aspectRatio}]\nImages: ${processedImages.join(', ')}\nCaption: ${caption}\n[/GALLERY]\n`
      }));
      
    } catch (error) {
      console.error('Error uploading gallery images:', error);
      alert('Error al subir las imágenes de la galería. Por favor, inténtalo de nuevo.');
      return;
    }
    
    setIsGalleryConfigModalOpen(false);
    setSelectedGalleryImages([]);
    setEditingGalleryImageIndex(null);
  };

  const handleGalleryAddMore = () => {
    console.log('Add more images to gallery');
    setIsGalleryConfigModalOpen(false);
    // Don't clear previous search state - we want to maintain the search when adding more
    setIsImageSearchModalOpen(true);
  };

  const handleGalleryEditImage = (imageData: { url: string; title: string; source: string; date: string }) => {
    console.log('Edit gallery image:', imageData);
    
    // Find the index of the image being edited
    const imageIndex = selectedGalleryImages.findIndex(img => img.url === imageData.url);
    
    setActiveImageFlow('gallery');
    setSelectedImageData(imageData);
    setEditingGalleryImageIndex(imageIndex >= 0 ? imageIndex : null);
    setIsGalleryConfigModalOpen(false);
    setIsImageCropModalOpen(true);
  };

  const handleGalleryDeleteImage = (imageIndex: number) => {
    console.log('Delete gallery image at index:', imageIndex);
    setSelectedGalleryImages(prev => prev.filter((_, index) => index !== imageIndex));
  };

  const handleGalleryReorderImages = (reorderedImages: { url: string; title: string; source: string; date: string }[]) => {
    console.log('Reorder gallery images:', reorderedImages);
    setSelectedGalleryImages(reorderedImages);
  };

  const handleGalleryCaptionSave = (imagesWithCaptions: { url: string; title: string; source: string; date: string; caption: string }[]) => {
    console.log('Gallery captions saved:', imagesWithCaptions);
    
    // Convert to the format expected by gallery config modal
    const galleryImages = imagesWithCaptions.map(({ caption, ...imageData }) => imageData);
    
    setSelectedGalleryImages(galleryImages);
    setUploadedGalleryImages([]);
    setIsGalleryCaptionModalOpen(false);
    setIsGalleryConfigModalOpen(true);
  };

  const handleImageInsert = (url: string, caption: string, aspectRatio: string, cropData?: { x: number; y: number; width: number; height: number }, imageId?: string) => {
    console.log('Image inserted:', { url, caption, aspectRatio, cropData, imageId });
    const currentImageData = activeImageFlow === 'main' ? selectedImageData : null;
    
    // Clean up previous object URL if it exists and is a blob URL
    if (multimediaData.image?.url && multimediaData.image.url.startsWith('blob:')) {
      URL.revokeObjectURL(multimediaData.image.url);
    }
    
    setHasMultimedia(true);
    setSelectedMultimediaType('image');
    setSelectedAspectRatio(aspectRatio);
    setMultimediaData(prev => ({
      ...prev,
      image: { 
        url, 
        caption, 
        aspectRatio,
        cropData,
        imageId,
        originalData: currentImageData ? {
          title: currentImageData.title,
          source: currentImageData.source,
          date: currentImageData.date
        } : undefined
      }
    }));
    // Update both the content and the "Pie de foto" field with the image caption
    setArticleData(prev => ({
      ...prev,
      pieFoto: caption, // Sync the caption with the "Pie de foto" field
      contenido: prev.contenido + `\n\n[IMAGE: ${aspectRatio}]\nURL: ${url}\nCaption: ${caption}\n[/IMAGE]\n`
    }));
  };

  // Cleanup object URLs on component unmount
  React.useEffect(() => {
    return () => {
      // Clean up main image URL
      if (multimediaData.image?.url && multimediaData.image.url.startsWith('blob:')) {
        URL.revokeObjectURL(multimediaData.image.url);
      }
      // Clean up imagen asociada URL
      if (imagenAsociadaData?.url && imagenAsociadaData.url.startsWith('blob:')) {
        URL.revokeObjectURL(imagenAsociadaData.url);
      }
      // Clean up gallery images URLs
      selectedGalleryImages.forEach(image => {
        if (image.url.startsWith('blob:')) {
          URL.revokeObjectURL(image.url);
        }
      });
      // Clean up uploaded gallery images URLs
      uploadedGalleryImages.forEach(image => {
        if (image.url.startsWith('blob:')) {
          URL.revokeObjectURL(image.url);
        }
      });
    };
  }, [multimediaData.image?.url, imagenAsociadaData?.url, selectedGalleryImages, uploadedGalleryImages]);

  return (
    <>
      <div className="bg-white box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative size-full">
      {/* Header */}
      <div className="bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 sticky top-0 w-full z-50">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start px-4 py-0 relative w-full">
            <div className="box-border content-stretch flex flex-row h-[60px] items-center justify-between px-0 py-2 relative shrink-0 w-full max-w-[1200px]">
              <LogotipoEc />
              <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-4">
                    <Newspaper />
                  </div>
                  <div className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                    <p className="block leading-[24px] whitespace-pre">Noticia</p>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                  <button className="bg-[#cccccc] box-border content-stretch flex flex-row items-center justify-start p-[8px] relative rounded-md shrink-0">
                    <svg className="block size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p3359d600} stroke="#18181B" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="bg-[#cccccc] box-border content-stretch flex flex-row items-center justify-start p-[8px] relative rounded-md shrink-0">
                    <svg className="block size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p3f64bc00} stroke="#18181B" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-2 py-0 relative shrink-0">
                  <div className="h-6 relative shrink-0 w-11">
                    <div className="absolute bottom-[-12.5%] left-[-4.545%] right-[-4.545%] top-[-4.167%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 28">
                        <rect
                          fill={isPublished ? "#22c55e" : "#CCCCCC"}
                          fillOpacity="0.4"
                          height="24"
                          rx="12"
                          width="44"
                          x="2"
                          y="1"
                        />
                        <circle 
                          cx={isPublished ? "34" : "14"} 
                          cy="13" 
                          fill="white" 
                          r="11" 
                          style={{ transition: 'cx 0.2s ease' }}
                        />
                      </svg>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsPublished(!isPublished)}
                    className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900 ml-2"
                  >
                    <p className="block leading-[24px] whitespace-pre">Publicado</p>
                  </button>
                </div>
                <button 
                  onClick={handleSave}
                  disabled={isLoading}
                  className={`box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-md shrink-0 ${
                    isLoading ? 'bg-gray-400' : 'bg-zinc-900'
                  }`}
                >
                  <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-3 py-1.5 relative shrink-0">
                    <div className="font-medium leading-[0] not-italic relative shrink-0 text-white text-[14px] text-left text-nowrap">
                      <p className="block leading-[24px] whitespace-pre">
                        {isLoading ? 'Guardando...' : 'Guardar'}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full">
        <div className="relative shrink-0 w-full max-w-[1200px]">
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row items-center justify-between pb-0 pt-2 px-2 relative w-full">
              <div className="basis-0 bg-[rgba(204,204,204,0.4)] grow min-h-px min-w-px relative rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0">
                <div className="overflow-clip relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-[4px] relative w-full">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`basis-0 box-border content-stretch flex flex-col grow items-center justify-start min-h-px min-w-px p-0 relative rounded shrink-0 ${
                          activeTab === tab.id 
                            ? 'bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                            : ''
                        }`}
                      >
                        <div className="relative rounded shrink-0 w-full">
                          <div className="flex flex-col items-center justify-center relative size-full">
                            <div className="box-border content-stretch flex flex-col items-center justify-center px-2 py-[5px] relative w-full">
                              <div className="font-medium leading-[0] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-zinc-900">
                                <p className="block leading-[26px] whitespace-pre">{tab.label}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white box-border content-stretch flex flex-col items-center justify-center px-4 py-0 relative shrink-0 w-full max-w-[1200px]">
        <div className="bg-white box-border content-stretch flex flex-col gap-4 items-center justify-center p-0 relative shrink-0 w-full">
          {/* Form Fields */}
          <div className="box-border content-stretch flex flex-row gap-9 items-start justify-start p-0 relative shrink-0 w-full my-[16px] mx-[0px]">
            {/* Left Column */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              {/* Antetítulo */}
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                <label className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block leading-none whitespace-pre">Antetítulo</p>
                </label>
                <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]">
                  <input
                    type="text"
                    value={articleData.antetitulo}
                    onChange={(e) => handleInputChange('antetitulo', e.target.value)}
                    placeholder="Escribe un antetítulo"
                    className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Título */}
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                <label className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block leading-none whitespace-pre">Título</p>
                </label>
                <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]">
                  <input
                    type="text"
                    value={articleData.titulo}
                    onChange={(e) => handleInputChange('titulo', e.target.value)}
                    placeholder="Escribe un titulo"
                    className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Entradilla */}
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                <label className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block leading-none whitespace-pre">Entradilla</p>
                </label>
                <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]">
                  <textarea
                    value={articleData.entradilla}
                    onChange={(e) => handleInputChange('entradilla', e.target.value)}
                    placeholder="Escribe una entradilla"
                    rows={4}
                    className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent resize-none"
                  />
                </div>
              </div>

              {/* Firmas */}
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                <label className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block leading-none whitespace-pre">Firmas</p>
                </label>
                <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]">
                  <input
                    type="text"
                    value={articleData.firmas}
                    onChange={(e) => handleInputChange('firmas', e.target.value)}
                    placeholder="Escribe para buscar una o varias firmas"
                    className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Fechas */}
              <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0 w-full">
                <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                  <label className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                    <p className="block leading-none whitespace-pre">Fecha de publicación</p>
                  </label>
                  <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]">
                    <input
                      type="datetime-local"
                      value={articleData.fechaPublicacion}
                      onChange={(e) => handleInputChange('fechaPublicacion', e.target.value)}
                      placeholder="Selecciona fecha y hora"
                      className={`w-full px-3 py-3 text-[14px] border-none outline-none bg-transparent ${
                        articleData.fechaPublicacion ? 'text-zinc-900' : 'text-zinc-400'
                      }`}
                    />
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                  <label className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                    <p className="block leading-none whitespace-pre">Fecha de modificación</p>
                  </label>
                  <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]">
                    <input
                      type="datetime-local"
                      value={articleData.fechaModificacion}
                      onChange={(e) => handleInputChange('fechaModificacion', e.target.value)}
                      placeholder="Selecciona fecha y hora"
                      className={`w-full px-3 py-3 text-[14px] border-none outline-none bg-transparent ${
                        articleData.fechaModificacion ? 'text-zinc-900' : 'text-zinc-400'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Sección */}
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                <label className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block leading-none whitespace-pre">Sección</p>
                </label>
                <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]">
                  <input
                    type="text"
                    value={articleData.seccion}
                    onChange={(e) => handleInputChange('seccion', e.target.value)}
                    placeholder="Escribe para buscar una sección"
                    className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 mb-0">
              {/* Image Upload / Widget Preview */}
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                <label className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block leading-none whitespace-pre">
                    {hasMultimedia && selectedMultimediaType === 'image' ? 'Apertura imagen' : 'Apertura'}
                  </p>
                </label>
                
                {hasMultimedia ? (
                  selectedMultimediaType === 'image' && multimediaData.image ? (
                    <div className="aspect-[566/425] bg-white box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded shrink-0 w-full">
                      <div className="aspect-[557/418] rounded-md shrink-0 w-full relative group">
                        <CroppedImage
                          src={multimediaData.image.url}
                          cropData={multimediaData.image.cropData}
                          containerClassName="w-full h-full rounded-md"
                        />
                        {/* Hover overlay */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-md flex flex-col items-center justify-center"
                          style={{
                            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)'
                          }}
                        >
                          <div className="w-[153px]">
                            <SplitButton 
                              onMainClick={handleEditMultimedia}
                              onOptionSelect={handleMediaOptionSelect}
                              hasWidget={hasMultimedia}
                              selectedMediaType={selectedMultimediaType}
                              editMode={true}
                              customMainText="Editar imagen"
                            />
                          </div>
                          
                          {/* Delete button */}
                          <button
                            onClick={handleDeleteMultimedia}
                            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-red-500 hover:text-red-600 p-2 rounded-md transition-colors duration-200 shadow-sm border border-gray-200"
                            title="Eliminar multimedia"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : selectedMultimediaType === 'gallery' && multimediaData.gallery ? (
                    <GalleryPreview 
                      images={multimediaData.gallery.images}
                      onEditGallery={handleEditMultimedia}
                      onMediaOptionSelect={handleMediaOptionSelect}
                      onDeleteGallery={handleDeleteMultimedia}
                    />
                  ) : (
                    <WidgetPreview 
                      onEditWidget={handleEditMultimedia}
                      onMediaOptionSelect={handleMediaOptionSelect}
                      selectedMediaType={selectedMultimediaType}
                      onDeleteWidget={handleDeleteMultimedia}
                    />
                  )
                ) : (
                  <div className="aspect-[566/425] bg-white box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded shrink-0 w-full">
                    <div className="aspect-[557/418] bg-[rgba(204,204,204,0.4)] rounded-md shrink-0 w-full relative">
                      <div className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2">
                        <SplitButton 
                          onMainClick={handleImageSelect}
                          onOptionSelect={handleMediaOptionSelect}
                          hasWidget={hasMultimedia}
                          selectedMediaType={selectedMultimediaType}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Apertura and Imagen Asociada components */}
                <div className="box-border content-stretch flex flex-row items-end justify-between p-0 relative shrink-0 w-full">
                  <AperturaPreview aspectRatio={selectedAspectRatio} />
                  {/* Only show Imagen Asociada when multimedia is selected and it's not an image or gallery type */}
                  {(hasMultimedia && selectedMultimediaType !== 'image' && selectedMultimediaType !== 'gallery') && (
                    <div className="flex flex-row items-end gap-3">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="mb-2 p-1 hover:bg-gray-100 rounded-full transition-colors">
                              <Info size={14} className="text-gray-500" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="right" className="max-w-[250px] p-3">
                            <p className="text-sm leading-relaxed">
                              Esta es la imagen que aparecerá en Google y en redes sociales cuando el artículo utiliza una apertura multimedia.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <ImagenAsociada 
                        onClick={handleImagenAsociadaSelect}
                        selectedImage={imagenAsociadaData}
                        hasError={imagenAsociadaError}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Pie de foto */}
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <label className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                    <p className="block leading-none whitespace-pre">Pie de foto</p>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      console.log('Description button clicked, current state:', showDescription);
                      setShowDescription(!showDescription);
                    }}
                    className="text-[12px] text-zinc-900 underline decoration-solid underline-offset-[from-font] leading-[16px] hover:text-zinc-700 transition-colors"
                  >
                    {showDescription ? 'Ocultar descripción' : 'Mostrar descripción'}
                  </button>
                </div>
                <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc] transition-all duration-200 ease-in-out">
                  {isPieFotoFocused && checkTextOverflowWrapper() ? (
                    <textarea
                      ref={pieFotoRef as any}
                      value={articleData.pieFoto}
                      onChange={(e) => handleInputChange('pieFoto', e.target.value)}
                      onFocus={() => setIsPieFotoFocused(true)}
                      onBlur={() => setIsPieFotoFocused(false)}
                      placeholder="Pie de foto"
                      rows={calculateRowsWrapper()}
                      className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent resize-none transition-all duration-200 ease-in-out"
                      style={{ minHeight: '48px' }}
                      autoFocus
                    />
                  ) : (
                    <input
                      ref={pieFotoRef}
                      type="text"
                      value={articleData.pieFoto}
                      onChange={(e) => handleInputChange('pieFoto', e.target.value)}
                      onFocus={() => setIsPieFotoFocused(true)}
                      onBlur={() => setIsPieFotoFocused(false)}
                      placeholder="Pie de foto"
                      className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent transition-all duration-200 ease-in-out"
                    />
                  )}
                </div>
              </div>

              {/* Description field - shown conditionally */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
                  showDescription 
                    ? 'max-h-[400px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-medium leading-[0] not-italic text-[14px] text-left text-nowrap text-zinc-900">
                    <p className="block leading-none whitespace-pre">Descripción</p>
                  </label>
                  <div className="bg-white relative rounded w-full border border-[#cccccc]">
                    <textarea
                      value={articleData.descripcion}
                      readOnly
                      placeholder="Descripción de la imagen"
                      rows={7}
                      className="w-full px-3 py-3 text-[14px] text-zinc-600 placeholder-zinc-400 border-none outline-none bg-gray-50 resize-none min-h-[140px] cursor-default"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tags and Keywords */}
          <div className="box-border content-stretch flex flex-row gap-9 items-start justify-start p-0 relative shrink-0 w-full mt-[0px] mr-[0px] mb-[24px] ml-[0px]">
            <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              <label className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                <p className="block leading-none whitespace-pre">Tags</p>
              </label>
              <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]">
                <input
                  type="text"
                  value={articleData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                  placeholder="Escribe para buscar una tag"
                  className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              <label className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                <p className="block leading-none whitespace-pre">Palabras URL</p>
              </label>
              <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]">
                <input
                  type="text"
                  value={articleData.palabrasUrl}
                  onChange={(e) => handleInputChange('palabrasUrl', e.target.value)}
                  placeholder="Palabras URL"
                  className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Editor */}
      <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0 w-full mt-0">
        <div className="relative shrink-0 w-full max-w-[1200px]">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-0 relative w-full">
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative rounded-lg shrink-0 w-full">
                <div className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block leading-none whitespace-pre">Editor de texto</p>
                </div>
                <div className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 relative shrink-0 w-full">
                  {/* Toolbar */}
                  <div className="bg-white mb-[-1px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full border border-[#cccccc]">
                    <div className="flex flex-row items-center relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[4px] relative w-full">
                        <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0">
                          {/* Toolbar buttons would go here */}
                          <div className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                            <p className="block leading-[24px] whitespace-pre">Párrafo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content Area */}
                  <div className="bg-white h-[540px] mb-[-1px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full border border-[#cccccc]">
                    <div className="flex flex-row justify-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2.5 h-[540px] items-start justify-center px-10 py-8 relative w-full">
                        <textarea
                          value={articleData.contenido}
                          onChange={(e) => handleInputChange('contenido', e.target.value)}
                          className="basis-0 font-normal grow min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-left text-zinc-900 border-none outline-none bg-transparent resize-none leading-[1.4]"
                          placeholder="Escribe el contenido del artículo aquí..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white h-[52px] shrink-0 sticky top-0 w-full">
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col h-[52px] items-center justify-center pb-2 pt-0 px-4 relative w-full">
              <div className="box-border content-stretch flex flex-row gap-8 items-center justify-end p-0 relative shrink-0 w-full max-w-[1200px]">
                <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                    <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-4">
                      <Newspaper />
                    </div>
                    <div className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                      <p className="block leading-[14px] whitespace-pre">Noticia</p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                    <button className="bg-[#cccccc] box-border content-stretch flex flex-row items-center justify-start p-[8px] relative rounded-md shrink-0">
                      <svg className="block size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p3359d600} stroke="#18181B" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button className="bg-[#cccccc] box-border content-stretch flex flex-row items-center justify-start p-[8px] relative rounded-md shrink-0">
                      <svg className="block size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p3f64bc00} stroke="#18181B" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <button 
                    onClick={handleSave}
                    disabled={isLoading}
                    className={`box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded-md shrink-0 ${
                      isLoading ? 'bg-gray-400' : 'bg-zinc-900'
                    }`}
                  >
                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip px-3 py-1.5 relative shrink-0">
                      <div className="font-medium leading-[0] not-italic relative shrink-0 text-white text-[14px] text-left text-nowrap">
                        <p className="block leading-[24px] whitespace-pre">
                          {isLoading ? 'Guardando...' : 'Guardar'}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* All Modals */}
      <ImageSearchModal
        isOpen={isImageSearchModalOpen}
        onClose={() => setIsImageSearchModalOpen(false)}
        onUploadImage={handleUploadImage}
        onImageSelected={handleImageSearchSelected}
        onMultipleImagesSelected={handleMultipleImagesSelected}
        isGalleryMode={activeImageFlow === 'gallery'}
        previousSearchState={previousSearchState[activeImageFlow]}
        isUploadingImages={isUploadingImages}
        uploadProgress={uploadProgress}
      />

      <ImageCropModal
        isOpen={isImageCropModalOpen}
        onClose={() => setIsImageCropModalOpen(false)}
        onSave={handleImageCropSave}
        onChangeImage={handleImageCropChangeImage}
        imageData={activeImageFlow === 'asociada' ? selectedImagenAsociadaData : selectedImageData}
        originalImageData={
          activeImageFlow === 'asociada' 
            ? (imagenAsociadaData && !selectedImagenAsociadaData ? {
                url: imagenAsociadaData.url,
                title: imagenAsociadaData.title,
                source: imagenAsociadaData.source,
                date: imagenAsociadaData.date
              } : null)
            : (multimediaData.image?.originalData && !selectedImageData ? {
                url: multimediaData.image.url,
                title: multimediaData.image.originalData.title,
                source: multimediaData.image.originalData.source,
                date: multimediaData.image.originalData.date
              } : null)
        }
        initialCaption={
          activeImageFlow === 'asociada' 
            ? (imagenAsociadaData?.caption || selectedImagenAsociadaData?.title || '')
            : (multimediaData.image?.caption || selectedImageData?.title || articleData.pieFoto)
        }
        initialAspectRatio={
          activeImageFlow === 'asociada'
            ? 'grande' // Always 16:9 for Imagen Asociada
            : (multimediaData.image?.aspectRatio || 'horizontal')
        }
        initialCropData={
          activeImageFlow === 'asociada'
            ? imagenAsociadaData?.cropData
            : multimediaData.image?.cropData
        }
        isImagenAsociada={activeImageFlow === 'asociada'}
        imageDescription={
          // Get the description for the current image
          activeImageFlow === 'asociada'
            ? (selectedImagenAsociadaData?.url ? getImageDescription(selectedImagenAsociadaData.url) : (imagenAsociadaData?.url ? getImageDescription(imagenAsociadaData.url) : ''))
            : (selectedImageData?.url ? getImageDescription(selectedImageData.url) : (multimediaData.image?.url ? getImageDescription(multimediaData.image.url) : ''))
        }
      />

      <WidgetModal
        isOpen={isWidgetModalOpen}
        onClose={() => setIsWidgetModalOpen(false)}
        onInsert={handleWidgetInsert}
        initialData={selectedMultimediaType === 'widget' ? multimediaData.widget : undefined}
      />
      
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onInsert={handleVideoInsert}
        initialData={selectedMultimediaType === 'video' ? multimediaData.video : undefined}
      />
      
      <IFrameModal
        isOpen={isIFrameModalOpen}
        onClose={() => setIsIFrameModalOpen(false)}
        onInsert={handleIFrameInsert}
        initialData={selectedMultimediaType === 'iframe' ? multimediaData.iframe : undefined}
      />
      
      <AudioModal
        isOpen={isAudioModalOpen}
        onClose={() => setIsAudioModalOpen(false)}
        onInsert={handleAudioInsert}
        initialData={selectedMultimediaType === 'audio' ? multimediaData.audio : undefined}
      />
      
      <GalleryCaptionModal
        isOpen={isGalleryCaptionModalOpen}
        onClose={() => {
          setIsGalleryCaptionModalOpen(false);
          // Clean up uploaded images URLs
          uploadedGalleryImages.forEach(image => {
            if (image.url.startsWith('blob:')) {
              URL.revokeObjectURL(image.url);
            }
          });
          setUploadedGalleryImages([]);
          setEditingGalleryImageIndex(null);
        }}
        onSave={handleGalleryCaptionSave}
        uploadedImages={uploadedGalleryImages}
      />

      <GalleryConfigModal
        isOpen={isGalleryConfigModalOpen}
        onClose={() => {
          setIsGalleryConfigModalOpen(false);
          setSelectedGalleryImages([]);
          setEditingGalleryImageIndex(null);
        }}
        onInsert={handleGalleryInsert}
        onAddMore={handleGalleryAddMore}
        selectedImages={selectedGalleryImages}
        onEditImage={handleGalleryEditImage}
        onDeleteImage={handleGalleryDeleteImage}
        onReorderImages={handleGalleryReorderImages}
        initialCaption={
          selectedMultimediaType === 'gallery' && multimediaData.gallery 
            ? multimediaData.gallery.caption 
            : articleData.pieFoto
        }
      />

      {/* Warning Dialog for missing Imagen Asociada */}
      <AlertDialog open={showImagenAsociadaWarning} onOpenChange={setShowImagenAsociadaWarning}>
        <AlertDialogContent>
          <AlertDialogHeader className="relative">
            <AlertDialogTitle>Falta imagen asociada</AlertDialogTitle>
            <AlertDialogDescription>
              Deberías añadir una imagen asociada para que aparezca en Google y en redes sociales cuando el artículo utiliza una apertura multimedia. ¿Deseas continuar sin añadir una imagen asociada?
            </AlertDialogDescription>
            <button
              onClick={() => setShowImagenAsociadaWarning(false)}
              className="absolute box-border content-stretch flex flex-col items-start justify-start p-0 rounded-md top-2 right-2"
              aria-label="Cerrar"
            >
              <div className="box-border content-stretch flex flex-row items-center justify-start p-[8px] relative rounded-md shrink-0">
                <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-3.5">
                  <X size={14} className="text-zinc-900" />
                </div>
              </div>
            </button>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-row gap-2 justify-end">
            <AlertDialogAction 
              onClick={handleAddImagenAsociadaFromWarning}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Añadir imagen asociada
            </AlertDialogAction>
            <AlertDialogAction onClick={handleSaveWithoutImagenAsociada}>
              Continuar sin imagen
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Eliminar multimedia</AlertDialogTitle>
            <AlertDialogDescription>
              Se eliminará el contenido multimedia actual y no se podrá recuperar. ¿Estás seguro de que deseas continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-red-500 hover:bg-red-600 text-white">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </>
  );
}

export default function App() {
  return <NewsArticleEditor />;
}
import React from 'react';
import { apiClient, ArticleData } from '../utils/supabase/client';

export interface MultimediaData {
  widget?: { htmlCode: string; aspectRatio: string };
  video?: { url: string; caption: string; aspectRatio: string };
  iframe?: { code: string; caption: string; aspectRatio: string };
  audio?: { url: string; caption: string; aspectRatio: string };
  gallery?: { images: string[]; caption: string; aspectRatio: string; imageIds?: string[] };
  image?: { 
    url: string; 
    caption: string; 
    aspectRatio: string;
    imageId?: string;
    cropData?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    originalData?: {
      title: string;
      source: string;
      date: string;
    };
  };
}

export interface ImagenAsociadaData {
  url: string;
  title: string;
  source: string;
  date: string;
  caption: string;
  aspectRatio: string;
  imageId?: string;
  cropData?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface ImageData {
  url: string;
  title: string;
  source: string;
  date: string;
}

export function useNewsArticleEditor() {
  // Article state
  const [activeTab, setActiveTab] = React.useState('apertura');
  const [isPublished, setIsPublished] = React.useState(false);
  const [currentArticleId, setCurrentArticleId] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  
  // Modal states
  const [isWidgetModalOpen, setIsWidgetModalOpen] = React.useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const [isIFrameModalOpen, setIsIFrameModalOpen] = React.useState(false);
  const [isAudioModalOpen, setIsAudioModalOpen] = React.useState(false);
  const [isGalleryConfigModalOpen, setIsGalleryConfigModalOpen] = React.useState(false);
  const [isGalleryCaptionModalOpen, setIsGalleryCaptionModalOpen] = React.useState(false);
  const [isImageSearchModalOpen, setIsImageSearchModalOpen] = React.useState(false);
  const [isImageCropModalOpen, setIsImageCropModalOpen] = React.useState(false);
  
  // Upload loading state
  const [isUploadingImages, setIsUploadingImages] = React.useState(false);
  const [uploadProgress, setUploadProgress] = React.useState<string>('');
  
  // Media states
  const [hasMultimedia, setHasMultimedia] = React.useState(false);
  const [selectedMultimediaType, setSelectedMultimediaType] = React.useState('');
  const [selectedAspectRatio, setSelectedAspectRatio] = React.useState('horizontal');
  const [multimediaData, setMultimediaData] = React.useState<MultimediaData>({});
  
  // Image states
  const [selectedImageData, setSelectedImageData] = React.useState<ImageData | null>(null);
  const [imagenAsociadaData, setImagenAsociadaData] = React.useState<ImagenAsociadaData | null>(null);
  const [selectedImagenAsociadaData, setSelectedImagenAsociadaData] = React.useState<ImageData | null>(null);
  const [activeImageFlow, setActiveImageFlow] = React.useState<'main' | 'asociada' | 'gallery'>('main');
  const [selectedGalleryImages, setSelectedGalleryImages] = React.useState<ImageData[]>([]);
  const [uploadedGalleryImages, setUploadedGalleryImages] = React.useState<ImageData[]>([]);
  const [editingGalleryImageIndex, setEditingGalleryImageIndex] = React.useState<number | null>(null);
  
  // Search state
  const [previousSearchState, setPreviousSearchState] = React.useState<{
    main?: {
      searchTerm: string;
      selectedSources: string[];
      searchResults: ImageData[];
    };
    asociada?: {
      searchTerm: string;
      selectedSources: string[];
      searchResults: ImageData[];
    };
    gallery?: {
      searchTerm: string;
      selectedSources: string[];
      searchResults: ImageData[];
    };
  }>({});
  
  // UI states
  const [showDescription, setShowDescription] = React.useState(false);
  const [isPieFotoFocused, setIsPieFotoFocused] = React.useState(false);
  const [showImagenAsociadaWarning, setShowImagenAsociadaWarning] = React.useState(false);
  const [imagenAsociadaError, setImagenAsociadaError] = React.useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = React.useState(false);
  
  // Article data
  const [articleData, setArticleData] = React.useState({
    antetitulo: '',
    titulo: '',
    entradilla: '',
    firmas: '',
    fechaPublicacion: '',
    fechaModificacion: '',
    seccion: '',
    tags: '',
    palabrasUrl: '',
    pieFoto: '',
    descripcion: 'Lorem ipsum dolor sit amet consectetur. Nam eu vel ultrices mi fringilla sapien congue. Neque gravida dis sed orci odio senectus. Sed nisi gravida imperdiet arcu. Tempor lacus malesuada mollis ullamcorper purus non egestas curabitur at. At gravida tempor tristique dui lacus odio sagittis sed.',
    contenido: `Donald Trump, presidente de Estados Unidos, ha encargado al Tesoro y al Departamento de Comercio que preparen aranceles recíprocos para todos los socios comerciales que impongan lo que su Administración identifique como barreras comerciales o arancelarias a los productos estadounidenses. Entre ellas, el Impuesto sobre el Valor Añadido (IVA), pero también impuestos a determinados servicios digitales, como puede ser lo que en España se conoce como la 'Tasa Google'.

El objetivo es que el plan esté listo para empezar a aplicarse a partir del 1 de abril. En su exposición de argumentos, el Gobierno de Estados Unidos ha asegurado que hará un análisis país por país, para tratar de reducir los respectivos déficits comerciales, que se generan cuando un país importa más de lo que exporta de otro.

EEUU mantiene un déficit comercial global de 1,2 billones de dólares (1,15 billones de euros). Para Trump, al contrario de lo que asegura la ciencia económica, esto equivale a un subsidio de las empresas y contribuyentes estadounidenses al resto del mundo. Por eso, uno de los principales objetivos de la Casa Blanca es la Unión Europea, cuyo superávit comercial de 235.500 millones de dólares con EEUU representa casi el 20% del déficit comercial americano.

Las cartas de España (para bien y para mal)

En este sentido, España tiene bazas a favor para mitigar el golpe, pero también otras en contra. Entre las primeras, sobresalen dos: el IVA se aplica en todos los países de la UE y la economía española está relativamente "escondida" dentro de las balanzas comerciales comunitarias. De hecho, España es el segundo país con un mayor déficit comercial con EEUU. Es decir, compramos a las empresas estadounidenses más bienes de los que ellos nos compran a nosotros. El mundo ideal de Trump.`
  });

  const handleInputChange = (field: string, value: string) => {
    setArticleData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // If the "Pie de foto" field is being updated and we have multimedia, sync the multimedia caption
    if (field === 'pieFoto' && hasMultimedia) {
      if (selectedMultimediaType === 'image') {
        setMultimediaData(prev => ({
          ...prev,
          image: prev.image ? { ...prev.image, caption: value } : prev.image
        }));
      } else if (selectedMultimediaType === 'gallery') {
        setMultimediaData(prev => ({
          ...prev,
          gallery: prev.gallery ? { ...prev.gallery, caption: value } : prev.gallery
        }));
      }
    }
  };

  const handleSave = async () => {
    // Check if we have multimedia that requires imagen asociada but no imagen asociada is set
    const requiresImagenAsociada = hasMultimedia && 
      selectedMultimediaType !== 'image' && 
      selectedMultimediaType !== 'gallery';
    
    if (requiresImagenAsociada && !imagenAsociadaData) {
      // Show warning dialog
      setShowImagenAsociadaWarning(true);
      return;
    }
    
    // Clear any previous error state
    setImagenAsociadaError(false);
    
    try {
      setIsLoading(true);
      
      // Prepare article data for saving
      const articleToSave: ArticleData = {
        ...articleData,
        hasMultimedia,
        selectedMultimediaType,
        selectedAspectRatio,
        multimediaData,
        imagenAsociadaData,
        isPublished
      };
      
      let result;
      if (currentArticleId) {
        // Update existing article
        result = await apiClient.updateArticle(currentArticleId, articleToSave);
        console.log('Article updated successfully:', result.article.id);
      } else {
        // Create new article
        result = await apiClient.saveArticle(articleToSave);
        setCurrentArticleId(result.articleId);
        console.log('Article saved successfully:', result.articleId);
      }
      
      // Show success feedback
      console.log('Article saved to Supabase successfully!');
      
    } catch (error) {
      console.error('Failed to save article to Supabase:', error);
      alert('Error al guardar el artículo. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveWithoutImagenAsociada = async () => {
    // Save the article but put imagen asociada in error mode
    setImagenAsociadaError(true);
    setShowImagenAsociadaWarning(false);
    
    try {
      setIsLoading(true);
      
      const articleToSave: ArticleData = {
        ...articleData,
        hasMultimedia,
        selectedMultimediaType,
        selectedAspectRatio,
        multimediaData,
        imagenAsociadaData: null,
        isPublished
      };
      
      let result;
      if (currentArticleId) {
        result = await apiClient.updateArticle(currentArticleId, articleToSave);
      } else {
        result = await apiClient.saveArticle(articleToSave);
        setCurrentArticleId(result.articleId);
      }
      
      console.log('Article saved without imagen asociada:', result);
      
    } catch (error) {
      console.error('Failed to save article without imagen asociada:', error);
      alert('Error al guardar el artículo. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    // State
    activeTab, setActiveTab,
    isPublished, setIsPublished,
    currentArticleId, setCurrentArticleId,
    isLoading, setIsLoading,
    
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
  };
}
import React from 'react';
import svgPaths from "../imports/svg-wtm2cz1n4b";
import { X, Trash2, Upload } from 'lucide-react';
import flowerImage1 from 'figma:asset/ebb67abd59597f3c5426a2fae54149c8743b4834.png';
import flowerImage2 from 'figma:asset/5a35ce53613f532e987a82b1d4f4c19bee25d1b1.png';
import flowerImage3 from 'figma:asset/d9e5cc45fec75a5cc183ff855d13c6d559a29df3.png';
import flowerImage4 from 'figma:asset/b3d742c5956aca88ff2ae5f366e53d4ff702cb16.png';
import flowerImage5 from 'figma:asset/ff7030725420d838fd1f5f5ecd97a7f8b1978fcb.png';
import flowerImage6 from 'figma:asset/ac827dc35d6cb0d2b47187a754dd3fb2f707d6b1.png';
import flowerImage7 from 'figma:asset/1c19a151a4e8e7612db5c07dddf69d3f83fe62f3.png';
import flowerImage8 from 'figma:asset/02c033beb51d7c0f4d552f953b2dfbb477c60843.png';
import flowerImage9 from 'figma:asset/1818bf015078d6ddfad03e4ece48161481dc0f60.png';
import flowerImage10 from 'figma:asset/06d9585900116192ec07dfc3d5a52cd6c4f7d541.png';
import flowerImage11 from 'figma:asset/5339b3c79ee5194691067f2e0ab6ae164a3f8f60.png';
import flowerImage12 from 'figma:asset/1dfd59712870ec4d5c85da0a5ba5b50d18ec6c8c.png';

interface ImageSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadImage: () => void;
  onImageSelected: (imageData: { url: string; title: string; source: string; date: string }, searchState?: { searchTerm: string; selectedSources: string[]; searchResults: { url: string; title: string; source: string; date: string }[] }) => void;
  onMultipleImagesSelected?: (imageData: { url: string; title: string; source: string; date: string }[], searchState?: { searchTerm: string; selectedSources: string[]; searchResults: { url: string; title: string; source: string; date: string }[] }) => void;
  isGalleryMode?: boolean;
  previousSearchState?: {
    searchTerm: string;
    selectedSources: string[];
    searchResults: { url: string; title: string; source: string; date: string }[];
  };
  isUploadingImages?: boolean;
  uploadProgress?: string;
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

interface SearchResult {
  id: string;
  url: string;
  source: string;
  title?: string;
}

export function ImageSearchModal({ 
  isOpen, 
  onClose, 
  onUploadImage, 
  onImageSelected, 
  onMultipleImagesSelected,
  isGalleryMode = false,
  previousSearchState,
  isUploadingImages = false,
  uploadProgress = ''
}: ImageSearchModalProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedSources, setSelectedSources] = React.useState<string[]>(['EFE', 'EP', 'AP', 'Reuters', 'Getty', 'Cordon', 'Corbis', 'Propio']);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = React.useState(false);
  const [selectedImageId, setSelectedImageId] = React.useState<string | null>(null);
  const [selectedImageIds, setSelectedImageIds] = React.useState<string[]>([]);

  const sources = ['EFE', 'EP', 'AP', 'Reuters', 'Getty', 'Cordon', 'Corbis', 'Propio'];

  // Restore previous search state when modal opens with previousSearchState
  React.useEffect(() => {
    if (isOpen && previousSearchState) {
      setSearchQuery(previousSearchState.searchTerm);
      setSelectedSources(previousSearchState.selectedSources);
      setSearchResults(previousSearchState.searchResults.map(result => ({
        id: Math.random().toString(),
        url: result.url,
        source: result.source,
        title: result.title
      })));
      setHasSearched(true);
      setSelectedImageId(null);
      setSelectedImageIds([]);
    }
  }, [isOpen, previousSearchState]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    console.log('Searching for:', searchQuery, 'in sources:', selectedSources);
    setIsLoading(true);
    setHasSearched(true);
    
    // Simulate API call with loading delay
    setTimeout(() => {
      // Mock search results - in a real app, this would be an API call
      const mockResults: SearchResult[] = [
        // Row 1
        { id: '1', url: flowerImage1, source: 'EFE', title: 'Iris azul con centro amarillo. Pétalos delicados en tonos púrpura. Florece en primavera.' },
        { id: '2', url: flowerImage2, source: 'Reuters', title: 'Flor amarilla con estambres largos. Fondo azul vibrante contrastante. Fotografía macro detallada.' },
        { id: '3', url: flowerImage3, source: 'Getty', title: 'Campo de lavanda púrpura. Plantas aromáticas en hileras. Paisaje rural mediterráneo.' },
        { id: '4', url: flowerImage4, source: 'AP', title: 'Magnolia blanca sobre fondo negro. Pétalos elegantes con centro dorado. Simboliza pureza y dignidad.' },
        // Row 2
        { id: '5', url: flowerImage5, source: 'EFE', title: 'Campo de girasoles bajo cielo azul. Flores siguiendo la luz solar. Paisaje agrícola en verano.' },
        { id: '6', url: flowerImage6, source: 'Cordon', title: 'Gerbera rosa sobre fondo suave. Centro verde con pétalos delicados. Popular en floricultura.' },
        { id: '7', url: flowerImage7, source: 'Getty', title: 'Amapolas naranjas sobre fondo oscuro. Pétalos sedosos con centro negro. Simbolizan remembranza y sueños.' },
        { id: '8', url: flowerImage8, source: 'Corbis', title: 'Campo de cosmos rosados. Flores delicadas en ambiente natural. Atraen mariposas y abejas polinizadoras.' },
        // Row 3
        { id: '9', url: flowerImage9, source: 'Getty', title: 'Amapolas californianas naranjas. Flores vibrantes bajo cielo azul. Resistentes a la sequía mediterránea.' },
        { id: '10', url: flowerImage10, source: 'Reuters', title: 'Flores de cerezo en primavera. Pétalos blancos sobre cielo azul. Simbolizan renovación y belleza efímera.' },
        { id: '11', url: flowerImage11, source: 'AP', title: 'Campo de lavanda salvaje. Flores púrpuras en ambiente natural. Atraen abejas y mariposas polinizadoras.' },
        { id: '12', url: flowerImage12, source: 'EFE', title: 'Dalia rosa con centro amarillo. Pétalos delicados en jardín verde. Popular en arreglos florales decorativos.' }
      ];
      
      // Filter results based on selected sources
      const filteredResults = mockResults.filter(result => 
        selectedSources.includes(result.source)
      );
      
      setSearchResults(filteredResults);
      setIsLoading(false);
    }, 1500); // 1.5 second loading delay
  };

  const handleUploadImage = () => {
    console.log('Upload image clicked');
    onUploadImage();
  };

  const handleClose = () => {
    // Don't allow closing if upload is in progress
    if (isUploadingImages) {
      return;
    }
    
    // Only reset state if there's no previous search state (new search flow)
    if (!previousSearchState) {
      setSearchQuery('');
      setSelectedSources(['EFE', 'EP', 'AP', 'Reuters', 'Getty', 'Cordon', 'Corbis', 'Propio']);
      setIsDropdownOpen(false);
      setIsLoading(false);
      setSearchResults([]);
      setHasSearched(false);
    }
    setSelectedImageId(null);
    setSelectedImageIds([]);
    onClose();
  };

  const handleImageSelect = (imageId: string) => {
    if (isGalleryMode) {
      // Toggle image selection for gallery mode
      setSelectedImageIds(prev => {
        if (prev.includes(imageId)) {
          return prev.filter(id => id !== imageId);
        } else {
          return [...prev, imageId];
        }
      });
      console.log('Gallery image selected:', imageId);
    } else {
      // Single selection for normal mode
      setSelectedImageId(imageId);
      console.log('Image selected:', imageId);
    }
  };

  const handleImageConfirm = () => {
    // Create current search state to pass along
    const currentSearchState = {
      searchTerm: searchQuery,
      selectedSources: selectedSources,
      searchResults: searchResults.map(result => ({
        url: result.url,
        title: result.title || '',
        source: result.source,
        date: '22/5/2025'
      }))
    };

    if (isGalleryMode && selectedImageIds.length > 0 && onMultipleImagesSelected) {
      const selectedImages = searchResults.filter(result => selectedImageIds.includes(result.id));
      const imageData = selectedImages.map(image => ({
        url: image.url,
        title: image.title || '',
        source: image.source,
        date: '22/5/2025'
      }));
      onMultipleImagesSelected(imageData, currentSearchState);
      handleClose();
    } else if (!isGalleryMode && selectedImageId) {
      const selectedImage = searchResults.find(result => result.id === selectedImageId);
      if (selectedImage) {
        onImageSelected({
          url: selectedImage.url,
          title: selectedImage.title || '',
          source: selectedImage.source,
          date: '22/5/2025'
        }, currentSearchState);
        handleClose();
      }
    }
  };

  const handleThumbnailRemove = (imageId: string) => {
    setSelectedImageIds(prev => prev.filter(id => id !== imageId));
  };

  const handleSourceToggle = (source: string) => {
    setSelectedSources(prev => 
      prev.includes(source) 
        ? prev.filter(s => s !== source)
        : [...prev, source]
    );
  };

  const handleSelectAll = () => {
    if (selectedSources.length === sources.length) {
      setSelectedSources([]);
    } else {
      setSelectedSources([...sources]);
    }
  };

  const getDisplayText = () => {
    if (selectedSources.length === 0) {
      return 'Ninguna fuente seleccionada';
    } else if (selectedSources.length === sources.length) {
      return 'Todos';
    } else {
      return selectedSources.join(', ');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      } else if (!isUploadingImages) {
        handleClose();
      }
    }
    if (e.key === 'Enter' && searchQuery.trim() && !isLoading) {
      handleSearch();
    }
  };

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div 
        className={`bg-white rounded-lg shadow-lg w-[796px] ${isGalleryMode && selectedImageIds.length > 0 ? 'h-[580px]' : 'h-[512px]'} p-4 relative z-10 transition-all duration-300`}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          disabled={isUploadingImages}
          className={`absolute right-2 top-2 p-2 rounded-md z-10 transition-colors ${
            isUploadingImages 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'hover:bg-gray-100'
          }`}
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Upload Loading Overlay */}
        {isUploadingImages && (
          <div className="absolute inset-0 bg-white/95 rounded-lg flex flex-col items-center justify-center z-20">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900"></div>
              <div className="text-center">
                <p className="text-[16px] font-medium text-zinc-900 mb-2">
                  Subiendo imágenes...
                </p>
                {uploadProgress && (
                  <p className="text-[14px] text-zinc-600">
                    {uploadProgress}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col justify-between h-full">
          {/* Header and Search */}
          <div className="flex flex-col gap-4">
            {/* Header */}
            <div className="flex flex-row gap-3 h-[22px] items-start justify-start w-full">
              <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-zinc-900">
                <p className="block leading-[22px] whitespace-pre">{isGalleryMode ? 'Buscar multimedia' : 'Buscar imagen'}</p>
              </div>
            </div>

            {/* Search Form */}
            <div className="flex flex-row gap-4 items-end justify-start w-full">
              {/* Search Input */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block leading-none whitespace-pre">Buscar en archivo fotográfico</p>
                </label>
                <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc] focus-within:border-zinc-900 focus-within:ring-2 focus-within:ring-zinc-900 focus-within:ring-opacity-20 transition-all duration-200">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar en archivo fotográfico"
                    className="w-full px-3 py-3 text-[14px] text-zinc-900 placeholder-zinc-400 border-none outline-none bg-transparent"
                    disabled={isUploadingImages}
                  />
                </div>
              </div>

              {/* Source Dropdown */}
              <div className="flex flex-col gap-2 w-[194px]">
                <label className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block leading-none whitespace-pre">Fuente</p>
                </label>
                <div className="bg-white relative rounded shrink-0 w-full border border-[#cccccc]" data-dropdown-container>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    disabled={isUploadingImages}
                    className="w-full flex flex-row gap-2 items-center justify-start overflow-clip px-3 py-3 relative disabled:opacity-50"
                  >
                    <div className="flex-1 flex flex-col justify-center leading-[0] not-italic text-[14px] text-left text-zinc-900 overflow-hidden">
                      <p className="block leading-[20px] truncate">{getDisplayText()}</p>
                    </div>
                    <div className="flex flex-row items-center justify-center size-4">
                      <ChevronDown />
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && !isUploadingImages && (
                    <div className="absolute bg-white border border-[#cccccc] rounded-md shadow-lg mt-1 w-full z-20 top-full left-0 max-h-64 overflow-y-auto">
                      {/* Select All Option */}
                      <div className="flex items-center px-3 py-2 hover:bg-gray-50 border-b border-gray-100">
                        <input
                          type="checkbox"
                          id="select-all"
                          checked={selectedSources.length === sources.length}
                          onChange={handleSelectAll}
                          className="w-4 h-4 text-zinc-900 border-gray-300 rounded focus:ring-zinc-900 mr-3"
                        />
                        <label htmlFor="select-all" className="text-[14px] text-zinc-900 font-medium cursor-pointer">
                          Seleccionar todas
                        </label>
                      </div>
                      
                      {/* Individual Source Options */}
                      {sources.map((source) => (
                        <div key={source} className="flex items-center px-3 py-2 hover:bg-gray-50">
                          <input
                            type="checkbox"
                            id={`source-${source}`}
                            checked={selectedSources.includes(source)}
                            onChange={() => handleSourceToggle(source)}
                            className="w-4 h-4 text-zinc-900 border-gray-300 rounded focus:ring-zinc-900 mr-3"
                          />
                          <label htmlFor={`source-${source}`} className="text-[14px] text-zinc-900 cursor-pointer">
                            {source}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                disabled={!searchQuery.trim() || isLoading || isUploadingImages}
                className={`flex flex-col items-center justify-center overflow-clip p-0 relative rounded-md shrink-0 ${
                  searchQuery.trim() && !isLoading && !isUploadingImages
                    ? 'bg-zinc-900'
                    : 'bg-[rgba(204,204,204,0.45)]'
                }`}
              >
                <div className="flex flex-col gap-2 items-start justify-start overflow-clip px-[22px] py-[9px] relative shrink-0">
                  <div className={`font-medium leading-[0] not-italic relative shrink-0 text-[15px] text-left text-nowrap ${
                    searchQuery.trim() && !isLoading && !isUploadingImages
                      ? 'text-white'
                      : 'text-[rgba(24,24,27,0.4)]'
                  }`}>
                    <p className="block leading-[26px] whitespace-pre">
                      {isLoading ? 'Buscando...' : 'Buscar'}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Results Area */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex-1 flex items-center justify-center">
              {!hasSearched ? (
                <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[15px] text-left text-nowrap">
                  <p className="block leading-[1.4] whitespace-pre">
                    Buscar por título o palabra clave para ver resultados.
                  </p>
                </div>
              ) : isLoading ? (
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900"></div>
                  <div className="font-normal text-[#7a7a7a] text-[15px]">
                    <p className="block leading-[1.4]">Buscando imágenes...</p>
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[15px] text-left text-nowrap">
                  <p className="block leading-[1.4] whitespace-pre">
                    No se encontraron resultados para "{searchQuery}".
                  </p>
                </div>
              ) : (
                <div className="w-full max-h-[300px] overflow-y-auto px-1 py-2">
                  <div className="grid grid-cols-4 gap-3 auto-rows-max">
                    {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleImageSelect(result.id)}
                      disabled={isUploadingImages}
                      className={`aspect-[3/2] overflow-clip relative hover:opacity-80 transition-opacity rounded-sm group disabled:opacity-50 disabled:cursor-not-allowed ${
                        isGalleryMode
                          ? (selectedImageIds.includes(result.id) ? 'ring-2 ring-zinc-900 ring-offset-2' : '')
                          : (selectedImageId === result.id ? 'ring-2 ring-zinc-900 ring-offset-2' : '')
                      }`}
                    >
                      <img
                        src={result.url}
                        alt={result.title || 'Search result'}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Source indicator */}
                      <div className="absolute bg-[#ffffff] bottom-0 h-5 left-0 overflow-clip rounded-tr-[2px] w-[30px] z-10">
                        <div className="absolute flex items-center justify-center inset-0 text-[10px] font-medium text-black">
                          {result.source.slice(0, 3).toUpperCase()}
                        </div>
                      </div>

                      {/* Hover overlay with caption */}
                      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                        <div className="absolute flex flex-col justify-between inset-0 p-2">
                          <div className="flex-1 font-normal leading-[1.2] text-white text-[12px] text-left">
                            <p className="line-clamp-3">
                              {result.title}
                            </p>
                          </div>
                          <div className="flex flex-col items-start justify-start self-end">
                            <div className="font-normal leading-[1.2] text-white text-[10px] text-left">
                              <p>Descargar</p>
                            </div>
                            <div className="h-0 w-12 border-b border-white"></div>
                          </div>
                        </div>
                      </div>
                    </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Selected Images Thumbnails - Gallery Mode Only */}
            {isGalleryMode && selectedImageIds.length > 0 && (
              <>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 764 1">
                      <line id="Line 1" stroke="var(--stroke-0, #CCCCCC)" x2="764" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap gap-1.5 items-center justify-start mx-[0px] my-[4px]">
                  {selectedImageIds.map((imageId) => {
                    const selectedImage = searchResults.find(result => result.id === imageId);
                    return selectedImage ? (
                      <div key={imageId} className="overflow-clip relative shrink-0 size-[60px] group cursor-pointer">
                        <div 
                          className="absolute bg-[position:0%_0%,_50%_50%] left-0 size-[60px] top-0 rounded-sm"
                          style={{
                            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${selectedImage.url}')`,
                            backgroundSize: 'auto, cover'
                          }}
                        />
                        {/* Trash icon overlay - appears on hover */}
                        {!isUploadingImages && (
                          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-sm flex items-center justify-center">
                            <button
                              onClick={() => handleThumbnailRemove(imageId)}
                              className="text-white hover:text-red-400 transition-colors p-1"
                              aria-label="Deseleccionar imagen"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        )}
                      </div>
                    ) : null;
                  })}
                </div>
              </>
            )}
          </div>

          {/* Upload Button */}
          <div className="flex flex-row gap-2 items-center justify-between w-full">
            <button
              onClick={handleUploadImage}
              disabled={isUploadingImages}
              className={`bg-white relative rounded-md shrink-0 border border-[#cccccc] transition-colors ${
                isUploadingImages 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex flex-row items-center justify-center gap-2 overflow-clip px-3 py-1.5">
                {isUploadingImages ? (
                  <Upload className="w-4 h-4 text-zinc-900" />
                ) : null}
                <div className="font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-zinc-900">
                  <p className="block leading-[24px] whitespace-pre">
                    {isUploadingImages ? 'Subiendo...' : 'Subir imagen'}
                  </p>
                </div>
              </div>
            </button>
            
            {searchResults.length > 0 && (
              <button
                onClick={handleImageConfirm}
                disabled={isUploadingImages || (isGalleryMode ? selectedImageIds.length === 0 : !selectedImageId)}
                className={`relative rounded-md shrink-0 ${
                  isUploadingImages 
                    ? 'bg-[rgba(204,204,204,0.45)]'
                    : isGalleryMode 
                      ? (selectedImageIds.length > 0 ? 'bg-zinc-900' : 'bg-[rgba(204,204,204,0.45)]')
                      : (selectedImageId ? 'bg-zinc-900' : 'bg-[rgba(204,204,204,0.45)]')
                }`}
              >
                <div className="flex flex-col items-center justify-center overflow-clip px-3 py-1.5">
                  <div className={`font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${
                    isUploadingImages 
                      ? 'text-[rgba(24,24,27,0.4)]'
                      : isGalleryMode 
                        ? (selectedImageIds.length > 0 ? 'text-white' : 'text-[rgba(24,24,27,0.4)]')
                        : (selectedImageId ? 'text-white' : 'text-[rgba(24,24,27,0.4)]')
                  }`}>
                    <p className="block leading-[24px] whitespace-pre">Seleccionar</p>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
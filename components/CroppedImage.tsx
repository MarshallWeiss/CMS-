import React from 'react';

interface CroppedImageProps {
  src: string;
  alt?: string;
  cropData?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  className?: string;
  containerClassName?: string;
}

export function CroppedImage({ 
  src, 
  alt = '', 
  cropData, 
  className = '',
  containerClassName = ''
}: CroppedImageProps) {
  if (!cropData) {
    // No crop data, show full image with object-cover to fill container
    return (
      <div className={`relative overflow-hidden bg-gray-200 ${containerClassName}`}>
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover ${className}`}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-gray-200 flex items-center justify-center ${containerClassName}`}>
      <div 
        className="relative overflow-hidden"
        style={{
          // The visible area represents the crop dimensions
          // Scale it to fit within the container while maintaining aspect ratio
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      >
        <img 
          src={src} 
          alt={alt} 
          className={`absolute ${className}`}
          style={{
            // Scale the image so that 1 unit of crop = 1 unit of display
            // The crop coordinates are normalized (0-1), so we scale accordingly
            width: `${100 / cropData.width}%`,
            height: `${100 / cropData.height}%`,
            // Position the image so the crop area starts at (0,0) of our container
            left: `${-cropData.x / cropData.width * 100}%`,
            top: `${-cropData.y / cropData.height * 100}%`,
            objectFit: 'contain',
            // Center the result within the available space
            transformOrigin: 'center',
          }}
        />
      </div>
    </div>
  );
}
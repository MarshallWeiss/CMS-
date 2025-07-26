import React from 'react';
import { Trash2 } from 'lucide-react';
import { SplitButton } from "./SplitButton";

interface WidgetPreviewProps {
  onEditWidget?: () => void;
  onMediaOptionSelect?: (option: string) => void;
  selectedMediaType?: string;
  onDeleteWidget?: () => void;
}

function WidgetIcon() {
  return (
    <div className="relative shrink-0 size-[39.646px]" data-name="widget-icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="shapes">
          {/* Triangle */}
          <path
            d="M12 8 L20 22 L4 22 Z"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Square */}
          <rect
            x="4"
            y="26"
            width="16"
            height="12"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            rx="2"
          />
          {/* Circle */}
          <circle
            cx="30"
            cy="20"
            r="8"
            stroke="#7A7A7A"
            strokeWidth="2"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}

function VideoIcon() {
  return (
    <div className="relative shrink-0 size-[39.646px]" data-name="video-icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="video">
          {/* Video frame */}
          <rect
            x="4"
            y="10"
            width="32"
            height="20"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            rx="3"
          />
          {/* Play button */}
          <path
            d="M16 15 L26 20 L16 25 Z"
            fill="#7A7A7A"
            stroke="#7A7A7A"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function IFrameIcon() {
  return (
    <div className="relative shrink-0 size-[39.646px]" data-name="iframe-icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="iframe">
          {/* Browser window */}
          <rect
            x="4"
            y="8"
            width="32"
            height="24"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            rx="3"
          />
          {/* Browser bar */}
          <line
            x1="4"
            y1="14"
            x2="36"
            y2="14"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Code brackets */}
          <path
            d="M14 18 L10 22 L14 26"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M26 18 L30 22 L26 26"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}

function AudioIcon() {
  return (
    <div className="relative shrink-0 size-[39.646px]" data-name="audio-icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="audio">
          {/* Audio waves */}
          <path
            d="M8 20 L8 20"
            stroke="#7A7A7A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M12 16 L12 24"
            stroke="#7A7A7A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M16 12 L16 28"
            stroke="#7A7A7A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M20 8 L20 32"
            stroke="#7A7A7A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M24 12 L24 28"
            stroke="#7A7A7A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M28 16 L28 24"
            stroke="#7A7A7A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M32 20 L32 20"
            stroke="#7A7A7A"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

function ImageIcon() {
  return (
    <div className="relative shrink-0 size-[39.646px]" data-name="image-icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="image">
          {/* Image frame */}
          <rect
            x="4"
            y="8"
            width="32"
            height="24"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            rx="3"
          />
          {/* Sun/light source */}
          <circle
            cx="12"
            cy="16"
            r="3"
            stroke="#7A7A7A"
            strokeWidth="2"
            fill="none"
          />
          {/* Mountain/landscape */}
          <path
            d="M32 28 L24 18 L16 26 L8 20 L4 24"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}

function GalleryIcon() {
  return (
    <div className="relative shrink-0 size-[39.646px]" data-name="gallery-icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="gallery">
          {/* Back image */}
          <rect
            x="10"
            y="6"
            width="24"
            height="18"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            rx="2"
          />
          {/* Front image */}
          <rect
            x="6"
            y="16"
            width="24"
            height="18"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            rx="2"
          />
          {/* Image icon in front */}
          <circle
            cx="12"
            cy="22"
            r="2"
            fill="#7A7A7A"
          />
          <path
            d="M24 30 L18 24 L12 30"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}

export function WidgetPreview({ onEditWidget, onMediaOptionSelect, selectedMediaType = 'widget', onDeleteWidget }: WidgetPreviewProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const getMediaIcon = () => {
    switch (selectedMediaType) {
      case 'image':
        return <ImageIcon />;
      case 'video':
        return <VideoIcon />;
      case 'iframe':
        return <IFrameIcon />;
      case 'audio':
        return <AudioIcon />;
      case 'gallery':
        return <GalleryIcon />;
      case 'widget':
      default:
        return <WidgetIcon />;
    }
  };

  const getMediaText = () => {
    switch (selectedMediaType) {
      case 'image':
        return 'Imagen';
      case 'video':
        return 'Video';
      case 'iframe':
        return 'iFrame';
      case 'audio':
        return 'Audio';
      case 'gallery':
        return 'Galería';
      case 'widget':
      default:
        return 'Widget';
    }
  };

  return (
    <div 
      className="aspect-[566/425] bg-white box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded shrink-0 w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] bg-[rgba(204,204,204,0.4)] rounded-md shrink-0 w-full relative">
        {/* Default multimedia display */}
        <div
          className={`absolute box-border content-stretch flex flex-row gap-[15.859px] items-center justify-start p-0 top-[130px] translate-x-[-50%] transition-opacity duration-200 ${
            isHovered ? 'opacity-30' : 'opacity-100'
          }`}
          style={{ left: "calc(50% + 0.00251007px)" }}
        >
          <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 size-[39.646px]">
            {getMediaIcon()}
          </div>
          <div className="font-semibold leading-[0] not-italic relative shrink-0 text-[#7a7a7a] text-[16px] text-left text-nowrap">
            <p className="block leading-[22px] whitespace-pre">{getMediaText()}</p>
          </div>
        </div>

        {/* Hover overlay with split button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <SplitButton 
            onMainClick={onEditWidget}
            onOptionSelect={onMediaOptionSelect}
            hasWidget={true}
            selectedMediaType={selectedMediaType}
            editMode={true}
          />
          
          {/* Delete button */}
          {onDeleteWidget && (
            <button
              onClick={onDeleteWidget}
              className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-red-500 hover:text-red-600 p-2 rounded-md transition-colors duration-200 shadow-sm border border-gray-200"
              title="Eliminar multimedia"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
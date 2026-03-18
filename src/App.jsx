import { useEffect, useRef, useState } from "react";
import { ChromePicker } from 'react-color';

/* ---------------- ICONS ---------------- */

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="2" y="8" width="6" height="4" fill="#000" />
    <rect x="12" y="8" width="6" height="4" fill="#000" />
    <rect x="4" y="9" width="2" height="2" fill="#fff" />
    <rect x="14" y="9" width="2" height="2" fill="#fff" />
  </svg>
);

const HairIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="4" y="2" width="12" height="6" fill="#000" />
    <rect x="6" y="4" width="8" height="2" fill="#8b4513" />
    <rect x="3" y="8" width="2" height="4" fill="#000" />
    <rect x="15" y="8" width="2" height="4" fill="#000" />
  </svg>
);

const BrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="3" y="7" width="6" height="2" fill="#000" />
    <rect x="11" y="7" width="6" height="2" fill="#000" />
    <rect x="4" y="6" width="4" height="1" fill="#654321" />
    <rect x="12" y="6" width="4" height="1" fill="#654321" />
  </svg>
);

const NoseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="8" y="8" width="4" height="2" fill="#000" />
    <rect x="9" y="10" width="2" height="2" fill="#000" />
    <rect x="8" y="12" width="4" height="1" fill="#d2691e" />
  </svg>
);

const MouthIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="6" y="12" width="8" height="2" fill="#000" />
    <rect x="7" y="14" width="6" height="1" fill="#ff1493" />
    <rect x="8" y="15" width="4" height="1" fill="#ff1493" />
  </svg>
);

const RandomIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="2" y="4" width="8" height="2" fill="#000" />
    <rect x="10" y="4" width="8" height="2" fill="#000" />
    <rect x="2" y="9" width="8" height="2" fill="#000" />
    <rect x="10" y="9" width="8" height="2" fill="#000" />
    <rect x="2" y="14" width="8" height="2" fill="#000" />
    <rect x="10" y="14" width="8" height="2" fill="#000" />
    <rect x="8" y="2" width="2" height="2" fill="#4169e1" />
    <rect x="10" y="16" width="2" height="2" fill="#4169e1" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="8" y="2" width="4" height="8" fill="#000" />
    <rect x="6" y="6" width="8" height="4" fill="#000" />
    <rect x="4" y="10" width="12" height="2" fill="#000" />
    <rect x="2" y="14" width="16" height="2" fill="#000" />
    <rect x="6" y="16" width="8" height="2" fill="#32cd32" />
  </svg>
);

const ResetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="2" y="8" width="16" height="4" fill="#000" />
    <rect x="8" y="2" width="4" height="16" fill="#000" />
    <rect x="8" y="8" width="4" height="4" fill="#ff6347" />
    <rect x="6" y="6" width="2" height="2" fill="#ffa500" />
    <rect x="12" y="12" width="2" height="2" fill="#ffa500" />
  </svg>
);

const DarkModeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="8" y="2" width="4" height="4" fill="#4169e1" />
    <rect x="2" y="8" width="4" height="4" fill="#4169e1" />
    <rect x="14" y="8" width="4" height="4" fill="#4169e1" />
    <rect x="8" y="14" width="4" height="4" fill="#4169e1" />
    <rect x="8" y="8" width="4" height="4" fill="#191970" />
    <rect x="10" y="10" width="2" height="2" fill="#fff" />
  </svg>
);

const LightModeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="8" y="2" width="4" height="4" fill="#ffd700" />
    <rect x="2" y="8" width="4" height="4" fill="#ffd700" />
    <rect x="14" y="8" width="4" height="4" fill="#ffd700" />
    <rect x="8" y="14" width="4" height="4" fill="#ffd700" />
    <rect x="6" y="6" width="8" height="8" fill="#ffff00" />
    <rect x="9" y="9" width="2" height="2" fill="#ff8c00" />
  </svg>
);

const ColorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="2" y="2" width="4" height="4" fill="#ff0000" />
    <rect x="8" y="2" width="4" height="4" fill="#00ff00" />
    <rect x="14" y="2" width="4" height="4" fill="#0000ff" />
    <rect x="2" y="8" width="4" height="4" fill="#ffff00" />
    <rect x="8" y="8" width="4" height="4" fill="#ff00ff" />
    <rect x="14" y="8" width="4" height="4" fill="#00ffff" />
    <rect x="2" y="14" width="4" height="4" fill="#ffa500" />
    <rect x="8" y="14" width="4" height="4" fill="#800080" />
    <rect x="14" y="14" width="4" height="4" fill="#ffc0cb" />
  </svg>
);

const ShareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <rect x="8" y="2" width="4" height="6" fill="#000" />
    <rect x="2" y="8" width="4" height="4" fill="#000" />
    <rect x="14" y="8" width="4" height="4" fill="#000" />
    <rect x="8" y="14" width="4" height="4" fill="#000" />
    <rect x="6" y="6" width="2" height="2" fill="#000" />
    <rect x="12" y="6" width="2" height="2" fill="#000" />
    <rect x="6" y="12" width="2" height="2" fill="#000" />
    <rect x="12" y="12" width="2" height="2" fill="#000" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="2" y="4" width="12" height="8" fill="#1DA1F2" />
    <rect x="4" y="6" width="8" height="1" fill="#fff" />
    <rect x="3" y="8" width="10" height="1" fill="#fff" />
    <rect x="5" y="10" width="6" height="1" fill="#fff" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="2" y="2" width="12" height="12" fill="#1877F2" />
    <rect x="6" y="6" width="4" height="6" fill="#fff" />
    <rect x="7" y="4" width="2" height="4" fill="#fff" />
    <rect x="5" y="8" width="2" height="2" fill="#1877F2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="2" y="2" width="12" height="12" fill="#E4405F" />
    <rect x="4" y="4" width="8" height="8" fill="#fff" />
    <rect x="6" y="6" width="4" height="4" fill="#E4405F" />
    <rect x="7" y="7" width="2" height="2" fill="#fff" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="2" y="2" width="12" height="12" fill="#BD081C" />
    <rect x="6" y="4" width="1" height="8" fill="#fff" />
    <rect x="8" y="6" width="4" height="1" fill="#fff" />
    <rect x="7" y="8" width="2" height="2" fill="#fff" />
    <rect x="6" y="10" width="1" height="2" fill="#fff" />
  </svg>
);

const RedditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="2" y="6" width="12" height="4" fill="#FF4500" />
    <rect x="4" y="4" width="2" height="2" fill="#FF4500" />
    <rect x="10" y="4" width="2" height="2" fill="#FF4500" />
    <rect x="6" y="8" width="4" height="2" fill="#FF4500" />
    <rect x="7" y="10" width="2" height="2" fill="#FF4500" />
    <rect x="5" y="5" width="2" height="2" fill="#fff" />
    <rect x="9" y="5" width="2" height="2" fill="#fff" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="2" y="2" width="12" height="12" fill="#25D366" />
    <rect x="6" y="6" width="4" height="4" fill="#fff" />
    <rect x="7" y="7" width="2" height="2" fill="#25D366" />
    <rect x="4" y="10" width="8" height="2" fill="#25D366" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="2" y="2" width="12" height="12" fill="#0088CC" />
    <rect x="4" y="6" width="8" height="2" fill="#fff" />
    <rect x="6" y="4" width="4" height="1" fill="#fff" />
    <rect x="8" y="8" width="2" height="2" fill="#fff" />
    <rect x="10" y="10" width="2" height="2" fill="#fff" />
  </svg>
);

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="2" y="2" width="10" height="10" fill="#000" />
    <rect x="4" y="4" width="6" height="6" fill="#fff" />
    <rect x="6" y="6" width="8" height="8" fill="#000" />
    <rect x="8" y="8" width="4" height="4" fill="#fff" />
  </svg>
);

const CuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF69B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    <line x1="18" y1="6" x2="18" y2="10" />
    <line x1="16" y1="8" x2="20" y2="8" />
  </svg>
);

/* ---------------- ASSET IMPORT (PUBLIC) ---------------- */


const getAssets = (type, prefix, count) => {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `/assets/${type}/${prefix}_${num}.png`;
  });
};

const eyes = getAssets("Eyes", "eye", 24);
const brows = getAssets("Eyebrow", "eyebrow", 15);
const mouths = getAssets("Mouth", "mouth", 24);
const noses = getAssets("Nose", "nose", 24);
const hairs = getAssets("Hair", "hair", 15);

/* ---------------- APP ---------------- */

function App() {
  const canvasRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load dark mode preference from localStorage on initial render
    const savedDarkMode = localStorage.getItem('pookie-dark-mode');
    return savedDarkMode === 'true';
  });

  const [eye, setEye] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [nose, setNose] = useState(0);
  const [brow, setBrow] = useState(0);

  const [skinColor, setSkinColor] = useState("#F2C6A0");
  const [hairColor, setHairColor] = useState("#3b2a1a");
  const [eyeColor, setEyeColor] = useState("#000000");
  
  const [showHairPicker, setShowHairPicker] = useState(false);
  const [showEyePicker, setShowEyePicker] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [selectedSize, setSelectedSize] = useState(512);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState('.');

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 2000);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save dark mode preference to localStorage
    localStorage.setItem('pookie-dark-mode', newDarkMode.toString());
    
    // Add transition class for smooth animation
    document.body.classList.add('dark-mode-transition');
    
    setTimeout(() => {
      if (newDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      
      // Remove transition class after animation
      setTimeout(() => {
        document.body.classList.remove('dark-mode-transition');
      }, 500);
    }, 50);
  };

  const skinColors = [
    "#FFF5F0",
    "#FCE7DA",
    "#FAD8C8",
    "#F5C7B4",
    "#F2B9A0",
    "#E8A68C",
    "#E29A7C",
    "#DB8E70",
    "#D48264",
    "#C97859",
    "#C06E50",
    "#B86649",
    "#AF5F43",
    "#A6593E",
    "#9E5339",
    "#964E35",
    "#8C4830",
    "#82422C",
    "#783C27",
    "#6F3623",
    "#66311F",
    "#5C2B1B",
    "#532618",
    "#492114",
    "#3F1C11",
    "#36170E",
    "#2E130C",
    "#251009",
    "#1D0C07",
    "#140805"
  ];

  const hairColors = [
    "#000000",
    "#3b2a1a",
    "#5c3a21",
    "#8b5a2b",
    "#c19a6b",
    "#e6be8a",
    "#a52a2a",
    "#6a0dad",
  ];

  const eyeColors = [
    "#000000",
    "#3b82f6",
    "#22c55e",
    "#f59e0b",
    "#a855f7",
    "#ef4444",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots(prev => {
        if (prev.length >= 3) return '.';
        return prev + '.';
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw static "online . . ." animation
    ctx.clearRect(0, 0, 512, 512);
    ctx.fillStyle = '#000';
    ctx.font = '16px Press Start 2P, cursive';
    ctx.fillText('online . . .', 512 / 2 - 60, 512 / 2);

    // Show loading animation only when explicitly loading
    if (isLoading) {
      ctx.clearRect(0, 0, 512, 512);
      ctx.fillStyle = '#000';
      
      // Draw loading dots
      const dotSize = 8;
      const spacing = 20;
      const startX = (512 - (3 * dotSize + 2 * spacing)) / 2;
      const y = 512 / 2;
      
      for (let i = 0; i < 3; i++) {
        const x = startX + i * (dotSize + spacing);
        ctx.fillRect(x, y - dotSize/2, dotSize, dotSize);
      }
      
      // Draw "Loading..." text
      ctx.fillStyle = '#fff';
      ctx.font = '16px Press Start 2P, cursive';
      ctx.fillText('Loading...', 512 / 2 - 40, y + 30);
      return;
    }

    const images = [
      hairs[hair],
      brows[brow],
      eyes[eye],
      noses[nose],
      mouths[mouth],
    ];

    let loaded = 0;
    const loadedImages = [];

    images.forEach((src, i) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        loadedImages[i] = img;
        loaded++;

        if (loaded === images.length) {
          setIsLoading(false); // Stop loading animation
          ctx.clearRect(0, 0, 512, 512);

          /* SKIN BASE */
          ctx.fillStyle = skinColor;
          ctx.fillRect(0, 0, 512, 512);

          loadedImages.forEach((image, index) => {
            const tempCanvas = document.createElement("canvas");
            tempCanvas.width = 512;
            tempCanvas.height = 512;

            const tempCtx = tempCanvas.getContext("2d");

            tempCtx.drawImage(image, 0, 0, 512, 512);

            /* HAIR COLOR */
            if (index === 0) {
              tempCtx.globalCompositeOperation = "source-atop";
              tempCtx.fillStyle = hairColor;
              tempCtx.fillRect(0, 0, 512, 512);
            }

            /* EYE COLOR */
            if (index === 2) {
              tempCtx.globalCompositeOperation = "source-atop";
              tempCtx.fillStyle = eyeColor;
              tempCtx.fillRect(0, 0, 512, 512);
            }

            ctx.drawImage(tempCanvas, 0, 0);
          });
        }
      };
    });
  }, [eye, hair, mouth, nose, brow, skinColor, hairColor, eyeColor, isLoading]);

  /* ---------------- DOWNLOAD ---------------- */

  const downloadAvatar = (size = 512, format = 'png') => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    
    if (format === 'svg') {
      // Convert canvas to SVG (simplified version)
      const svgString = canvasToSVG(canvas);
      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      link.download = `pookie-avatar-${size}x${size}.svg`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
      showNotification(`Downloaded ${size}x${size} SVG avatar!`);
    } else {
      // Create a temporary canvas for different sizes
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      tempCanvas.width = size;
      tempCanvas.height = size;
      
      // Scale the original canvas to the new size
      tempCtx.drawImage(canvas, 0, 0, size, size);
      
      let mimeType = 'image/png';
      let extension = 'png';
      
      switch (format) {
        case 'jpeg':
        case 'jpg':
          mimeType = 'image/jpeg';
          extension = 'jpg';
          // Add white background for JPEG
          tempCtx.fillStyle = '#FFFFFF';
          tempCtx.fillRect(0, 0, size, size);
          tempCtx.drawImage(canvas, 0, 0, size, size);
          break;
        case 'webp':
          mimeType = 'image/webp';
          extension = 'webp';
          break;
        case 'bmp':
          mimeType = 'image/bmp';
          extension = 'bmp';
          break;
        default:
          mimeType = 'image/png';
          extension = 'png';
      }
      
      link.download = `pookie-avatar-${size}x${size}.${extension}`;
      link.href = tempCanvas.toDataURL(mimeType, 0.95);
      link.click();
      
      showNotification(`Downloaded ${size}x${size} ${extension.toUpperCase()} avatar!`);
    }
  };
  
  const canvasToSVG = (canvas) => {
    // Simplified SVG conversion - creates a basic SVG with the canvas content as image
    const dataUrl = canvas.toDataURL();
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${canvas.width}" height="${canvas.height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <image href="${dataUrl}" width="${canvas.width}" height="${canvas.height}"/>
</svg>`;
  };

  const shareToTwitter = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL();
    const text = "Check out my pookie avatar! 🧸";
    const url = window.location.href;
    
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    showNotification('Opened Twitter share!');
  };

  const shareToFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    showNotification('Opened Facebook share!');
  };

  const shareToInstagram = () => {
    // Instagram doesn't support direct sharing via URL, so we'll open Instagram and show instructions
    window.open('https://www.instagram.com/', '_blank');
    showNotification('Opened Instagram! Save your avatar and share it!');
  };

  const shareToPinterest = () => {
    const canvas = canvasRef.current;
    const description = "Check out my cute pookie avatar! 🧸";
    const url = window.location.href;
    
    // Open Pinterest create page - user will need to manually upload their avatar
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(description)}`, '_blank');
    showNotification('Opened Pinterest! Upload your avatar to create a pin!');
  };

  const shareToReddit = () => {
    const url = window.location.href;
    const title = "Check out my pookie avatar! 🧸";
    
    window.open(`https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
    showNotification('Opened Reddit share!');
  };

  const shareToWhatsApp = () => {
    const text = "Check out my pookie avatar! 🧸 " + window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    showNotification('Opened WhatsApp share!');
  };

  const shareToTelegram = () => {
    const text = "Check out my pookie avatar! 🧸 " + window.location.href;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Check out my pookie avatar! 🧸')}`, '_blank');
    showNotification('Opened Telegram share!');
  };

  const copyToClipboard = async () => {
    const canvas = canvasRef.current;
    try {
      const blob = await new Promise(resolve => canvas.toBlob(resolve));
      const item = new ClipboardItem({ 'image/png': blob });
      await navigator.clipboard.write([item]);
      showNotification('Avatar copied to clipboard!');
    } catch (err) {
      // Fallback for browsers that don't support clipboard images
      const dataUrl = canvas.toDataURL();
      const textArea = document.createElement('textarea');
      textArea.value = dataUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showNotification('Avatar data copied to clipboard!');
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="main-wrapper min-h-screen flex items-center justify-center bg-pink-50">
      <div className="w-full max-w-6xl bg-white border-4 border-black p-4 lg:p-6 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              POOKIE GENERATOR
            </h1>
            <span className={`ml-3 text-xs px-3 py-2 border-2 border-black rounded-full ${isDarkMode ? 'bg-linear-to-r from-[#3B1C32] to-[#1A1A1D] text-[#F5D3C4]' : 'bg-linear-to-r from-[#A7AAE1] to-[#696FC7] text-[#402E7A]'}`}>
              online<span className="inline-block">{loadingDots}</span>
            </span>
          </div>
          <button
            onClick={toggleDarkMode}
            className="px-6 py-3 border-2 border-black bg-accent font-bold flex items-center justify-center"
          >
            {isDarkMode ? (<><LightModeIcon /> <span className="ml-2">LIGHT MODE</span></>) : (<><DarkModeIcon /> <span className="ml-2">DARK MODE</span></>)}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          {/* LEFT PANEL */}

          <div className="border-4 border-black p-6 space-y-4">
            <h3 className="text-center">Features</h3>
            <button
              onClick={() => {
                setHair((hair + 1) % hairs.length);
                showNotification('Hair changed!');
              }}
              className="border p-3 w-full flex items-center justify-center"
            >
              <HairIcon /> <span className="ml-2">Change Hair</span>
            </button>

            <button
              onClick={() => {
                setEye((eye + 1) % eyes.length);
                showNotification('Eyes changed!');
              }}
              className="border p-3 w-full flex items-center justify-center"
            >
              <EyeIcon /> <span className="ml-2">Change Eyes</span>
            </button>

            <button
              onClick={() => {
                setBrow((brow + 1) % brows.length);
                showNotification('Eyebrows changed!');
              }}
              className="border p-3 w-full flex items-center justify-center"
            >
              <BrowIcon /> <span className="ml-2">Change Brows</span>
            </button>

            <button
              onClick={() => {
                setNose((nose + 1) % noses.length);
                showNotification('Nose changed!');
              }}
              className="border p-3 w-full flex items-center justify-center"
            >
              <NoseIcon /> <span className="ml-2">Change Nose</span>
            </button>

            <button
              onClick={() => {
                setMouth((mouth + 1) % mouths.length);
                showNotification('Mouth changed!');
              }}
              className="border p-3 w-full flex items-center justify-center"
            >
              <MouthIcon /> <span className="ml-2">Change Mouth</span>
            </button>
          </div>

          {/* CENTER CANVAS */}

          <div className="canvas-container border-4 border-black p-4 lg:p-6 flex flex-col items-center justify-center relative">
            <h3 className="mb-4">Avatar Preview</h3>
            <canvas
              ref={canvasRef}
              width={512}
              height={512}
              className="border-4 border-black bg-white shadow-lg w-full max-w-lg h-auto"
              style={{ imageRendering: "pixelated" }}
            />
            <p className="text-sm mt-3 opacity-75">512 × 512 pixels</p>
            
            {/* Notification */}
            {notification.show && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 border-2 border-white rounded-lg z-50 animate-pulse">
                {notification.message}
              </div>
            )}
          </div>

          {/* RIGHT PANEL */}

          <div className="border-4 border-black p-6 space-y-4">
            <h3 className="text-center">Controls</h3>
            <button
              className="border p-3 w-full flex items-center justify-center"
              onClick={() => {
                setEye(Math.floor(Math.random() * eyes.length));
                setHair(Math.floor(Math.random() * hairs.length));
                setMouth(Math.floor(Math.random() * mouths.length));
                setNose(Math.floor(Math.random() * noses.length));
                setBrow(Math.floor(Math.random() * brows.length));
                showNotification('Randomized avatar!');
              }}
            >
              <RandomIcon /> <span className="ml-2">Random</span>
            </button>

            <div className="relative">
              <button
                className="border p-3 w-full flex items-center justify-center"
                onClick={() => {
                  setShowExportMenu(!showExportMenu);
                  setShowShareMenu(false);
                }}
              >
                <DownloadIcon /> <span className="ml-2">Download</span>
              </button>
              {showExportMenu && (
                <div className="absolute top-full left-0 w-full border-4 border-black bg-white z-40 mt-1">
                  <div className="border-b-2 border-black p-2">
                    <p className="text-xs font-bold mb-2">Size:</p>
                    <div className="grid grid-cols-1 gap-1">
                      <button onClick={() => setSelectedSize(256)} className={`px-2 py-1 text-xs border border-black hover:bg-gray-100 text-center ${selectedSize === 256 ? 'bg-blue-200' : ''}`}>256×256</button>
                      <button onClick={() => setSelectedSize(512)} className={`px-2 py-1 text-xs border border-black hover:bg-gray-100 text-center ${selectedSize === 512 ? 'bg-blue-200' : ''}`}>512×512</button>
                      <button onClick={() => setSelectedSize(1024)} className={`px-2 py-1 text-xs border border-black hover:bg-gray-100 text-center ${selectedSize === 1024 ? 'bg-blue-200' : ''}`}>1024×1024</button>
                    </div>
                  </div>
                  <div className="p-2">
                    <p className="text-xs font-bold mb-2">Format:</p>
                    <div className="grid grid-cols-2 gap-1">
                      <button onClick={() => downloadAvatar(selectedSize, 'png')} className="px-2 py-1 text-xs border border-black hover:bg-gray-100 text-center">PNG</button>
                      <button onClick={() => downloadAvatar(selectedSize, 'jpg')} className="px-2 py-1 text-xs border border-black hover:bg-gray-100 text-center">JPEG</button>
                      <button onClick={() => downloadAvatar(selectedSize, 'webp')} className="px-2 py-1 text-xs border border-black hover:bg-gray-100 text-center">WebP</button>
                      <button onClick={() => downloadAvatar(selectedSize, 'bmp')} className="px-2 py-1 text-xs border border-black hover:bg-gray-100 text-center">BMP</button>
                      <button onClick={() => downloadAvatar(selectedSize, 'svg')} className="px-2 py-1 text-xs border border-black hover:bg-gray-100 text-center col-span-2">SVG</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="border p-3 w-full flex items-center justify-center"
                onClick={() => {
                  setShowShareMenu(!showShareMenu);
                  setShowExportMenu(false);
                }}
              >
                <ShareIcon /> <span className="ml-2">Share</span>
              </button>
              {showShareMenu && (
                <div className="absolute top-full left-0 w-full border-4 border-black bg-white z-40 mt-1 max-h-64 overflow-y-auto">
                  <button onClick={() => { shareToTwitter(); setShowShareMenu(false); }} className="w-full px-4 py-2 border-b-2 border-black hover:bg-gray-100">Twitter</button>
                  <button onClick={() => { shareToFacebook(); setShowShareMenu(false); }} className="w-full px-4 py-2 border-b-2 border-black hover:bg-gray-100">Facebook</button>
                  <button onClick={() => { shareToInstagram(); setShowShareMenu(false); }} className="w-full px-4 py-2 border-b-2 border-black hover:bg-gray-100">Instagram</button>
                  <button onClick={() => { shareToPinterest(); setShowShareMenu(false); }} className="w-full px-4 py-2 border-b-2 border-black hover:bg-gray-100">Pinterest</button>
                  <button onClick={() => { shareToReddit(); setShowShareMenu(false); }} className="w-full px-4 py-2 border-b-2 border-black hover:bg-gray-100">Reddit</button>
                  <button onClick={() => { shareToTelegram(); setShowShareMenu(false); }} className="w-full px-4 py-2 border-b-2 border-black hover:bg-gray-100">Telegram</button>
                  <button onClick={() => { copyToClipboard(); setShowShareMenu(false); }} className="w-full px-4 py-2 hover:bg-gray-100">Copy Image</button>
                </div>
              )}
            </div>

            <button
              className="border p-3 w-full flex items-center justify-center"
              onClick={() => {
                setEye(0);
                setHair(0);
                setMouth(0);
                setNose(0);
                setBrow(0);
                setSkinColor("#F2C6A0");
                setHairColor("#3b2a1a");
                setEyeColor("#000000");
                showNotification('Avatar reset to default!');
              }}
            >
              <ResetIcon /> <span className="ml-2">Reset</span>
            </button>
          </div>
        </div>

        {/* COLOR SECTION */}

        <div className="mt-8 border-t-4 border-black pt-8">
          <h3 className="text-center mb-6">Color Customization</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hair Color */}

            <div className="border-4 border-black p-6">
              <h3 className="mb-4 text-center">Hair Color</h3>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowHairPicker(!showHairPicker);
                      setShowEyePicker(false);
                    }}
                    className="px-6 py-3 border-2 border-black bg-accent font-bold text-sm flex items-center justify-center"
                  >
                    <ColorIcon /> <span className="ml-2">Choose Hair Color</span>
                  </button>
                  {showHairPicker && (
                    <div className="absolute top-16 left-0 z-50 border-4 border-black bg-white">
                      <ChromePicker
                        color={hairColor}
                        onChange={(color) => setHairColor(color.hex)}
                        disableAlpha={true}
                      />
                      <button
                        onClick={() => setShowHairPicker(false)}
                        className="w-full px-4 py-2 bg-accent border-t-2 border-black font-bold"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <div 
                    className="w-12 h-12 border-2 border-black mx-auto"
                    style={{ backgroundColor: hairColor }}
                  />
                  <p className="text-xs mt-2 opacity-75">{hairColor}</p>
                </div>
              </div>
            </div>

            {/* Eye Color */}

            <div className="border-4 border-black p-6">
              <h3 className="mb-4 text-center">Eye Color</h3>
              <div className="flex flex-col items-center">
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowEyePicker(!showEyePicker);
                      setShowHairPicker(false);
                    }}
                    className="px-6 py-3 border-2 border-black bg-accent font-bold text-sm flex items-center justify-center"
                  >
                    <ColorIcon /> <span className="ml-2">Choose Eye Color</span>
                  </button>
                  {showEyePicker && (
                    <div className="absolute top-16 left-0 z-50 border-4 border-black bg-white">
                      <ChromePicker
                        color={eyeColor}
                        onChange={(color) => setEyeColor(color.hex)}
                        disableAlpha={true}
                      />
                      <button
                        onClick={() => setShowEyePicker(false)}
                        className="w-full px-4 py-2 bg-accent border-t-2 border-black font-bold"
                      >
                        Close
                      </button>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <div 
                    className="w-12 h-12 border-2 border-black mx-auto"
                    style={{ backgroundColor: eyeColor }}
                  />
                  <p className="text-xs mt-2 opacity-75">{eyeColor}</p>
                </div>
              </div>
            </div>

            {/* Skin Color */}

            <div className="border-4 border-black p-6">
              <h3 className="mb-4 text-center">Skin Color</h3>
              <div className="flex flex-col items-center">
                <div className="grid grid-cols-6 gap-1 max-h-48 overflow-y-auto p-2 border-2 border-black bg-gray-50">
                  {skinColors.map((color) => (
                    <div
                      key={color}
                      onClick={() => setSkinColor(color)}
                      style={{ 
                        backgroundColor: color,
                        width: '32px',
                        height: '32px',
                        border: '2px solid black',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'inline-block'
                      }}
                      className={`transition-all duration-200 hover:scale-110 hover:border-2 ${
                        skinColor === color ? 'ring-2 ring-blue-400 border-2' : ''
                      }`}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



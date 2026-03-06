import { useEffect, useRef, useState } from "react";

// Pixelated SVG Icons
const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="inline-block mr-1">
    <rect x="2" y="8" width="6" height="4" fill="#000" />
    <rect x="12" y="8" width="6" height="4" fill="#000" />
    <rect x="4" y="10" width="2" height="2" fill="#fff" />
    <rect x="14" y="10" width="2" height="2" fill="#fff" />
  </svg>
);

const HairIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="inline-block mr-1">
    <rect x="4" y="2" width="12" height="2" fill="#8B4513" />
    <rect x="2" y="4" width="16" height="2" fill="#8B4513" />
    <rect x="2" y="6" width="16" height="2" fill="#8B4513" />
    <rect x="4" y="8" width="12" height="2" fill="#8B4513" />
    <rect x="6" y="10" width="8" height="2" fill="#8B4513" />
  </svg>
);

const BrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="inline-block mr-1">
    <rect x="3" y="7" width="6" height="2" fill="#000" />
    <rect x="11" y="7" width="6" height="2" fill="#000" />
  </svg>
);

const NoseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="inline-block mr-1">
    <rect x="8" y="8" width="4" height="2" fill="#000" />
    <rect x="9" y="10" width="2" height="2" fill="#000" />
  </svg>
);

const MouthIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="inline-block mr-1">
    <rect x="6" y="12" width="8" height="2" fill="#000" />
    <rect x="7" y="14" width="6" height="2" fill="#000" />
  </svg>
);

// Sun and Moon Icons for Dark Mode Toggle
const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="inline-block mr-2 sun-icon">
    <circle cx="10" cy="10" r="6" fill="#FFD700" />
    <rect x="9" y="1" width="2" height="3" fill="#FFD700" />
    <rect x="9" y="16" width="2" height="3" fill="#FFD700" />
    <rect x="1" y="9" width="3" height="2" fill="#FFD700" />
    <rect x="16" y="9" width="3" height="2" fill="#FFD700" />
    <rect x="3" y="3" width="2" height="2" fill="#FFD700" />
    <rect x="15" y="3" width="2" height="2" fill="#FFD700" />
    <rect x="3" y="15" width="2" height="2" fill="#FFD700" />
    <rect x="15" y="15" width="2" height="2" fill="#FFD700" />
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="inline-block mr-2 moon-icon">
    <circle cx="10" cy="10" r="6" fill="#F0F0F0" />
    <circle cx="12" cy="8" r="5" fill="#1a1a1a" />
    <circle cx="8" cy="12" r="3" fill="#1a1a1a" />
    <circle cx="11" cy="13" r="2" fill="#1a1a1a" />
  </svg>
);

const DiceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" className="inline-block mr-1 animate-spin-slow">
    <rect x="2" y="2" width="16" height="16" fill="#fff" stroke="#000" strokeWidth="2" />
    <rect x="4" y="4" width="2" height="2" fill="#000" />
    <rect x="14" y="4" width="2" height="2" fill="#000" />
    <rect x="9" y="9" width="2" height="2" fill="#000" />
    <rect x="4" y="14" width="2" height="2" fill="#000" />
    <rect x="14" y="14" width="2" height="2" fill="#000" />
  </svg>
);

// Auto import images
const eyes = Object.values(
  import.meta.glob("./assets/Eyes/*.png", { eager: true, import: "default" })
);

const hairs = Object.values(
  import.meta.glob("./assets/Hair/*.png", { eager: true, import: "default" })
);

const mouths = Object.values(
  import.meta.glob("./assets/Mouth/*.png", { eager: true, import: "default" })
);

const noses = Object.values(
  import.meta.glob("./assets/Nose/*.png", { eager: true, import: "default" })
);

const brows = Object.values(
  import.meta.glob("./assets/Eyebrow/*.png", { eager: true, import: "default" })
);

// Pixelated Bear Icon
const BearIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="inline-block mr-2 animate-bounce-slow">
    <rect x="6" y="2" width="4" height="4" fill="#8B4513" />
    <rect x="14" y="2" width="4" height="4" fill="#8B4513" />
    <rect x="4" y="4" width="16" height="12" fill="#D2691E" />
    <rect x="2" y="6" width="20" height="10" fill="#D2691E" />
    <rect x="8" y="8" width="2" height="2" fill="#000" />
    <rect x="14" y="8" width="2" height="2" fill="#000" />
    <rect x="10" y="12" width="4" height="2" fill="#000" />
    <rect x="6" y="16" width="3" height="4" fill="#8B4513" />
    <rect x="15" y="16" width="3" height="4" fill="#8B4513" />
  </svg>
);

function App() {
  const canvasRef = useRef(null);
  
  const [eye, setEye] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [nose, setNose] = useState(0);
  const [brow, setBrow] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [skinColor, setSkinColor] = useState("#F2C6A0");

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
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
    "#FFF5F0","#FCE7DA","#FAD8C8","#F5C7B4","#F2B9A0",
    "#E8A68C","#E29A7C","#DB8E70","#D48264","#C97859",
    "#C06E50","#B86649","#AF5F43","#A6593E","#9E5339",
    "#964E35","#8C4830","#82422C","#783C27","#6F3623",
    "#66311F","#5C2B1B","#532618","#492114","#3F1C11",
    "#36170E","#2E130C","#251009","#1D0C07","#140805"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const images = [
      hairs[hair],
      brows[brow],
      eyes[eye],
      noses[nose],
      mouths[mouth]
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
          ctx.clearRect(0, 0, 512, 512);
          ctx.fillStyle = skinColor;
          ctx.fillRect(6, 6, 500, 500);

          loadedImages.forEach((image) => {
            ctx.drawImage(image, 6, 6, 500, 500);
          });
        }
      }
    });
  }, [eye, hair, mouth, nose, brow, skinColor]);

  return (

    <div className="min-h-screen flex items-center justify-center bg-pink-50">

      <div className="w-full max-w-7xl p-6 bg-white border-4 border-black rounded-xl text-center shadow-[6px_6px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_black] transition-all duration-300">

        <div className="border-b-4 border-black pb-4 mb-6">
          <h1 className="text-3xl font-bold text-black">
            <BearIcon /> POOKIE GENERATOR
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-6">
          
          {/* FEATURES PANEL */}
          <div className="col-span-3 border-4 border-black p-4 bg-gray-50">
            <h2 className="text-lg font-bold mb-4 text-black border-b-2 border-black pb-2">FEATURES PANEL</h2>
            
            <div className="space-y-3">
              <div className="border-2 border-black p-3 bg-white">
                <h3 className="font-bold text-sm mb-2">Hair Selector</h3>
                <button className="w-full border-2 border-black bg-pink-200 p-2 font-semibold transition-all duration-200 hover:bg-pink-300 hover:scale-105 active:scale-95 pixel-bounce"
                  onClick={() => setHair((hair + 1) % hairs.length)}>
                  <div className="flex items-center justify-center">
                    <HairIcon />
                    <span className="ml-2">Change Hair</span>
                  </div>
                </button>
              </div>

              <div className="border-2 border-black p-3 bg-white">
                <h3 className="font-bold text-sm mb-2">Eyes Selector</h3>
                <button className="w-full border-2 border-black bg-pink-200 p-2 font-semibold transition-all duration-200 hover:bg-pink-300 hover:scale-105 active:scale-95 pixel-bounce"
                  onClick={() => setEye((eye + 1) % eyes.length)}>
                  <div className="flex items-center justify-center">
                    <EyeIcon />
                    <span className="ml-2">Change Eyes</span>
                  </div>
                </button>
              </div>

              <div className="border-2 border-black p-3 bg-white">
                <h3 className="font-bold text-sm mb-2">Nose Selector</h3>
                <button className="w-full border-2 border-black bg-pink-200 p-2 font-semibold transition-all duration-200 hover:bg-pink-300 hover:scale-105 active:scale-95 pixel-bounce"
                  onClick={() => setNose((nose + 1) % noses.length)}>
                  <div className="flex items-center justify-center">
                    <NoseIcon />
                    <span className="ml-2">Change Nose</span>
                  </div>
                </button>
              </div>

              <div className="border-2 border-black p-3 bg-white">
                <h3 className="font-bold text-sm mb-2">Mouth Selector</h3>
                <button className="w-full border-2 border-black bg-pink-200 p-2 font-semibold transition-all duration-200 hover:bg-pink-300 hover:scale-105 active:scale-95 pixel-bounce"
                  onClick={() => setMouth((mouth + 1) % mouths.length)}>
                  <div className="flex items-center justify-center">
                    <MouthIcon />
                    <span className="ml-2">Change Mouth</span>
                  </div>
                </button>
              </div>

              <div className="border-2 border-black p-3 bg-white">
                <h3 className="font-bold text-sm mb-2">Eyebrows Selector</h3>
                <button className="w-full border-2 border-black bg-pink-200 p-2 font-semibold transition-all duration-200 hover:bg-pink-300 hover:scale-105 active:scale-95 pixel-bounce"
                  onClick={() => setBrow((brow + 1) % brows.length)}>
                  <div className="flex items-center justify-center">
                    <BrowIcon />
                    <span className="ml-2">Change Eyebrows</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* AVATAR WINDOW */}
          <div className="col-span-6 border-4 border-black p-6 bg-gray-50 flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold mb-4 text-black border-b-2 border-black pb-2">AVATAR WINDOW</h2>
            <canvas
              ref={canvasRef}
              width={512}
              height={512}
              className="border-4 border-black bg-white shadow-lg"
              style={{ imageRendering: 'pixelated' }}
            />
            <p className="text-sm text-gray-600 mt-2">512 x 512 Avatar Canvas</p>
          </div>

          {/* CONTROLS PANEL */}
          <div className="col-span-3 border-4 border-black p-4 bg-gray-50">
            <h2 className="text-lg font-bold mb-4 text-black border-b-2 border-black pb-2">CONTROLS PANEL</h2>
            
            <div className="space-y-3">
              <div className="border-2 border-black p-3 bg-white">
                <h3 className="font-bold text-sm mb-2">Random</h3>
                <button
                  className="w-full border-2 border-black bg-pink-300 p-2 font-bold transition-all duration-300 hover:bg-pink-400 hover:scale-105 active:scale-95 pixel-shake"
                  onClick={() => {
                    setEye(Math.floor(Math.random() * eyes.length))
                    setHair(Math.floor(Math.random() * hairs.length))
                    setMouth(Math.floor(Math.random() * mouths.length))
                    setNose(Math.floor(Math.random() * noses.length))
                    setBrow(Math.floor(Math.random() * brows.length))
                  }}
                >
                  <DiceIcon /> Random Pookie
                </button>
              </div>

              <div className="border-2 border-black p-3 bg-white">
                <h3 className="font-bold text-sm mb-2">Download</h3>
                <button
                  className="w-full border-2 border-black bg-blue-200 p-2 font-bold transition-all duration-200 hover:bg-blue-300 hover:scale-105 active:scale-95"
                  onClick={() => {
                    const canvas = canvasRef.current;
                    const link = document.createElement('a');
                    link.download = 'pookie-avatar.png';
                    link.href = canvas.toDataURL();
                    link.click();
                  }}
                >
                  📥 Download PNG
                </button>
              </div>

              <div className="border-2 border-black p-3 bg-white">
                <h3 className="font-bold text-sm mb-2">Reset</h3>
                <button
                  className="w-full border-2 border-black bg-red-200 p-2 font-bold transition-all duration-200 hover:bg-red-300 hover:scale-105 active:scale-95"
                  onClick={() => {
                    setEye(0)
                    setHair(0)
                    setMouth(0)
                    setNose(0)
                    setBrow(0)
                    setSkinColor('#F2C6A0')
                  }}
                >
                  🔄 Reset Avatar
                </button>
              </div>

              <div className="border-2 border-black p-3 bg-white">
                <h3 className="font-bold text-sm mb-2">Dark Mode</h3>
                <button
                  className="w-full border-2 border-black bg-gray-200 p-2 font-bold transition-all duration-200 hover:bg-gray-300 hover:scale-105 active:scale-95"
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? <SunIcon /> : <MoonIcon />}
                  {isDarkMode ? ' Light Mode' : ' Dark Mode'}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* COLOR CUSTOMIZATION SECTION */}
        <div className="border-t-4 border-black pt-6 mt-6">
          <h2 className="text-lg font-bold mb-4 text-black border-b-2 border-black pb-2">COLOR CUSTOMIZATION</h2>
          <div className="grid grid-cols-3 gap-6">
            
            <div className="border-2 border-black p-4 bg-gray-50">
              <h3 className="font-bold text-sm mb-3">Hair Color</h3>
              <div className="grid grid-cols-4 gap-2">
                {['#8B4513', '#D2691E', '#FFD700', '#000000'].map((color, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 border-2 border-black hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                    onClick={() => {/* TODO: Implement hair color change */}}
                  />
                ))}
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-gray-50">
              <h3 className="font-bold text-sm mb-3">Eye Color</h3>
              <div className="grid grid-cols-4 gap-2">
                {['#000000', '#4169E1', '#228B22', '#8B4513'].map((color, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 border-2 border-black hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                    onClick={() => {/* TODO: Implement eye color change */}}
                  />
                ))}
              </div>
            </div>

            <div className="border-2 border-black p-4 bg-gray-50">
              <h3 className="font-bold text-sm mb-3">Skin Color</h3>
              <div className="grid grid-cols-6 gap-1 max-h-48 overflow-y-auto">
                {skinColors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSkinColor(color)}
                    className={`w-8 h-8 border border-black transition-all duration-200 hover:scale-110 hover:border-2 ${
                      skinColor === color ? 'ring-2 ring-blue-400 border-2' : ''
                    }`}
                    style={{ backgroundColor: color }}
                    title={`Skin tone ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>

  );

}

export default App;
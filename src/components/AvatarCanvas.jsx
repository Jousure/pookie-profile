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
  import.meta.glob("../assets/Eyes/*.png", { eager: true, import: "default" })
);

const hairs = Object.values(
  import.meta.glob("../assets/Hair/*.png", { eager: true, import: "default" })
);

const mouths = Object.values(
  import.meta.glob("../assets/Mouth/*.png", { eager: true, import: "default" })
);

const noses = Object.values(
  import.meta.glob("../assets/Nose/*.png", { eager: true, import: "default" })
);

const brows = Object.values(
  import.meta.glob("../assets/Eyebrow/*.png", { eager: true, import: "default" })
);

export default function AvatarCanvas() {

  const canvasRef = useRef(null);

  const [eye, setEye] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [nose, setNose] = useState(0);
  const [brow, setBrow] = useState(0);
  const [skinColor, setSkinColor] = useState("#F2C6A0");

  const skinColors = [
    { name: "Light", color: "#F2C6A0" },
    { name: "Medium", color: "#E5A87D" },
    { name: "Tan", color: "#D4A574" },
    { name: "Olive", color: "#C19A6B" },
    { name: "Brown", color: "#A67C52" },
    { name: "Dark", color: "#8B5A3C" }
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
    <div className="text-center">

      <canvas
        ref={canvasRef}
        width={512}
        height={512}
        className="border-4 border-black rounded-md mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
        style={{ imageRendering: 'pixelated' }}
      />

      <div className="grid grid-cols-2 gap-3 mt-4">

        <button className="border-4 border-black bg-pink-200 p-2 font-semibold transition-all duration-200 hover:bg-pink-300 hover:scale-105 hover:shadow-lg active:scale-95 pixel-bounce"
          onClick={() => setEye((eye + 1) % eyes.length)}>
          <div className="flex items-center justify-center">
            <EyeIcon />
            <span className="ml-1">Eyes</span>
          </div>
          <div className="mt-1">
            <img src={eyes[eye]} alt="Eye preview" className="w-8 h-8 mx-auto object-contain" style={{ imageRendering: 'pixelated' }} />
          </div>
        </button>

        <button className="border-4 border-black bg-pink-200 p-2 font-semibold transition-all duration-200 hover:bg-pink-300 hover:scale-105 hover:shadow-lg active:scale-95 pixel-bounce"
          onClick={() => setHair((hair + 1) % hairs.length)}>
          <div className="flex items-center justify-center">
            <HairIcon />
            <span className="ml-1">Hair</span>
          </div>
          <div className="mt-1">
            <img src={hairs[hair]} alt="Hair preview" className="w-8 h-8 mx-auto object-contain" style={{ imageRendering: 'pixelated' }} />
          </div>
        </button>

        <button className="border-4 border-black bg-pink-200 p-2 font-semibold transition-all duration-200 hover:bg-pink-300 hover:scale-105 hover:shadow-lg active:scale-95 pixel-bounce"
          onClick={() => setBrow((brow + 1) % brows.length)}>
          <div className="flex items-center justify-center">
            <BrowIcon />
            <span className="ml-1">Brows</span>
          </div>
          <div className="mt-1">
            <img src={brows[brow]} alt="Brow preview" className="w-8 h-8 mx-auto object-contain" style={{ imageRendering: 'pixelated' }} />
          </div>
        </button>

        <button className="border-4 border-black bg-pink-200 p-2 font-semibold transition-all duration-200 hover:bg-pink-300 hover:scale-105 hover:shadow-lg active:scale-95 pixel-bounce"
          onClick={() => setNose((nose + 1) % noses.length)}>
          <div className="flex items-center justify-center">
            <NoseIcon />
            <span className="ml-1">Nose</span>
          </div>
          <div className="mt-1">
            <img src={noses[nose]} alt="Nose preview" className="w-8 h-8 mx-auto object-contain" style={{ imageRendering: 'pixelated' }} />
          </div>
        </button>

        <button className="border-4 border-black bg-pink-200 p-2 font-semibold transition-all duration-200 hover:bg-pink-300 hover:scale-105 hover:shadow-lg active:scale-95 pixel-bounce"
          onClick={() => setMouth((mouth + 1) % mouths.length)}>
          <div className="flex items-center justify-center">
            <MouthIcon />
            <span className="ml-1">Mouth</span>
          </div>
          <div className="mt-1">
            <img src={mouths[mouth]} alt="Mouth preview" className="w-8 h-8 mx-auto object-contain" style={{ imageRendering: 'pixelated' }} />
          </div>
        </button>

      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2 text-black">Skin Color</h3>
        <div className="grid grid-cols-3 gap-2">
          {skinColors.map((skin, index) => (
            <button
              key={index}
              onClick={() => setSkinColor(skin.color)}
              className={`border-4 border-black p-2 font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 ${
                skinColor === skin.color ? 'ring-4 ring-blue-400' : ''
              }`}
              style={{ backgroundColor: skin.color }}
            >
              <span className="text-xs font-bold drop-shadow-md">
                {skin.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <button
        className="w-full border-4 border-black bg-pink-300 p-3 font-bold transition-all duration-300 hover:bg-pink-400 hover:scale-105 hover:shadow-xl active:scale-95 pixel-shake mt-4"
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

  )
}
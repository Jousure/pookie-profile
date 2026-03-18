import { useEffect, useRef } from "react";

/* 🔥 ASSET LOADER (MATCH YOUR FILE NAMES) */
const getAssets = (type, prefix, count) => {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `/assets/${type}/${prefix}_${num}.png`;
  });
};

/* ✅ YOUR ACTUAL COUNTS */
const eyes = getAssets("Eyes", "eye", 24);
const hairs = getAssets("Hair", "hair", 15);
const mouths = getAssets("Mouth", "mouth", 24);
const noses = getAssets("Nose", "nose", 24);
const brows = getAssets("Eyebrow", "eyebrow", 15);

export default function AvatarCanvas({
  eye,
  hair,
  mouth,
  nose,
  brow,
  skinColor,
  hairColor,
  eyeColor
}) {

  const canvasRef = useRef(null);

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

          /* SKIN BASE */
          ctx.fillStyle = skinColor;
          ctx.fillRect(6, 6, 500, 500);

          loadedImages.forEach((image, index) => {

            const tempCanvas = document.createElement("canvas");
            tempCanvas.width = 512;
            tempCanvas.height = 512;

            const tempCtx = tempCanvas.getContext("2d");

            tempCtx.drawImage(image, 6, 6, 500, 500);

            /* HAIR COLOR */
            if (index === 0) {
              tempCtx.globalCompositeOperation = "source-atop";
              tempCtx.fillStyle = hairColor;
              tempCtx.fillRect(6, 6, 500, 500);
            }

            /* EYE COLOR */
            if (index === 2) {
              tempCtx.globalCompositeOperation = "source-atop";
              tempCtx.fillStyle = eyeColor;
              tempCtx.fillRect(6, 6, 500, 500);
            }

            ctx.drawImage(tempCanvas, 0, 0);
          });

        }

      };

      /* ❌ HANDLE LOAD ERROR */
      img.onerror = () => {
        console.error("❌ Failed to load:", src);
      };

    });

  }, [eye, hair, mouth, nose, brow, skinColor, hairColor, eyeColor]);

  return (
    <canvas
      ref={canvasRef}
      width={512}
      height={512}
      className="border-4 border-black mx-auto"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
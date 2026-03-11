 import { useEffect, useRef } from "react";

/* AUTO IMPORT ASSETS */

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
      hairs[hair],   // 0 hair
      brows[brow],   // 1 brow
      eyes[eye],     // 2 eyes
      noses[nose],   // 3 nose
      mouths[mouth]  // 4 mouth
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

          ctx.clearRect(0,0,512,512);

          /* SKIN BASE */
          ctx.fillStyle = skinColor;
          ctx.fillRect(6,6,500,500);

          loadedImages.forEach((image,index)=>{

            /* TEMP CANVAS (prevents tint bleeding) */
            const tempCanvas = document.createElement("canvas");
            tempCanvas.width = 512;
            tempCanvas.height = 512;

            const tempCtx = tempCanvas.getContext("2d");

            tempCtx.drawImage(image,6,6,500,500);

            /* HAIR COLOR */
            if(index === 0){

              tempCtx.globalCompositeOperation = "source-atop";
              tempCtx.fillStyle = hairColor;
              tempCtx.fillRect(6,6,500,500);

            }

            /* EYE COLOR */
            if(index === 2){

              tempCtx.globalCompositeOperation = "source-atop";
              tempCtx.fillStyle = eyeColor;
              tempCtx.fillRect(6,6,500,500);

            }

            ctx.drawImage(tempCanvas,0,0);

          });

        }

      };

    });

  }, [eye,hair,mouth,nose,brow,skinColor,hairColor,eyeColor]);

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



















// import { useEffect, useRef, useState } from "react";

// // Pixelated SVG Icons
// const EyeIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 20 20">
//     <rect x="2" y="8" width="6" height="4" fill="#000" />
//     <rect x="12" y="8" width="6" height="4" fill="#000" />
//   </svg>
// );

// const HairIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 20 20">
//     <rect x="2" y="2" width="16" height="6" fill="#000" />
//   </svg>
// );

// const BrowIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 20 20">
//     <rect x="3" y="7" width="6" height="2" fill="#000" />
//     <rect x="11" y="7" width="6" height="2" fill="#000" />
//   </svg>
// );

// const NoseIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 20 20">
//     <rect x="8" y="8" width="4" height="2" fill="#000" />
//   </svg>
// );

// const MouthIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 20 20">
//     <rect x="6" y="12" width="8" height="2" fill="#000" />
//   </svg>
// );

// // Import assets automatically
// const eyes = Object.values(
//   import.meta.glob("../assets/Eyes/*.png", { eager: true, import: "default" })
// );

// const hairs = Object.values(
//   import.meta.glob("../assets/Hair/*.png", { eager: true, import: "default" })
// );

// const mouths = Object.values(
//   import.meta.glob("../assets/Mouth/*.png", { eager: true, import: "default" })
// );

// const noses = Object.values(
//   import.meta.glob("../assets/Nose/*.png", { eager: true, import: "default" })
// );

// const brows = Object.values(
//   import.meta.glob("../assets/Eyebrow/*.png", { eager: true, import: "default" })
// );

// export default function AvatarCanvas() {

//   const canvasRef = useRef(null);

//   const [eye, setEye] = useState(0);
//   const [hair, setHair] = useState(0);
//   const [mouth, setMouth] = useState(0);
//   const [nose, setNose] = useState(0);
//   const [brow, setBrow] = useState(0);

//   const [skinColor, setSkinColor] = useState("#F2C6A0");
//   const [hairColor, setHairColor] = useState("#3b2a1a");

//   const skinColors = [
//     "#F2C6A0",
//     "#E5A87D",
//     "#D4A574",
//     "#C19A6B",
//     "#A67C52",
//     "#8B5A3C"
//   ];

//   const hairColors = [
//     "#000000",
//     "#3b2a1a",
//     "#5c3a21",
//     "#8b5a2b",
//     "#c19a6b",
//     "#e6be8a",
//     "#a52a2a",
//     "#6a0dad"
//   ];

//   useEffect(() => {

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const images = [
//       hairs[hair],
//       brows[brow],
//       eyes[eye],
//       noses[nose],
//       mouths[mouth]
//     ];

//     let loaded = 0;
//     const loadedImages = [];

//     images.forEach((src, i) => {

//       const img = new Image();
//       img.src = src;

//       img.onload = () => {

//         loadedImages[i] = img;
//         loaded++;

//         if (loaded === images.length) {

//           ctx.clearRect(0,0,512,512);

//           // draw skin
//           ctx.fillStyle = skinColor;
//           ctx.fillRect(6,6,500,500);

//           loadedImages.forEach((image,index)=>{

//             ctx.drawImage(image,6,6,500,500);

//             // apply hair color
//             if(index === 0){

//               ctx.globalCompositeOperation = "multiply";
//               ctx.fillStyle = hairColor;
//               ctx.fillRect(6,6,500,500);
//               ctx.globalCompositeOperation = "source-over";

//             }

//           });

//         }

//       }

//     });

//   }, [eye,hair,mouth,nose,brow,skinColor,hairColor]);

//   return(

//     <div className="text-center">

//       <canvas
//         ref={canvasRef}
//         width={512}
//         height={512}
//         className="border-4 border-black mx-auto"
//         style={{imageRendering:"pixelated"}}
//       />

//       <div className="grid grid-cols-2 gap-3 mt-4">

//         <button onClick={()=>setEye((eye+1)%eyes.length)}>
//           <EyeIcon/> Eyes
//         </button>

//         <button onClick={()=>setHair((hair+1)%hairs.length)}>
//           <HairIcon/> Hair
//         </button>

//         <button onClick={()=>setBrow((brow+1)%brows.length)}>
//           <BrowIcon/> Brows
//         </button>

//         <button onClick={()=>setNose((nose+1)%noses.length)}>
//           <NoseIcon/> Nose
//         </button>

//         <button onClick={()=>setMouth((mouth+1)%mouths.length)}>
//           <MouthIcon/> Mouth
//         </button>

//       </div>

//       {/* Skin Color */}
//       <h3 className="mt-4 font-bold">Skin Color</h3>

//       <div className="flex gap-2 justify-center">

//         {skinColors.map(color=>(
//           <button
//             key={color}
//             onClick={()=>setSkinColor(color)}
//             style={{background:color}}
//             className="w-8 h-8 border"
//           />
//         ))}

//       </div>

//       {/* Hair Color */}
//       <h3 className="mt-4 font-bold">Hair Color</h3>

//       <div className="flex gap-2 justify-center">

//         {hairColors.map(color=>(
//           <button
//             key={color}
//             onClick={()=>setHairColor(color)}
//             style={{background:color}}
//             className="w-8 h-8 border"
//           />
//         ))}

//       </div>

//       <button
//         className="mt-4 border p-2"
//         onClick={()=>{

//           setEye(Math.floor(Math.random()*eyes.length))
//           setHair(Math.floor(Math.random()*hairs.length))
//           setMouth(Math.floor(Math.random()*mouths.length))
//           setNose(Math.floor(Math.random()*noses.length))
//           setBrow(Math.floor(Math.random()*brows.length))

//         }}
//       >

//       Random Pookie

//       </button>

//     </div>

//   )

// }


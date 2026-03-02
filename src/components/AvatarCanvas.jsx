import { useEffect, useRef, useState } from "react";

import eye1 from "../assets/eyes/eye_01.png";
import hair1 from "../assets/hair/hair_01.png";
import mouth1 from "../assets/mouth/mouth_01.png";
import nose1 from "../assets/nose/nose_01.png";
import brow1 from "../assets/eyebrows/eyebrow_01.png";

export default function AvatarCanvas() {

  const canvasRef = useRef(null);

  // States (game controls)
  const [eye,setEye] = useState(0);
  const [hair,setHair] = useState(0);
  const [mouth,setMouth] = useState(0);
  const [nose,setNose] = useState(0);
  const [brow,setBrow] = useState(0);

  // Image arrays (add more later)
  const eyes=[eye1];
  const hairs=[hair1];
  const mouths=[mouth1];
  const noses=[nose1];
  const brows=[brow1];

  useEffect(()=>{

    const canvas=canvasRef.current;
    const ctx=canvas.getContext("2d");

    const images=[
      hairs[hair],
      brows[brow],
      eyes[eye],
      noses[nose],
      mouths[mouth]
    ];

    let loaded=0;
    const loadedImages=[];

    images.forEach((src,i)=>{

      const img=new Image();
      img.src=src;

      img.onload=()=>{

        loadedImages[i]=img;
        loaded++;

        if(loaded===images.length){

          ctx.clearRect(0,0,512,512);

          ctx.fillStyle="#F2C6A0";
          ctx.fillRect(6,6,500,500);

          loadedImages.forEach((image)=>{
            ctx.drawImage(image,6,6,500,500);
          });

        }

      }

    });

  },[eye,hair,mouth,nose,brow]);

  return(

    <div className="text-center">

      <canvas
        ref={canvasRef}
        width={512}
        height={512}
        className="border-4 border-black rounded-md mx-auto"
      />

      <div className="grid grid-cols-2 gap-3 mt-4">

        <button className="pixelBtn"
        onClick={()=>setEye((eye+1)%eyes.length)}>
        Eyes 👀
        </button>

        <button className="pixelBtn"
        onClick={()=>setHair((hair+1)%hairs.length)}>
        Hair 💇
        </button>

        <button className="pixelBtn"
        onClick={()=>setBrow((brow+1)%brows.length)}>
        Brows 😠
        </button>

        <button className="pixelBtn"
        onClick={()=>setNose((nose+1)%noses.length)}>
        Nose 👃
        </button>

        <button className="pixelBtn"
        onClick={()=>setMouth((mouth+1)%mouths.length)}>
        Mouth 🙂
        </button>

      </div>

      <button
      className="pixelBigBtn mt-4"
      onClick={()=>{

        setEye(Math.floor(Math.random()*eyes.length))
        setHair(Math.floor(Math.random()*hairs.length))
        setMouth(Math.floor(Math.random()*mouths.length))
        setNose(Math.floor(Math.random()*noses.length))
        setBrow(Math.floor(Math.random()*brows.length))

      }}
      >

      🎲 Random Pookie

      </button>

    </div>

  )

}
"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const START_FRAME = 15;
const END_FRAME = 65;
const FRAME_COUNT = END_FRAME - START_FRAME + 1;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    let mounted = true;
    Promise.resolve().then(() => {
      if (!mounted) return;
      const loadedImages: HTMLImageElement[] = [];
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const actualFrameIndex = START_FRAME + i;
        const paddedIndex = String(actualFrameIndex).padStart(3, "0");
        img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
        loadedImages.push(img);
      }
      setImages(loadedImages);
    });
    return () => { mounted = false; };
  }, []);

  // Function to draw image with object-fit: cover logic
  const drawImage = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Set canvas internal dimensions to match display size
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    const canvasRatio = width / height;
    const imgRatio = img.width / img.height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Draw first frame when ready and handle resize
  useEffect(() => {
    if (images.length > 0) {
      const firstImage = images[0];
      if (firstImage.complete) {
        drawImage(firstImage);
      } else {
        firstImage.addEventListener("load", () => drawImage(firstImage));
      }
    }
    
    const handleResize = () => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(scrollYProgress.get() * FRAME_COUNT))
      );
      if (images[frameIndex]?.complete) {
        drawImage(images[frameIndex]);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  // Scrub through images on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    );
    
    const img = images[frameIndex];
    if (img && img.complete) {
      drawImage(img);
    }
  });

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#121212]">
      {/* Sticky container for the canvas */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* The canvas rendering the image sequence */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        
        {/* Parallax Overlay */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

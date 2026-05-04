import React, { useEffect, useRef } from "react";

const SunBackground = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  let time = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Actualizează poziția mouse-ului
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Pornește animația
    drawSun(ctx, canvas);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const drawSun = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Folosește poziția mouse-ului pentru a stabili poziția soarelui
    const sunX = mousePos.current.x;
    const sunY = mousePos.current.y;

    // Efect de pulsare
    time += 0.05;
    const glowIntensity = 50 + Math.sin(time) * 20;

    // Desenăm soarele
    ctx.beginPath();
    ctx.arc(sunX, sunY, 100, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(17, 4, 63)";
    ctx.fill();

    // Desenăm aura luminoasă
    const gradient = ctx.createRadialGradient(sunX, sunY, 50, sunX, sunY, 250);
    gradient.addColorStop(0, `rgba(225, 200, 0, ${0.8 + Math.sin(time) * 0.2})`);
    gradient.addColorStop(1, "rgba(53, 1, 52, 0.63)");
    
    ctx.beginPath();
    ctx.arc(sunX, sunY, 250 + glowIntensity, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();


    // Adăugăm Lens Flare
    

    requestAnimationFrame(() => drawSun(ctx, canvas));
  };

  

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        mixBlendMode: "screen",
      }}
    />
  );
};

export default SunBackground;


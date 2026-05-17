import { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Grade 3D perspectiva
    const COLS = 12;
    const ROWS = 10;

    function project(x: number, y: number, z: number) {
      const fov = 400;
      const scale = fov / (fov + z);
      return {
        x: canvas.width / 2 + x * scale,
        y: canvas.height / 2 + y * scale,
        scale,
      };
    }

    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacingX = 120;
      const spacingZ = 120;
      const offsetX = (COLS * spacingX) / 2;
      const offsetZ = (ROWS * spacingZ) / 2;
      const baseY = 180;
      const waveAmp = 18;

      // Linhas horizontais (ao longo de Z)
      for (let row = 0; row <= ROWS; row++) {
        ctx.beginPath();
        for (let col = 0; col <= COLS; col++) {
          const wx = col * spacingX - offsetX;
          const wz = row * spacingZ - offsetZ + (t * 40) % spacingZ;
          const wy = baseY + Math.sin((col / COLS) * Math.PI * 2 + t) * waveAmp
                           + Math.sin((row / ROWS) * Math.PI * 1.5 + t * 0.7) * waveAmp * 0.5;
          const p = project(wx, wy, wz);
          const alpha = Math.max(0, Math.min(0.35, 0.35 - wz / (offsetZ * 3)));
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 0.5;
          if (col === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Linhas verticais (ao longo de X)
      for (let col = 0; col <= COLS; col++) {
        ctx.beginPath();
        for (let row = 0; row <= ROWS; row++) {
          const wx = col * spacingX - offsetX;
          const wz = row * spacingZ - offsetZ + (t * 40) % spacingZ;
          const wy = baseY + Math.sin((col / COLS) * Math.PI * 2 + t) * waveAmp
                           + Math.sin((row / ROWS) * Math.PI * 1.5 + t * 0.7) * waveAmp * 0.5;
          const p = project(wx, wy, wz);
          const alpha = Math.max(0, Math.min(0.2, 0.2 - wz / (offsetZ * 3)));
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 0.5;
          if (row === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Pontos nos vértices
      for (let col = 0; col <= COLS; col++) {
        for (let row = 0; row <= ROWS; row++) {
          const wx = col * spacingX - offsetX;
          const wz = row * spacingZ - offsetZ + (t * 40) % spacingZ;
          const wy = baseY + Math.sin((col / COLS) * Math.PI * 2 + t) * waveAmp
                           + Math.sin((row / ROWS) * Math.PI * 1.5 + t * 0.7) * waveAmp * 0.5;
          const p = project(wx, wy, wz);
          const alpha = Math.max(0, Math.min(0.5, 0.5 - wz / (offsetZ * 3)));
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.2 * p.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();
        }
      }
    }

    function loop() {
      t += 0.003;
      drawGrid();
      animId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.6 }}
    />
  );
}
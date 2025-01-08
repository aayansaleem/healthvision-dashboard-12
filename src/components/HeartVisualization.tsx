import { useEffect, useRef } from "react";

export function HeartVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawHeartRate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = "#0066FF";
      ctx.lineWidth = 2;

      let x = 0;
      const y = canvas.height / 2;

      ctx.moveTo(x, y);

      // Draw heart rate pattern
      for (let i = 0; i < 5; i++) {
        x += 20;
        ctx.lineTo(x, y);
        x += 10;
        ctx.lineTo(x, y - 20);
        x += 5;
        ctx.lineTo(x, y + 20);
        x += 5;
        ctx.lineTo(x, y);
        x += 20;
      }

      ctx.stroke();
    };

    drawHeartRate();
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-medical-red/20 to-medical-red rounded-full animate-heart-beat"></div>
      <img
        src="/lovable-uploads/e58ea4a9-5bfd-4be2-8fd3-785b7d483d34.png"
        alt="Heart"
        className="w-96 h-96 object-contain relative z-10"
      />
      <div className="absolute bottom-0 left-0 bg-white p-4 rounded-xl shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 bg-medical-blue rounded-full"></div>
          <span className="text-sm font-medium">Heart Rate</span>
        </div>
        <div className="text-2xl font-bold mb-2">120 bpm</div>
        <canvas ref={canvasRef} width="200" height="40" className="w-full"></canvas>
      </div>
    </div>
  );
}
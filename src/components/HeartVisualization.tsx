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
    <div className="relative p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-medical-red/20 to-medical-red/10 rounded-full animate-heart-beat"></div>
      <img
        src="/lovable-uploads/985ad949-827d-43b3-ab30-bc451e0636b0.png"
        alt="Heart"
        className="w-full h-full object-contain relative z-10 max-w-[400px] mx-auto"
      />
      <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-medical-blue rounded-full"></div>
          <span className="text-sm font-medium">Heart Rate</span>
        </div>
        <div className="text-2xl font-bold mb-2">120 bpm</div>
        <canvas ref={canvasRef} width="200" height="40" className="w-full"></canvas>
      </div>
    </div>
  );
}
import { Activity, Droplet, LineChart, List } from "lucide-react";
import { Card } from "./ui/card";
import { useEffect, useRef } from "react";

const metrics = [
  {
    title: "Blood Status",
    value: "116/70",
    icon: Droplet,
    graphColor: "#0066FF",
  },
  {
    title: "Heart Rate",
    value: "120 bpm",
    icon: Activity,
    graphColor: "#0066FF",
  },
  {
    title: "Blood Count",
    value: "80-90",
    icon: LineChart,
    graphColor: "#0066FF",
  },
  {
    title: "Glucose Level",
    value: "230/ml",
    icon: List,
    graphColor: "#0066FF",
  },
];

export function HealthMetrics() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-medium text-gray-700">My Heart Condition</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon: Icon, graphColor }: typeof metrics[0]) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const offsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getWavePattern = (x: number, offset: number) => {
      switch (title) {
        case "Blood Status":
          // Gentle, smooth wave
          return Math.sin(x * 0.03 + offset) * 8;
        case "Heart Rate":
          // Sharp peaks for heartbeat
          const t = x * 0.02 + offset;
          return (
            Math.sin(t) * 10 +
            Math.sin(t * 2) * 5 * Math.cos(t * 0.5)
          );
        case "Blood Count":
          // Slightly irregular wave
          return (
            Math.sin(x * 0.04 + offset) * 7 +
            Math.sin(x * 0.02 + offset) * 3
          );
        case "Glucose Level":
          // Very gentle, long wave
          return Math.sin(x * 0.02 + offset) * 6;
        default:
          return 0;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = graphColor;
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      
      for (let x = 0; x <= canvas.width; x++) {
        const y = canvas.height / 2 + getWavePattern(x, offsetRef.current);
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.stroke();

      // Slower animation speed for more natural movement
      offsetRef.current += 0.05;
      if (offsetRef.current > 1000) offsetRef.current = 0;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [title, graphColor]);

  return (
    <Card className="p-4 bg-white rounded-2xl hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-xl ${title === "Heart Rate" ? "bg-medical-blue text-white" : "bg-gray-100"}`}>
            <Icon className={`${title === "Heart Rate" ? "text-white" : "text-gray-500"}`} size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">{title}</span>
            <span className="text-lg font-semibold">{value}</span>
          </div>
        </div>
      </div>
      <div className="h-16 relative overflow-hidden">
        <canvas
          ref={canvasRef}
          width={200}
          height={60}
          className="w-full h-full"
        />
      </div>
    </Card>
  );
}
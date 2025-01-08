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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set up the line style
      ctx.strokeStyle = graphColor;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // Draw multiple waves for continuous animation
      for (let i = -1; i < 2; i++) {
        ctx.beginPath();
        
        for (let x = 0; x <= canvas.width; x++) {
          const frequency = title === "Heart Rate" ? 0.05 : 0.02;
          const amplitude = title === "Heart Rate" ? 20 : 15;
          
          const y = canvas.height / 2 + 
            Math.sin((x + offsetRef.current) * frequency) * amplitude +
            (title === "Heart Rate" ? 
              Math.sin((x + offsetRef.current) * 0.1) * 5 : 0);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }

      // Update offset for animation
      offsetRef.current += 2;
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
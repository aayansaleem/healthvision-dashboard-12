import { Activity, Droplet, LineChart } from "lucide-react";
import { Card } from "./ui/card";
import { useEffect, useRef } from "react";

const metrics = [
  {
    title: "Blood Status",
    value: "116/70",
    icon: Droplet,
    graphColor: "#FF4D4D",
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
    graphColor: "#4CAF50",
  },
];

export function HealthMetrics() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-blue-600">My Heart Condition</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon: Icon, graphColor }: typeof metrics[0]) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Generate random data points for the graph
    const points = Array.from({ length: 10 }, () => Math.random() * 30 + 10);

    // Draw the line graph
    ctx.beginPath();
    ctx.strokeStyle = graphColor;
    ctx.lineWidth = 2;

    points.forEach((point, i) => {
      const x = (canvas.width * i) / (points.length - 1);
      const y = canvas.height - (point * canvas.height) / 40;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();
  }, [graphColor]);

  return (
    <Card className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="text-medical-blue" size={20} />
        <span className="text-sm text-gray-600">{title}</span>
      </div>
      <div className="text-2xl font-bold mb-4">{value}</div>
      <div className="h-16 relative">
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
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set up the line style
    ctx.strokeStyle = graphColor;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Generate smooth curve points
    const points: [number, number][] = [];
    const numPoints = 50;
    for (let i = 0; i < numPoints; i++) {
      const x = (canvas.width * i) / (numPoints - 1);
      let y;
      
      if (title === "Heart Rate") {
        // Create heart rate pattern
        const t = i / (numPoints - 1);
        y = canvas.height / 2 + Math.sin(t * Math.PI * 8) * 20 * (1 - Math.abs(Math.sin(t * Math.PI * 2)));
      } else {
        // Create smooth wave pattern for other metrics
        y = canvas.height / 2 + Math.sin(i * 0.5) * 10;
      }
      points.push([x, y]);
    }

    // Draw the smooth curve
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    
    for (let i = 1; i < points.length - 2; i++) {
      const xc = (points[i][0] + points[i + 1][0]) / 2;
      const yc = (points[i][1] + points[i + 1][1]) / 2;
      ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
    }
    
    ctx.stroke();

    // Add dot at the end for Glucose Level and Blood Count
    if (title === "Glucose Level" || title === "Blood Count") {
      ctx.beginPath();
      ctx.arc(canvas.width - 20, canvas.height / 2, 3, 0, Math.PI * 2);
      ctx.fillStyle = graphColor;
      ctx.fill();
    }
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
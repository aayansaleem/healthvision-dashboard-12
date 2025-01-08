import { Activity, Droplet, LineChart } from "lucide-react";

const metrics = [
  {
    title: "Blood Status",
    value: "116/70",
    icon: Droplet,
  },
  {
    title: "Heart Rate",
    value: "120 bpm",
    icon: Activity,
  },
  {
    title: "Blood Count",
    value: "80-90",
    icon: LineChart,
  },
];

export function HealthMetrics() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <metric.icon className="text-medical-blue" size={20} />
            <span className="text-sm text-gray-600">{metric.title}</span>
          </div>
          <div className="text-2xl font-bold">{metric.value}</div>
          <div className="mt-4 h-20 relative overflow-hidden">
            <canvas className="w-full h-full"></canvas>
          </div>
        </div>
      ))}
    </div>
  );
}
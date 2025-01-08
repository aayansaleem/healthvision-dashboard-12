import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";
import { HeartVisualization } from "@/components/HeartVisualization";
import { HealthMetrics } from "@/components/HealthMetrics";
import { DoctorSchedule } from "@/components/DoctorSchedule";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <TopNav />
        <main className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Overview</h1>
            <h2 className="text-4xl font-bold text-gray-400">Conditions</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <HeartVisualization />
            </div>
            <div className="lg:col-span-5 space-y-8">
              <HealthMetrics />
              <DoctorSchedule />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
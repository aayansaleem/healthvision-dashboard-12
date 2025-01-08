import { TopNav } from "@/components/TopNav";
import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { FileText, Calendar, ArrowDown, ArrowUp } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      title: "Heart Rate Analysis",
      date: "March 15, 2024",
      status: "Completed",
      trend: "up",
      value: "+2.5%",
    },
    {
      title: "Blood Pressure Report",
      date: "March 14, 2024",
      status: "Completed",
      trend: "down",
      value: "-1.2%",
    },
    {
      title: "Glucose Monitoring",
      date: "March 13, 2024",
      status: "Completed",
      trend: "up",
      value: "+1.8%",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <TopNav />
        <main className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Reports</h1>
            <h2 className="text-4xl font-bold text-gray-400">History Log</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-medical-light-blue rounded-xl">
                  <FileText className="text-medical-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Medical Reports</h3>
                  <p className="text-gray-500">View your health history</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {reports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gray-100 rounded-xl">
                        <Calendar className="text-gray-500" size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium">{report.title}</h4>
                        <p className="text-sm text-gray-500">{report.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`flex items-center gap-1 ${
                        report.trend === "up" ? "text-green-500" : "text-red-500"
                      }`}>
                        {report.trend === "up" ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                        {report.value}
                      </span>
                      <span className="text-sm text-gray-500">{report.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reports;
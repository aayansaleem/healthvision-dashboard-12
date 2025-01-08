import { TopNav } from "@/components/TopNav";
import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { MessageSquare, Send } from "lucide-react";

const Support = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <TopNav />
        <main className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Support</h1>
            <h2 className="text-4xl font-bold text-gray-400">Messages</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-medical-light-blue rounded-xl">
                  <MessageSquare className="text-medical-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Chat with Support</h3>
                  <p className="text-gray-500">Get help from our medical team</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <img src="https://ui-avatars.com/api/?name=Support+Team" alt="Support" className="w-10 h-10 rounded-full" />
                  <div className="bg-gray-100 rounded-2xl p-4 max-w-[80%]">
                    <p className="text-gray-700">Hello! How can we help you today?</p>
                    <span className="text-sm text-gray-500">09:30 AM</span>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-end">
                  <div className="bg-medical-blue rounded-2xl p-4 max-w-[80%]">
                    <p className="text-white">I have a question about my heart rate readings.</p>
                    <span className="text-sm text-medical-light-blue">09:32 AM</span>
                  </div>
                  <img src="https://ui-avatars.com/api/?name=John+Doe" alt="You" className="w-10 h-10 rounded-full" />
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full p-4 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medical-blue"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-medical-blue hover:text-medical-blue/80">
                  <Send size={20} />
                </button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Support;
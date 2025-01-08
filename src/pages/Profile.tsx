import { TopNav } from "@/components/TopNav";
import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { User, Mail, Phone, MapPin, Edit2 } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <TopNav />
        <main className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Settings</h1>
            <h2 className="text-4xl font-bold text-gray-400">User Profile</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 bg-white rounded-2xl">
              <div className="flex items-center gap-6 mb-8">
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&size=120"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-medical-light-blue"
                />
                <div>
                  <h3 className="text-2xl font-semibold">John Doe</h3>
                  <p className="text-gray-500">Patient ID: #123456</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                    <User className="text-medical-blue" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">John Doe</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                    <Mail className="text-medical-blue" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">john.doe@example.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                    <Phone className="text-medical-blue" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                    <MapPin className="text-medical-blue" size={20} />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">123 Medical Center St, City, State</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 flex items-center gap-2 px-6 py-3 bg-medical-blue text-white rounded-xl hover:bg-medical-blue/90 transition-colors">
                <Edit2 size={20} />
                Edit Profile
              </button>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
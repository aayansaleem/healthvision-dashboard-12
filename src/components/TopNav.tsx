import { Search, Phone, Bell } from "lucide-react";

export function TopNav() {
  return (
    <div className="w-full h-16 flex items-center justify-between px-8">
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600">
          Diagnose
        </button>
        <button className="px-4 py-2 rounded-full bg-medical-light-blue text-medical-blue">
          My Heart
        </button>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 w-64 focus:outline-none"
          />
        </div>
        <button className="w-10 h-10 rounded-full bg-medical-blue flex items-center justify-center text-white">
          <Phone size={20} />
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <img
          src="https://ui-avatars.com/api/?name=John+Doe"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}
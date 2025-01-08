import { Heart, MessageSquare, FileText, User, Grid } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Heart, active: true },
  { icon: MessageSquare },
  { icon: FileText },
  { icon: User },
  { icon: Grid },
];

export function Sidebar() {
  return (
    <div className="w-20 h-screen bg-white border-r border-gray-100 flex flex-col items-center py-8 gap-8">
      <div className="w-10 h-10 bg-medical-blue rounded-xl flex items-center justify-center text-white font-bold">
        M+
      </div>
      <div className="flex flex-col gap-6">
        {sidebarItems.map((Item, index) => (
          <button
            key={index}
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
              Item.active
                ? "bg-medical-blue text-white"
                : "text-gray-400 hover:bg-medical-light-blue"
            )}
          >
            <Item.icon size={20} />
          </button>
        ))}
      </div>
    </div>
  );
}
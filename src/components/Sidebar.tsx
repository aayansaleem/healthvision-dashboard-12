import { Heart, MessageSquare, FileText, User, Grid } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";

const sidebarItems = [
  { icon: Heart, path: "/" },
  { icon: MessageSquare, path: "/support" },
  { icon: FileText, path: "/reports" },
  { icon: User, path: "/profile" },
  { icon: Grid },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-20 h-screen bg-white border-r border-gray-100 flex flex-col items-center py-8 gap-8">
      <div className="w-10 h-10 bg-medical-blue rounded-xl flex items-center justify-center text-white font-bold">
        M+
      </div>
      <div className="flex flex-col gap-6">
        {sidebarItems.map((Item, index) => (
          <Link
            key={index}
            to={Item.path || "#"}
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
              location.pathname === Item.path
                ? "bg-medical-blue text-white"
                : "text-gray-400 hover:bg-medical-light-blue"
            )}
          >
            <Item.icon size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
}
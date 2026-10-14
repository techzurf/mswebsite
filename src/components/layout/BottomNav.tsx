import { Link, useLocation } from "react-router-dom";
import { Plane, Compass, FileText, Phone, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/", icon: Plane },
  { name: "About", path: "/about", icon: Building2 },
  { name: "Haj / Umrah", path: "/haj", icon: Compass },
  { name: "Visa", path: "/visa", icon: FileText },
  { name: "Contact", path: "/contact", icon: Phone },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 pb-safe z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
          const isHaj = item.path === "/haj";
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center w-full h-full space-y-1"
            >
              <item.icon
                className={cn(
                  "w-5 h-5 transition-all duration-200 ease-out",
                  isActive
                    ? isHaj ? "text-haj-primary scale-110" : "text-brand-primary scale-110"
                    : "text-slate-400"
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-medium transition-colors duration-200",
                  isActive
                    ? isHaj ? "text-haj-primary" : "text-brand-primary"
                    : "text-slate-500"
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

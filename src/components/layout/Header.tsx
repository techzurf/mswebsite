import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Phone, Menu, X } from "lucide-react";
import { AnimatedButton } from "../ui/AnimatedButton";
import { AnnouncementBar } from "./AnnouncementBar";
import { SlidingNav } from "./SlidingNav";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Haj / Umrah", path: "/haj" },
  { name: "Visa", path: "/visa" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      <div className="w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl", 
              "bg-brand-primary"
            )}>
              MS
            </div>
            <div className="flex flex-col">
              <span className="font-black text-brand-primary leading-none tracking-tight text-lg">MS WORLD</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-secondary">Travel Services</span>
            </div>
          </Link>

          {/* Desktop Nav with Animated Sliding Tab */}
          <div className="hidden md:flex items-center justify-center">
            <SlidingNav items={navItems} />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a href="tel:+919884353228" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-primary transition-colors">
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>+91 98843 53228</span>
            </a>
            <AnimatedButton 
              as="a"
              href="https://wa.me/919884353228" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-green-200 hover:bg-green-700"
            >
              WhatsApp Us
            </AnimatedButton>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden p-2 text-slate-600 active:bg-slate-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-white border-b border-slate-200 shadow-2xl flex flex-col px-4 py-4 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">Navigation</div>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "relative px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 flex items-center justify-between overflow-hidden",
                  isActive
                    ? "bg-[#24439A] text-white shadow-md shadow-[#24439A]/20"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#E5232A] rounded-r-full" />
                )}
                <span className={cn(isActive && "pl-2")}>{item.name}</span>
                {isActive && (
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-white/20 px-2 py-0.5 rounded-full">Active</span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 mt-1 border-t border-slate-100 flex flex-col gap-2">
            <a 
              href="tel:+919884353228" 
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-primary"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>+91 98843 53228</span>
            </a>
            <AnimatedButton 
              as="a"
              href="https://wa.me/919884353228" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-5 py-3 rounded-xl text-xs font-bold text-center shadow-lg shadow-green-200 hover:bg-green-700 justify-center flex"
            >
              WhatsApp Us
            </AnimatedButton>
          </div>
        </div>
      )}
    </header>
  );
}

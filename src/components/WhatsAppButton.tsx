import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "919884353228"; // Real MS World Travels number

export function WhatsAppButton() {
  const location = useLocation();

  const getMessage = () => {
    switch (location.pathname) {
      case "/haj":
        return "Hello MS World Travels, I would like to know more about your Haj & Umrah packages.";
      case "/visa":
        return "Hello MS World Travels, I would like to enquire about visa assistance.";
      case "/about":
      case "/contact":
        return "Hello MS World Travels, I would like to discuss my travel requirements.";
      case "/":
      default:
        return "Hello MS World Travels, I would like to enquire about your travel services.";
    }
  };

  const isHajPage = location.pathname.startsWith("/haj");
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getMessage())}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed z-[60] right-4 md:right-8 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 text-white",
        // Position above mobile bottom nav
        "bottom-[80px] md:bottom-8 w-[52px] h-[52px] md:w-14 md:h-14",
        isHajPage ? "bg-green-600 shadow-green-600/30" : "bg-green-600 shadow-green-600/30"
      )}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </a>
  );
}

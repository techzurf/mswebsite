import { Link } from "react-router-dom";
import { Plane } from "lucide-react";

interface AnnouncementItemProps {
  key?: string;
  isDuplicate?: boolean;
}

function AnnouncementItem({ isDuplicate = false }: AnnouncementItemProps) {
  return (
    <div
      className="inline-flex items-center shrink-0 text-xs md:text-[13px] font-medium tracking-normal text-white"
      aria-hidden={isDuplicate ? "true" : undefined}
    >
      {/* ✈ Your Journey Begins Here */}
      <span className="inline-flex items-center gap-1.5 font-semibold text-white">
        <Plane className="w-3.5 h-3.5 text-white -rotate-45 shrink-0" aria-hidden="true" />
        <span>Your Journey Begins Here</span>
      </span>

      {/* Red separator bullet */}
      <span className="text-[#E5232A] font-bold mx-3.5 sm:mx-5 select-none" aria-hidden="true">•</span>

      {/* Flight Tickets */}
      <span className="text-white/95">Flight Tickets</span>

      {/* Red separator bullet */}
      <span className="text-[#E5232A] font-bold mx-3.5 sm:mx-5 select-none" aria-hidden="true">•</span>

      {/* Visa Assistance */}
      <span className="text-white/95">Visa Assistance</span>

      {/* Red separator bullet */}
      <span className="text-[#E5232A] font-bold mx-3.5 sm:mx-5 select-none" aria-hidden="true">•</span>

      {/* Haj & Umrah Packages */}
      <span className="text-white/95">Haj &amp; Umrah Packages</span>

      {/* Red separator bullet */}
      <span className="text-[#E5232A] font-bold mx-3.5 sm:mx-5 select-none" aria-hidden="true">•</span>

      {/* Enquire Now → clickable link */}
      <Link
        to="/contact"
        tabIndex={isDuplicate ? -1 : 0}
        className="inline-flex items-center gap-1 font-bold text-white hover:text-red-200 underline decoration-white/40 hover:decoration-white underline-offset-4 transition-colors px-1 py-0.5 rounded focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-1 focus:ring-offset-[#24439A] group/link"
      >
        <span>Enquire Now</span>
        <span className="text-[#E5232A] font-bold transition-transform group-hover/link:translate-x-0.5" aria-hidden="true">→</span>
      </Link>

      {/* Spacing / trailing bullet separator between repeated sequences */}
      <span className="text-[#E5232A] font-bold mx-5 sm:mx-7 select-none" aria-hidden="true">•</span>
    </div>
  );
}

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Service announcement"
      className="announcement-bar-container relative w-full bg-[#24439A] text-white h-[36px] md:h-10 overflow-hidden flex items-center border-b border-blue-900/40 select-none z-10"
    >
      {/* Accessible screen-reader text */}
      <span className="sr-only">
        Your Journey Begins Here • Flight Tickets • Visa Assistance • Haj &amp; Umrah Packages • Enquire Now
      </span>

      {/* Seamless horizontal ticker track */}
      <div className="announcement-ticker-track flex items-center">
        {/* Primary sequence set */}
        <div className="flex items-center shrink-0">
          {[0, 1, 2].map((i) => (
            <AnnouncementItem key={`ticker-orig-${i}`} />
          ))}
        </div>

        {/* Duplicate sequence set for seamless infinite loop */}
        <div className="ticker-duplicate flex items-center shrink-0" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <AnnouncementItem key={`ticker-dup-${i}`} isDuplicate={true} />
          ))}
        </div>
      </div>
    </aside>
  );
}

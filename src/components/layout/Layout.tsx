import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BottomNav } from "./BottomNav";
import { WhatsAppButton } from "../WhatsAppButton";
import { AirplaneCursor } from "../ui/AirplaneCursor";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-brand-primary/10">
      <AirplaneCursor />
      <Header />
      
      <main className="flex-1 w-full relative flex flex-col pb-20 md:pb-0 overflow-x-hidden">
        <Outlet />
      </main>

      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </div>
  );
}

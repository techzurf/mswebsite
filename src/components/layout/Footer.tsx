import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, ChevronDown, Compass } from "lucide-react";
import { AnimatedButton } from "../ui/AnimatedButton";

export function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Haj", path: "/haj" },
    { name: "Visa", path: "/visa" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    { name: "Flight Tickets", path: "/contact" },
    { name: "Visa Assistance", path: "/visa" },
    { name: "Tour Packages", path: "/contact" },
    { name: "Hotel Booking", path: "/contact" },
    { name: "Travel Insurance", path: "/contact" },
    { name: "Attestation", path: "/contact" },
    { name: "Haj & Umrah", path: "/haj" }
  ];

  return (
    <footer className="bg-brand-primary text-white pt-16 pb-24 md:pb-8 border-t border-white/10 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================= */}
        {/* MOBILE FOOTER (Stacked & Accordion)       */}
        {/* ========================================= */}
        <div className="flex flex-col md:hidden gap-8">
          {/* 1. Logo & Short Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-primary font-bold text-xl">
                MS
              </div>
              <div className="flex flex-col">
                <span className="font-black text-white leading-none tracking-tight text-lg">MS WORLD</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-secondary">Travel Services</span>
              </div>
            </div>
            <p className="text-blue-50 text-sm leading-relaxed">
              Your trusted partner for flights, visas, tours, travel assistance and Haj & Umrah services.
            </p>
            <p className="text-blue-100/60 text-xs italic">
              Making every journey simpler, safer and more memorable.
            </p>
          </div>

          {/* 2. Haj & Umrah CTA Highlight */}
          <div className="bg-gradient-to-br from-blue-950 to-brand-primary border border-white/10 p-6 rounded-2xl text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 blur-[40px] rounded-full mix-blend-screen"></div>
            <Compass className="w-8 h-8 text-brand-secondary mx-auto mb-3 relative z-10" />
            <h3 className="font-serif italic text-xl text-white mb-2 relative z-10">Planning Your Sacred Journey?</h3>
            <p className="text-xs text-blue-100/80 mb-5 text-balance relative z-10">
              Explore our Haj & Umrah services and enquire about your upcoming journey.
            </p>
            <AnimatedButton as="link" to="/haj" className="bg-brand-secondary text-white py-3 px-6 rounded-xl font-bold shadow-lg shadow-brand-secondary/20 block relative z-10 text-sm text-center">
              Explore Haj & Umrah
            </AnimatedButton>
          </div>

          {/* 3. WhatsApp CTA */}
          <AnimatedButton 
            as="a"
            href="https://wa.me/919884353228" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-3.5 px-6 rounded-xl font-bold shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 w-full text-sm hover:bg-green-700"
          >
            <MessageCircle className="w-5 h-5" /> Chat With Us on WhatsApp
          </AnimatedButton>

          {/* Accordion Sections */}
          <div className="flex flex-col">
            {/* 4. Quick Links */}
            <details className="group border-b border-white/10">
              <summary className="flex justify-between items-center font-bold py-4 cursor-pointer list-none text-white text-base">
                Quick Links <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform text-brand-accent" />
              </summary>
              <div className="pb-4 flex flex-col gap-3 text-sm text-blue-100/80">
                {quickLinks.map(link => (
                  <Link key={link.name} to={link.path} className="hover:text-white transition-colors">{link.name}</Link>
                ))}
              </div>
            </details>

            {/* 5. Services */}
            <details className="group border-b border-white/10">
              <summary className="flex justify-between items-center font-bold py-4 cursor-pointer list-none text-white text-base">
                Our Services <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform text-brand-accent" />
              </summary>
              <div className="pb-4 flex flex-col gap-3 text-sm text-blue-100/80">
                {services.map(service => (
                  <Link key={service.name} to={service.path} className="hover:text-white transition-colors">{service.name}</Link>
                ))}
              </div>
            </details>

            {/* 6. Contact */}
            <details className="group border-b border-white/10">
              <summary className="flex justify-between items-center font-bold py-4 cursor-pointer list-none text-white text-base">
                Contact Us <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform text-brand-accent" />
              </summary>
              <div className="pb-4 flex flex-col gap-5 text-sm text-blue-100/80 mt-2">
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 shrink-0 text-brand-accent" />
                  <div className="flex flex-col gap-1.5">
                    <a href="tel:+919884353228" className="hover:text-white transition-colors">+91 98843 53228</a>
                    <a href="tel:+919962740060" className="hover:text-white transition-colors">+91 99627 40060</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 shrink-0 text-brand-accent" />
                  <a href="mailto:msworldtravels@gmail.com" className="hover:text-white transition-colors break-all">msworldtravels@gmail.com</a>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 shrink-0 text-brand-accent" />
                  <p className="leading-relaxed">
                    Ground Floor, 17, Aziz Mulk, 4th Street<br/>
                    Thousand Lights, Chennai<br/>
                    Tamil Nadu 600006
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>


        {/* ========================================= */}
        {/* DESKTOP FOOTER (4-Column Layout)          */}
        {/* ========================================= */}
        <div className="hidden md:grid grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Brand & Intro */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-brand-primary font-bold text-2xl">
                MS
              </div>
              <div className="flex flex-col">
                <span className="font-black text-white leading-none tracking-tight text-xl">MS WORLD</span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-secondary">Travel Services</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 text-sm text-blue-50 leading-relaxed pr-4">
              <p>Your trusted partner for flights, visas, tours, travel assistance and Haj & Umrah services.</p>
              <p className="text-blue-100/60 italic text-xs">Making every journey simpler, safer and more memorable.</p>
            </div>

            <AnimatedButton 
              as="a"
              href="https://wa.me/919884353228" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-bold text-sm shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 w-fit"
            >
              <MessageCircle className="w-4 h-4" /> Chat With Us on WhatsApp
            </AnimatedButton>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-4 lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 text-white border-l-2 border-brand-secondary pl-3">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-blue-100/80">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white hover:translate-x-1 inline-block transition-all">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-span-4 lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 text-white border-l-2 border-brand-secondary pl-3">Our Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-blue-100/80">
              {services.map(service => (
                <li key={service.name}>
                  <Link to={service.path} className="hover:text-white hover:translate-x-1 inline-block transition-all">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-4 lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 text-white border-l-2 border-brand-secondary pl-3">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-blue-100/80">
              <li className="flex gap-3 items-start group">
                <Phone className="w-5 h-5 shrink-0 text-brand-accent group-hover:text-brand-secondary transition-colors" />
                <div className="flex flex-col gap-1.5 mt-0.5">
                  <a href="tel:+919884353228" className="hover:text-white transition-colors">+91 98843 53228</a>
                  <a href="tel:+919962740060" className="hover:text-white transition-colors">+91 99627 40060</a>
                </div>
              </li>
              <li className="flex gap-3 items-start group">
                <Mail className="w-5 h-5 shrink-0 text-brand-accent group-hover:text-brand-secondary transition-colors" />
                <a href="mailto:msworldtravels@gmail.com" className="hover:text-white transition-colors break-all mt-0.5">msworldtravels@gmail.com</a>
              </li>
              <li className="flex gap-3 items-start group">
                <MapPin className="w-5 h-5 shrink-0 text-brand-accent group-hover:text-brand-secondary transition-colors" />
                <p className="leading-relaxed mt-0.5">
                  Ground Floor, 17, Aziz Mulk, 4th Street<br/>
                  Thousand Lights, Chennai<br/>
                  Tamil Nadu 600006
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* Desktop Haj Highlight */}
        <div className="hidden md:flex bg-gradient-to-r from-blue-950 to-brand-primary p-8 rounded-2xl border border-white/10 items-center justify-between mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 blur-[60px] rounded-full mix-blend-screen"></div>
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-brand-primary/50 border border-brand-accent/20 flex items-center justify-center shrink-0">
              <Compass className="w-8 h-8 text-brand-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-serif italic text-white mb-2">Planning Your Sacred Journey?</h3>
              <p className="text-sm text-blue-100/80">Explore our curated Haj & Umrah packages with dedicated on-ground support.</p>
            </div>
          </div>
          <AnimatedButton as="link" to="/haj" className="bg-brand-secondary hover:bg-red-700 text-white py-3.5 px-8 rounded-xl font-bold shadow-lg shadow-brand-secondary/20 shrink-0 relative z-10">
            Explore Haj & Umrah
          </AnimatedButton>
        </div>


        {/* ========================================= */}
        {/* COPYRIGHT BOTTOM BAR                      */}
        {/* ========================================= */}
        <div className="mt-10 md:mt-0 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/50 text-center md:text-left">
          <p>© 2026 MS World Travels. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
          <p className="opacity-70">Designed & Developed by Techzurf</p>
        </div>

      </div>
    </footer>
  );
}

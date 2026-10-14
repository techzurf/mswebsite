import { useState } from "react";
import { ArrowRight, Plane, FileText, Map, ShieldCheck, Hotel, Stamp, Compass, CreditCard, Star, Users, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { HajUmrahTestimonials } from "../components/HajUmrahTestimonials";
import { AnimatedButton } from "../components/ui/AnimatedButton";
import omanImg from "../assets/images/regenerated_image_1786535351090.png";
import saudiImg from "../assets/images/regenerated_image_1786537639643.png";

export function Home() {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(null);

  const quickServices = [
    {
      name: "Flight Tickets",
      icon: Plane,
      bgColor: "#24439A",
      shadow: "0 6px 16px -2px rgba(36, 67, 154, 0.4)",
      hoverShadow: "0 14px 26px -3px rgba(36, 67, 154, 0.55)",
      link: "/contact",
    },
    {
      name: "Visa Assistance",
      icon: FileText,
      bgColor: "#00796B",
      shadow: "0 6px 16px -2px rgba(0, 121, 107, 0.4)",
      hoverShadow: "0 14px 26px -3px rgba(0, 121, 107, 0.55)",
      link: "/visa",
    },
    {
      name: "Tour Packages",
      icon: Map,
      bgColor: "#D35400",
      shadow: "0 6px 16px -2px rgba(211, 84, 0, 0.4)",
      hoverShadow: "0 14px 26px -3px rgba(211, 84, 0, 0.55)",
      link: "/contact",
    },
    {
      name: "Travel Insurance",
      icon: ShieldCheck,
      bgColor: "#6541A5",
      shadow: "0 6px 16px -2px rgba(101, 65, 165, 0.4)",
      hoverShadow: "0 14px 26px -3px rgba(101, 65, 165, 0.55)",
      link: "/contact",
    },
    {
      name: "Hotel Booking",
      icon: Hotel,
      bgColor: "#9B2335",
      shadow: "0 6px 16px -2px rgba(155, 35, 53, 0.4)",
      hoverShadow: "0 14px 26px -3px rgba(155, 35, 53, 0.55)",
      link: "/contact",
    },
    {
      name: "Attestation",
      icon: Stamp,
      bgColor: "#34495E",
      shadow: "0 6px 16px -2px rgba(52, 73, 94, 0.4)",
      hoverShadow: "0 14px 26px -3px rgba(52, 73, 94, 0.55)",
      link: "/contact",
    },
    {
      name: "Haj & Umrah",
      icon: Compass,
      bgColor: "#176B45",
      shadow: "0 6px 16px -2px rgba(23, 107, 69, 0.4)",
      hoverShadow: "0 14px 26px -3px rgba(23, 107, 69, 0.55)",
      link: "/haj",
    },
    {
      name: "Forex",
      icon: CreditCard,
      bgColor: "#17365D",
      shadow: "0 6px 16px -2px rgba(23, 54, 93, 0.4)",
      hoverShadow: "0 14px 26px -3px rgba(23, 54, 93, 0.55)",
      link: "/contact",
    },
  ];

  const popularDestinations = [
    { name: "Saudi Arabia", desc: "Spiritual & Business Travel", img: saudiImg },
    { name: "United Arab Emirates", desc: "Luxury & Shopping", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop" },
    { name: "Oman", desc: "Culture & Landscapes", img: omanImg },
    { name: "Maldives", desc: "Tropical Paradise", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-primary/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop" 
          alt="Travel Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center text-center px-5 max-w-4xl mx-auto mt-8 md:mt-0 pb-2 md:pb-6">
          <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs mb-4">Trust & Excellence Since 1998</span>
          <h1 className="text-[clamp(2.25rem,8vw,4.5rem)] font-black text-white leading-[1.1] mb-6 px-2">
            Your Journey, <br />Our Responsibility
          </h1>
          <p className="text-blue-50 text-base md:text-xl font-medium mb-10 max-w-2xl text-balance">
            Flights, Visas, Tours, Travel Assistance and Haj & Umrah Services — all under one trusted travel partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-5 w-full sm:w-auto mb-7 md:mb-10">
            <AnimatedButton as="link" to="/contact" className="bg-brand-secondary w-full sm:w-auto hover:bg-brand-secondary/90 text-white font-bold py-3.5 px-8 rounded-xl text-center flex items-center justify-center gap-2 shadow-xl shadow-brand-secondary/20 text-sm h-12">
              Plan Your Journey <ArrowRight className="w-5 h-5" />
            </AnimatedButton>
            <AnimatedButton as="a" href="https://wa.me/919884353228" target="_blank" rel="noopener noreferrer" className="bg-white/10 w-full sm:w-auto hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-3.5 px-8 rounded-xl text-center flex items-center justify-center text-sm h-12">
              WhatsApp Us
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Quick Service Grid */}
      <section className="relative z-30 mt-8 md:-mt-12 px-4 max-w-7xl mx-auto w-full mb-16">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-4 sm:p-5 md:p-6 border border-slate-100">
          <div className="flex overflow-x-auto md:grid md:grid-cols-8 gap-3 sm:gap-3.5 md:gap-3.5 hide-scrollbar scroll-smooth snap-x snap-mandatory py-1 px-1 -mx-1">
            {quickServices.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredServiceIndex === index;
              return (
                <Link
                  key={service.name}
                  to={service.link}
                  onMouseEnter={() => setHoveredServiceIndex(index)}
                  onMouseLeave={() => setHoveredServiceIndex(null)}
                  style={{
                    backgroundColor: service.bgColor,
                    boxShadow: isHovered ? service.hoverShadow : service.shadow,
                  }}
                  className="shrink-0 w-[122px] sm:w-[130px] md:w-auto snap-start p-3.5 sm:p-4 rounded-[18px] min-h-[114px] md:min-h-[128px] flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:-translate-y-1.5 active:scale-95 active:translate-y-0 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white select-none"
                  aria-label={service.name}
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white mb-2.5 transition-transform duration-300 group-hover:scale-110 shadow-inner">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                  </div>
                  <span className="text-[11px] sm:text-xs md:text-[12.5px] font-bold text-white text-center leading-tight tracking-tight drop-shadow-xs">
                    {service.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Visa Section */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-3">Visa Assistance Made Simple</h2>
            <p className="text-slate-500 font-medium text-lg">Fast, reliable, and hassle-free visa processing for your global destinations.</p>
          </div>
          <Link to="/visa" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Explore Visa Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["UAE Visa", "Saudi Visa", "Tourist Visas", "Visit Visas", "Business Visas"].map((visa, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col items-start gap-4 hover:shadow-lg hover:border-brand-primary/20 transition-all cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900">{visa}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Haj & Umrah Highlight (Distinct Design) */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 to-haj-secondary">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1591834907153-276e01768822?q=80&w=2000&auto=format&fit=crop" alt="Kaaba" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-haj-primary/10 blur-[80px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 blur-[80px] rounded-full mix-blend-screen" />
        </div>
        
        <div className="relative z-10 px-4 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Sacred Pilgrimage Service</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">Begin Your Sacred Journey</h2>
          <p className="text-slate-300 text-lg md:text-xl font-medium mb-10 max-w-2xl text-balance">
            Complete Haj & Umrah travel assistance with carefully planned packages and dedicated support from our experienced team.
          </p>
          <AnimatedButton as="link" to="/haj" className="bg-haj-primary hover:bg-haj-primary/90 text-slate-950 font-black py-4 px-10 rounded-2xl text-center flex items-center justify-center shadow-xl shadow-haj-primary/20">
            Explore Haj & Umrah
          </AnimatedButton>
        </div>
      </section>

      {/* Verified Pilgrim Testimonials Component */}
      <HajUmrahTestimonials />

      {/* Popular Destinations (Horizontal Scroll on Mobile) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-10">Popular Destinations</h2>
          
          <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x">
            {popularDestinations.map((dest, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group snap-center shrink-0">
                <div className="h-48 overflow-hidden relative">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{dest.name}</h3>
                  <p className="text-sm font-medium text-slate-500 mb-4">{dest.desc}</p>
                  <button className="text-brand-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#F4F7FB]">
        <div className="px-4 max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight">Your Trusted Travel Partner</h2>
            <p className="text-slate-600 text-lg mb-8 text-balance">
              With years of established experience, MS World Travels provides comprehensive travel solutions. From simple flight bookings to complex visa processing and sacred pilgrimage journeys, we handle every detail with care.
            </p>
            <AnimatedButton as="link" to="/about" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800">
              About MS World Travels
            </AnimatedButton>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Experienced Professionals", icon: Users },
              { title: "Complete Assistance", icon: Star },
              { title: "Dedicated Visa Support", icon: CheckCircle2 },
              { title: "Personalized Support", icon: Phone },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#DCE6F5] py-16 md:py-24">
        <div className="px-4 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-brand-primary mb-6">Ready to Plan Your Journey?</h2>
          <p className="text-slate-700 text-lg mb-10">Get in touch with our travel experts today and let us handle all your travel requirements.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <AnimatedButton as="a" href="tel:+919884353228" className="bg-white text-brand-primary font-bold py-4 px-8 rounded-xl text-center shadow-md hover:shadow-lg">
              Call Now
            </AnimatedButton>
            <AnimatedButton as="a" href="https://wa.me/919884353228" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-center shadow-md shadow-green-600/30 hover:bg-green-700 flex items-center justify-center gap-2">
              WhatsApp Us
            </AnimatedButton>
            <AnimatedButton as="link" to="/contact" className="border-2 border-brand-primary bg-transparent text-brand-primary font-bold py-4 px-8 rounded-xl text-center hover:bg-brand-primary/5">
              Send Enquiry
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  );
}

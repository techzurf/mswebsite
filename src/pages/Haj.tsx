import { Calendar, Clock, MapPin, Plane, CheckCircle2, ChevronRight, Compass } from "lucide-react";
import { AnimatedButton } from "../components/ui/AnimatedButton";
import makkahImg from "../assets/images/regenerated_image_1786538104023.png";
import madinahImg from "../assets/images/regenerated_image_1786538104767.png";

export function Haj() {
  const packages = [
    {
      name: "Premium Economy Umrah",
      days: 15,
      makkah: "7 Nights",
      madinah: "7 Nights",
      hotel: "4 Star Hotels",
      price: "Enquire for Price",
    },
    {
      name: "Deluxe Umrah Package",
      days: 15,
      makkah: "7 Nights",
      madinah: "7 Nights",
      hotel: "5 Star Hotels",
      price: "Enquire for Price",
    },
    {
      name: "VIP Executive Haj",
      days: 20,
      makkah: "10 Nights",
      madinah: "10 Nights",
      hotel: "5 Star Luxury",
      price: "Enquire for Price",
    }
  ];

  const services = [
    "Visa Assistance", "Flight Arrangements", "Hotel Accommodation", 
    "Ground Transportation", "Ziyarat Support", "Travel Guidance", "Customer Assistance"
  ];

  return (
    <div className="flex flex-col w-full  bg-slate-50 font-sans">
      {/* Haj Hero */}
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-haj-secondary">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1591834907153-276e01768822?q=80&w=2000&auto=format&fit=crop" 
            alt="Kaaba" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-haj-primary/10 blur-[80px] rounded-full mix-blend-screen" />
        </div>
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-16 md:mt-0">
          <div className="flex items-center justify-center mb-6">
            <span className="bg-haj-primary/20 text-haj-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Compass className="w-4 h-4" /> Sacred Service
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-6">
            Your Sacred Journey <br/>Begins Here
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-medium mb-10 tracking-wide text-balance">
            Haj & Umrah Services by MS World Travels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <AnimatedButton as="a" href="#enquiry" className="bg-haj-primary text-slate-950 hover:bg-haj-primary/90 font-black py-4 px-10 rounded-2xl text-center flex items-center justify-center shadow-xl shadow-haj-primary/20">
              Enquire Now
            </AnimatedButton>
            <AnimatedButton as="a" href="https://wa.me/919884353228" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-10 rounded-2xl text-center">
              WhatsApp Us
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-6">A Journey of Faith</h2>
        <p className="text-slate-600 text-lg leading-relaxed text-balance">
          We understand the profound significance of your pilgrimage. MS World Travels is dedicated to providing trustworthy, respectful, and meticulously planned Haj and Umrah services, ensuring you can focus entirely on your spiritual journey while we handle the logistics.
        </p>
      </section>

      {/* Destinations */}
      <section className="py-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Makkah */}
          <div className="relative h-80 rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
            <img src={makkahImg} alt="Makkah" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="text-3xl font-bold font-serif text-white mb-2">Makkah</h3>
              <p className="text-white/80 font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Masjid al-Haram & Sacred Sites
              </p>
            </div>
          </div>

          {/* Madinah */}
          <div className="relative h-80 rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
            <img src={madinahImg} alt="Madinah" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="text-3xl font-bold font-serif text-white mb-2">Madinah</h3>
              <p className="text-white/80 font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Masjid an-Nabawi & Ziyarat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold font-serif text-center text-slate-900 mb-10">Our Pilgrim Services</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {services.map((service, i) => (
            <div key={i} className="bg-white border border-slate-200 px-6 py-3 rounded-full flex items-center gap-2 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-haj-primary" />
              <span className="font-semibold text-slate-700">{service}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 w-full bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-slate-900 mb-4">Choose Your Journey</h2>
            <p className="text-slate-500 text-lg">Carefully curated packages for your comfort.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className="bg-slate-50 rounded-[2rem] border border-slate-100 p-8 flex flex-col relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 left-0 w-full h-2 bg-haj-primary" />
                
                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-6 pr-12">{pkg.name}</h3>
                
                <div className="absolute top-8 right-8 bg-haj-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Compass className="w-6 h-6 text-haj-primary" />
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <span className="font-semibold text-slate-700">{pkg.days} Days Total</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-slate-400" />
                    <span className="font-semibold text-slate-700">{pkg.makkah} (Makkah)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-slate-400" />
                    <span className="font-semibold text-slate-700">{pkg.madinah} (Madinah)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Plane className="w-5 h-5 text-slate-400" />
                    <span className="font-semibold text-slate-700">{pkg.hotel}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="text-lg font-bold text-slate-900 mb-6">{pkg.price}</div>
                  <AnimatedButton as="a" href="#enquiry" className="w-full bg-slate-900 text-white hover:bg-slate-800 font-bold py-4 rounded-xl flex items-center justify-center gap-2">
                    Enquire Now <ChevronRight className="w-4 h-4" />
                  </AnimatedButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 md:py-24 px-4 max-w-3xl mx-auto w-full">
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-serif text-slate-900 mb-3">Request Package Details</h2>
            <p className="text-slate-500">Fill out the form below and our team will guide you.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:outline-none focus:ring-2 focus:ring-haj-primary/50" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:outline-none focus:ring-2 focus:ring-haj-primary/50" placeholder="Your phone" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:outline-none focus:ring-2 focus:ring-haj-primary/50" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Number of Travellers</label>
                <input type="number" min="1" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:outline-none focus:ring-2 focus:ring-haj-primary/50" placeholder="e.g. 2" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Required</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:outline-none focus:ring-2 focus:ring-haj-primary/50 text-slate-700">
                  <option>Haj Package</option>
                  <option>Umrah Package</option>
                  <option>Custom Package</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Preferred Travel Month</label>
                <input type="month" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:outline-none focus:ring-2 focus:ring-haj-primary/50" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Additional Message</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:outline-none focus:ring-2 focus:ring-haj-primary/50 resize-none" placeholder="Any specific requirements..."></textarea>
            </div>
            
            <AnimatedButton type="submit" className="w-full bg-haj-primary text-slate-950 font-black py-4 rounded-xl hover:bg-haj-primary/90 text-lg shadow-lg">
              Submit Enquiry
            </AnimatedButton>
          </form>
        </div>
      </section>
    </div>
  );
}

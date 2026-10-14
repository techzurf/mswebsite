import { CheckCircle2, Phone, ShieldCheck, Map, Users, Award, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedButton } from "../components/ui/AnimatedButton";

export function About() {
  return (
    <div className="flex flex-col w-full ">
      {/* Hero */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-primary/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop" 
          alt="About MS World Travels" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
        />
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl mx-auto mt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4">About MS World Travels</h1>
          <p className="text-white/90 text-lg md:text-xl font-medium">Your trusted partner for travel, visa and pilgrimage journeys.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 px-4 max-w-4xl mx-auto w-full text-center">
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-6">Chennai's Premier Travel Agency</h2>
        <p className="text-slate-600 text-lg leading-relaxed text-balance">
          MS World Travel Services is a Chennai-based travel agency providing comprehensive travel solutions. 
          We specialize in making global travel seamless and accessible. From securing flight tickets and 
          navigating complex visa requirements to arranging spiritual Haj & Umrah journeys, our dedicated 
          team ensures every aspect of your trip is handled with professional care.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-500">Comprehensive travel assistance for all your needs.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "Flight Tickets", "Visa Assistance", "Travel Insurance", 
              "Tour Packages", "Hotel Bookings", "Attestation", 
              "Haj & Umrah", "Forex"
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center gap-4">
                <CheckCircle2 className="w-8 h-8 text-brand-secondary" />
                <span className="font-bold text-slate-900">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4">Why Customers Choose Us</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Trusted Expertise", desc: "Years of proven experience in travel logistics.", icon: Award },
            { title: "Global Network", desc: "Strong partnerships with airlines and hotels worldwide.", icon: Map },
            { title: "Secure Processing", desc: "Safe handling of passports and sensitive documents.", icon: ShieldCheck },
            { title: "24/7 Support", desc: "Dedicated assistance throughout your entire journey.", icon: Clock },
          ].map((feature, i) => (
            <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif mb-6 text-brand-secondary">Our Commitment</h2>
          <p className="text-lg text-white/90 leading-relaxed text-balance">
            We are committed to delivering exceptional travel experiences marked by reliability, transparency, and personal care. Whether it's a family vacation, a complex business itinerary, or a sacred pilgrimage, we stand by our promise: Your Journey, Our Responsibility.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-8">Plan Your Next Journey With Us</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <AnimatedButton as="link" to="/contact" className="bg-brand-primary text-white font-bold py-3.5 px-10 rounded-xl shadow-xl shadow-brand-primary/20 hover:bg-brand-primary/90 flex items-center justify-center gap-2">
            Contact Us <ArrowRight className="w-5 h-5" />
          </AnimatedButton>
          <AnimatedButton as="a" href="https://wa.me/919884353228" target="_blank" rel="noopener noreferrer" className="bg-slate-100 text-slate-900 font-bold py-3.5 px-10 rounded-xl hover:bg-slate-200 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" /> WhatsApp Us
          </AnimatedButton>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { AnimatedButton } from "../components/ui/AnimatedButton";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service || !formData.message.trim()) {
      setError("Please fill in all required fields (*).");
      return;
    }

    const text = `*Hello MS World Travels,*

I would like to make a travel enquiry.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Service Required:* ${formData.service}
*Travel Date:* ${formData.date || 'Not specified'}
*Message:* ${formData.message}

Thank you.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919884353228?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col w-full ">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-brand-primary/90 to-brand-primary/40 text-white py-16 md:py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto pt-10 relative z-10">
          <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs mb-4 block">We Are Here For You</span>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Let's Plan Your Journey</h1>
          <p className="text-xl text-blue-50">Get in touch with us for all your travel needs.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full grid md:grid-cols-[1fr_2fr] gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col gap-4 group hover:border-brand-accent transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shadow-sm text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Phone Number</h3>
              <a href="tel:+919884353228" className="text-slate-600 hover:text-brand-primary transition-colors block">+91 98843 53228</a>
              <a href="tel:+919962740060" className="text-slate-600 hover:text-brand-primary transition-colors block">+91 99627 40060</a>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col gap-4 group hover:border-brand-accent transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shadow-sm text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Email Address</h3>
              <a href="mailto:msworldtravels@gmail.com" className="text-slate-600 hover:text-brand-primary transition-colors break-all">msworldtravels@gmail.com</a>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col gap-4 group hover:border-brand-accent transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shadow-sm text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Office Address</h3>
              <p className="text-slate-600 leading-relaxed">
                Ground Floor, 17, Aziz Mulk, 4th Street<br/>
                Thousand Lights, Chennai<br/>
                Tamil Nadu 600006
              </p>
            </div>
          </div>
        </div>

        {/* Form & Map */}
        <div className="space-y-12">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-8">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input name="name" value={formData.name} onChange={handleChange} required type="text" placeholder="Full Name *" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none" />
                <input name="phone" value={formData.phone} onChange={handleChange} required type="tel" placeholder="Phone Number *" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none" />
                <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none text-slate-500">
                  <option value="">Select Service Required *</option>
                  <option>Flight Tickets</option>
                  <option>Visa</option>
                  <option>Tour Package</option>
                  <option>Hotel</option>
                  <option>Travel Insurance</option>
                  <option>Attestation</option>
                  <option>Haj</option>
                  <option>Umrah</option>
                  <option>Other</option>
                </select>
              </div>

              <input name="date" value={formData.date} onChange={handleChange} type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none text-slate-500" />
              
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Your Message *" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none resize-none"></textarea>
              
              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
              
              <AnimatedButton type="submit" className="w-full sm:w-auto bg-brand-primary text-white font-bold py-3.5 px-10 rounded-xl hover:bg-brand-primary/90 shadow-lg h-12 flex items-center justify-center">
                Send Enquiry
              </AnimatedButton>
            </form>
          </div>

          <div className="w-full h-[400px] rounded-[2rem] overflow-hidden border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124405.02107474447!2d80.12658428807028!3d13.047475143328042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

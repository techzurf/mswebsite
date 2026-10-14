import { FileText, ChevronDown, CheckCircle2 } from "lucide-react";
import { AnimatedButton } from "../components/ui/AnimatedButton";

export function Visa() {
  const visaTypes = [
    "UAE Visa", "Saudi Visa", "Tourist Visa", 
    "Visit Visa", "Business Visa", "Other Visa Services"
  ];

  const faqs = [
    {
      q: "What documents are required?",
      a: "Generally, a valid passport (minimum 6 months validity), passport-size photographs, and relevant application forms are required. Specific requirements depend on the destination country."
    },
    {
      q: "How long does processing take?",
      a: "Processing times vary depending on the country and visa type. We strive to process applications as swiftly as possible based on embassy guidelines."
    },
    {
      q: "What are the visa charges?",
      a: "Visa charges include the embassy fee and our service charge. Please contact us with your destination for exact pricing."
    },
    {
      q: "Can you assist with urgent applications?",
      a: "Yes, we offer express or urgent processing for select countries where available."
    },
    {
      q: "How can I track my application?",
      a: "Our team will keep you updated via phone or WhatsApp at every stage of the application process."
    }
  ];

  return (
    <div className="flex flex-col w-full ">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-brand-primary/90 to-brand-primary/40 text-white py-16 md:py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto pt-10 relative z-10">
          <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Fast & Reliable</span>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Visa Assistance <br/>Made Simple</h1>
          <p className="text-xl text-blue-50 mb-10 text-balance">Get professional assistance for your travel visa requirements from our experienced team.</p>
          <a href="#visa-enquiry" className="visa-hero-cta">
            Start Your Visa Enquiry
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-slate-900">Supported Visa Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {visaTypes.map((visa, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-[2rem] text-center hover:border-brand-accent hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                <FileText className="w-6 h-6 text-brand-accent group-hover:text-white" />
              </div>
              <h3 className="font-bold text-slate-900">{visa}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-slate-900">The Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>
            {[
              { step: 1, title: "Submit Enquiry" },
              { step: 2, title: "Document Verification" },
              { step: 3, title: "Application Processing" },
              { step: 4, title: "Approval / Delivery" }
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center font-bold text-2xl text-brand-primary mb-4 shadow-sm">
                  {s.step}
                </div>
                <h3 className="font-bold text-slate-900">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & FAQ */}
      <section id="visa-enquiry" className="py-20 px-4 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold font-serif text-slate-900 mb-8">Visa Enquiry</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none" />
            
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Destination" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none" />
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none text-slate-500">
                <option value="">Visa Type</option>
                {visaTypes.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
            
            <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none text-slate-500" />
            <textarea rows={4} placeholder="Additional Message" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 h-12 text-base focus:ring-2 focus:ring-brand-primary/50 outline-none resize-none"></textarea>
            
            <AnimatedButton type="submit" className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-brand-primary/90 shadow-lg">
              Submit Visa Enquiry
            </AnimatedButton>
          </form>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-serif text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-100">
                <summary className="flex items-center justify-between p-6 font-bold text-slate-900 cursor-pointer list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

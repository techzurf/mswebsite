import React, { useState } from "react";
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, CheckCircle2, MessageSquarePlus, X, Heart, MapPin, Calendar, Compass, PhoneCall, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedButton } from "./ui/AnimatedButton";

export interface PilgrimTestimonial {
  id: string;
  name: string;
  location: string;
  packageType: "Haj" | "Umrah" | "Family" | "Ramadan";
  packageTitle: string;
  year: string;
  rating: number;
  hotelDetail: string;
  summary: string;
  fullQuote: string;
  keyHighlights: string[];
  avatarInitial: string;
  avatarBg: string;
}

const INITIAL_TESTIMONIALS: PilgrimTestimonial[] = [
  {
    id: "rev-1",
    name: "Haji Mohammed Ismail & Family",
    location: "Chennai, Tamil Nadu",
    packageType: "Haj",
    packageTitle: "Executive Haj Pilgrimage",
    year: "Haj 2024",
    rating: 5,
    hotelDetail: "Clock Tower Makkah & 150m from Masjid An-Nabawi",
    summary: "Exceptional care for my 74-year-old mother. The ground team had wheelchairs ready at every station.",
    fullQuote: "Embarking on Haj with my elderly mother was a major responsibility. MS World Travels exceeded all our expectations. From VIP tent access in Mina and Arafat to having dedicated wheelchair attendants throughout Tawaf and Sa'i, my mother performed every ritual comfortably without strain. Our group leader was a respected scholar who explained every dua and obligation in Tamil and Urdu. May Allah reward the entire team.",
    keyHighlights: ["Elderly & Wheelchair Support", "Direct VIP Tents in Mina", "Scholar Guidance in Tamil & Urdu"],
    avatarInitial: "MI",
    avatarBg: "bg-amber-100 text-amber-900",
  },
  {
    id: "rev-2",
    name: "Dr. Ayesha Siddiqa",
    location: "Bangalore, Karnataka",
    packageType: "Ramadan",
    packageTitle: "Last 10 Days Ramadan Umrah",
    year: "Ramadan 2024",
    rating: 5,
    hotelDetail: "3-minute walk to Prophet's Mosque, Madinah",
    summary: "Female-friendly, respectful atmosphere and guaranteed Rawdah slots booked on Nusuk seamlessly.",
    fullQuote: "Traveling with my teenage daughter, safety and religious peace of mind were my top concerns. MS World Travels took care of every minute detail: our Nusuk appointment for Rawdah was secured without any confusion, our hotel was literally steps from the ladies' gate of Masjid An-Nabawi, and the Sahur and Iftar arrangements were timely and wholesome. Truly a life-changing spiritual retreat.",
    keyHighlights: ["Guaranteed Nusuk Rawdah Slots", "Steps from Ladies' Gate", "Thoughtful Sahur & Iftar Meals"],
    avatarInitial: "AS",
    avatarBg: "bg-emerald-100 text-emerald-900",
  },
  {
    id: "rev-3",
    name: "Abdul Rahman & Fatima Begum",
    location: "Trichy, Tamil Nadu",
    packageType: "Umrah",
    packageTitle: "15-Day Deluxe Umrah Package",
    year: "November 2024",
    rating: 5,
    hotelDetail: "Swissotel Makkah & Frontel Madinah",
    summary: "Zero hidden charges. Transparent pricing, luxury AC buses, and delicious home-style Indian cuisine.",
    fullQuote: "Before choosing MS World Travels, we heard horror stories of hidden fees and long walking distances with other agencies. With MS World Travels, everything stated in the itinerary was delivered 100%. Our hotels were pristine, the private luxury bus between Jeddah, Makkah, and Madinah was brand new, and hot South Indian meals made us feel right at home after exhausting prayers. We recommend them to all our relatives.",
    keyHighlights: ["100% Transparent Inclusions", "Brand New VIP Buses", "South Indian Catering Daily"],
    avatarInitial: "AR",
    avatarBg: "bg-blue-100 text-blue-900",
  },
  {
    id: "rev-4",
    name: "Farooq Ahmed & Brothers",
    location: "Vellore / Dubai",
    packageType: "Haj",
    packageTitle: "VIP Shifting Haj Package",
    year: "Haj 2023",
    rating: 5,
    hotelDetail: "Premium Azizia & 5-Star Central Makkah",
    summary: "24/7 dedicated support team stationed inside Makkah. We never felt abandoned for a single minute.",
    fullQuote: "The biggest test of a travel agency is during the crowded peak days of Tashreeq in Mina. MS World Travels had coordinators stationed at every camp intersection in Mina with cold drinks, medical kits, and clear directions. When one of our group members lost his way after the Jamarat stoning, their field team located and escorted him safely back within 20 minutes. That level of dedication is priceless.",
    keyHighlights: ["24/7 On-Ground Emergency Help", "Stationed Mina Camp Guides", "Medical First-Aid Assistance"],
    avatarInitial: "FA",
    avatarBg: "bg-purple-100 text-purple-900",
  },
  {
    id: "rev-5",
    name: "Syed Kaleemullah",
    location: "Hyderabad, Telangana",
    packageType: "Family",
    packageTitle: "Complete Family Umrah Group",
    year: "October 2024",
    rating: 5,
    hotelDetail: "Pullman Zamzam Makkah & Anwar Al Madinah",
    summary: "In-depth Ziyarat tours with historical context. The scholar explained the Battle of Uhud with great emotion.",
    fullQuote: "Our family wanted our children to truly understand Islamic history, not just visit sites briefly. The Ziyarat organized by MS World Travels was exceptional. The guide gave a complete historical walkthrough at Mount Uhud, Masjid Quba, Jabal Thawr, and the Cave of Hira. The children were captivated, and the itinerary allowed ample time for prayers without rushing.",
    keyHighlights: ["Educational Historical Ziyarat", "Child & Family Friendly Schedule", "Spacious Adjoining Rooms"],
    avatarInitial: "SK",
    avatarBg: "bg-rose-100 text-rose-900",
  },
  {
    id: "rev-6",
    name: "Noorjahan Parveen & In-Laws",
    location: "Coimbatore, Tamil Nadu",
    packageType: "Family",
    packageTitle: "Senior Citizen Care Umrah",
    year: "January 2025",
    rating: 5,
    hotelDetail: "Direct Haram Courtyard Access, Makkah",
    summary: "Ground floor accommodations and luggage handling right to the hotel rooms made all the difference.",
    fullQuote: "Both my in-laws have knee arthritis and struggle with long escalators and crowded shuttles. MS World Travels arranged accommodations where the elevator opens right onto the Haram plaza. Their luggage handlers took our bags directly from the airport coach to our rooms. Their patience, kindness, and courtesy towards senior citizens is unmatched.",
    keyHighlights: ["Direct Haram Plaza Access", "Room-to-Coach Porterage", "Special Attention for Arthritis"],
    avatarInitial: "NP",
    avatarBg: "bg-teal-100 text-teal-900",
  },
];

type FilterType = "All" | "Haj" | "Umrah" | "Family" | "Ramadan";

export function HajUmrahTestimonials() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All");
  const [activeStory, setActiveStory] = useState<PilgrimTestimonial | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [submittedReviewSuccess, setSubmittedReviewSuccess] = useState<boolean>(false);

  // Form State
  const [formName, setFormName] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formType, setFormType] = useState<"Haj" | "Umrah" | "Family" | "Ramadan">("Umrah");
  const [formYear, setFormYear] = useState("2024");
  const [formRating, setFormRating] = useState(5);
  const [formQuote, setFormQuote] = useState("");
  const [formHotel, setFormHotel] = useState("");
  const [formError, setFormError] = useState("");

  const filteredTestimonials = INITIAL_TESTIMONIALS.filter((item) => {
    if (selectedFilter === "All") return true;
    return item.packageType === selectedFilter;
  });

  const cardsPerPage = 3;
  const totalPages = Math.ceil(filteredTestimonials.length / cardsPerPage);
  const currentReviews = filteredTestimonials.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  const handleFilterChange = (filter: FilterType) => {
    setSelectedFilter(filter);
    setCurrentPage(0);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formLocation.trim() || !formQuote.trim()) {
      setFormError("Please fill in your name, city, and review message.");
      return;
    }
    setFormError("");
    setSubmittedReviewSuccess(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmittedReviewSuccess(false);
      setFormName("");
      setFormLocation("");
      setFormQuote("");
      setFormHotel("");
    }, 2500);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Subtle ambient religious motif glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="px-4 max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Sacred Journey Trust & Verified Experiences</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight">
              Honored by 12,000+ Blessed Pilgrims
            </h2>
            <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed text-balance">
              For over 26 years, families have trusted MS World Travels with their sacred pilgrimage. Read real experiences from pilgrims who performed Haj and Umrah with our care.
            </p>
          </div>

          {/* Aggregate Rating & Action */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center gap-4 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 md:p-5 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-col items-center justify-center">
                <span className="text-xl font-black text-amber-400 tabular-nums">4.9</span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">/ 5.0</span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-white">850+ Verified Reviews</span>
                  <span className="text-slate-400"> · 100% Visa Record</span>
                </div>
              </div>
            </div>

            <AnimatedButton
              onClick={() => setShowReviewModal(true)}
              className="mt-2 sm:mt-0 lg:ml-2 px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 flex items-center gap-1.5 shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0"
            >
              <MessageSquarePlus className="w-4 h-4" />
              Share Feedback
            </AnimatedButton>
          </div>
        </div>

        {/* Trust Badges Strip (4 Pillars) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-10 pb-8 border-b border-slate-800 text-slate-300 text-xs">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Close Proximity Hotels in Haram</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>24/7 Experienced Mutawwif Guides</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Special Elderly & Wheelchair Care</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Direct Flights & Guaranteed Visas</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 p-1 bg-slate-800/90 rounded-xl border border-slate-700/60 overflow-x-auto max-w-full">
            {(["All", "Haj", "Umrah", "Family", "Ramadan"] as FilterType[]).map((tab) => {
              const count = tab === "All" 
                ? INITIAL_TESTIMONIALS.length 
                : INITIAL_TESTIMONIALS.filter((t) => t.packageType === tab).length;
              const isActive = selectedFilter === tab;

              return (
                <button
                  key={tab}
                  onClick={() => handleFilterChange(tab)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <span>{tab === "All" ? "All Experiences" : `${tab}`}</span>
                  <span className={`text-[11px] tabular-nums ${isActive ? "text-slate-950/70" : "text-slate-500"}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Carousel Arrows */}
          {totalPages > 1 && (
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-400 tabular-nums mr-2">
                Page {currentPage + 1} of {totalPages}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous reviews"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next reviews"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentReviews.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-slate-800/70 border border-slate-700/70 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors shadow-sm relative group"
            >
              <div>
                {/* Pilgrim Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full font-bold text-sm flex items-center justify-center shrink-0 ${testimonial.avatarBg}`}>
                      {testimonial.avatarInitial}
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-white leading-tight">
                        {testimonial.name}
                      </h3>
                      {/* Unboxed metadata with typographic separators */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                        <span>{testimonial.location}</span>
                        <span aria-hidden="true">·</span>
                        <span>{testimonial.year}</span>
                      </div>
                    </div>
                  </div>

                  <Quote className="w-5 h-5 text-amber-500/30 shrink-0 group-hover:text-amber-500/60 transition-colors" />
                </div>

                {/* Rating & Package Name */}
                <div className="flex items-center justify-between mb-3.5 pb-3 border-b border-slate-700/60">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-amber-300/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {testimonial.packageTitle}
                  </span>
                </div>

                {/* Hotel & Proximity Note */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{testimonial.hotelDetail}</span>
                </div>

                {/* Quote Content */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  "{testimonial.fullQuote}"
                </p>

                {/* Concrete Service Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {testimonial.keyHighlights.slice(0, 2).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] text-slate-300 bg-slate-900/60 px-2 py-1 rounded border border-slate-700/50"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified footer & Read Full Action */}
              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Pilgrim</span>
                </div>
                <button
                  onClick={() => setActiveStory(testimonial)}
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1"
                >
                  Read Story &rarr;
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Proof Strip with Direct Pilgrim Advisor Support */}
        <div className="mt-14 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-800 via-slate-800 to-slate-800/80 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-white">
                Have questions about our upcoming Haj or Umrah groups?
              </h3>
              <p className="text-xs md:text-sm text-slate-300 mt-0.5">
                Speak directly with our dedicated pilgrimage advisors who have guided over 100+ groups to Makkah and Madinah.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <AnimatedButton
              as="link"
              to="/haj"
              className="flex-1 md:flex-none px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap"
            >
              View Packages
            </AnimatedButton>
            <AnimatedButton
              as="a"
              href="https://wa.me/919884353228?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20know%20more%20about%20your%20Haj%20and%20Umrah%20packages%20and%20speak%20with%20an%20advisor."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-5 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white text-xs md:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4" />
              Chat on WhatsApp
            </AnimatedButton>
          </div>
        </div>
      </div>

      {/* Full Testimonial Modal Dialog */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-slate-900 border border-slate-700 rounded-3xl max-w-xl w-full p-6 md:p-8 text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-story-title"
          >
            <button
              onClick={() => setActiveStory(null)}
              aria-label="Close dialog"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className={`w-14 h-14 rounded-full font-bold text-lg flex items-center justify-center shrink-0 ${activeStory.avatarBg}`}>
                {activeStory.avatarInitial}
              </div>
              <div>
                <h3 id="modal-story-title" className="text-lg md:text-xl font-bold text-white">
                  {activeStory.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <span>{activeStory.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeStory.year}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/70 rounded-xl p-4 mb-5 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Pilgrimage Service:</span>
                <span className="font-semibold text-amber-400">{activeStory.packageTitle}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Accommodations:</span>
                <span className="font-medium text-slate-200">{activeStory.hotelDetail}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Pilgrim Rating:</span>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(activeStory.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-xs text-white font-semibold">5.0 / 5.0</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
                Detailed Pilgrim Experience
              </h4>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                "{activeStory.fullQuote}"
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Key Highlights Experienced
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeStory.keyHighlights.map((hl, i) => (
                  <span key={i} className="text-xs bg-slate-800 text-amber-300 border border-slate-700 px-3 py-1.5 rounded-lg">
                    ✓ {hl}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
              <AnimatedButton
                as="a"
                href={`https://wa.me/919884353228?text=Assalamu%20Alaikum,%20I%20read%20the%20review%20by%20${encodeURIComponent(activeStory.name)}%20regarding%20the%20${encodeURIComponent(activeStory.packageTitle)}.%20Please%20share%20details%20for%20an%20upcoming%20departure.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs md:text-sm text-center shadow-md shadow-amber-500/20"
              >
                Inquire About Similar Package
              </AnimatedButton>
              <button
                onClick={() => setActiveStory(null)}
                className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs md:text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Feedback / Review Modal Dialog */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 md:p-8 text-slate-100 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-feedback-title"
          >
            <button
              onClick={() => setShowReviewModal(false)}
              aria-label="Close dialog"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <h3 id="modal-feedback-title" className="text-xl font-bold font-serif text-white">
                Share Your Pilgrimage Experience
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Your feedback helps future pilgrims make confident, informed decisions for their holy journey.
              </p>
            </div>

            {submittedReviewSuccess ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Jazakallah Khair!</h4>
                <p className="text-sm text-slate-300 max-w-sm">
                  Thank you for submitting your review. Our team will verify and feature your testimony after cross-checking the booking details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-lg bg-red-950/60 border border-red-800/80 text-red-300 text-xs">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Haji Irfan Ahmed"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      placeholder="e.g. Chennai"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Package Type
                    </label>
                    <select
                      value={formType}
                      onChange={(e) => setFormType(e.target.value as any)}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Haj">Haj Pilgrimage</option>
                      <option value="Umrah">Umrah Package</option>
                      <option value="Family">Family Pilgrimage</option>
                      <option value="Ramadan">Ramadan Special</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Year Travelled
                    </label>
                    <input
                      type="text"
                      value={formYear}
                      onChange={(e) => setFormYear(e.target.value)}
                      placeholder="e.g. 2024"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Hotel / Accommodations (Optional)
                  </label>
                  <input
                    type="text"
                    value={formHotel}
                    onChange={(e) => setFormHotel(e.target.value)}
                    placeholder="e.g. Clock Tower Makkah / Anwar Al Madinah"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormRating(star)}
                        className="p-1 text-slate-600 hover:text-amber-400 focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= formRating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-600"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-amber-400 font-semibold ml-2">
                      {formRating} Star{formRating > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Review & Experience *
                  </label>
                  <textarea
                    rows={4}
                    value={formQuote}
                    onChange={(e) => setFormQuote(e.target.value)}
                    placeholder="Describe how MS World Travels handled your travel, hotel proximity, ground guidance, elderly assistance, etc."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <AnimatedButton
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20"
                  >
                    Submit Review
                  </AnimatedButton>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

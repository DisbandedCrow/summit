import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { CalendarIcon, MapPin, Users, Sparkles, CheckCircle2, Clock, Award, TrendingUp, ArrowDown } from "lucide-react";
import { format } from "date-fns";
import eventLogo from "../../imports/image-8.png";
import encoreImage from "../../imports/image-10.png";
import { Footer } from "../components/Footer";

const ENCORE_IMAGE_URL =
  "https://images.unsplash.com/photo-1771775528706-87b41f784736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFbmNvcmUlMjBXeW5uJTIwTGFzJTIwVmVnYXMlMjBsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NjI2NjA4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function EventPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    title: "",
    email: "",
    phone: "",
    dinnerRsvp: "",
    allergies: "",
    encoreStay: "",
    arrivalDate: undefined as Date | undefined,
    arrivalDateText: "",
    departureDate: undefined as Date | undefined,
    departureDateText: "",
    ccwTicket: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [arrivalCalendarOpen, setArrivalCalendarOpen] = useState(false);
  const [departureCalendarOpen, setDepartureCalendarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrivalTextChange = (text: string) => {
    const parsed = new Date(text);
    const isValid =
      !isNaN(parsed.getTime()) &&
      parsed >= new Date("2026-06-20") &&
      parsed <= new Date("2026-06-27");
    setFormData(prev => ({
      ...prev,
      arrivalDateText: text,
      arrivalDate: isValid ? parsed : undefined,
    }));
  };

  const handleDepartureTextChange = (text: string) => {
    const parsed = new Date(text);
    const minDate = formData.arrivalDate ? new Date(formData.arrivalDate.getTime() + 86400000) : new Date("2026-06-20");
    const isValid =
      !isNaN(parsed.getTime()) &&
      parsed >= minDate &&
      parsed <= new Date("2026-06-27");
    setFormData(prev => ({
      ...prev,
      departureDateText: text,
      departureDate: isValid ? parsed : undefined,
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000022] via-[#202328] to-[#506581]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-xl border border-[#5889D4]/30 rounded-2xl p-12">
            <div className="w-20 h-20 bg-gradient-to-br from-[#BDDD8D] to-[#5889D4] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">You're Confirmed!</h2>
            <p className="text-xl text-[#B8C4D0] mb-8">
              Thank you for registering for Anna Summit 2026. We'll send confirmation details to your email shortly.
            </p>
            <div className="bg-[#5889D4]/20 border border-[#5889D4]/40 rounded-lg p-6 text-left">
              <p className="text-white font-medium mb-2">What's Next?</p>
              <ul className="space-y-2 text-[#B8C4D0]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#BDDD8D] mt-0.5 flex-shrink-0" />
                  <span>Check your email for confirmation and event details</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#BDDD8D] mt-0.5 flex-shrink-0" />
                  <span>Add the event to your calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#BDDD8D] mt-0.5 flex-shrink-0" />
                  <span>Get ready for an incredible experience at CCW 2026</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000022] via-[#202328] to-[#506581]">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#000022]" style={{ minHeight: "100vh" }}>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(88,137,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(88,137,212,1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(88,137,212,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6" style={{ minHeight: "100vh" }}>

          {/* Logo — absolutely centered in the hero */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src={eventLogo}
              alt="Anna Summit 2026"
              className="max-w-full h-auto mx-auto block"
              style={{ maxWidth: "min(520px, 90vw)" }}
            />
          </div>

          {/* Eyebrow — near top of hero */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 pt-16 sm:pt-20">
            <div className="h-px w-8 sm:w-12 bg-[#5889D4]/60 flex-shrink-0" />
            <span className="text-[#5889D4] tracking-[0.12em] sm:tracking-[0.25em] uppercase text-xs font-medium text-center whitespace-nowrap" style={{ fontFamily: "Verdana, sans-serif" }}>Exclusive Event · Summit & CCW 2026</span>
            <div className="h-px w-8 sm:w-12 bg-[#5889D4]/60 flex-shrink-0" />
          </div>

          {/* Spacer — fills gap between eyebrow and bottom content */}
          <div className="flex-1" />

          {/* Bottom — content anchored to lower quarter */}
          <div className="flex flex-col items-center w-full pb-12 sm:pb-16 pt-32 sm:pt-40">
            {/* Divider */}
            <div className="h-px w-16 sm:w-24 bg-[#F5D348]/60 mb-8 sm:mb-10" />

            {/* Tagline */}
            <p
              className="text-white/70 max-w-xs sm:max-w-xl mx-auto leading-relaxed mb-10 sm:mb-14 px-2"
              style={{ fontFamily: "Verdana, sans-serif", fontSize: "14px" }}
            >
              An exclusive gathering for customer experience leaders exploring the next frontier of AI-driven service intelligence.
            </p>

            {/* Event Meta */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-white/60 mb-0" style={{ fontFamily: "Verdana, sans-serif", fontSize: "15px" }}>
              <div className="flex items-center gap-3">
                <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5D348] flex-shrink-0" />
                <span>June 23, 2026</span>
              </div>
              <div className="hidden sm:block h-5 w-px bg-white/20" />
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5D348] flex-shrink-0" />
                <span>Encore by Wynn, Las Vegas</span>
              </div>
              <div className="hidden sm:block h-5 w-px bg-white/20" />
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5D348] flex-shrink-0" />
                <span>Invitation Only</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 sm:mt-12 w-full sm:w-auto px-4 sm:px-0">
              <a
                href="#registration-form"
                className="group inline-flex items-center justify-center gap-4 px-8 sm:px-10 py-4 border text-white tracking-widest uppercase transition-all duration-500 w-full sm:w-auto"
                style={{
                  fontFamily: "Verdana, sans-serif",
                  fontSize: "12px",
                  borderColor: "rgba(245, 211, 72, 0.55)",
                  background: "rgba(245, 211, 72, 0.04)",
                  boxShadow: "inset 0 0 0 0 rgba(245,211,72,0)",
                  letterSpacing: "0.22em",
                }}
                onClick={e => {
                  e.preventDefault();
                  document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,211,72,0.95)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,211,72,0.09)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 28px rgba(245,211,72,0.18), inset 0 0 20px rgba(245,211,72,0.04)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,211,72,0.55)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,211,72,0.04)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "inset 0 0 0 0 rgba(245,211,72,0)";
                }}
              >
                <span>Sign Up Now</span>
                <ArrowDown
                  className="w-4 h-4 text-[#F5D348] transition-transform duration-500 group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      

      {/* Venue Section */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${encoreImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          minHeight: "560px",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,34,0.92) 0%, rgba(0,0,34,0.75) 55%, rgba(0,0,34,0.5) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,34,0.7) 0%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center" style={{ minHeight: "560px" }}>
          <div className="container mx-auto px-6 py-16">
            <div className="w-full max-w-xl">
              <div className="inline-flex items-center gap-2 border border-[#F5D348]/50 rounded-full px-4 py-1.5 mb-6" style={{ backgroundColor: "rgba(245,211,72,0.15)" }}>
                <MapPin className="w-4 h-4 text-[#F5D348]" />
                <span className="text-[#F5D348] font-medium text-sm">Your Venue</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Encore by Wynn
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>Experience Anna Summit 2026 at one of Las Vegas's most iconic luxury resorts. World-class amenities, stunning pools, and an atmosphere that matches the caliber of conversations you'll have inside.</p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="relative py-10 sm:py-12 bg-gradient-to-r from-[#5889D4] to-[#80B0EF]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Act Now for Special Savings!
            </h3>
            <p className="text-base sm:text-xl text-white/90">
              If you're staying at the Encore, you can take advantage of Anna's special rate at{" "}
              <span className="font-bold text-[#F5D348]">$219/night</span>!
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="relative py-24 bg-[#000022] overflow-hidden">
        {/* Subtle grid overlay — matches hero */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(88,137,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(88,137,212,1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial glow — matches hero */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(88,137,212,0.10) 0%, transparent 70%)",
          }}
        />
        {/* Gold top rule */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(245,211,72,0.35), transparent)" }} />

        <div className="relative z-10 container mx-auto px-6">
          {/* Section eyebrow — mirrors hero */}
          

          {/* Heading */}
          <div className="text-center mb-4 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold" style={{ fontFamily: "Verdana, sans-serif", letterSpacing: "-0.01em" }}>
              Confirm My Spot
            </h2>
          </div>
          <div className="flex items-center justify-center gap-3 mb-10 sm:mb-14 px-4">
            <div className="h-px w-6 sm:w-8 bg-[#F5D348]/50 flex-shrink-0" />
            <p className="text-[#B8C4D0] text-xs sm:text-sm text-center" style={{ fontFamily: "Verdana, sans-serif", letterSpacing: "0.10em" }}>
              Encore by Wynn · Las Vegas · June 23, 2026
            </p>
            <div className="h-px w-6 sm:w-8 bg-[#F5D348]/50 flex-shrink-0" />
          </div>

          {/* Form — open editorial layout, no card box */}
          <div className="w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Row 1: Company Name, First & Last Name, Title */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: "companyName", label: "Company Name", field: "companyName", type: "text", required: true },
                  { id: "fullName", label: "First & Last Name", field: "fullName", type: "text", required: true },
                  { id: "title", label: "Title", field: "title", type: "text", required: true },
                ].map(({ id, label, field, type, required }) => (
                  <div key={id} className="group space-y-2">
                    <label
                      htmlFor={id}
                      className="block text-xs tracking-[0.18em] uppercase"
                      style={{ fontFamily: "Verdana, sans-serif", color: "rgba(245,211,72,0.75)" }}
                    >
                      {label}{required && <span className="ml-1 text-[#F5D348]">*</span>}
                    </label>
                    <input
                      id={id}
                      type={type}
                      required={required}
                      value={(formData as any)[field]}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      className="w-full bg-transparent text-white text-sm outline-none transition-all duration-300 pb-2"
                      style={{
                        fontFamily: "Verdana, sans-serif",
                        borderBottom: "1px solid rgba(88,137,212,0.45)",
                        caretColor: "#F5D348",
                      }}
                      onFocus={e => { e.currentTarget.style.borderBottomColor = "rgba(245,211,72,0.8)"; }}
                      onBlur={e => { e.currentTarget.style.borderBottomColor = "rgba(88,137,212,0.45)"; }}
                    />
                  </div>
                ))}
              </div>

              {/* Row 2: Email, Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: "email", label: "Email Address", field: "email", type: "email" },
                  { id: "phone", label: "Phone Number", field: "phone", type: "tel" },
                ].map(({ id, label, field, type }) => (
                  <div key={id} className="space-y-2">
                    <label
                      htmlFor={id}
                      className="block text-xs tracking-[0.18em] uppercase"
                      style={{ fontFamily: "Verdana, sans-serif", color: "rgba(245,211,72,0.75)" }}
                    >
                      {label} <span className="text-[#F5D348]">*</span>
                    </label>
                    <input
                      id={id}
                      type={type}
                      required
                      value={(formData as any)[field]}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      className="w-full bg-transparent text-white text-sm outline-none transition-all duration-300 pb-2"
                      style={{
                        fontFamily: "Verdana, sans-serif",
                        borderBottom: "1px solid rgba(88,137,212,0.45)",
                        caretColor: "#F5D348",
                      }}
                      onFocus={e => { e.currentTarget.style.borderBottomColor = "rgba(245,211,72,0.8)"; }}
                      onBlur={e => { e.currentTarget.style.borderBottomColor = "rgba(88,137,212,0.45)"; }}
                    />
                  </div>
                ))}
              </div>

              {/* Thin divider */}
              

              {/* Dinner RSVP */}
              <div className="space-y-2">
                <label
                  className="block text-xs tracking-[0.18em] uppercase"
                  style={{ fontFamily: "Verdana, sans-serif", color: "rgba(245,211,72,0.75)" }}
                >
                  Community Summit Dinner RSVP
                </label>
                <Select value={formData.dinnerRsvp} onValueChange={(value) => handleInputChange("dinnerRsvp", value)}>
                  <SelectTrigger
                    className="w-full bg-transparent text-white text-sm outline-none border-0 border-b rounded-none px-0 pb-2 focus:ring-0 transition-all duration-300"
                    style={{
                      fontFamily: "Verdana, sans-serif",
                      borderBottom: "1px solid rgba(88,137,212,0.45)",
                    }}
                  >
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#000022] border border-[#5889D4]/30 text-white">
                    <SelectItem value="yes" className="focus:bg-[#5889D4]/20">Yes</SelectItem>
                    <SelectItem value="no" className="focus:bg-[#5889D4]/20">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Allergies — conditional */}
              {formData.dinnerRsvp === "yes" && (
                <div className="space-y-2 pl-5" style={{ borderLeft: "1px solid rgba(245,211,72,0.4)" }}>
                  <label
                    className="block text-xs tracking-[0.18em] uppercase"
                    style={{ fontFamily: "Verdana, sans-serif", color: "rgba(245,211,72,0.75)" }}
                  >
                    Dietary Restrictions / Allergies
                  </label>
                  <textarea
                    value={formData.allergies}
                    onChange={(e) => handleInputChange("allergies", e.target.value)}
                    rows={3}
                    placeholder="Please list any restrictions or allergies…"
                    className="w-full bg-transparent text-white text-sm outline-none resize-none transition-all duration-300 pb-2"
                    style={{
                      fontFamily: "Verdana, sans-serif",
                      borderBottom: "1px solid rgba(88,137,212,0.45)",
                      caretColor: "#F5D348",
                    }}
                    onFocus={e => { e.currentTarget.style.borderBottomColor = "rgba(245,211,72,0.8)"; }}
                    onBlur={e => { e.currentTarget.style.borderBottomColor = "rgba(88,137,212,0.45)"; }}
                  />
                </div>
              )}

              {/* Encore Stay */}
              <div className="space-y-2">
                <label
                  className="block text-xs tracking-[0.18em] uppercase"
                  style={{ fontFamily: "Verdana, sans-serif", color: "rgba(245,211,72,0.75)" }}
                >
                  Staying at Encore by Wynn? <span className="text-[#F5D348]">*</span>
                </label>
                <p className="text-[#506581] text-xs" style={{ fontFamily: "Verdana, sans-serif" }}>
                  Anna has secured a special rate of $219/night — let us know if you'd like access.
                </p>
                <Select value={formData.encoreStay} onValueChange={(value) => handleInputChange("encoreStay", value)}>
                  <SelectTrigger
                    className="w-full bg-transparent text-white text-sm outline-none border-0 border-b rounded-none px-0 pb-2 focus:ring-0 transition-all duration-300"
                    style={{
                      fontFamily: "Verdana, sans-serif",
                      borderBottom: "1px solid rgba(88,137,212,0.45)",
                    }}
                  >
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#000022] border border-[#5889D4]/30 text-white">
                    <SelectItem value="yes" className="focus:bg-[#5889D4]/20">Yes</SelectItem>
                    <SelectItem value="no" className="focus:bg-[#5889D4]/20">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Selection — conditional */}
              {formData.encoreStay === "yes" && (
                <div className="space-y-6 pl-5" style={{ borderLeft: "1px solid rgba(245,211,72,0.4)" }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Arrival */}
                    <div className="space-y-2">
                      <label className="block text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "Verdana, sans-serif", color: "rgba(245,211,72,0.75)" }}>
                        Arrival Date <span className="text-[#F5D348]">*</span>
                      </label>
                      <p className="text-[#506581] text-xs" style={{ fontFamily: "Verdana, sans-serif" }}>Earliest: June 20</p>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="MM/DD/YYYY"
                          value={formData.arrivalDateText}
                          onChange={(e) => handleArrivalTextChange(e.target.value)}
                          required
                          className="w-full bg-transparent text-white text-sm outline-none transition-all duration-300 pb-2 pr-8"
                          style={{
                            fontFamily: "Verdana, sans-serif",
                            borderBottom: "1px solid rgba(88,137,212,0.45)",
                            caretColor: "#F5D348",
                          }}
                          onFocus={e => { e.currentTarget.style.borderBottomColor = "rgba(245,211,72,0.8)"; }}
                          onBlur={e => { e.currentTarget.style.borderBottomColor = "rgba(88,137,212,0.45)"; }}
                        />
                        <Popover open={arrivalCalendarOpen} onOpenChange={setArrivalCalendarOpen}>
                          <PopoverTrigger asChild>
                            <button type="button" className="absolute right-0 bottom-2 text-[#5889D4] hover:text-[#F5D348] transition-colors" aria-label="Open arrival date calendar">
                              <CalendarIcon className="h-4 w-4" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-[#000022] border border-[#5889D4]/30" align="end">
                            <Calendar
                              mode="single"
                              selected={formData.arrivalDate}
                              onSelect={(date) => {
                                setFormData(prev => ({ ...prev, arrivalDate: date, arrivalDateText: date ? format(date, "MM/dd/yyyy") : "" }));
                                setArrivalCalendarOpen(false);
                              }}
                              disabled={(date) => date < new Date("2026-06-20") || date > new Date("2026-06-27")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      {formData.arrivalDateText && !formData.arrivalDate && (
                        <p className="text-red-400 text-xs" style={{ fontFamily: "Verdana, sans-serif" }}>Valid dates: 6/20–6/27/2026</p>
                      )}
                    </div>

                    {/* Departure */}
                    <div className="space-y-2">
                      <label className="block text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "Verdana, sans-serif", color: "rgba(245,211,72,0.75)" }}>
                        Departure Date <span className="text-[#F5D348]">*</span>
                      </label>
                      <p className="text-[#506581] text-xs" style={{ fontFamily: "Verdana, sans-serif" }}>Latest: June 27</p>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="MM/DD/YYYY"
                          value={formData.departureDateText}
                          onChange={(e) => handleDepartureTextChange(e.target.value)}
                          required
                          className="w-full bg-transparent text-white text-sm outline-none transition-all duration-300 pb-2 pr-8"
                          style={{
                            fontFamily: "Verdana, sans-serif",
                            borderBottom: "1px solid rgba(88,137,212,0.45)",
                            caretColor: "#F5D348",
                          }}
                          onFocus={e => { e.currentTarget.style.borderBottomColor = "rgba(245,211,72,0.8)"; }}
                          onBlur={e => { e.currentTarget.style.borderBottomColor = "rgba(88,137,212,0.45)"; }}
                        />
                        <Popover open={departureCalendarOpen} onOpenChange={setDepartureCalendarOpen}>
                          <PopoverTrigger asChild>
                            <button type="button" className="absolute right-0 bottom-2 text-[#5889D4] hover:text-[#F5D348] transition-colors" aria-label="Open departure date calendar">
                              <CalendarIcon className="h-4 w-4" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-[#000022] border border-[#5889D4]/30" align="end">
                            <Calendar
                              mode="single"
                              selected={formData.departureDate}
                              onSelect={(date) => {
                                setFormData(prev => ({ ...prev, departureDate: date, departureDateText: date ? format(date, "MM/dd/yyyy") : "" }));
                                setDepartureCalendarOpen(false);
                              }}
                              disabled={(date) =>
                                date < new Date("2026-06-20") ||
                                date > new Date("2026-06-27") ||
                                (formData.arrivalDate ? date <= formData.arrivalDate : false)
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      {formData.departureDateText && !formData.departureDate && (
                        <p className="text-red-400 text-xs" style={{ fontFamily: "Verdana, sans-serif" }}>Valid dates: 6/20–6/27/2026, after arrival</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Thin divider */}
              

              {/* CCW Ticket */}
              <div className="space-y-2">
                <label
                  className="block text-xs tracking-[0.18em] uppercase"
                  style={{ fontFamily: "Verdana, sans-serif", color: "rgba(245,211,72,0.75)" }}
                >
                  Complimentary CCW Ticket Requested
                </label>
                <Select value={formData.ccwTicket} onValueChange={(value) => handleInputChange("ccwTicket", value)}>
                  <SelectTrigger
                    className="w-full bg-transparent text-white text-sm outline-none border-0 border-b rounded-none px-0 pb-2 focus:ring-0 transition-all duration-300"
                    style={{
                      fontFamily: "Verdana, sans-serif",
                      borderBottom: "1px solid rgba(88,137,212,0.45)",
                    }}
                  >
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#000022] border border-[#5889D4]/30 text-white">
                    <SelectItem value="yes" className="focus:bg-[#5889D4]/20">Yes</SelectItem>
                    <SelectItem value="no" className="focus:bg-[#5889D4]/20">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit — styled to match hero CTA but filled */}
              <div className="pt-8 flex flex-col items-center gap-4">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-4 px-8 sm:px-12 py-4 border text-white tracking-widest uppercase transition-all duration-500 w-full sm:w-auto"
                  style={{
                    fontFamily: "Verdana, sans-serif",
                    fontSize: "12px",
                    borderColor: "rgba(245,211,72,0.65)",
                    background: "rgba(245,211,72,0.07)",
                    letterSpacing: "0.22em",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(245,211,72,0.95)";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(245,211,72,0.13)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 32px rgba(245,211,72,0.18), inset 0 0 20px rgba(245,211,72,0.04)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(245,211,72,0.65)";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(245,211,72,0.07)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  }}
                >
                  <span>Sign Up Now</span>
                  <CheckCircle2 className="w-4 h-4 text-[#F5D348] transition-transform duration-500 group-hover:scale-110" />
                </button>
                <p className="text-[#506581] text-xs mt-5 tracking-widest uppercase" style={{ fontFamily: "Verdana, sans-serif", letterSpacing: "0.14em" }}>
                  <span className="text-[#F5D348]">*</span> Required fields
                </p>
                <p className="text-[#B8C4D0] text-xs mt-2" style={{ fontFamily: "Verdana, sans-serif" }}>
                  Questions about the event? Contact our team at{" "}
                  <a
                    href="mailto:anna@annacx.com"
                    className="transition-colors duration-300"
                    style={{ color: "rgba(245,211,72,0.8)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,211,72,1)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,211,72,0.8)"; }}
                  >
                    anna@annacx.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="relative bg-[#000022] overflow-hidden">
      </section>

      <Footer />
    </div>
  );
}
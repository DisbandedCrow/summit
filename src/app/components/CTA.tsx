import { Button } from "./ui/button";
import { ArrowRight, Check, Clock, Shield, Sparkles } from "lucide-react";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import whiteAnnaLogo from "figma:asset/eba4833f335910f29d6df2d89c38dc1d7e72880e.png";
import svgPaths from "../../imports/svg-s1hjb6mcrd";

export function CTA() {
  const benefits = [
    {
      icon: Clock,
      text: "Quick 15-minute demo"
    },
    {
      icon: Shield,
      text: "No credit card required"
    },
    {
      icon: Sparkles,
      text: "Custom implementation plan"
    }
  ];

  return (
    <section id="contact-form" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000022] via-[#202328] to-[#506581]"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-[#5889D4]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-[#F5D348]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Floating animated dots */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Define animation paths */}
          <defs>
            <path id="floatPath1" d="M -50,300 Q 200,150 400,250 T 800,200 Q 1000,220 1200,180 T 1600,250" fill="none" stroke="none" />
            <path id="floatPath2" d="M 1600,150 Q 1300,250 1000,200 T 600,220 Q 400,180 200,250 T -50,200" fill="none" stroke="none" />
            <path id="floatPath3" d="M 300,-50 Q 400,200 350,350 T 400,600 Q 450,750 500,900" fill="none" stroke="none" />
            <path id="floatPath4" d="M 900,900 Q 850,700 900,500 T 950,200 Q 1000,50 1050,-50" fill="none" stroke="none" />
          </defs>
          
          {/* Floating dot 1 - Blue */}
          <circle r="4" fill="#5889D4" className="drop-shadow-[0_0_10px_rgba(88,137,212,0.8)]" opacity="0.6">
            <animateMotion dur="20s" repeatCount="indefinite">
              <mpath href="#floatPath1" />
            </animateMotion>
          </circle>
          
          {/* Floating dot 2 - Yellow */}
          <circle r="3.5" fill="#F5D348" className="drop-shadow-[0_0_8px_rgba(245,211,72,0.7)]" opacity="0.5">
            <animateMotion dur="18s" repeatCount="indefinite" begin="2s">
              <mpath href="#floatPath2" />
            </animateMotion>
          </circle>
          
          {/* Floating dot 3 - Green */}
          <circle r="3" fill="#BDDD8D" className="drop-shadow-[0_0_6px_rgba(189,221,141,0.7)]" opacity="0.5">
            <animateMotion dur="22s" repeatCount="indefinite" begin="1s">
              <mpath href="#floatPath3" />
            </animateMotion>
          </circle>
          
          {/* Floating dot 4 - Pink */}
          <circle r="3.5" fill="#EE82EE" className="drop-shadow-[0_0_8px_rgba(238,130,238,0.7)]" opacity="0.6">
            <animateMotion dur="19s" repeatCount="indefinite" begin="3s">
              <mpath href="#floatPath4" />
            </animateMotion>
          </circle>
        </svg>
      </div>

      {/* Subtle brain visualization - peeking from left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[900px] h-[900px] overflow-hidden opacity-6 pointer-events-none hidden lg:block">
        <div className="absolute -left-60 top-1/2 -translate-y-1/2 w-full h-full">
          <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 430.926 439.188">
            <g>
              {/* All brain paths in greyscale */}
              <path d={svgPaths.p34ab7180} fill="#B0B0B0" />
              <path d={svgPaths.p2d19bd80} fill="#B8B8B8" />
              <path d={svgPaths.p1b9ccf00} fill="#B8B8B8" />
              <path d={svgPaths.p38adbd00} fill="#B8B8B8" />
              <path d={svgPaths.p165f4f80} fill="#B8B8B8" />
              <path d={svgPaths.p3d16f200} fill="#B8B8B8" />
              <path d={svgPaths.pc5cf280} fill="#989898" />
              <path d={svgPaths.p3106c800} fill="#888888" />
              <path d={svgPaths.p2d8b9700} fill="#B8B8B8" />
              <path d={svgPaths.p15ea8980} fill="#B8B8B8" />
              <path d={svgPaths.p2d452280} fill="#888888" />
              <path d={svgPaths.p2b491e00} fill="#888888" />
              <path d={svgPaths.p22661900} fill="#888888" />
              <path d={svgPaths.p2586a600} fill="#B4B4B4" />
              <path d={svgPaths.p39166f80} fill="#B8B8B8" />
              <path d={svgPaths.p39be6900} fill="#888888" />
              <path d={svgPaths.p2b4e6b30} fill="#888888" />
              <path d={svgPaths.p847e400} fill="#888888" />
              <path d={svgPaths.p2a940f00} fill="#888888" />
              <path d={svgPaths.p3536ebf0} fill="#B8B8B8" />
              <path d={svgPaths.p1f143af0} fill="#B8B8B8" />
              <path d={svgPaths.p3cec15f0} fill="#B8B8B8" />
              <path d={svgPaths.p3c67cbc0} fill="#B8B8B8" />
              <path d={svgPaths.pf5a80} fill="#8D8D8D" />
              <path d={svgPaths.p2c617f00} fill="#A8A8A8" />
              <path d={svgPaths.p6adfd30} fill="#B8B8B8" />
              <path d={svgPaths.pc6061f2} fill="#B8B8B8" />
            </g>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Split layout card */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-gradient-to-br from-[#202328] to-[#506581] backdrop-blur-xl border-2 border-[#5889D4]/40 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-[#5889D4]/20">
            
            {/* Left side - Value Proposition */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#5889D4] to-[#80B0EF] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center items-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-[#F5D348]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 w-full max-w-md">
                
                <div className="mb-8 sm:mb-10 text-center">
                  <h2 className="font-bold">
                    <span className="text-white block mb-2 sm:mb-3 text-sm sm:text-base md:text-xl lg:text-2xl">Experience The Power Of</span>
                    <div className="py-4 sm:py-6 lg:py-10 flex justify-center items-center">
                      <ImageWithFallback
                        src={whiteAnnaLogo}
                        alt="Anna EQ"
                        className="max-h-14 sm:max-h-20 lg:max-h-24 w-auto max-w-full object-contain"
                      />
                    </div>
                  </h2>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {/* Feature card 1 */}
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#BDDD8D] flex-shrink-0" strokeWidth={3} />
                    <p className="text-white text-sm sm:text-base">
                      You've seen the data—now meet the family.
                    </p>
                  </div>
                  
                  {/* Feature card 2 */}
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#BDDD8D] flex-shrink-0" strokeWidth={3} />
                    <p className="text-white text-sm sm:text-base">
                      28 years of research meets emotional intelligence.
                    </p>
                  </div>
                  
                  {/* Feature card 3 */}
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#BDDD8D] flex-shrink-0" strokeWidth={3} />
                    <p className="text-white text-sm sm:text-base">
                      Let Anna handle the thinking—you focus on the magic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="lg:col-span-3 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#202328] relative overflow-hidden">
              {/* Solid background overlay to block glowing effects */}
              <div className="absolute inset-0 bg-[#202328] z-0"></div>
              
              <div className="relative z-10">
                <div className="mb-8 sm:mb-10">
                  <h3 className="text-2xl sm:text-3xl text-white mb-3 font-bold">
                    Get Started Today
                  </h3>
                  <p className="text-[#C0C0C0] text-sm sm:text-base">
                    Fill out the form and our team will reach out within 24 hours
                  </p>
                </div>

                {/* Contact Form */}
                <form className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-sm text-white mb-2">First Name</label>
                      <Input
                        type="text"
                        placeholder="John"
                        className="bg-[#000022] border-[#506581] text-white placeholder:text-[#808080] focus:border-[#5889D4] focus:ring-2 focus:ring-[#5889D4]/30 h-12 text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white mb-2">Last Name</label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        className="bg-[#000022] border-[#506581] text-white placeholder:text-[#808080] focus:border-[#5889D4] focus:ring-2 focus:ring-[#5889D4]/30 h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-sm text-white mb-2">Email*</label>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="bg-[#000022] border-[#506581] text-white placeholder:text-[#808080] focus:border-[#5889D4] focus:ring-2 focus:ring-[#5889D4]/30 h-12 text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white mb-2">Phone</label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-[#000022] border-[#506581] text-white placeholder:text-[#808080] focus:border-[#5889D4] focus:ring-2 focus:ring-[#5889D4]/30 h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-sm text-white mb-2">Company</label>
                      <Input
                        type="text"
                        placeholder="Company Name"
                        className="bg-[#000022] border-[#506581] text-white placeholder:text-[#808080] focus:border-[#5889D4] focus:ring-2 focus:ring-[#5889D4]/30 h-12 text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white mb-2">Title</label>
                      <Input
                        type="text"
                        placeholder="Your Title"
                        className="bg-[#000022] border-[#506581] text-white placeholder:text-[#808080] focus:border-[#5889D4] focus:ring-2 focus:ring-[#5889D4]/30 h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#C49B3D] via-[#C49B3D] to-[#B8860B] hover:from-[#B8860B] hover:via-[#AA7A0B] hover:to-[#9A6A0A] text-white shadow-lg shadow-[#C49B3D]/40 transition-all duration-300 group text-lg sm:text-xl h-14 sm:h-16 font-bold hover:scale-[1.02] border border-[#C49B3D]/30 hover:shadow-xl hover:shadow-[#C49B3D]/50"
                    >
                      Request Your Demo
                      <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <p className="text-xs text-[#808080] text-center pt-3">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
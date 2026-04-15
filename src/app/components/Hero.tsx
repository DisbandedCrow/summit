import { Button } from "./ui/button";
import { ArrowRight, PlayCircle, Brain, Clock, Heart, Sparkles } from "lucide-react";
import annaIcon from "figma:asset/a964e8ec6acd3d3e6b59d577039053557b5d504c.png";
import annaLogoWhite from "figma:asset/eba4833f335910f29d6df2d89c38dc1d7e72880e.png";
import svgPaths from "../../imports/svg-s1hjb6mcrd";

export function Hero() {
  const scrollToCoaching = () => {
    const coachingSection = document.getElementById('coaching');
    if (coachingSection) {
      coachingSection.scrollIntoView({ block: 'start' });
    }
  };

  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000022] via-[#202328] to-[#506581]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#5889D4]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#80B0EF]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#EE82EE]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="text-left space-y-8">
              {/* Main headline */}
              <div className="space-y-6">
                <h1 className="leading-relaxed">
                  <span className="text-white flex items-center text-3xl lg:text-4xl xl:text-5xl font-light text-[45px]">
                    <span className="mr-3">Meet</span>
                    <img 
                      src={annaLogoWhite} 
                      alt="Anna" 
                      className="h-[45px] w-auto inline-block"
                    />
                    <span className="ml-1">:</span>
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] via-[#80B0EF] to-[#F5D348] block text-5xl lg:text-6xl xl:text-7xl font-bold">The Emotionally</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] via-[#80B0EF] to-[#F5D348] block text-5xl lg:text-6xl xl:text-7xl font-bold">Intelligent AI</span>
                  <span className="text-white block text-3xl lg:text-4xl xl:text-5xl font-light text-[45px]">for CX Excellence</span>
                </h1>
                <p className="text-base lg:text-lg text-[#B8C4D0] max-w-xl leading-relaxed tracking-wide">
                  Elevate customer experience with Anna, an advanced Agentic AI that does more than simple automation.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-[#5889D4] to-[#80B0EF] hover:from-[#4779C4] hover:to-[#7090DF] text-white shadow-lg shadow-[#5889D4]/50 transition-all duration-300 group" onClick={scrollToContact}>
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="bg-[#000022]/60 border-2 border-[#80B0EF] text-white hover:bg-[#5889D4]/20 transition-all duration-300 group" onClick={scrollToCoaching}>
                  <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch How It Works
                </Button>
              </div>
              
              {/* Tagline below CTA */}
              <p className="text-sm text-white/90 font-medium">
                Transform your company with data-driven emotional intelligence.
              </p>
            </div>

            {/* Right: Floating graphic */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-[500px] h-[500px]">
                {/* Central graphic container */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
                  {/* Multiple layered glowing orbs */}
                  <div className="relative w-full h-full">
                    {/* Main central orb */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-[#5889D4] to-[#80B0EF] rounded-full blur-3xl opacity-40 animate-pulse"></div>
                    
                    {/* Secondary orbs */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#F5D348] to-[#BDDD8B] rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-[#EE82EE] to-[#5889D4] rounded-full blur-2xl opacity-35 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Center logo - prominent with glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      {/* Glow effect */}
                      <div className="absolute inset-0 w-48 h-48 bg-gradient-to-br from-[#5889D4] to-[#80B0EF] rounded-full blur-3xl opacity-40 -translate-x-4 -translate-y-4"></div>
                      
                      {/* Logo with solid white background directly applied */}
                      <div className="relative w-28 h-28 rounded-full bg-white p-0 flex items-center justify-center">
                        <img src={annaIcon} alt="Anna AI" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brain visualization with animated dots - new simpler brain */}
                <div className="absolute inset-0 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-12">
                  <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 430.926 439.188">
                    <g>
                      {/* All brain paths in greyscale from new brain SVG */}
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
                      
                      {/* Animation paths for dots tracing brain crevices and through feature badges */}
                      <path
                        id="brainPath1"
                        d="M 215,220 Q 180,200 150,180 Q 120,165 90,160 T 50,170 Q 20,180 -20,220"
                        fill="none"
                        stroke="none"
                      />
                      
                      <path
                        id="brainPath2"
                        d="M 215,220 Q 250,200 280,180 Q 310,165 340,160 T 380,170 Q 410,180 460,220"
                        fill="none"
                        stroke="none"
                      />
                      
                      <path
                        id="brainPath3"
                        d="M 215,220 Q 200,180 190,140 Q 185,100 195,70 T 215,20 Q 220,0 215,-40"
                        fill="none"
                        stroke="none"
                      />
                      
                      <path
                        id="brainPath4"
                        d="M 215,220 Q 180,260 150,300 Q 130,330 110,360 T 95,390 Q 85,410 80,450"
                        fill="none"
                        stroke="none"
                      />
                      
                      {/* Green dot traveling from center through left to left badge (Performance Boost) */}
                      <circle r="3.5" fill="#BDDD8D" className="drop-shadow-[0_0_8px_rgba(189,221,141,0.8)]">
                        <animateMotion dur="14s" repeatCount="indefinite">
                          <mpath href="#brainPath1" />
                        </animateMotion>
                      </circle>
                      
                      {/* Blue dot traveling from center through right to right badge (Real-time Insights) */}
                      <circle r="3.5" fill="#80B0EF" className="drop-shadow-[0_0_8px_rgba(128,176,239,0.8)]">
                        <animateMotion dur="16s" repeatCount="indefinite">
                          <mpath href="#brainPath2" />
                        </animateMotion>
                      </circle>
                      
                      {/* Pink dot traveling from center through top to top badge (Emotional Intelligence) */}
                      <circle r="3" fill="#EE82EE" className="drop-shadow-[0_0_6px_rgba(238,130,238,0.7)]">
                        <animateMotion dur="12s" repeatCount="indefinite" begin="2s">
                          <mpath href="#brainPath3" />
                        </animateMotion>
                      </circle>
                      
                      {/* Yellow dot traveling from center through bottom to bottom-left badge (24/7 Support) */}
                      <circle r="3" fill="#F5D348" className="drop-shadow-[0_0_6px_rgba(245,211,72,0.7)]">
                        <animateMotion dur="13s" repeatCount="indefinite" begin="1.5s">
                          <mpath href="#brainPath4" />
                        </animateMotion>
                      </circle>
                    </g>
                  </svg>
                </div>

                {/* Feature Badge 1 - Emotional Intelligence (Top) */}
                <div className="absolute inset-0 w-[360px] h-[360px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-[#202328] to-[#506581] backdrop-blur-xl border border-[#EE82EE]/40 shadow-xl shadow-[#EE82EE]/20 hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#EE82EE]/70 to-[#EE82EE]/70 flex items-center justify-center shadow-lg shadow-[#EE82EE]/30">
                            <Heart className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium whitespace-nowrap">Emotional Intelligence</div>
                            <div className="text-[#EE82EE] text-xs whitespace-nowrap">Advanced Sentiment Analysis</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Badge 2 - Real-time Insights (Right) */}
                <div className="absolute inset-0 w-[430px] h-[430px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-full h-full">
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-[#202328] to-[#506581] backdrop-blur-xl border border-[#5889D4]/40 shadow-xl shadow-[#5889D4]/20 hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5889D4]/70 to-[#80B0EF]/70 flex items-center justify-center shadow-lg shadow-[#5889D4]/30">
                            <Brain className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium whitespace-nowrap">Real-time Insights</div>
                            <div className="text-[#80B0EF] text-xs whitespace-nowrap">AI-Powered Analytics</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Badge 3 - 24/7 Support (Bottom Left) */}
                <div className="absolute inset-0 w-[430px] h-[430px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-full h-full">
                    <div className="absolute bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2 z-10">
                      <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-[#202328] to-[#506581] backdrop-blur-xl border border-[#F5D348]/40 shadow-xl shadow-[#F5D348]/20 hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F5D348]/70 to-[#F5D348]/70 flex items-center justify-center shadow-lg shadow-[#F5D348]/30">
                            <Clock className="w-5 h-5 text-[#202328]" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium whitespace-nowrap">24/7 AI Support</div>
                            <div className="text-[#F5D348] text-xs whitespace-nowrap">Always Available</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Badge 4 - Performance Boost (Left) */}
                <div className="absolute inset-0 w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-full h-full">
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-[#202328] to-[#506581] backdrop-blur-xl border border-[#BDDD8D]/40 shadow-xl shadow-[#BDDD8D]/20 hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#BDDD8D]/70 to-[#BDDD8D]/70 flex items-center justify-center shadow-lg shadow-[#BDDD8D]/30">
                            <Sparkles className="w-5 h-5 text-[#202328]" />
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium whitespace-nowrap">Performance Boost</div>
                            <div className="text-[#BDDD8D] text-xs whitespace-nowrap">Proven Results</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Gradient blend layer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#506581]/30 to-white/80"></div>
        
        {/* Enhanced wave with smoother curve */}
        <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto relative">
          {/* Soft shadow layer */}
          <path d="M0,80 C360,120 540,120 720,80 C900,40 1080,40 1440,80 L1440,160 L0,160 Z" fill="url(#waveGradient)" opacity="0.3"/>
          {/* Main wave */}
          <path d="M0,90 C360,130 540,130 720,90 C900,50 1080,50 1440,90 L1440,160 L0,160 Z" fill="white"/>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#506581" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="white" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
import { Play } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="coaching" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#000022] via-[#202328] to-[#506581] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-[#5889D4]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-[#BDDD8D]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Floating animated neurons - top to bottom */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Define animation paths - converging to center */}
          <defs>
            {/* From top-left to center - with curves */}
            <path id="neuronPath1" d="M -50,-50 Q 100,50 150,150 T 300,280 Q 450,350 550,420 T 700,500" fill="none" stroke="none" />
            {/* From top-right to center - with curves */}
            <path id="neuronPath2" d="M 1600,-50 Q 1450,80 1350,180 T 1100,320 Q 950,400 850,460 T 700,500" fill="none" stroke="none" />
            {/* From bottom-left to center - with curves */}
            <path id="neuronPath3" d="M -50,1050 Q 120,920 200,820 T 380,650 Q 500,580 600,540 T 700,500" fill="none" stroke="none" />
            {/* From bottom-right to center - with curves */}
            <path id="neuronPath4" d="M 1600,1050 Q 1400,900 1300,780 T 1050,620 Q 900,560 800,530 T 700,500" fill="none" stroke="none" />
          </defs>
          
          {/* Floating neuron 1 - Blue (top-left to center) */}
          <circle r="4" fill="#5889D4" className="drop-shadow-[0_0_10px_rgba(88,137,212,0.8)]" opacity="0.6">
            <animateMotion dur="20s" repeatCount="indefinite">
              <mpath href="#neuronPath1" />
            </animateMotion>
          </circle>
          
          {/* Floating neuron 2 - Yellow (top-right to center) */}
          <circle r="3.5" fill="#F5D348" className="drop-shadow-[0_0_8px_rgba(245,211,72,0.7)]" opacity="0.5">
            <animateMotion dur="18s" repeatCount="indefinite" begin="2s">
              <mpath href="#neuronPath2" />
            </animateMotion>
          </circle>
          
          {/* Floating neuron 3 - Green (bottom-left to center) */}
          <circle r="3" fill="#BDDD8D" className="drop-shadow-[0_0_6px_rgba(189,221,141,0.7)]" opacity="0.5">
            <animateMotion dur="22s" repeatCount="indefinite" begin="1s">
              <mpath href="#neuronPath3" />
            </animateMotion>
          </circle>
          
          {/* Floating neuron 4 - Pink/Purple (bottom-right to center) */}
          <circle r="3.5" fill="#EE82EE" className="drop-shadow-[0_0_8px_rgba(238,130,238,0.7)]" opacity="0.6">
            <animateMotion dur="19s" repeatCount="indefinite" begin="3s">
              <mpath href="#neuronPath4" />
            </animateMotion>
          </circle>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] to-[#80B0EF]">
                Start Coaching with <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] to-[#80B0EF] pb-2">Data
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5889D4] via-[#BDDD8D] to-[#F5D348] rounded-full"></span>
                </span>
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed mt-0 px-4">
            See how Anna transforms your contact center with AI-powered insights
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-[#000022] to-[#506581] rounded-2xl overflow-hidden shadow-2xl group">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5889D4]/20 via-transparent to-[#BDDD8D]/20"></div>
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 cursor-pointer border-2 border-white/30">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Placeholder text */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10">
                <p className="text-white text-sm sm:text-base font-medium text-center">
                  How It Works Video Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
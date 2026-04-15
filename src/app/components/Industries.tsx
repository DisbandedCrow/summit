import { Building2, Radio, Stethoscope, Database, Shield, HeartPulse, Zap, Scale, Palmtree, Network, BarChart3 } from "lucide-react";

export function Industries() {
  const industries = [
    { name: "Financial Services", icon: Building2, gradient: "from-[#5889D4] to-[#F5D348]" },
    { name: "Communication Services", icon: Radio, gradient: "from-[#E94B8B] to-[#F5D348]" },
    { name: "Managed Service Organizations", icon: Network, gradient: "from-[#5889D4] to-[#BDDD8B]" },
    { name: "Technology & Business Intelligence", icon: BarChart3, gradient: "from-[#80B0EF] to-[#E94B8B]" },
    { name: "Insurance", icon: Shield, gradient: "from-[#5889D4] to-[#BDDD8D]" },
    { name: "Healthcare", icon: HeartPulse, gradient: "from-[#E94B8B] to-[#BDDD8B]" },
    { name: "Energy", icon: Zap, gradient: "from-[#F5D348] to-[#BDDD8B]" },
    { name: "Legal/Law firm", icon: Scale, gradient: "from-[#506581] to-[#80B0EF]" },
    { name: "Travel & Leisure", icon: Palmtree, gradient: "from-[#BDDD8B] to-[#5889D4]" }
  ];

  return (
    <section id="industries" className="py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-br from-[#000022] via-[#202328] to-[#506581] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-[#5889D4]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-[#BDDD8D]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] to-[#80B0EF]">
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] to-[#80B0EF] pb-2">Industries
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5889D4] via-[#BDDD8D] to-[#F5D348] rounded-full"></span>
                </span> We Serve
              </span>
            </h2>
          </div>
        </div>

        {/* Compact Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon */}
              <div className={`relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-lg mb-3 sm:mb-4 border border-white/10 transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:border-white/30 overflow-hidden`}>
                {/* Gradient overlay that appears on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <industry.icon className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white/50 group-hover:text-white transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              </div>
              
              {/* Label */}
              <h3 className="text-sm leading-tight font-medium transition-all duration-500 group-hover:font-semibold text-white/70 group-hover:text-white">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
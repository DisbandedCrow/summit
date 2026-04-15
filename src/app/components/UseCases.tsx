import { Shield, Heart, Briefcase } from "lucide-react";
import annaLogoBlue from "figma:asset/37fc8af10830fb3e1df7e95bd2a96a067b8048ee.png";

export function UseCases() {
  const cases = [
    {
      icon: Shield,
      industry: "Lead Generation",
      results: [
        { metric: "500+", label: "Additional monthly leads", client: "Insurance Client" },
        { metric: "120%", label: "Increase in offer rates", client: "Healthcare Client" },
        { metric: "21%", label: "YoY quote increase", client: "Insurance Client" }
      ],
      gradient: "from-[#5889D4] to-[#80B0EF]",
      solidColor: "text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] to-[#80B0EF]"
    },
    {
      icon: Heart,
      industry: "Customer Service",
      results: [
        { metric: "19%", label: "Customer delight improvement", client: "Technology Client" },
        { metric: "33%", label: "Resolution rate increase", client: "Healthcare Client" },
        { metric: "23%", label: "Overall opportunities growth", client: "Technology Client" }
      ],
      gradient: "from-[#F5D348] to-[#FAD6A5]",
      solidColor: "text-transparent bg-clip-text bg-gradient-to-r from-[#F5D348] to-[#FAD6A5]"
    },
    {
      icon: Briefcase,
      industry: "Revenue Impacts",
      results: [
        { metric: "26%", label: "Conversion rate lift", client: "Technology Client" },
        { metric: "$2M", label: "Estimated savings", client: "Healthcare Client" },
        { metric: "20%", label: "Revenue goal increase", client: "Technology Client" }
      ],
      gradient: "from-[#7a9e2e] to-[#BDDD8B]",
      solidColor: "text-transparent bg-clip-text bg-gradient-to-r from-[#7a9e2e] to-[#BDDD8B]"
    }
  ];

  return (
    <section id="use-cases" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="inline-flex px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#5889D4] to-[#80B0EF]">
              <span className="text-white font-medium text-sm sm:text-base">Use Cases</span>
            </div>
          </div>
          <div className="inline-block mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] to-[#80B0EF]">Let's Talk Numbers</span>
            </h2>
          </div>
        </div>

        {/* Use cases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto justify-items-center">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="group relative w-full max-w-md flex flex-col items-center lg:items-start"
            >
              {/* Industry header with icon */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${useCase.gradient} lg:bg-[#506581]/20 lg:group-hover:bg-gradient-to-br flex items-center justify-center shadow-lg transition-all duration-300`}>
                  <useCase.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white lg:text-[#506581] lg:group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                  index === 0 ? 'text-[#2d5a8f] lg:text-[#506581] lg:group-hover:text-[#2d5a8f]' : 
                  index === 1 ? 'text-[#a67c00] lg:text-[#506581] lg:group-hover:text-[#a67c00]' : 
                  'text-[#7a9e2e] lg:text-[#506581] lg:group-hover:text-[#7a9e2e]'
                }`}>
                  {useCase.industry}
                </h3>
              </div>

              {/* Horizontal stats bars */}
              <div className="space-y-5 sm:space-y-6 w-full">
                {useCase.results.map((result, i) => (
                  <div key={i} className="group/stat flex flex-col items-center lg:items-start">
                    {/* Stat bar container */}
                    <div className="relative pl-0 lg:pl-3 text-center lg:text-left w-full max-w-xs lg:max-w-none">
                      {/* Vertical accent bar - hidden on mobile, shown on desktop */}
                      <div className={`hidden lg:block absolute left-0 top-0 w-1 h-full bg-[#506581]/20 group-hover:bg-gradient-to-b ${useCase.gradient} rounded-full group-hover/stat:opacity-100 group-hover/stat:w-1.5 transition-all duration-300`}></div>
                      
                      {/* Client tag at top */}
                      <div className="text-sm font-medium text-[#7a7a7a] lg:group-hover:text-[#595959] italic mb-1.5 pl-0 lg:pl-0.5 transition-colors duration-300">
                        {result.client}
                      </div>
                      
                      {/* Content */}
                      <div className="flex flex-col items-center lg:flex-row lg:items-baseline gap-1 sm:gap-3">
                        {/* Metric - Colored on mobile/tablet, grey on desktop with hover color */}
                        <div className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                          index === 0 ? 'text-[#2d5a8f] lg:text-[#506581] lg:group-hover:text-[#2d5a8f]' : 
                          index === 1 ? 'text-[#a67c00] lg:text-[#506581] lg:group-hover:text-[#a67c00]' : 
                          'text-[#7a9e2e] lg:text-[#506581] lg:group-hover:text-[#7a9e2e]'
                        }`}>
                          {result.metric}
                        </div>
                        {/* Label */}
                        <div className="text-sm font-medium text-[#7a7a7a] lg:group-hover:text-[#2c3e50] lg:group-hover/stat:text-[#1a252f] transition-colors duration-300">
                          {result.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Transitional CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center relative z-20">
          <p className="text-base sm:text-lg text-[#506581] flex items-baseline justify-center gap-2 flex-wrap">
            <span className="text-[16px]">Learn more about</span>
            <img 
              src={annaLogoBlue} 
              alt="Anna" 
              className="h-[1.125rem] sm:h-[1.25rem] w-auto inline-block"
            />
            <span className="text-[16px]">agentic AI in ANNA.</span>
            <a 
              href="#contact-form" 
              className="text-[#5889D4] font-semibold hover:text-[#4779C4] transition-colors text-[16px]"
              onClick={(e) => {
                e.preventDefault();
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Schedule a demo
            </a>
            <span className="text-[16px]">.</span>
          </p>
        </div>
      </div>
      
      {/* Curved wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,64 C240,100 480,100 720,64 C960,28 1200,28 1440,64 L1440,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
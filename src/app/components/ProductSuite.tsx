import { MessageSquare, Lightbulb, Rocket, Heart, Search, CheckCircle2 } from "lucide-react";
import annaLogo from "figma:asset/37fc8af10830fb3e1df7e95bd2a96a067b8048ee.png";
import askAnnaIcon from "figma:asset/13aed00890144153569568fb9f035108b6d9ce8a.png";
import React from "react";

export function ProductSuite() {
  const products = [
    {
      icon: askAnnaIcon,
      name: "Ask Anna",
      description: "AI-driven, real-time coaching powered by our proprietary Specialized Language Model.",
      details: "Deliver effective, on-the-spot coaching exactly when your agents need it.",
      gradient: "from-[#5889D4] to-[#80B0EF]"
    },
    {
      icon: Lightbulb,
      name: "Insight",
      description: "Predictive modeling that identifies exact improvements your contact center needs.",
      details: "Turn complex data into actionable trends to drive meaningful change.",
      gradient: "from-[#F5D348] to-[#FAD6A5]"
    },
    {
      icon: Rocket,
      name: "Develop",
      description: "Market-leading behavior change solutions hardwired to solve problems.",
      details: "Tackle your toughest coaching challenges and unlock your team's full potential.",
      gradient: "from-[#BDDD8B] to-[#F5D348]"
    },
    {
      icon: Heart,
      name: "Satisfy",
      description: "Advanced Emotional Intelligence to predict customer responses.",
      details: "Go beyond standard NPS and CSAT to proactively deliver exceptional experiences.",
      gradient: "from-[#EE82EE] to-[#FAD6A5]"
    },
    {
      icon: Search,
      name: "Discover",
      description: "Pinpoint the exact data you need, saving time and uncovering deep insights.",
      details: "From market trends to single interactions, get total clarity from the noise.",
      gradient: "from-[#80B0EF] to-[#5889D4]"
    },
    {
      icon: CheckCircle2,
      name: "Evaluate & Remediate",
      description: "Streamline inspections and make remediation effortless.",
      details: "Transform complex problems into simple solutions with operational clarity.",
      gradient: "from-[#506581] to-[#80B0EF]"
    }
  ];

  const [activeProduct, setActiveProduct] = React.useState<number | null>(null);

  return (
    <section id="product" className="min-h-screen bg-white relative overflow-hidden flex items-center py-12 sm:py-16 md:py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#5889D4]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#F5D348]/5 rounded-full blur-3xl"></div>

      {/* Gradient transition to Industries section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-50/30 to-gray-50/60 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#5889D4] to-[#80B0EF] mb-4 sm:mb-6">
            <span className="text-white font-medium text-sm sm:text-base">Product</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 sm:gap-3">
            <img src={annaLogo} alt="Anna" className="w-full max-w-xl h-auto object-contain px-4" />
            <p className="text-sm sm:text-base text-[#506581] leading-snug max-w-xl px-4">
              Unified AI-powered ecosystem for contact center excellence
            </p>
          </div>
        </div>

        {/* Product Grid - 1 column mobile, 2 columns tablet, 3 columns desktop */}
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveProduct(index)}
                onMouseLeave={() => setActiveProduct(null)}
                className="relative min-h-[200px] sm:min-h-[220px] md:min-h-[224px]"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${product.gradient} ${activeProduct === index ? 'opacity-20' : 'opacity-0'} rounded-2xl blur-xl transition-opacity duration-500`}></div>
                
                {/* Flip Card Container */}
                <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
                  <div 
                    className={`relative w-full h-full transition-transform duration-700 ${activeProduct === index ? '[transform:rotateY(180deg)]' : ''}`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front of Card */}
                    <div 
                      className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#5889D4]/15 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="relative z-10 flex-1 flex flex-col">
                        {/* Icon */}
                        <div className="mb-3 sm:mb-4">
                          {product.name === "Ask Anna" ? (
                            <img src={product.icon} alt={product.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                          ) : (
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-md`}>
                              <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                          )}
                        </div>

                        {/* Product Name */}
                        <h3 className="text-base sm:text-lg text-[#202328] mb-2 sm:mb-3 font-bold leading-tight">
                          {product.name}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-sm text-[#506581] leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div 
                      className="absolute inset-0 bg-[#000022] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-[#5889D4] shadow-xl flex flex-col"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-[0.08] rounded-xl sm:rounded-2xl pointer-events-none`}></div>
                      
                      <div className="relative z-10 flex-1 flex flex-col">
                        <div className="mb-3 sm:mb-4">
                          {product.name === "Ask Anna" ? (
                            <img src={product.icon} alt={product.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                          ) : (
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-md`}>
                              <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                          )}
                        </div>

                        <h3 className="text-white text-base sm:text-lg mb-2 sm:mb-3 font-bold leading-tight">
                          {product.name}
                        </h3>
                        
                        <p className="text-white/90 text-sm leading-relaxed flex-1">
                          {product.details}
                        </p>

                        <div className="mt-3 sm:mt-4">
                          <div className={`h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transitional CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center relative z-20">
          <p className="text-base sm:text-lg text-[#506581] flex items-baseline justify-center gap-2 flex-wrap">
            <span className="text-[16px]">Start transforming your business with</span>
            <img 
              src={annaLogo} 
              alt="Anna" 
              className="h-[1.125rem] sm:h-[1.25rem] w-auto inline-block"
            />
            <span className="text-[16px] -ml-1.5">.</span>
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
              Schedule a demo today
            </a>
            <span className="text-[16px] -ml-1.5">.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
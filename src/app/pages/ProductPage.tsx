import { MessageSquare, Lightbulb, Rocket, Heart, Search, CheckCircle2 } from "lucide-react";
import annaLogo from "figma:asset/37fc8af10830fb3e1df7e95bd2a96a067b8048ee.png";
import askAnnaIcon from "figma:asset/13aed00890144153569568fb9f035108b6d9ce8a.png";
import React from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-s1hjb6mcrd";
import { motion } from "motion/react";

export function ProductPage() {
  const navigate = useNavigate();
  const products = [
    {
      icon: askAnnaIcon,
      name: "Ask Anna",
      description: "AI-driven, real-time coaching powered by our proprietary Specialized Language Model.",
      details: "Deliver effective, on-the-spot coaching exactly when your agents need it. Our AI analyzes conversations in real-time and provides actionable insights that drive performance improvements across your entire contact center.",
      gradient: "from-[#5889D4] to-[#80B0EF]",
      videoPlaceholder: "Ask Anna Video"
    },
    {
      icon: Lightbulb,
      name: "Insight",
      description: "Predictive modeling that identifies exact improvements your contact center needs.",
      details: "Turn complex data into actionable trends to drive meaningful change. Our advanced analytics platform surfaces hidden patterns and opportunities, empowering you to make data-driven decisions with confidence.",
      gradient: "from-[#F5D348] to-[#FAD6A5]",
      videoPlaceholder: "Insight Video"
    },
    {
      icon: Rocket,
      name: "Develop",
      description: "Market-leading behavior change solutions hardwired to solve problems.",
      details: "Tackle your toughest coaching challenges and unlock your team's full potential. Our proven methodologies and personalized learning paths ensure every agent receives the support they need to excel.",
      gradient: "from-[#BDDD8B] to-[#F5D348]",
      videoPlaceholder: "Develop Video"
    },
    {
      icon: Heart,
      name: "Satisfy",
      description: "Advanced Emotional Intelligence to predict customer responses.",
      details: "Go beyond standard NPS and CSAT to proactively deliver exceptional experiences. Our emotional intelligence engine helps you understand not just what customers say, but how they feel.",
      gradient: "from-[#EE82EE] to-[#FAD6A5]",
      videoPlaceholder: "Satisfy Video"
    },
    {
      icon: Search,
      name: "Discover",
      description: "Pinpoint the exact data you need, saving time and uncovering deep insights.",
      details: "From market trends to single interactions, get total clarity from the noise. Our intelligent search capabilities help you find critical information instantly, no matter where it's hidden.",
      gradient: "from-[#80B0EF] to-[#5889D4]",
      videoPlaceholder: "Discover Video"
    },
    {
      icon: CheckCircle2,
      name: "Evaluate & Remediate",
      description: "Streamline inspections and make remediation effortless.",
      details: "Transform complex problems into simple solutions with operational clarity. Our comprehensive evaluation tools ensure quality standards are met consistently while streamlining your remediation workflows.",
      gradient: "from-[#506581] to-[#80B0EF]",
      videoPlaceholder: "Evaluate & Remediate Video"
    }
  ];

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#000022]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#5889D4]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#F5D348]/10 rounded-full blur-3xl"></div>
        
        {/* Subtle brain design behind heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px] opacity-[0.09]">
          <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 430.926 439.188">
            <g>
              {/* All brain paths in greyscale from landing page brain SVG */}
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
        
        {/* Floating animated neurons - traveling through brain folds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px] pointer-events-none">
          <svg className="block size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.926 439.188" preserveAspectRatio="xMidYMid meet">
            {/* Define animation paths - winding through the brain's sulci and gyri */}
            <defs>
              {/* Path 1: Right to left through middle temporal region (Blue) */}
              <path id="productNeuronPath1" d="M 380,230 Q 360,225 340,230 T 300,240 Q 280,245 260,240 T 220,230 Q 200,225 180,230 T 140,240 Q 120,245 100,240" fill="none" stroke="none" />
              
              {/* Path 2: Diagonal descent through central sulcus (Yellow) */}
              <path id="productNeuronPath2" d="M 280,160 Q 270,175 260,180 T 245,200 Q 235,215 230,220 T 215,240 Q 205,255 200,260 T 185,280" fill="none" stroke="none" />
              
              {/* Path 3: Winding serpentine through cortical folds (Green) */}
              <path id="productNeuronPath3" d="M 100,200 Q 120,195 140,200 T 180,210 Q 200,215 210,210 T 230,195 Q 240,185 250,190 T 280,205 Q 300,215 310,210 T 340,200 Q 360,195 380,200" fill="none" stroke="none" />
              
              {/* Path 4: Curved arc through frontal-parietal junction (Pink) */}
              <path id="productNeuronPath4" d="M 150,240 Q 170,230 190,235 T 230,250 Q 250,260 270,255 T 310,240 Q 330,230 350,235 T 390,250" fill="none" stroke="none" />
            </defs>
            
            {/* Floating neuron 1 - Blue (TPG Blue) - travels right to left */}
            <circle r="1" fill="#5889D4" className="drop-shadow-[0_0_8px_rgba(88,137,212,0.9)]" opacity="0.8">
              <animateMotion dur="35s" repeatCount="indefinite">
                <mpath href="#productNeuronPath1" />
              </animateMotion>
            </circle>
            
            {/* Floating neuron 2 - Yellow (Primary Yellow) - diagonal descent */}
            <circle r="1" fill="#F5D348" className="drop-shadow-[0_0_8px_rgba(245,211,72,0.9)]" opacity="0.8">
              <animateMotion dur="30s" repeatCount="indefinite" begin="3s">
                <mpath href="#productNeuronPath2" />
              </animateMotion>
            </circle>
            
            {/* Floating neuron 3 - Green (Primary Green) - serpentine winding */}
            <circle r="1" fill="#BDDD8D" className="drop-shadow-[0_0_8px_rgba(189,221,141,0.9)]" opacity="0.8">
              <animateMotion dur="38s" repeatCount="indefinite" begin="6s">
                <mpath href="#productNeuronPath3" />
              </animateMotion>
            </circle>
            
            {/* Floating neuron 4 - Pink/Purple - curved arc */}
            <circle r="1" fill="#EE82EE" className="drop-shadow-[0_0_8px_rgba(238,130,238,0.9)]" opacity="0.8">
              <animateMotion dur="33s" repeatCount="indefinite" begin="9s">
                <mpath href="#productNeuronPath4" />
              </animateMotion>
            </circle>
          </svg>
        </div>
        
        {/* Smooth gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#000022]"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-xl mx-auto relative z-10 backdrop-blur-md bg-[#000022]/40 rounded-2xl p-4">
            
            <div className="inline-block mb-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="relative inline-block pb-0.5">
                  Product
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5889D4] via-[#BDDD8D] to-[#F5D348] rounded-full"></span>
                </span>
              </h2>
            </div>
            <p className="text-white/90 max-w-xl leading-relaxed mx-auto text-[16px] mt-0">
              Transform Your Contact Center Operations
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 md:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Product Details */}
                <motion.div 
                  className="flex-1 space-y-4 sm:space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-4">
                    {product.name === "Ask Anna" ? (
                      <motion.div 
                        className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img src={product.icon} alt={product.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                      </motion.div>
                    ) : (
                      <motion.div 
                        className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Subtle pulse effect */}
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${product.gradient} animate-pulse opacity-30`}></div>
                        <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white relative z-10" />
                      </motion.div>
                    )}
                    <h2 className="font-bold text-white tracking-tight text-[32px]">
                      {product.name}
                    </h2>
                  </div>

                  <motion.p 
                    className="text-lg sm:text-xl text-white/95 leading-relaxed pl-4 border-l-2 border-[#5889D4]/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {product.description}
                  </motion.p>

                  <motion.p 
                    className="text-white/75 leading-relaxed text-[16px]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {product.details}
                  </motion.p>

                  <motion.div 
                    className={`h-1 rounded-full bg-gradient-to-r ${product.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  ></motion.div>
                </motion.div>

                {/* Video Placeholder */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${product.gradient} opacity-20 group-hover:opacity-30 rounded-2xl blur-2xl transition-opacity duration-500`}></div>
                    
                    {/* Video Container */}
                    <div className="relative aspect-video bg-gradient-to-br from-[#202328] to-[#000022] rounded-xl overflow-hidden border-2 border-[#506581]/30 group-hover:border-[#5889D4]/50 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-4 px-6">
                          <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <svg 
                              className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          <p className="text-white/60 text-sm sm:text-base font-medium">
                            {product.videoPlaceholder}
                          </p>
                          <p className="text-white/40 text-xs sm:text-sm">
                            Video coming soon
                          </p>
                        </div>
                      </div>

                      {/* Decorative grid overlay */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5889D4]/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-10">
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] to-[#80B0EF] whitespace-nowrap">Ready to Transform Your Contact Center?</h2>
            
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-[#C49B3D] to-[#B8860B] hover:from-[#D4AB4D] hover:to-[#C8961B] text-white font-semibold rounded-lg shadow-lg shadow-[#C49B3D]/30 hover:shadow-[#C49B3D]/50 transition-all duration-300 text-base sm:text-lg"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
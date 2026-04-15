import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import svgPaths from "../../imports/svg-s1hjb6mcrd";
import lisaDeFalcoImg from "figma:asset/d4eb6c1762af8d212838eeac3e001c29a42e7537.png";
import richardBrittImg from "figma:asset/20c2134bf79cbd8587a3f5f327cb3e69bb647259.png";
import joeMorroneImg from "figma:asset/14ecca2f0f46d82cb6cbfa463773b3e015af8186.png";
import johnHeltzerImg from "figma:asset/9524685c7adecb388a93963c3ff529c3c4178d41.png";
import { UserCircle } from "lucide-react";

export function AboutUs() {
  const executiveTeam = [
    {
      name: "Lisa DeFalco",
      title: "Founder & CEO",
      description: "The creator of the tag line, 'This Call May Be Monitored For Quality Assurance,' and founder of the Independent Quality Assurance industry. Lisa is a recognized QA industry icon, and the visionary behind Anna's assessment methodology and design.",
      responsibilities: ["Visionary and Leader", "Financial Management and HR"],
      image: lisaDeFalcoImg
    },
    {
      name: "John Heltzer",
      title: "COO",
      description: "With his multi-decade background in contact centers, John leads the Customer Success organization. Focused on retaining and growing clients through product adoption and client satisfaction.",
      responsibilities: ["Client Success, Product Usage/Adoption", "Client Onboarding & Launch"],
      image: johnHeltzerImg
    },
    {
      name: "Sean Warner",
      title: "CISO & VP, Engineering",
      description: "Sean leads the Company's Infrastructure and Information Security initiatives. As CISO, he oversees all security, privacy, and compliance, with a background serving the US Dept of Defense.",
      responsibilities: ["Client Support", "Physical Security & Infosec", "Hardware and Cloud Management", "Architecture Engineering"],
      image: "https://images.unsplash.com/photo-1592878995758-02b32ddabdd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      name: "Richard Britt",
      title: "CPO",
      description: "Rick brings decades of contact center and AI data modeling expertise to TPG, leading our AI & Data Science offerings along with all strategic product design & management. Prior, he led the AI research arm at CallMiner and is a recognized leader in the contact center AI market.",
      responsibilities: ["Product Mgt, UX & Product Design", "IP Management", "AI Model Engineering", "Data Science & Analytics", "Data & Visualization"],
      image: richardBrittImg
    },
    {
      name: "Joe Morrone",
      title: "CIO",
      description: "Joe leads the Company's engineering divisions and client onboarding, including recording platform connectivity. He previously served as the VP of Client Services at Afiniti, deploying AI solutions to the Fortune 500.",
      responsibilities: ["Dev Ops", "Software Engineering", "IT/Infrastructure", "Technical Onboarding & Launch", "PMO"],
      image: joeMorroneImg
    }
  ];

  return (
    <div className="min-h-screen bg-[#000022]">
      {/* Hero Section - Same design as Product Page */}
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
              <path id="aboutNeuronPath1" d="M 380,230 Q 360,225 340,230 T 300,240 Q 280,245 260,240 T 220,230 Q 200,225 180,230 T 140,240 Q 120,245 100,240" fill="none" stroke="none" />
              
              {/* Path 2: Diagonal descent through central sulcus (Yellow) */}
              <path id="aboutNeuronPath2" d="M 280,160 Q 270,175 260,180 T 245,200 Q 235,215 230,220 T 215,240 Q 205,255 200,260 T 185,280" fill="none" stroke="none" />
              
              {/* Path 3: Winding serpentine through cortical folds (Green) */}
              <path id="aboutNeuronPath3" d="M 100,200 Q 120,195 140,200 T 180,210 Q 200,215 210,210 T 230,195 Q 240,185 250,190 T 280,205 Q 300,215 310,210 T 340,200 Q 360,195 380,200" fill="none" stroke="none" />
              
              {/* Path 4: Curved arc through frontal-parietal junction (Pink) */}
              <path id="aboutNeuronPath4" d="M 150,240 Q 170,230 190,235 T 230,250 Q 250,260 270,255 T 310,240 Q 330,230 350,235 T 390,250" fill="none" stroke="none" />
            </defs>
            
            {/* Floating neuron 1 - Blue (TPG Blue) - travels right to left */}
            <circle r="1" fill="#5889D4" className="drop-shadow-[0_0_8px_rgba(88,137,212,0.9)]" opacity="0.8">
              <animateMotion dur="35s" repeatCount="indefinite">
                <mpath href="#aboutNeuronPath1" />
              </animateMotion>
            </circle>
            
            {/* Floating neuron 2 - Yellow (Primary Yellow) - diagonal descent */}
            <circle r="1" fill="#F5D348" className="drop-shadow-[0_0_8px_rgba(245,211,72,0.9)]" opacity="0.8">
              <animateMotion dur="30s" repeatCount="indefinite" begin="3s">
                <mpath href="#aboutNeuronPath2" />
              </animateMotion>
            </circle>
            
            {/* Floating neuron 3 - Green (Primary Green) - serpentine winding */}
            <circle r="1" fill="#BDDD8D" className="drop-shadow-[0_0_8px_rgba(189,221,141,0.9)]" opacity="0.8">
              <animateMotion dur="38s" repeatCount="indefinite" begin="6s">
                <mpath href="#aboutNeuronPath3" />
              </animateMotion>
            </circle>
            
            {/* Floating neuron 4 - Pink/Purple - curved arc */}
            <circle r="1" fill="#EE82EE" className="drop-shadow-[0_0_8px_rgba(238,130,238,0.9)]" opacity="0.8">
              <animateMotion dur="33s" repeatCount="indefinite" begin="9s">
                <mpath href="#aboutNeuronPath4" />
              </animateMotion>
            </circle>
          </svg>
        </div>
        
        {/* Smooth gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#000022]"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-xl mx-auto relative z-10 backdrop-blur-md bg-[#000022]/40 rounded-2xl p-4">
            
            <div className="space-y-6">
              <div className="inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  <span className="relative inline-block pb-0.5">
                    About Us
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5889D4] via-[#BDDD8D] to-[#F5D348] rounded-full"></span>
                  </span>
                </h2>
              </div>
              <p className="text-white/90 max-w-xl leading-relaxed mx-auto text-[16px]">
                Pioneering the future of contact center excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32 md:py-40 lg:py-48 bg-white relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#5889D4]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#BDDD8D]/8 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#5889D4] to-[#80B0EF] mb-4 sm:mb-6">
              <span className="text-white font-medium text-sm sm:text-base">Our Mission</span>
            </div>
            
            <p className="text-[#506581] leading-relaxed font-bold max-w-7xl mx-auto text-[24px]">
              Be the voice of humanity in a digital world by <br />connecting businesses to ideal customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#000022] via-[#202328] to-[#506581] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-[#5889D4]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-[#BDDD8D]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#5889D4] to-[#80B0EF] mb-4 sm:mb-6">
                <span className="text-white font-medium text-sm sm:text-base">Meet the Founder</span>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-[#FAF7F5] via-[#F5F0ED] to-[#FAF7F5] rounded-3xl shadow-2xl overflow-hidden border-2 border-[#C9A89A]/30">
              
              <div className="grid md:grid-cols-5 gap-12 p-12 sm:p-14 md:p-16 lg:p-20 relative z-10">
                {/* Founder Image */}
                <div className="md:col-span-2 flex flex-col">
                  <div className="relative w-full aspect-square max-w-sm overflow-hidden">
                    <ImageWithFallback
                      src={lisaDeFalcoImg}
                      alt="Lisa DeFalco"
                      className="w-full h-full object-cover object-[center_15%] grayscale-[20%]"
                    />
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-3xl font-bold text-[#3D2F24] mb-1">Lisa DeFalco</h3>
                    <p className="text-lg text-[#5D4A39]">Founder & CEO</p>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t-2 border-[#C9A89A]">
                    <p className="text-base text-[#3D2F24] italic leading-relaxed">
                      "This call may be monitored for quality assurance"
                    </p>
                    <p className="text-sm text-[#5D4A39] mt-3">
                      The phrase that started an entire industry
                    </p>
                  </div>
                </div>

                {/* Founder Bio */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <div className="space-y-6 text-[#4A3C32] leading-relaxed text-base">
                    <p>
                      Lisa DeFalco founded the Independent Quality Assurance market, starting both an industry and a movement. Opening TPG, now Anna LLC, in 1996, Lisa has designed the methodology that the Fortune 500 uses to define a "good call." That methodology is in place among the largest corporations on the globe in 9 countries and 13 languages, and applied across 180 million interactions and growing.
                    </p>
                    <p>
                      Throughout Lisa's 30 years in the contact center industry, she has served on the industry's trade association (American TeleServices Association/PACE) as its Board of Director Chairwoman. During her 12-year tenure as the Chairwoman and Board officer, she has met with governmental regulators and members of Congress to advocate the value of contact centers in support of American business communication with consumers. During her tenure, she formed the industry's Self-Regulatory Organization (SRO) with the cooperation of industry and federal regulators to define compliant consumer protection standards for contact center communication, earning leadership recognition for federal and state regulatory compliance knowledge.
                    </p>
                    <p>
                      As the CEO of Anna LLC, Lisa is the visionary behind Anna's products, delivery model, and the innovative path to incorporate its proprietary evaluation methods within AI technology, transforming Anna LLC into an industry leading CX technology firm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#5889D4]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#BDDD8D]/8 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div className="inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-[#5889D4] to-[#80B0EF] mb-6">
                <span className="text-white font-medium">Our Executive Team</span>
              </div>
              <p className="text-[#202328] max-w-2xl mx-auto text-[16px]">
                Experienced leaders transforming contact center performance through innovation
              </p>
            </div>

            <div className="space-y-8">
              {executiveTeam.map((exec, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-[#5889D4]/15 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0`}>
                    {/* Executive Image */}
                    <div className="md:w-2/5 lg:w-1/3 relative overflow-hidden">
                      <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative">
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-transparent via-transparent to-white/20 z-10`}></div>
                        
                        {exec.name === "Sean Warner" ? (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#5889D4]/10 to-[#BDDD8D]/10">
                            <UserCircle className="w-2/5 h-2/5 text-[#506581]/30" strokeWidth={1} />
                          </div>
                        ) : (
                          <ImageWithFallback
                            src={exec.image}
                            alt={exec.name}
                            className={`w-full h-full object-cover ${
                              exec.name === "Lisa DeFalco" ? "object-[50%_40%] scale-[1.3]" : 
                              exec.name === "Richard Britt" ? "object-center" : 
                              exec.name === "Sean Warner" ? "object-center" :
                              ""
                            }`}
                          />
                        )}
                        
                        {/* Colored accent bar */}
                        <div className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-0 bottom-0 w-1 bg-gradient-to-b from-[#5889D4] via-[#BDDD8D] to-[#F5D348]`}></div>
                      </div>
                    </div>

                    {/* Executive Info */}
                    <div className="md:w-3/5 lg:w-2/3 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3 className="text-3xl sm:text-4xl font-bold text-[#202328] mb-2">{exec.name}</h3>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#5889D4]" style={{ animation: 'glow-pulse 2s ease-in-out infinite' }}></div>
                          <p className="text-xl text-[#5889D4] font-medium">{exec.title}</p>
                        </div>
                      </div>
                      
                      <p className="text-base text-[#506581] leading-relaxed mb-6">
                        {exec.name === "Lisa DeFalco" ? (
                          <>
                            The creator of the tag line, '<span className="font-bold">This Call May Be Monitored For Quality Assurance</span>,' and founder of the Independent Quality Assurance industry. Lisa is a recognized QA industry icon, and the visionary behind Anna's assessment methodology and design.
                          </>
                        ) : (
                          exec.description
                        )}
                      </p>

                      {/* Responsibilities */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {exec.responsibilities.map((resp, idx) => (
                            <div 
                              key={idx}
                              className="text-xs text-[#506581] bg-white border border-[#5889D4]/20 rounded-full px-4 py-2 hover:bg-[#5889D4]/5 transition-colors duration-200"
                            >
                              {resp}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#000022] via-[#202328] to-[#506581] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-white mb-6 text-[32px]">Ready to Transform Your Contact Center?</h2>
            <p className="text-white/90 mb-8 text-[16px]">
              Join the Fortune 500 companies who trust Anna<sup>®</sup> to deliver exceptional customer experiences.
            </p>
            <button
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  window.scrollTo(0, document.body.scrollHeight);
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-[#5889D4] to-[#80B0EF] hover:from-[#4779C4] hover:to-[#7090DF] text-white font-semibold shadow-lg shadow-[#5889D4]/30 transition-all duration-300 hover:scale-105"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
import aaaLogo from "figma:asset/36e5d8a65dcb51b9ac1b9a84203426f0fc9f58f9.png";
import amexLogo from "figma:asset/a0af1dc00045c5f78f4c829144f19f8280c49438.png";
import aonLogo from "figma:asset/ba04383f9b1dbd9dd44bf82ee995845cc2fc8007.png";
import centeneLogo from "figma:asset/fb9ed91e3011be94a425b7059388843d5a43b915.png";
import morganLogo from "figma:asset/421136812d9a7ab51bc3a7e99e0d4bfce0edf1cf.png";
import unitedAirlinesLogo from "figma:asset/e2e8cd14fd68c573c2f99fc89a9bd3d709e9a576.png";
import unitedHealthcareLogo from "figma:asset/879ca8d683af00821a647e347db8e11ed021e267.png";

export function Clients() {
  const clients = [
    { name: "AAA", logo: aaaLogo },
    { name: "American Express", logo: amexLogo },
    { name: "AON", logo: aonLogo },
    { name: "Centene Corporation", logo: centeneLogo },
    { name: "Morgan & Morgan", logo: morganLogo },
    { name: "United Airlines", logo: unitedAirlinesLogo },
    { name: "United Healthcare", logo: unitedHealthcareLogo },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white border-b border-gray-100 relative -mt-2">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-block">
            <p className="text-[#506581] text-sm tracking-wide uppercase font-medium">
              Trusted By Industry Leaders
            </p>
          </div>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          {/* Enhanced gradient overlays for smoother fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex gap-6 sm:gap-8 md:gap-12 animate-scroll">
            {/* Multiple sets of logos for continuous coverage */}
            {[...Array(4)].map((_, setIndex) => (
              clients.map((client, index) => (
                <div
                  key={`set-${setIndex}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6 md:px-8"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                  />
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
      
      {/* Curved wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-full">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,40 C360,10 720,10 1080,40 C1320,60 1440,60 1440,40 L1440,0 L0,0 Z" fill="white"/>
        </svg>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 6.25s linear infinite;
        }
        
        @media (min-width: 640px) {
          .animate-scroll {
            animation: scroll 7s linear infinite;
          }
        }
        
        @media (min-width: 1024px) {
          .animate-scroll {
            animation: scroll 7.5s linear infinite;
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollIntervalRef = useRef<number | null>(null);

  // Shorter, punchier testimonials for marquee
  const marqueeTestimonials = [
    {
      quote: "I love Anna. It makes the coaching session faster and precise.",
      author: "Insurance Client"
    },
    {
      quote: "The positive energy and constant support are a huge motivator.",
      author: "Life Insurance Client"
    },
    {
      quote: "I attribute this improvement to Anna. We're seeing a huge benefit to our NPS.",
      author: "Healthcare Client"
    },
    {
      quote: "Technology has made it easier to provide feedback in a more organized, streamlined way!",
      author: "Top 10 Personal Injury Law Firm"
    },
    {
      quote: "I have had the privilege of working with TPG for 8 years. They have been one of the best partners in my 35-year career!",
      author: "Top 10 Healthcare Client"
    },
    {
      quote: "The Anna tools help us focus on behaviors and monitor week-over-week.",
      author: "Customer Experience Technology Client"
    },
    {
      quote: "I like the Team Dashboard and the ability to leave comments while coaching.",
      author: "Internet Provider"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

    const startAutoScroll = () => {
      autoScrollIntervalRef.current = window.setInterval(() => {
        if (container && !isPaused) {
          // Scroll by 1 pixel every 30ms (faster scroll)
          container.scrollLeft += 1;
          
          // Reset to beginning for infinite loop when reaching 1/3 (first set of testimonials ends)
          const maxScroll = container.scrollWidth / 3;
          if (container.scrollLeft >= maxScroll) {
            container.scrollLeft = 0;
          }
        }
      }, 30);
    };

    startAutoScroll();

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Check if mobile viewport
      const isMobile = window.innerWidth < 640; // sm breakpoint
      
      if (isMobile) {
        // On mobile, scroll to center each card
        const container = scrollContainerRef.current;
        const cardWidth = 256; // w-64 = 256px
        const gap = 16; // gap-4 = 16px
        const cardWithGap = cardWidth + gap;
        
        // Calculate current card index
        const currentIndex = Math.round(container.scrollLeft / cardWithGap);
        const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
        
        // Calculate scroll position to center the card
        const containerWidth = container.clientWidth;
        const scrollPosition = (newIndex * cardWithGap) - (containerWidth / 2) + (cardWidth / 2);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      } else {
        // On desktop, scroll by fixed amount
        const scrollAmount = 300;
        const newScrollPosition = direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;
        
        scrollContainerRef.current.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
        });
      }
      
      // Pause auto-scroll when user manually scrolls
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
    }
  };

  return (
    <section id="client-success-stories" className="py-20 sm:py-24 md:py-28 lg:py-32 relative overflow-hidden bg-gray-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#5889D4]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 md:w-80 md:h-80 bg-[#BDDD8D]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <div className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#5889D4] to-[#80B0EF] shadow-lg">
              <span className="text-white font-medium text-sm sm:text-base">Client Success Stories</span>
            </div>
          </div>
          <div className="inline-block mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4 sm:whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] to-[#80B0EF]">Loved by Teams <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#5889D4] to-[#80B0EF] pb-2">Everywhere
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5889D4] via-[#BDDD8D] to-[#F5D348] rounded-full"></span>
              </span></span>
            </h2>
          </div>
        </div>

        {/* Scrolling testimonials marquee */}
        <div className="relative">
          <p className="text-center text-sm text-[#506581] mt-6 sm:mt-8 mb-3 uppercase tracking-wide px-4">What Our Clients Say</p>
          
          <div className="relative overflow-hidden py-4">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-gray-50 via-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-gray-50 via-gray-50 to-transparent z-10"></div>
            
            {/* Scrolling container */}
            <div 
              className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide"
              ref={scrollContainerRef}
            >
              {/* Repeat testimonials for seamless loop */}
              {[...Array(3)].map((_, setIndex) => (
                marqueeTestimonials.map((testimonial, index) => (
                  <div
                    key={`set-${setIndex}-${index}`}
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-[#5889D4]/10 hover:shadow-lg transition-all duration-300"
                  >
                    <blockquote className="text-[#202328] mb-3 sm:mb-4 text-sm sm:text-base">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-sm font-medium text-[#506581]">
                      — {testimonial.author}
                    </p>
                  </div>
                ))
              ))}
            </div>
          </div>

          {/* Scroll buttons */}
          <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center z-20 pointer-events-none">
            <button
              className="p-2 sm:p-3 md:p-4 bg-white rounded-full shadow-lg border border-[#5889D4]/20 hover:shadow-xl hover:border-[#5889D4]/40 transition-all duration-300 pointer-events-auto"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#5889D4]"/>
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center z-20 pointer-events-none">
            <button
              className="p-2 sm:p-3 md:p-4 bg-white rounded-full shadow-lg border border-[#5889D4]/20 hover:shadow-xl hover:border-[#5889D4]/40 transition-all duration-300 pointer-events-auto"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#5889D4]"/>
            </button>
          </div>
        </div>
      </div>

      {/* Curved wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-full">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,40 C360,10 720,10 1080,40 C1320,60 1440,60 1440,40 L1440,0 L0,0 Z" fill="url(#testimonialWaveGradient)"/>
          <defs>
            <linearGradient id="testimonialWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F8FAFB"/>
              <stop offset="100%" stopColor="white"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style>{`
        @keyframes scroll-testimonials {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-scroll-testimonials {
          animation: scroll-testimonials 25s linear infinite;
        }
        
        .animate-scroll-testimonials:hover {
          animation-play-state: paused;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
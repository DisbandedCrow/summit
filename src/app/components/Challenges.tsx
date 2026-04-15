import { EyeOff, TrendingDown, Percent } from "lucide-react";
import annaLogoBlue from "figma:asset/37fc8af10830fb3e1df7e95bd2a96a067b8048ee.png";

export function Challenges() {
  const challenges = [
    {
      icon: EyeOff,
      title: "The Visibility Challenge",
      description: "Growing volumes hide critical conversation breakdowns.",
      color: "#5889D4"
    },
    {
      icon: TrendingDown,
      title: "The KPI Stall",
      description: "Without automated coaching insights, performance gaps remain stagnant despite increased investment.",
      color: "#F5D348"
    },
    {
      icon: Percent,
      title: "The Sampling Trap",
      description: "Coaching based on 1-2% of calls leaves 98% of your insights on the table.",
      color: "#EE82EE"
    }
  ];

  return (
    <section className="pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#80B0EF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#F5D348]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto">
          <div className="inline-block mb-3">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64748B] to-[#475569]">Stop Guessing</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#506581] leading-relaxed mt-0 px-4">
            Limited samples and "gut feelings" aren't enough to drive <strong>enterprise-level CX</strong>.
          </p>
        </div>

        {/* Challenges list */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#F5F5F5] flex items-center justify-center mb-4">
                <challenge.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#506581]" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg text-[#506581] font-bold mb-2">
                  {challenge.title}
                </h3>
                <p className="text-sm sm:text-base text-[#506581] leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transitional CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <p className="text-base sm:text-lg text-[#506581] flex items-baseline justify-center gap-2 flex-wrap">
            <span className="text-[16px]">See how</span>
            <img 
              src={annaLogoBlue} 
              alt="Anna" 
              className="h-[1.125rem] sm:h-[1.25rem] w-auto inline-block"
            />
            <span className="text-[16px] text-[15px] text-[16px]">can change your business,</span>
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
              schedule a demo
            </a>
            <span className="text-[16px]">.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
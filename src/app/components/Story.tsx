import { Heart, Lightbulb, Users, TrendingUp } from "lucide-react";

export function Story() {
  const milestones = [
    {
      icon: Heart,
      year: "Heritage",
      title: "Named with Purpose",
      description: "Anna is named after our founder's grandmother—a symbol of empathy, care, and unwavering support.",
      color: "from-[#EE82EE] to-[#F5D348]"
    },
    {
      icon: Lightbulb,
      year: "Research",
      title: "28 Years of Insight",
      description: "Built on nearly three decades of behavioral research and emotional intelligence studies.",
      color: "from-[#F5D348] to-[#BDDD8D]"
    },
    {
      icon: Users,
      year: "Innovation",
      title: "Human-Aware AI",
      description: "Moving beyond robotic automation to create AI that treats every customer like family.",
      color: "from-[#BDDD8D] to-[#5889D4]"
    },
    {
      icon: TrendingUp,
      year: "Impact",
      title: "Real Results",
      description: "Transforming contact centers with technology that combines cutting-edge NLP with genuine empathy.",
      color: "from-[#5889D4] to-[#80B0EF]"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#C49B3D]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-[#B8860B]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#C49B3D] to-[#B8860B] shadow-lg">
              <span className="text-white font-medium text-sm sm:text-base">About</span>
            </div>
          </div>
          <div className="inline-block mb-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C49B3D] to-[#B8860B]">Anna's Story</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#506581] leading-relaxed px-4">
            Inspired by Heritage. Powered by Emotional Intelligence.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative h-full">
              {/* Connector line (desktop only) */}
              {index < milestones.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-px bg-gradient-to-r from-[#C49B3D]/40 to-transparent"></div>
              )}
              
              {/* Milestone card */}
              <div className="relative bg-white border-2 border-[#C49B3D]/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-[#C49B3D]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#C49B3D]/10 group h-full flex flex-col">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <milestone.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                
                {/* Year/Category badge */}
                <div className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-[#C49B3D]/10 to-[#B8860B]/10 border border-[#C49B3D]/30 mb-2 sm:mb-3">
                  <span className="text-xs text-[#B8860B] font-medium">{milestone.year}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-lg sm:text-xl text-[#000022] mb-2 font-bold">{milestone.title}</h3>
                <p className="text-sm text-[#506581] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 max-w-2xl mx-auto px-4">
          <p className="text-[#506581] text-[16px]">
            Join the Anna family and experience technology with heart.
          </p>
        </div>
      </div>
    </section>
  );
}
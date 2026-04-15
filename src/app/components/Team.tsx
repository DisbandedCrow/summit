import { Users, BarChart3, Brain, Compass } from "lucide-react";
import teamPhoto from "figma:asset/3563bf5d371b84fd3dec34b8fe4fe7512c635565.png";
import annaLogoBlue from "figma:asset/37fc8af10830fb3e1df7e95bd2a96a067b8048ee.png";
import { motion } from "motion/react";

export function Team() {
  const teamRoles = [
    {
      icon: Users,
      title: "People Innovation",
      description: "Coaching experts who bridge insights and action, transforming data into lasting behavior change and measurable ROI.",
      color: "#5889D4",
      iconColor: "#1a3d6b"
    },
    {
      icon: BarChart3,
      title: "Business Analysts",
      description: "Your partners in clarity, connecting dots within your data to optimize workflows and turn observations into bottom-line wins.",
      color: "#F5D348",
      iconColor: "#8b6b1f"
    },
    {
      icon: Brain,
      title: "Behavioral Science",
      description: "The human heartbeat of our analysis, identifying emotional cues and sentiment shifts to refine marketing and product design.",
      color: "#EE82EE",
      iconColor: "#6b2d6b"
    },
    {
      icon: Compass,
      title: "Account Executives",
      description: "Strategic navigators who translate Anna's insights into high-impact strategies for consistent, long-term ROI.",
      color: "#BDDD8B",
      iconColor: "#4a6628"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#80B0EF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#F5D348]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <div className="inline-block mb-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4 flex items-center justify-center gap-2">
              <span className="text-[#5889D4]">
                Team
              </span>
              <img 
                src={annaLogoBlue} 
                alt="Anna" 
                className="h-[48px] w-auto inline-block"
              />
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#506581] leading-relaxed mt-0 px-4">
            Meet your team that brings Anna to life in your organization.
          </p>
        </div>

        {/* Two-Column: Team Photo + Description */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:items-start">
          {/* Left: Team Photo */}
          <div className="relative group max-w-md mx-auto lg:mx-0 lg:self-stretch">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5889D4] via-[#BDDD8D] to-[#F5D348] rounded-2xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-500"></div>
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100 lg:h-full">
              <img 
                src={teamPhoto} 
                alt="Team Anna at industry conference" 
                className="w-full h-auto lg:h-full lg:object-cover"
              />
            </div>
          </div>

          {/* Right: Team Roles */}
          <div>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {teamRoles.map((role, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl cursor-pointer relative overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    x: -8,
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${role.color}08, ${role.color}15)`,
                      border: `1px solid ${role.color}30`
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  <div 
                    className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mt-0.5 relative z-10"
                    style={{ background: `linear-gradient(135deg, ${role.color}, ${role.color}dd)` }}
                  >
                    <role.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: role.iconColor }} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-[#202328] font-medium mb-1 text-sm sm:text-base">{role.title}</h4>
                    <p className="text-[#506581] text-xs sm:text-sm leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Transitional CTA */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center relative z-20">
          <p className="text-[#506581]" style={{ fontSize: '16px' }}>
            <span>Begin your journey with us today! </span>
            <a 
              href="#contact-form" 
              className="text-[#5889D4] font-semibold hover:text-[#4779C4] transition-colors"
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
            <span>.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
import { Linkedin, Instagram } from "lucide-react";
import annaLogo from "figma:asset/37fc8af10830fb3e1df7e95bd2a96a067b8048ee.png";
import womenOwnedLogo from "figma:asset/a21f7eaa91c392c0a117608130e51445b797435d.png";
import bestPlaceLogo from "figma:asset/a61f4d9055059d66e160bebc7e425e457365d1a0.png";

export function Footer() {
  const footerLinks = {
    "Our Approach": ["Meet Anna®", "About Us", "Industry Solutions"],
    "Our Company": ["Privacy Policy"],
    "Connect": ["Client Login", "FAQ", "sales-team@annacx.com"]
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/annaeq/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/askannaeq/", label: "Instagram" }
  ];

  return (
    <footer className="bg-white text-[#202328] relative overflow-hidden">
      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#5889D4]/30 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Main footer content */}
        <div className="py-8 sm:py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#" className="inline-block mb-3 sm:mb-4">
              <img 
                src={annaLogo} 
                alt="Anna Logo" 
                className="h-10 sm:h-12 w-auto"
              />
            </a>
            <p className="text-[#506581] text-sm leading-relaxed">
              AI-powered emotional intelligence that transforms customer experience through empathy and innovation.
            </p>
          </div>

          {/* Navigation Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="min-w-0">
              <h3 className="text-[#000022] mb-3 sm:mb-4 font-bold text-sm sm:text-base">{category}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "Industry Solutions" 
                          ? "#industries" 
                          : link === "Privacy Policy"
                          ? "/privacy-policy"
                          : link === "Client Login"
                          ? "https://anna.tpgqualitycare.com/"
                          : link === "FAQ"
                          ? "/faq"
                          : link === "Meet Anna®"
                          ? "/product"
                          : link === "About Us"
                          ? "/about"
                          : "#"
                      }
                      target={link === "Client Login" ? "_blank" : undefined}
                      rel={link === "Client Login" ? "noopener noreferrer" : undefined}
                      className="text-[#506581] hover:text-[#5889D4] transition-colors duration-200 text-sm break-words"
                    >
                      {link === "Meet Anna®" ? (
                        <>Meet Anna<sup className="text-[0.6em]">®</sup></>
                      ) : (
                        link
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Certification logos - to the right of navigation */}
          <div className="flex flex-row gap-3 sm:gap-4 sm:col-span-2 md:col-span-3 lg:col-span-1 items-start justify-start lg:justify-center">
            <img 
              src={womenOwnedLogo} 
              alt="Women Owned Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
            <img 
              src={bestPlaceLogo} 
              alt="Best Place to Work Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-4 sm:py-6 border-t border-[#506581]/20 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          {/* Copyright */}
          <div className="text-[#506581] text-sm text-center md:text-left">
            © 2026 Anna LLC. All rights reserved.
          </div>

          {/* Social links */}
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F5F5F5] border border-[#506581]/20 flex items-center justify-center text-[#506581] hover:text-white hover:bg-[#5889D4] hover:border-[#5889D4] transition-all duration-300"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
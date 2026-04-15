import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import annaLogo from "figma:asset/37fc8af10830fb3e1df7e95bd2a96a067b8048ee.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Product", href: "/product", isRoute: true },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Testimonials", href: "#client-success-stories" },
    { label: "About Us", href: "/about", isRoute: true },
    { label: "FAQs", href: "/faq", isRoute: true }
  ];

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setIsOpen(false);
    
    // If it's a route (like /faq), just navigate
    if (isRoute) {
      navigate(href);
      // Scroll to top when navigating to a new page
      window.scrollTo(0, 0);
      return;
    }
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToContact = () => {
    setIsOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000022]/80 backdrop-blur-xl border-b border-[#5889D4]/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center">
            <img 
              src={annaLogo} 
              alt="Anna Logo" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.isRoute)}
                className="text-[#C0C0C0] hover:text-[#80B0EF] transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-[#80B0EF] hover:text-white hover:bg-[#5889D4]/10"
              onClick={() => window.open('https://anna.tpgqualitycare.com/', '_blank')}
            >
              Client Login
            </Button>
            <Button className="bg-gradient-to-r from-[#5889D4] to-[#80B0EF] hover:from-[#4779C4] hover:to-[#7090DF] text-white shadow-lg shadow-[#5889D4]/30" onClick={scrollToContact}>
              Schedule a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#80B0EF] p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-[#5889D4]/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.isRoute)}
                  className="text-[#B4B4B4] hover:text-[#80B0EF] transition-colors duration-200 py-2 text-left bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-[#5889D4]/10">
                <Button
                  variant="ghost"
                  className="text-[#80B0EF] hover:text-white hover:bg-[#5889D4]/10 w-full"
                  onClick={() => window.open('https://anna.tpgqualitycare.com/', '_blank')}
                >
                  Client Login
                </Button>
                <Button 
                  className="bg-gradient-to-r from-[#5889D4] to-[#80B0EF] hover:from-[#4779C4] hover:to-[#7090DF] text-white w-full"
                  onClick={scrollToContact}
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
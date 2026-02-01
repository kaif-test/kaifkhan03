import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Documents Required", href: "#documents" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="flex items-center"
          >
            <img 
              src={logo} 
              alt="HF DOC CONSULTANCY SERVICES" 
              className="h-14 sm:h-16 md:h-18 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="px-4 py-2.5 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-all duration-200 rounded-lg border border-transparent hover:border-primary/20"
              >
                {link.name}
              </a>
            ))}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="ml-3 gold-gradient text-accent-foreground font-bold px-5 py-2 hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="px-4 py-3 text-base font-semibold text-foreground/80 hover:text-primary hover:bg-primary/5 active:bg-primary/10 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-primary"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="mt-3 w-full gold-gradient text-accent-foreground font-bold py-3 hover:opacity-90 transition-all duration-200 shadow-md"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

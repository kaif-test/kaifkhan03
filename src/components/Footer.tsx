import { FileText, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Documents Required", href: "#documents" },
    { name: "Contact Us", href: "#contact" },
  ];

  const services = [
    "Fresh Passport",
    "Passport Renewal",
    "Marriage Certificate",
    "Voter ID Card",
    "Senior Citizen Card",
    "PAN Card",
    "Ration Card",
    "Income Certificate",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
              className="flex items-center gap-2 font-serif font-bold text-lg mb-4 hover:text-accent transition-colors"
            >
              <FileText className="w-6 h-6 text-accent" />
              HF DOC CONSULTANCY
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Your trusted partner for government documentation services. 
              We simplify the process so you don't have to worry.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors cursor-pointer">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Malad, Mumbai, Maharashtra</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-1 group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+918291322540" 
                  className="flex items-center gap-3 hover:text-accent transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary-foreground/10 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm text-primary-foreground/70 group-hover:text-accent">+91 82913 22540</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@hfdocconsultancy.com" 
                  className="flex items-center gap-3 hover:text-accent transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary-foreground/10 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm text-primary-foreground/70 group-hover:text-accent">info@hfdocconsultancy.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 transition-colors">
              <p className="text-sm font-semibold mb-1">Office Hours</p>
              <p className="text-xs text-primary-foreground/60">Mon - Sat: 9AM - 6PM</p>
              <p className="text-xs text-primary-foreground/60">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} HF DOC CONSULTANCY SERVICES. All rights reserved.</p>
            <p className="text-xs text-center sm:text-right max-w-md">
              Disclaimer: We are a documentation assistance service and not affiliated with any government agency.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

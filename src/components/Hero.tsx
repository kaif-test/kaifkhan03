import { ArrowRight, Shield, Clock, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    { icon: Shield, text: "Trusted Service" },
    { icon: Clock, text: "Quick Processing" },
    { icon: CheckCircle, text: "Expert Guidance" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
      </div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 border border-primary/40 mb-6 animate-fade-in shadow-lg">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-primary-foreground">
              HF DOC CONSULTANCY SERVICES
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight mb-6 animate-slide-up drop-shadow-lg">
            Professional Government Document
            <span className="block text-accent mt-2 drop-shadow-md">Assistance Services</span>
          </h1>

          {/* Description - Exact text provided */}
          <p className="text-sm sm:text-base md:text-lg text-primary/90 max-w-3xl mx-auto mb-8 animate-slide-up leading-relaxed bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm" style={{ animationDelay: "0.1s" }}>
            HF DOC CONSULTANCY SERVICES is a professional documentation service provider dedicated to assisting individuals with government-related documents and applications. We offer reliable support for services such as Passport application and renewal, Aadhaar card enrollment and updates, PAN card services, Voter ID assistance, and other online government forms. Our goal is to make the documentation process simple, accurate, and hassle-free for our clients by providing expert guidance, timely service, and complete assistance at every step. We focus on customer satisfaction, transparency, and efficiency, ensuring that all documents are prepared and submitted correctly as per government guidelines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto gold-gradient text-accent-foreground font-bold px-8 py-6 text-base hover:opacity-90 hover:scale-105 transition-all shadow-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="w-full sm:w-auto border-2 border-primary bg-white/80 text-primary hover:bg-white hover:border-primary px-8 py-6 text-base font-bold transition-all shadow-md backdrop-blur-sm"
            >
              View Services
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-primary bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 hover:bg-white hover:border-primary/40 transition-colors cursor-default shadow-sm"
              >
                <feature.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Quick Contact */}
          <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a 
              href="tel:+918291322540"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
            >
              <div className="p-2 rounded-full bg-accent/30 group-hover:bg-accent/50 transition-colors">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm font-medium">Call us: +91 82913 22540</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

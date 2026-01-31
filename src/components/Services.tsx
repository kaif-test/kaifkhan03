import { 
  FileText, 
  RefreshCw, 
  Heart, 
  Vote, 
  UserCheck, 
  CreditCard,
  ClipboardList,
  Receipt,
  Shield,
  Home,
  Newspaper,
  MapPin,
  Fingerprint
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Fresh Passport",
      icon: FileText,
      isNew: true,
      price: "₹2000",
      documents: [
        { name: "Birth Certificate or School/College Leaving Certificate" },
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Light Bill (Address Proof)" },
      ],
    },
    {
      title: "Renew Passport",
      icon: RefreshCw,
      price: "₹2000",
      documents: [
        { name: "Existing Passport" },
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Light Bill (Address Proof)" },
      ],
    },
    {
      title: "Marriage Certificate",
      icon: Heart,
      isNew: true,
      price: "₹3500",
      documents: [
        { name: "Husband & Wife Documents" },
        { name: "Birth Certificate or School LC or 10th/12th Marksheet or Aadhaar Card" },
        { name: "PAN Card" },
        { name: "If Muslim: Nikahnama" },
        { name: "Wedding Card" },
      ],
    },
    {
      title: "Voter ID Card",
      icon: Vote,
      price: "₹250",
      documents: [
        { name: "Passport Size Photo" },
        { name: "Aadhaar Card" },
        { name: "Light Bill (Address Proof)" },
      ],
    },
    {
      title: "Senior Citizen Card",
      icon: UserCheck,
      price: "₹500",
      documents: [
        { name: "Passport Size Photo" },
        { name: "Signature" },
        { name: "PAN Card" },
        { name: "Aadhaar Card" },
        { name: "Birth Certificate" },
      ],
    },
    {
      title: "New PAN Card",
      icon: CreditCard,
      isNew: true,
      price: "₹300",
      documents: [
        { name: "Passport Size Photo" },
        { name: "Signature" },
        { name: "Email ID" },
        { name: "Aadhaar Card" },
      ],
    },
    {
      title: "Income Certificate",
      icon: Receipt,
      price: "₹2000",
      documents: [
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Voter ID" },
        { name: "Driving Licence" },
        { name: "Email Address" },
        { name: "Mobile Number" },
        { name: "Electricity Bill" },
        { name: "Leaving Certificate" },
        { name: "Ration Card" },
        { name: "ITR" },
        { name: "Form 16" },
        { name: "Bank Statement" },
        { name: "Talhati Report (Compulsory)" },
        { name: "Photo" },
        { name: "Signature" },
      ],
    },
    {
      title: "Domicile Certificate",
      icon: MapPin,
      price: "₹2000",
      documents: [
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Birth Certificate" },
        { name: "School Leaving Certificate" },
        { name: "Electricity Bill" },
        { name: "Photo" },
        { name: "Signature" },
      ],
    },
    {
      title: "Gazette",
      icon: Newspaper,
      price: "₹1000",
      documents: [
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Affidavit" },
        { name: "Photo" },
        { name: "Signature" },
      ],
    },
    {
      title: "Police Clearance Certificate (PCC)",
      icon: Shield,
      documents: [
        { name: "Passport" },
        { name: "Aadhaar Card" },
      ],
    },
    {
      title: "Rent Agreement",
      icon: Home,
      documents: [
        { name: "Owner Light Bill" },
        { name: "Owner Aadhaar Card" },
        { name: "Owner PAN Card" },
        { name: "Tenant Aadhaar Card" },
        { name: "Tenant PAN Card" },
      ],
    },
    {
      title: "New Ration Card – Malad",
      icon: ClipboardList,
      isNew: true,
      documents: [
        { name: "HOF Documents", isHeader: true },
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Voter ID" },
        { name: "Bank Passbook" },
        { name: "Electric Bill" },
        { name: "Photo" },
        { name: "Signature" },
        { name: "Email ID" },
        { name: "Mobile Number" },
        { name: "Family Members Documents", isHeader: true },
        { name: "Aadhaar Card (Family)" },
        { name: "Photo (Family)" },
        { name: "Signature (Family)" },
        { name: "PAN Card (Family)" },
        { name: "Birth Certificate (Family)" },
      ],
    },
  ];

  const aadhaarServices = [
    {
      title: "Aadhaar Address Change",
      icon: Fingerprint,
      price: "₹600",
      documents: [
        { name: "Existing Aadhaar Card" },
        { name: "New Address Proof (Light Bill / Rent Agreement)" },
      ],
    },
    {
      title: "Aadhaar Name Change",
      icon: Fingerprint,
      price: "₹400",
      documents: [
        { name: "Existing Aadhaar Card" },
        { name: "Name Change Proof (Gazette / Marriage Certificate)" },
      ],
    },
    {
      title: "Aadhaar DOB Change",
      icon: Fingerprint,
      price: "₹3000",
      documents: [
        { name: "Existing Aadhaar Card" },
        { name: "Birth Certificate or School LC" },
        { name: "Passport (if available)" },
      ],
    },
    {
      title: "New Aadhaar Card",
      icon: Fingerprint,
      isNew: true,
      price: "₹500",
      documents: [
        { name: "Birth Certificate" },
        { name: "School ID / Leaving Certificate" },
        { name: "Address Proof" },
        { name: "Photo" },
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-bold text-accent-foreground bg-accent rounded-full mb-4 shadow-sm">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Document Assistance Services
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            We help you obtain essential government documents with expert guidance 
            and hassle-free processing.
          </p>
        </div>

        {/* Services Grid */}
        <div id="documents" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Aadhaar Services Section */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 text-sm font-bold text-primary-foreground bg-primary rounded-full mb-4 shadow-sm">
              Aadhaar Services
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
              Aadhaar Card Updates & New Enrollment
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Get assistance with Aadhaar card changes including address, name, date of birth updates, and new enrollments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aadhaarServices.map((service, index) => (
              <div 
                key={index} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-primary/5 border border-primary/20 text-center hover:border-primary/30 transition-colors">
          <p className="text-foreground font-semibold mb-2 text-lg">
            Need assistance with a different document?
          </p>
          <p className="text-muted-foreground text-sm sm:text-base mb-4">
            Contact us for personalized guidance. We handle various other government 
            documentation services as well.
          </p>
          <button
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

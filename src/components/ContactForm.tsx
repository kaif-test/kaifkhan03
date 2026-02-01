import { useState } from "react";
import { Send, CheckCircle, Phone, Mail, MapPin, Upload, X, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface UploadedFile {
  name: string;
  size: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    purpose: "",
    message: "",
  });

  const purposes = [
    "Fresh Passport Application",
    "Passport Renewal",
    "Marriage Certificate",
    "Voter ID Card",
    "Senior Citizen Card",
    "New PAN Card",
    "New Ration Card – Malad",
    "Income Certificate",
    "Other Document Service",
    "General Inquiry",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.accept = ".pdf,.jpg,.jpeg,.png,.doc,.docx";
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        const newFiles = Array.from(files).map((file) => ({
          name: file.name,
          size: formatFileSize(file.size),
        }));
        setUploadedFiles((prev) => [...prev, ...newFiles]);
      }
    };
    input.click();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "We will contact you within 24 hours.",
    });

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        purpose: "",
        message: "",
      });
      setUploadedFiles([]);
    }, 3000);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 82913 22540", href: "tel:+91 82913 22540" },
    { icon: Mail, label: "Email", value: "info@hfdocconsultancy.com", href: "mailto:info@hfdocconsultancy.com" },
    { icon: MapPin, label: "Office", value: "Malad, Mumbai, Maharashtra", href: null },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-bold text-accent-foreground bg-accent rounded-full mb-4 shadow-sm">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Get Expert Assistance Today
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card p-6 sm:p-8 rounded-xl border border-border shadow-sm">
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <div key={index}>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="flex items-start gap-4 group hover:bg-primary/5 p-2 -m-2 rounded-lg transition-colors"
                      >
                        <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-2 -m-2">
                        <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium text-foreground">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
                <p className="text-sm text-muted-foreground">
                  Monday - Saturday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-sm text-muted-foreground">
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit}
              className="bg-card p-6 sm:p-8 rounded-xl border border-border card-elevated"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    Your inquiry has been submitted successfully. We'll contact you soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="font-semibold">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="bg-background border-input focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="font-semibold">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210"
                        required
                        className="bg-background border-input focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background border-input focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purpose" className="font-semibold">Purpose of Inquiry *</Label>
                    <Select
                      value={formData.purpose}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, purpose: value }))
                      }
                      required
                    >
                      <SelectTrigger className="bg-background border-input focus:border-primary focus:ring-primary">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border z-50">
                        {purposes.map((purpose) => (
                          <SelectItem 
                            key={purpose} 
                            value={purpose}
                            className="hover:bg-primary/10 focus:bg-primary/10 cursor-pointer"
                          >
                            {purpose}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your requirements..."
                      rows={4}
                      className="bg-background resize-none border-input focus:border-primary focus:ring-primary"
                    />
                  </div>

                  {/* File Upload Section */}
                  <div className="space-y-3">
                    <Label className="font-semibold">Upload Documents (Optional)</Label>
                    <div 
                      onClick={handleFileUpload}
                      className="border-2 border-dashed border-border hover:border-primary/50 rounded-lg p-6 text-center cursor-pointer transition-colors hover:bg-primary/5"
                    >
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">Click to upload documents</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG, DOC up to 10MB each</p>
                    </div>
                    
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2 mt-3">
                        {uploadedFiles.map((file, index) => (
                          <div 
                            key={index}
                            className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <FileCheck className="w-4 h-4 text-green-600 shrink-0" />
                              <span className="text-sm text-green-700 dark:text-green-400 truncate">{file.name}</span>
                              <span className="text-xs text-green-600/70 shrink-0">({file.size})</span>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(index);
                              }}
                              className="p-1.5 hover:bg-red-100 dark:hover:bg-red-950/50 rounded-full transition-colors shrink-0"
                            >
                              <X className="w-4 h-4 text-red-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-gradient text-accent-foreground font-bold py-6 text-base hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></span>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Inquiry
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

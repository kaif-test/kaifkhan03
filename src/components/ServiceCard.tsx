import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp, Upload, X, FileCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface DocumentItem {
  name: string;
  isHeader?: boolean;
}

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  documents: DocumentItem[];
  isNew?: boolean;
  price?: string;
}

interface UploadedFile {
  name: string;
  documentType: string;
}

const ServiceCard = ({ title, icon: Icon, documents, isNew, price }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [showUploadSection, setShowUploadSection] = useState(false);

  const handleFileUpload = (documentType: string) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf,.jpg,.jpeg,.png,.doc,.docx";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setUploadedFiles((prev) => [
          ...prev.filter((f) => f.documentType !== documentType),
          { name: file.name, documentType },
        ]);
      }
    };
    input.click();
  };

  const removeFile = (documentType: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.documentType !== documentType));
  };

  const getUploadedFile = (documentType: string) => {
    return uploadedFiles.find((f) => f.documentType === documentType);
  };

  const regularDocs = documents.filter((d) => !d.isHeader);
  const displayDocs = isExpanded ? regularDocs : regularDocs.slice(0, 4);

  return (
    <Card className="card-elevated bg-card border-border h-full transition-all duration-300 hover:border-accent/40 hover:shadow-lg group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-lg sm:text-xl font-serif text-foreground leading-tight">
              {title}
            </CardTitle>
          </div>
          <div className="flex flex-col items-end gap-1">
            {isNew && (
              <span className="shrink-0 px-2.5 py-1 text-xs font-bold bg-accent text-accent-foreground rounded-full shadow-sm">
                Popular
              </span>
            )}
            {price && (
              <span className="shrink-0 px-3 py-1.5 text-sm font-bold bg-primary text-primary-foreground rounded-lg shadow-sm">
                {price}
              </span>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm font-semibold text-muted-foreground">Required Documents:</p>
        
        {/* Document Headers if any */}
        {documents.filter((d) => d.isHeader).map((header, idx) => (
          <div key={idx} className="text-sm font-bold text-primary bg-primary/5 px-3 py-2 rounded-md border-l-4 border-primary">
            {header.name}
          </div>
        ))}

        <ul className="space-y-2">
          {displayDocs.map((doc, index) => {
            const uploadedFile = getUploadedFile(doc.name);
            return (
              <li key={index} className="flex items-start justify-between gap-2 group/item">
                <div className="flex items-start gap-2.5 flex-1 min-w-0">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80 leading-relaxed">{doc.name}</span>
                </div>
                {showUploadSection && (
                  <div className="shrink-0">
                    {uploadedFile ? (
                      <div className="flex items-center gap-1">
                        <FileCheck className="w-4 h-4 text-green-600" />
                        <button
                          onClick={() => removeFile(doc.name)}
                          className="p-1 hover:bg-destructive/10 rounded transition-colors"
                          aria-label="Remove file"
                        >
                          <X className="w-3 h-3 text-destructive" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleFileUpload(doc.name)}
                        className="p-1 hover:bg-accent/10 rounded transition-colors opacity-60 group-hover/item:opacity-100"
                        aria-label="Upload document"
                      >
                        <Upload className="w-4 h-4 text-accent" />
                      </button>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {regularDocs.length > 4 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors w-full justify-center py-2 hover:bg-primary/5 rounded-md"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show All ({regularDocs.length - 4} more) <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}

        {/* Upload Section Toggle */}
        <div className="pt-3 border-t border-border">
          <Button
            variant={showUploadSection ? "default" : "outline"}
            size="sm"
            onClick={() => setShowUploadSection(!showUploadSection)}
            className={`w-full font-medium transition-all ${
              showUploadSection 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
            }`}
          >
            <Upload className="w-4 h-4 mr-2" />
            {showUploadSection ? "Hide Upload Section" : "Upload Documents"}
          </Button>
          
          {showUploadSection && uploadedFiles.length > 0 && (
            <div className="mt-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2">
                Uploaded Files ({uploadedFiles.length}):
              </p>
              <ul className="space-y-1">
                {uploadedFiles.map((file, idx) => (
                  <li key={idx} className="text-xs text-green-600 dark:text-green-500 flex items-center gap-2">
                    <FileCheck className="w-3 h-3" />
                    <span className="truncate">{file.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Apply Button */}
        <Button
          onClick={() => {
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="w-full gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MessageCircle, Upload, Sparkles, Scissors, Palette, ImageIcon } from "lucide-react";
import { toast } from "sonner";

const customisationTypes = [
  { value: "as-is", label: "I want this design as it is", icon: Sparkles },
  { value: "with-changes", label: "I want this design with changes", icon: Scissors },
  { value: "own-fabric", label: "I want to create an outfit from my own fabric/saree", icon: Palette },
  { value: "own-idea", label: "I want to share my own design idea/inspiration", icon: ImageIcon },
  { value: "brand-new", label: "I want a brand new outfit designed for me", icon: Sparkles },
];

const fabricPreferences = [
  { value: "kashuti", label: "Use Kashuti fabric" },
  { value: "own", label: "I will provide my own fabric" },
  { value: "from-image", label: "Use my uploaded inspiration image" },
];

const Customise = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    customisationType: "",
    fabricPreference: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.whatsapp || !formData.customisationType) {
      toast.error("Please fill in all required fields");
      return;
    }

    const customTypeLabel = customisationTypes.find(t => t.value === formData.customisationType)?.label || "";
    const fabricLabel = fabricPreferences.find(f => f.value === formData.fabricPreference)?.label || "";

    const message = encodeURIComponent(
      `Hello Kashuti 👗💚

I want to request a custom outfit.

Name: ${formData.name}
WhatsApp: ${formData.whatsapp}
Customization Type: ${customTypeLabel}
Fabric Preference: ${fabricLabel}
Message/Requirements: ${formData.message || "Not specified"}

Thank you!`
    );

    window.open(`https://wa.me/919079803230?text=${message}`, "_blank");
    toast.success("Opening WhatsApp...");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3 animate-fade-in">
            Make It Yours
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 animate-fade-in-delay-1">
            Customise Your Dream Outfit
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-delay-2">
            Tell us exactly what you want — a design you love, a saree you want transformed, 
            or a totally new outfit idea. We stitch perfection.
          </p>
        </div>
      </section>

      {/* Options Overview */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "📷", text: "Upload your design/inspiration" },
              { icon: "🧵", text: "Upload your fabric image" },
              { icon: "✂️", text: "Choose embroidery style" },
              { icon: "📐", text: "Share measurements" },
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg bg-card border border-border"
              >
                <span className="text-2xl block mb-2">{item.icon}</span>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-foreground font-medium">
                  WhatsApp Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="whatsapp"
                  placeholder="+91 98765 43210"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="bg-background"
                />
              </div>

              {/* Customisation Type */}
              <div className="space-y-4">
                <Label className="text-foreground font-medium">
                  Customisation Type <span className="text-destructive">*</span>
                </Label>
                <RadioGroup
                  value={formData.customisationType}
                  onValueChange={(value) => setFormData({ ...formData, customisationType: value })}
                  className="space-y-3"
                >
                  {customisationTypes.map((type) => (
                    <div 
                      key={type.value}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-background border border-border hover:border-gold/50 transition-colors cursor-pointer"
                    >
                      <RadioGroupItem value={type.value} id={type.value} />
                      <type.icon className="h-5 w-5 text-gold" />
                      <Label htmlFor={type.value} className="flex-1 cursor-pointer">
                        {type.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Fabric Preference */}
              <div className="space-y-4">
                <Label className="text-foreground font-medium">
                  Fabric Preference
                </Label>
                <RadioGroup
                  value={formData.fabricPreference}
                  onValueChange={(value) => setFormData({ ...formData, fabricPreference: value })}
                  className="space-y-3"
                >
                  {fabricPreferences.map((pref) => (
                    <div 
                      key={pref.value}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-background border border-border hover:border-gold/50 transition-colors cursor-pointer"
                    >
                      <RadioGroupItem value={pref.value} id={pref.value} />
                      <Label htmlFor={pref.value} className="flex-1 cursor-pointer">
                        {pref.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Message / Requirements
                </Label>
                <Textarea
                  id="message"
                  placeholder="Describe changes, styles, sleeves, neckline, fit, length, embroidery preferences, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background min-h-[120px]"
                />
                <p className="text-xs text-muted-foreground">
                  You can also share image links or upload images directly on WhatsApp after submitting.
                </p>
              </div>

              {/* Submit */}
              <Button type="submit" variant="gold" size="xl" className="w-full">
                <MessageCircle className="h-5 w-5" />
                Send Request via WhatsApp
              </Button>
            </form>

            {/* Note */}
            <div className="mt-8 p-6 rounded-lg bg-forest/5 border border-forest/20">
              <h3 className="font-serif text-lg text-foreground mb-2">
                What happens next?
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Your request will open in WhatsApp</li>
                <li>• You can attach inspiration images directly in the chat</li>
                <li>• Our team will discuss pricing and timeline with you</li>
                <li>• We'll guide you through measurements and fabric selection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Customise;

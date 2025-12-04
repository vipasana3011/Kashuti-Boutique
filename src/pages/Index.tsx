import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Sparkles, Scissors, Palette, Heart, Shirt, Crown, Check, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Designer Boutique Outfits",
    description: "Unique pieces crafted with artisanal detailing",
  },
  {
    icon: Scissors,
    title: "Custom Stitching",
    description: "Perfect fit with personalised measurements",
  },
  {
    icon: Palette,
    title: "Saree Transformations",
    description: "Convert your sarees into stunning designer outfits",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every stitch reflects our passion for craftsmanship",
  },
  {
    icon: Shirt,
    title: "Fabric-Based Custom Work",
    description: "Bring your own fabric and watch magic happen",
  },
  {
    icon: Crown,
    title: "Bridal & Festive Designs",
    description: "Special occasion outfits that make you shine",
  },
];

const offerings = [
  {
    title: "Ready Designs",
    description: "Pick a design from our collection & buy it exactly as shown.",
    icon: "✨",
  },
  {
    title: "Custom Designs",
    description: "Make changes, choose fabrics, adjust styling — your outfit, your rules.",
    icon: "🎨",
  },
  {
    title: "Bring Your Own Fabric",
    description: "Send your saree, fabric, lehenga — we convert it into designer outfits.",
    icon: "🧵",
  },
  {
    title: "Create From Scratch",
    description: "Upload an image of any outfit you love, and we'll recreate it for you.",
    icon: "💫",
  },
  {
    title: "Premium Finishing",
    description: "Precision stitching, clean finishing, beautiful detailing.",
    icon: "👗",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Elegant Indian fashion fabrics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-delay-1">
              Handcrafted in Jaipur
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6 animate-fade-in-delay-1">
              Bespoke Boutique Wear, Crafted Just for You
            </h1>
            <p className="text-cream/90 text-lg md:text-xl leading-relaxed mb-8 font-light animate-fade-in-delay-2">
              At Kashuti, we create elegant, custom-made ethnic & contemporary outfits 
              designed exactly the way you imagine. Choose from our collection or send 
              your own inspiration — we stitch perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <Button variant="hero" asChild>
                <Link to="/designs">
                  Explore Designs
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/customise">
                  Customise Your Outfit
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Why Kashuti Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Why Kashuti?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Kashuti, every outfit is made with love, precision, and artisanal detailing. 
              We specialise in bringing your fashion dreams to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-lg bg-card border border-border/50 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mb-6 group-hover:bg-forest/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-forest" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">
              Our Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              What We Offer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you want something from our catalog or something unique from your 
              imagination — we bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <div
                key={offering.title}
                className="group relative p-8 rounded-lg bg-background border border-border hover:border-gold/50 transition-all duration-300 hover-lift"
              >
                <span className="text-4xl mb-4 block">{offering.icon}</span>
                <h3 className="font-serif text-xl text-foreground mb-3 flex items-center gap-2">
                  <Check className="h-5 w-5 text-gold" />
                  {offering.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/customise">
                Start Your Custom Order
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
            Your Imagination, Our Craft
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-8">
            Ready to create something beautiful? Browse our designs or share your vision with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" asChild>
              <Link to="/designs">View Collection</Link>
            </Button>
            <Button 
              variant="gold" 
              size="lg"
              onClick={() => window.open("https://wa.me/919079803230?text=Hello%20Kashuti!%20I%20want%20to%20discuss%20a%20custom%20outfit.", "_blank")}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

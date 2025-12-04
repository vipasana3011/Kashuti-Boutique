import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Heart, Sparkles, Scissors, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every stitch carries our passion for craftsmanship and attention to detail.",
  },
  {
    icon: Sparkles,
    title: "Unique Designs",
    description: "We believe every woman deserves outfits that are as unique as she is.",
  },
  {
    icon: Scissors,
    title: "Perfect Fit",
    description: "Custom measurements ensure your outfit fits you perfectly, every time.",
  },
];

const promises = [
  "Every woman deserves outfits that fit her perfectly",
  "Custom designs should be accessible",
  "Fine stitching and premium finish make all the difference",
  "Your vision is our blueprint",
  "Quality over quantity, always",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Kashuti fabrics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest/80 to-forest/60" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Crafting Elegance, One Outfit at a Time
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Where Your Style Becomes Art
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Kashuti was born from a love for handcrafted detailing and timeless elegance. 
                We combine modern fashion with traditional craftsmanship to create outfits that 
                feel personal, beautiful, and uniquely yours.
              </p>
              <p>
                Every stitch, every fabric choice, every detail matters. This is not fast fashion 
                — this is boutique art.
              </p>
              <p className="text-foreground font-serif text-xl italic">
                "Kashuti isn't just a boutique — it's a place where your imagination 
                turns into elegant clothing."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-lg bg-background border border-border hover-lift"
              >
                <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-forest" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Believe Section */}
      <section className="section-padding bg-forest text-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">
                Our Promise
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                We Believe
              </h2>
            </div>

            <div className="space-y-4">
              {promises.map((promise, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-cream/5 border border-cream/10"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-gold" />
                  </div>
                  <p className="text-cream/90 text-lg">
                    {promise}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Browse our collection or share your vision with us. Let's create 
            your dream outfit together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/designs">
                View Our Designs
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/customise">
                Start Customising
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag } from "lucide-react";

import design1 from "@/assets/design-1.jpg";
import design2 from "@/assets/design-2.jpg";
import design3 from "@/assets/design-3.jpg";
import design4 from "@/assets/design-4.jpg";
import design5 from "@/assets/design-5.jpg";

const categories = [
  "All",
  "Ethnic Wear",
  "Indo-Western",
  "Kurti & Suit Sets",
  "Saree Blouse Designs",
  "Festive Wear",
  "Bridal Pre-Shoot",
];

const designs = [
  {
    id: 1,
    name: "Emerald Floral Kurti Set",
    description: "A soft, breathable kurti set detailed with delicate embroidery. Perfect for festive and casual wear.",
    image: design1,
    category: "Kurti & Suit Sets",
    price: "Custom Quote",
  },
  {
    id: 2,
    name: "Ivory Organza Suit",
    description: "Elegant organza suit with handcrafted lace detailing. Lightweight and festive.",
    image: design2,
    category: "Ethnic Wear",
    price: "Custom Quote",
  },
  {
    id: 3,
    name: "Maroon Brocade Blouse",
    description: "A perfectly fitted brocade blouse best for weddings and parties.",
    image: design3,
    category: "Saree Blouse Designs",
    price: "Custom Quote",
  },
  {
    id: 4,
    name: "Pastel Lehenga Concept Outfit",
    description: "Modern pastel tones with handcrafted work for pre-wedding or festive events.",
    image: design4,
    category: "Bridal Pre-Shoot",
    price: "Custom Quote",
  },
  {
    id: 5,
    name: "Olive Green Indo-Western Dress",
    description: "Flowy, elegant Indo-western gown for special occasions.",
    image: design5,
    category: "Indo-Western",
    price: "Custom Quote",
  },
];

const Designs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDesigns = selectedCategory === "All" 
    ? designs 
    : designs.filter(d => d.category === selectedCategory);

  const handleBuy = (designName: string) => {
    const message = encodeURIComponent(
      `Hello Kashuti! 👗💚\n\nI want to buy this design.\n\nDesign Name: ${designName}\n\nPlease share more details!`
    );
    window.open(`https://wa.me/919079803230?text=${message}`, "_blank");
  };

  const handleCustomise = (designName: string) => {
    const message = encodeURIComponent(
      `Hello Kashuti! 👗💚\n\nI want to customise this design.\n\nDesign Name: ${designName}\n\nI would like to discuss customisation options.`
    );
    window.open(`https://wa.me/919079803230?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3 animate-fade-in">
            Our Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 animate-fade-in-delay-1">
            Discover Our Signature Designs
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-delay-2">
            Explore our handcrafted boutique pieces. You can buy them as-is or 
            customise them according to your style.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "elegant"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Designs Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesigns.map((design, index) => (
              <div
                key={design.id}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button 
                      variant="gold" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleBuy(design.name)}
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Buy
                    </Button>
                    <Button 
                      variant="hero-outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleCustomise(design.name)}
                    >
                      <MessageCircle className="h-4 w-4" />
                      Customise
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-gold text-xs font-sans tracking-wider uppercase">
                    {design.category}
                  </span>
                  <h3 className="font-serif text-xl text-foreground mt-2 mb-3">
                    {design.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {design.description}
                  </p>
                  <p className="text-forest font-medium">
                    {design.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredDesigns.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No designs found in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="container-custom text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-muted-foreground mb-6">
            Share your inspiration with us and we'll create it for you.
          </p>
          <Button 
            variant="default" 
            size="lg"
            onClick={() => window.location.href = "/customise"}
          >
            Create Custom Design
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Designs;

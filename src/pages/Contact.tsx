import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, MapPin, Clock, Phone } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919079803230?text=Hello%20Kashuti!", "_blank");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3 animate-fade-in">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 animate-fade-in-delay-1">
            Let's Connect
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-delay-2">
            Have a question, custom request, or wish to place an order? We're here for you!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <div 
                className="p-8 rounded-lg bg-card border border-border hover:border-gold/50 transition-all hover-lift cursor-pointer"
                onClick={handleWhatsApp}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-7 w-7 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">WhatsApp</h3>
                    <p className="text-gold font-medium text-lg mb-1">+91 9079803230</p>
                    <p className="text-muted-foreground text-sm">
                      Fastest way to reach us. Tap to chat!
                    </p>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/kashutii/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-8 rounded-lg bg-card border border-border hover:border-gold/50 transition-all hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-7 w-7 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Instagram</h3>
                    <p className="text-gold font-medium text-lg mb-1">@kashutii</p>
                    <p className="text-muted-foreground text-sm">
                      Follow us for latest designs and behind-the-scenes
                    </p>
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="p-8 rounded-lg bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-7 w-7 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Visit Us</h3>
                    <p className="text-foreground mb-1">
                      6/7 Sector 7 Rd, Ramjipura Rd
                    </p>
                    <p className="text-muted-foreground">
                      Malviya Nagar, Jaipur
                    </p>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="p-8 rounded-lg bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-7 w-7 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">Timings</h3>
                    <p className="text-gold font-medium text-lg mb-1">10 AM – 8 PM</p>
                    <p className="text-muted-foreground text-sm">
                      Monday to Sunday (All days)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map / Image */}
            <div className="space-y-6">
              {/* Map Embed */}
              <div className="rounded-lg overflow-hidden border border-border h-[300px] lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9!2d75.7833!3d26.8500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA3NcKwNDcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kashuti Location"
                />
              </div>

              {/* Quick CTA */}
              <div className="p-8 rounded-lg bg-forest text-cream text-center">
                <h3 className="font-serif text-2xl mb-4">
                  Ready to Start?
                </h3>
                <p className="text-cream/80 mb-6">
                  Message us on WhatsApp to discuss your custom outfit
                </p>
                <Button variant="gold" size="lg" onClick={handleWhatsApp}>
                  <MessageCircle className="h-5 w-5" />
                  Chat Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

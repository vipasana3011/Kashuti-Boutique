import { Link } from "react-router-dom";
import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react";
import logo from "@/assets/kashuti-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-forest text-cream">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Kashuti" className="h-16 w-auto bg-cream rounded-lg p-2" />
            <p className="text-cream/80 text-sm leading-relaxed">
              Where Your Style Becomes Art. Crafting elegance, one outfit at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-gold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-cream/80 hover:text-gold transition-colors text-sm">
                Home
              </Link>
              <Link to="/designs" className="text-cream/80 hover:text-gold transition-colors text-sm">
                Our Designs
              </Link>
              <Link to="/customise" className="text-cream/80 hover:text-gold transition-colors text-sm">
                Customise
              </Link>
              <Link to="/contact" className="text-cream/80 hover:text-gold transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-gold">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/919079803230" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                +91 9079803230
              </a>
              <a 
                href="https://www.instagram.com/kashutii/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm"
              >
                <Instagram className="h-4 w-4" />
                @kashutii
              </a>
              <div className="flex items-start gap-2 text-cream/80 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>6/7 Sector 7 Rd, Ramjipura Rd, Malviya Nagar, Jaipur</span>
              </div>
              <div className="flex items-center gap-2 text-cream/80 text-sm">
                <Clock className="h-4 w-4" />
                10 AM – 8 PM (Mon–Sun)
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-gold">Our Promise</h4>
            <p className="text-cream/80 text-sm leading-relaxed italic">
              "Handmade with Heart, Designed for You."
            </p>
            <p className="text-cream/60 text-xs">
              Premium boutique finishing with precision stitching and beautiful detailing.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cream/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 text-sm">
            © 2025 Kashuti Boutique. All rights reserved.
          </p>
          <p className="text-cream/60 text-sm">
            Crafted with love in Jaipur 💚
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

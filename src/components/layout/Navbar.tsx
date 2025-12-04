import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/kashuti-logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Designs", path: "/designs" },
  { name: "Customise", path: "/customise" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleWhatsApp = () => {
    window.open("https://wa.me/919079803230?text=Hello%20Kashuti!", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Kashuti" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm tracking-wide elegant-underline pb-1 transition-colors ${
                  location.pathname === link.path
                    ? "text-forest font-medium"
                    : "text-muted-foreground hover:text-forest"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="gold" size="sm" onClick={handleWhatsApp}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-forest"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-scale-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-base py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-forest font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="gold" className="mt-2" onClick={handleWhatsApp}>
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

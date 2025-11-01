import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              Eternal <span className="text-accent">Moments</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Capturing the magic of your special day with timeless elegance and
              artistic vision.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/portfolio"
                className="block text-sm text-muted-foreground hover:text-accent transition-smooth"
              >
                Portfolio
              </Link>
              <Link
                to="/packages"
                className="block text-sm text-muted-foreground hover:text-accent transition-smooth"
              >
                Packages
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-muted-foreground hover:text-accent transition-smooth"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center text-sm text-muted-foreground hover:text-accent transition-smooth"
              >
                <Phone size={16} className="mr-2" />
                +1 (234) 567-890
              </a>
              <a
                href="mailto:hello@eternalmoments.com"
                className="flex items-center text-sm text-muted-foreground hover:text-accent transition-smooth"
              >
                <Mail size={16} className="mr-2" />
                hello@eternalmoments.com
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Eternal Moments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

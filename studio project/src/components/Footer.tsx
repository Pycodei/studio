import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              Pushpa <span className="text-accent">Wedding Studio</span>
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
                href="tel:+919632917041"
                className="flex items-center text-sm text-muted-foreground hover:text-accent transition-smooth"
              >
                <Phone size={16} className="mr-2" />
                +91 (963) 2917041
              </a>
              <a
                href="mailto:sameerpandey2063@gmail.com"
                className="flex items-center text-sm text-muted-foreground hover:text-accent transition-smooth"
              >
                <Mail size={16} className="mr-2" />
                sameerpandey2063@gmail.com
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.instagram.com/prabinsharma.961?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/prabinsharma.25"
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
          <p>&copy; {new Date().getFullYear()} Pushpa Wedding Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

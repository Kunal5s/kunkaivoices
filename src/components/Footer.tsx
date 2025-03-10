
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 py-12 border-t border-white/10 relative overflow-hidden">
      <div className="bg-noise absolute inset-0 z-0"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mic className="h-5 w-5 text-pink-light" />
              <span className="text-xl font-bold text-gradient">VocalAI</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Transform your content with cutting-edge AI voice technology. Support for 50+ languages, 40+ premium voices, and advanced voice customization features.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full border-white/10 bg-background/50 hover:bg-background/80"
              >
                <i className="fab fa-twitter text-white/70"></i>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full border-white/10 bg-background/50 hover:bg-background/80"
              >
                <i className="fab fa-facebook text-white/70"></i>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full border-white/10 bg-background/50 hover:bg-background/80"
              >
                <i className="fab fa-instagram text-white/70"></i>
              </Button>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Products & Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-white/70 hover:text-white text-sm transition-colors">
                  Voice Generation
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-white/70 hover:text-white text-sm transition-colors">
                  Text to Speech
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-white/70 hover:text-white text-sm transition-colors">
                  Voice Cloning
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-white/70 hover:text-white text-sm transition-colors">
                  AI Voice Agents
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-white/70 hover:text-white text-sm transition-colors">
                  Audio Editing
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/70 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/70 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-white/70 hover:text-white text-sm transition-colors">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Legal & Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-white/70 hover:text-white text-sm transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="text-white/70 hover:text-white text-sm transition-colors">
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white/70 hover:text-white text-sm transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2024 VocalAI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-white/50 hover:text-white text-sm transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


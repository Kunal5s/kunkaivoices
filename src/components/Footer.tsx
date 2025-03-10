
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LANGUAGES } from "@/lib/constants";

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
              Experience our next-generation AI voice technology with 50+ languages, 40+ premium voices, and cutting-edge voice customization. Create human-like speech for content, gaming, business, and more.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/vocalai" target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full border-white/10 bg-background/50 hover:bg-background/80"
                >
                  <i className="fab fa-twitter text-white/70"></i>
                </Button>
              </a>
              <a href="https://facebook.com/vocalai" target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full border-white/10 bg-background/50 hover:bg-background/80"
                >
                  <i className="fab fa-facebook text-white/70"></i>
                </Button>
              </a>
              <a href="https://instagram.com/vocalai" target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full border-white/10 bg-background/50 hover:bg-background/80"
                >
                  <i className="fab fa-instagram text-white/70"></i>
                </Button>
              </a>
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
                <Link to="/features#text-to-speech" className="text-white/70 hover:text-white text-sm transition-colors">
                  Text to Speech
                </Link>
              </li>
              <li>
                <Link to="/features#voice-cloning" className="text-white/70 hover:text-white text-sm transition-colors">
                  Voice Cloning
                </Link>
              </li>
              <li>
                <Link to="/features#ai-voice-agents" className="text-white/70 hover:text-white text-sm transition-colors">
                  AI Voice Agents
                </Link>
              </li>
              <li>
                <Link to="/features#audio-editing" className="text-white/70 hover:text-white text-sm transition-colors">
                  Audio Editing
                </Link>
              </li>
              <li>
                <Link to="/features#multi-language" className="text-white/70 hover:text-white text-sm transition-colors">
                  Multi-language Support
                </Link>
              </li>
              <li>
                <Link to="/features#voice-modulation" className="text-white/70 hover:text-white text-sm transition-colors">
                  Real-time Voice Modulation
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
              <li>
                <Link to="/partners" className="text-white/70 hover:text-white text-sm transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-white/70 hover:text-white text-sm transition-colors">
                  Investors
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
              <li>
                <Link to="/api-docs" className="text-white/70 hover:text-white text-sm transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-white text-sm transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="text-white/70 text-sm mb-6">
            <h5 className="font-medium mb-2">Available Languages (50+)</h5>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.slice(0, 15).map((lang) => (
                <span key={lang.id} className="inline-flex items-center" title={lang.name}>
                  {lang.flag}
                </span>
              ))}
              <Link to="/languages" className="text-white/50 hover:text-white transition-colors">
                +{LANGUAGES.length - 15} more
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2024 VocalAI. All rights reserved. Powered by ElevenLabs AI technology.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-white/50 hover:text-white text-sm transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-white/50 hover:text-white text-sm transition-colors">
                  Accessibility
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

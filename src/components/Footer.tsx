
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LANGUAGES, COMPANY_INFO, LEGAL_INFO } from "@/lib/constants";

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
              Experience our next-generation AI voice technology with 20+ languages, premium voices, and cutting-edge voice customization. Create human-like speech for content, gaming, business, and more.
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
                <Link to="/conversation" className="text-white/70 hover:text-white text-sm transition-colors">
                  Multi-character Conversations
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
                <Link to="/about#team" className="text-white/70 hover:text-white text-sm transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <div className="flex flex-col">
                  <Link to="/about#careers" className="text-white/70 hover:text-white text-sm transition-colors">
                    Careers
                  </Link>
                  <span className="text-xs text-pink mt-1">We're hiring!</span>
                </div>
              </li>
              <li>
                <Link to="/about#blog" className="text-white/70 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about#press" className="text-white/70 hover:text-white text-sm transition-colors">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <div className="flex flex-col">
                  <Link to="/about#partners" className="text-white/70 hover:text-white text-sm transition-colors">
                    Partners
                  </Link>
                  <span className="text-xs text-white/50 mt-1">New partnership with ElevenLabs</span>
                </div>
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
                <div className="flex flex-col">
                  <Link to="/privacy#security" className="text-white/70 hover:text-white text-sm transition-colors">
                    Security
                  </Link>
                  <span className="text-xs text-white/50 mt-1">Updated May 2024</span>
                </div>
              </li>
              <li>
                <Link to="/privacy#gdpr" className="text-white/70 hover:text-white text-sm transition-colors">
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link to="/about#support" className="text-white/70 hover:text-white text-sm transition-colors">
                  Support Center
                </Link>
              </li>
              <li>
                <div className="flex flex-col">
                  <Link to="/features#api" className="text-white/70 hover:text-white text-sm transition-colors">
                    API Documentation
                  </Link>
                  <span className="text-xs text-white/50 mt-1">New V2 API available</span>
                </div>
              </li>
              <li>
                <Link to="/about#faq" className="text-white/70 hover:text-white text-sm transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-white/70 text-sm">
              <h5 className="font-medium mb-3">Recent Updates</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-pink text-xs mr-2 mt-1">NEW</span>
                  <div>
                    <span className="block text-white">Added multi-character conversation support</span>
                    <span className="text-xs text-white/50">May 15, 2024</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink text-xs mr-2 mt-1">NEW</span>
                  <div>
                    <span className="block text-white">Emotion control with 12 different emotions</span>
                    <span className="text-xs text-white/50">May 10, 2024</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 text-xs mr-2 mt-1">UPDATE</span>
                  <div>
                    <span className="block text-white">Improved model performance for all 20 languages</span>
                    <span className="text-xs text-white/50">May 5, 2024</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-white/70 text-sm">
              <h5 className="font-medium mb-3">Available Languages (20+)</h5>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <div key={lang.id} className="inline-flex items-center glass-morphism rounded-full px-2 py-1" title={lang.name}>
                    <span className="mr-1">{lang.flag}</span>
                    <span className="text-xs">{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-white/70 text-sm">
              <h5 className="font-medium mb-2">About {COMPANY_INFO.name}</h5>
              <p className="text-white/60 text-xs">
                {COMPANY_INFO.mission} Founded in {COMPANY_INFO.founded} in {COMPANY_INFO.location}.
              </p>
            </div>
            <div className="text-white/70 text-sm">
              <h5 className="font-medium mb-2">Our Values</h5>
              <p className="text-white/60 text-xs">
                {COMPANY_INFO.values[0]}
              </p>
            </div>
            <div className="text-white/70 text-sm">
              <h5 className="font-medium mb-2">Technical Stack</h5>
              <p className="text-white/60 text-xs">
                Powered by ElevenLabs AI technology, React, TypeScript, and TailwindCSS.
              </p>
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
                <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/privacy#cookies" className="text-white/50 hover:text-white text-sm transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/about#accessibility" className="text-white/50 hover:text-white text-sm transition-colors">
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

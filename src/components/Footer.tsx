
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              AI-powered voice technology for everyone. Create natural, emotional, and studio-quality voiceovers with ease.
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
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Text to Speech
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Voice Cloning
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  AI Agents
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Audio Editing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Voiceover Studio
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  GDPR
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2023 VocalAI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

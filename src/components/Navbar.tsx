
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Mic, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-2 glass-morphism border-b border-white/10"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mic className="h-6 w-6 text-pink-light" />
            <span className="text-xl font-bold text-gradient">VocalAI</span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#services"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#voices"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Voices
            </a>
            <a
              href="#pricing"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:border-white/40 transition-colors"
            >
              Login
            </Button>
            <Button className="bg-pink hover:bg-pink-dark transition-colors pink-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-morphism mt-2 animate-slide-down">
          <div className="flex flex-col space-y-4 p-6">
            <a
              href="#features"
              className="text-sm text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#services"
              className="text-sm text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#voices"
              className="text-sm text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Voices
            </a>
            <a
              href="#pricing"
              className="text-sm text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col gap-3 pt-2">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:border-white/40 transition-colors"
              >
                Login
              </Button>
              <Button className="bg-pink hover:bg-pink-dark transition-colors pink-glow">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

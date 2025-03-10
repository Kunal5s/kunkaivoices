
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mic, Sparkles, Wand2 } from "lucide-react";

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="bg-noise absolute inset-0 z-0"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-pink/5 blur-[120px] opacity-70 z-0"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-pink/10 blur-[80px] opacity-60 z-0"></div>
      <div className="absolute top-40 right-10 w-[250px] h-[250px] rounded-full bg-pink-dark/10 blur-[80px] opacity-60 z-0"></div>
      
      {/* Floating elements */}
      <div className="absolute hidden lg:block top-1/4 left-10 w-16 h-16 glass-morphism rounded-xl p-4 animate-float">
        <Mic className="text-pink w-full h-full" />
      </div>
      <div className="absolute hidden lg:block bottom-1/4 right-10 w-16 h-16 glass-morphism rounded-xl p-4 animate-float" style={{ animationDelay: "1s" }}>
        <Wand2 className="text-pink w-full h-full" />
      </div>
      <div className="absolute hidden lg:block top-2/3 left-1/4 w-12 h-12 glass-morphism rounded-xl p-3 animate-float" style={{ animationDelay: "1.5s" }}>
        <Sparkles className="text-pink w-full h-full" />
      </div>
      
      {/* Main content */}
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="inline-flex items-center px-3 py-1 glass-morphism rounded-full text-xs font-medium mb-4 animate-fade-in">
            <span className="text-pink mr-2">✨</span>
            <span className="text-white/80">Powered by Advanced AI</span>
          </div>
          
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter max-w-3xl transition-all duration-1000",
              animationComplete ? "text-gradient" : "opacity-0"
            )}
          >
            Transform Your Text into Life-Like Speech
          </h1>
          
          <p 
            className={cn(
              "text-white/70 max-w-[42rem] leading-normal text-base md:text-xl transition-all duration-1000 delay-300",
              animationComplete ? "opacity-100" : "opacity-0"
            )}
          >
            Create natural, emotional, and studio-quality voiceovers with our AI-powered voice generation platform. 40+ voices, 20+ languages, unlimited possibilities.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-500",
              animationComplete ? "opacity-100" : "opacity-0"
            )}
          >
            <Button 
              size="lg" 
              className="bg-pink hover:bg-pink-dark transition-colors pink-glow w-full sm:w-auto"
            >
              Try for Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:border-white/40 transition-colors w-full sm:w-auto"
            >
              <Mic className="mr-2 h-4 w-4" />
              Listen to Samples
            </Button>
          </div>

          <div 
            className={cn(
              "flex items-center justify-center gap-6 pt-8 text-white/60 text-sm transition-all duration-1000 delay-700",
              animationComplete ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="flex items-center">
              <span className="text-pink mr-2">40+</span> AI Voices
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20"></div>
            <div className="flex items-center">
              <span className="text-pink mr-2">20+</span> Languages
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20"></div>
            <div className="flex items-center">
              <span className="text-pink mr-2">50+</span> Services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

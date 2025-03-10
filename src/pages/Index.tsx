
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VoiceGenerator from "@/components/VoiceGenerator";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { SERVICES, FEATURES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Voice Generator Section */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Create Life-Like AI Voices
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our advanced AI technology generates natural, emotional, and studio-quality voiceovers in seconds.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VoiceGenerator />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="bg-noise absolute inset-0 z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink/5 blur-[150px] opacity-60 z-0"></div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 glass-morphism rounded-full text-xs font-medium mb-4">
              <span className="text-pink mr-2">✨</span>
              <span className="text-white/80">50+ AI Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Comprehensive Voice Solutions
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              From basic text-to-speech to advanced AI voice cloning and audio editing, we offer everything you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="animate-smooth-appear"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 glass-morphism rounded-full text-xs font-medium mb-4">
                <span className="text-pink mr-2">🚀</span>
                <span className="text-white/80">Advanced Features</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                Cutting-Edge AI Voice Technology
              </h2>
              <p className="text-white/70 mb-8">
                Our platform leverages the latest advancements in artificial intelligence to deliver unparalleled voice quality and flexibility.
              </p>

              <div className="space-y-4">
                {FEATURES.slice(0, 4).map((feature) => (
                  <div key={feature.id} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="mt-8 bg-pink hover:bg-pink-dark transition-colors pink-glow">
                Explore All Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="glass-morphism rounded-xl p-6 md:p-8 animate-smooth-appear">
              <div className="aspect-video bg-black/40 rounded-lg overflow-hidden backdrop-blur-sm mb-6">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-pink font-medium mb-2">Interactive Demo</div>
                    <Button
                      variant="outline"
                      className="border-white/10 hover:border-white/20"
                    >
                      Play Demo
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {FEATURES.slice(4).map((feature) => (
                  <div key={feature.id} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-pink mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="bg-noise absolute inset-0 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-pink/5 blur-[150px] opacity-60 z-0"></div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="glass-morphism rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Ready to Transform Your Voice Projects?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Join thousands of content creators, developers, and businesses using our AI voice technology to create amazing audio experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-pink hover:bg-pink-dark transition-colors pink-glow w-full sm:w-auto"
              >
                Get Started for Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:border-white/40 transition-colors w-full sm:w-auto"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

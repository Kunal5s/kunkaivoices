
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiCharacterConversation from "@/components/MultiCharacterConversation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Header */}
      <section className="py-10 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button variant="ghost" className="text-white/70 hover:text-white">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Advanced AI Voice Features
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore our cutting-edge voice technologies and create amazing audio experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Character Conversation Section */}
      <section className="py-10 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <MultiCharacterConversation />
          </div>
        </div>
      </section>

      {/* Feature Coming Soon Section */}
      <section className="py-20 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-4">
              More Advanced Features Coming Soon
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're continuously developing new AI voice technologies. Stay tuned for upcoming features!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-morphism rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-pink/10 flex items-center justify-center mb-4">
                <span className="text-pink">🎭</span>
              </div>
              <h3 className="font-semibold mb-2">Voice Emotion Control</h3>
              <p className="text-white/70 text-sm">Adjust emotions from happy to sad, angry, excited, and more</p>
            </div>

            <div className="glass-morphism rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-pink/10 flex items-center justify-center mb-4">
                <span className="text-pink">🎤</span>
              </div>
              <h3 className="font-semibold mb-2">Voice Cloning</h3>
              <p className="text-white/70 text-sm">Clone your own voice or create custom voice models</p>
            </div>

            <div className="glass-morphism rounded-xl p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-pink/10 flex items-center justify-center mb-4">
                <span className="text-pink">🎬</span>
              </div>
              <h3 className="font-semibold mb-2">AI Lip Sync</h3>
              <p className="text-white/70 text-sm">Match AI voice with video characters for perfect sync</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;

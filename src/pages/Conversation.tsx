
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiCharacterConversation from "@/components/MultiCharacterConversation";
import { CheckCircle2 } from "lucide-react";

const Conversation = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      <section className="py-20 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              AI Character Conversations
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              Create dynamic conversations between multiple AI voices with different personalities and emotions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6 mb-10">
              <div className="flex items-center text-sm text-white/80">
                <CheckCircle2 className="h-4 w-4 text-pink mr-2" />
                <span>10 Male & 10 Female Voices</span>
              </div>
              <div className="flex items-center text-sm text-white/80">
                <CheckCircle2 className="h-4 w-4 text-pink mr-2" />
                <span>Multiple Character Support</span>
              </div>
              <div className="flex items-center text-sm text-white/80">
                <CheckCircle2 className="h-4 w-4 text-pink mr-2" />
                <span>Realistic Dialogues</span>
              </div>
              <div className="flex items-center text-sm text-white/80">
                <CheckCircle2 className="h-4 w-4 text-pink mr-2" />
                <span>Emotional Expression</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <MultiCharacterConversation />
          </div>
          
          <div className="mt-16 glass-morphism rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">How to Use AI Conversations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink/10 text-pink text-lg font-semibold mx-auto">1</div>
                <h4 className="text-center font-medium">Add Characters</h4>
                <p className="text-sm text-white/70 text-center">Add multiple characters and customize their names and voices.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink/10 text-pink text-lg font-semibold mx-auto">2</div>
                <h4 className="text-center font-medium">Create Dialog</h4>
                <p className="text-sm text-white/70 text-center">Select a character and type messages to build a conversation.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink/10 text-pink text-lg font-semibold mx-auto">3</div>
                <h4 className="text-center font-medium">Hear the Voices</h4>
                <p className="text-sm text-white/70 text-center">Each message is spoken with the character's unique voice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Conversation;

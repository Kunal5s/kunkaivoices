
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MultiCharacterConversation from "@/components/MultiCharacterConversation";

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
            <p className="text-white/70 max-w-2xl mx-auto">
              Create dynamic conversations between multiple AI voices with different personalities and emotions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <MultiCharacterConversation />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Conversation;


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="bg-noise absolute inset-0 z-0 opacity-30"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink/5 blur-[150px] opacity-60 z-0"></div>
      
      <Navbar />
      
      <div className="container px-4 py-20 relative z-10">
        <div className="glass-morphism rounded-xl p-8 md:p-12 max-w-4xl mx-auto animate-smooth-appear">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">About VocalAI</h1>
          
          <div className="space-y-6 text-white/80">
            <p>
              VocalAI is a cutting-edge artificial intelligence platform specializing in voice technology. Founded in 2022, our mission is to democratize access to high-quality AI voice generation tools for content creators, developers, businesses, and individuals worldwide.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
            <p>
              We envision a world where anyone can create human-like, emotional, and engaging audio content without technical barriers. Our technology bridges the gap between written text and natural speech, enabling new forms of communication, accessibility, and creative expression.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Technology</h2>
            <p>
              At the core of VocalAI is our proprietary neural network architecture, trained on thousands of hours of human speech across multiple languages and accents. Our models can generate studio-quality voiceovers with precise emotional control, accent variation, and seamless language switching.
            </p>
            <p>
              We support 50+ languages and offer 40+ premium voices, with continuous additions to our voice library. Our advanced customization features allow for detailed control over pitch, speed, emotion, and other voice characteristics.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Innovation:</span> We continuously push the boundaries of AI voice technology</li>
              <li><span className="font-medium">Accessibility:</span> We make advanced voice tools available to everyone</li>
              <li><span className="font-medium">Ethics:</span> We promote responsible use of voice technology</li>
              <li><span className="font-medium">Privacy:</span> We prioritize user data protection and security</li>
              <li><span className="font-medium">Quality:</span> We maintain the highest standards in voice generation</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
            <p>
              Our diverse team combines expertise in machine learning, audio engineering, linguistics, and user experience design. With backgrounds spanning from academic research to industry application, our specialists collaborate to create the most advanced voice technology available today.
            </p>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="italic">
                Join us in shaping the future of AI voice technology. Together, we're building a world where every voice can be heard.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;

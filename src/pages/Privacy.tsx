
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="bg-noise absolute inset-0 z-0 opacity-30"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink/5 blur-[150px] opacity-60 z-0"></div>
      
      <Navbar />
      
      <div className="container px-4 py-20 relative z-10">
        <div className="glass-morphism rounded-xl p-8 md:p-12 max-w-4xl mx-auto animate-smooth-appear">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-white/80">
            <p className="italic">Last updated: June 15, 2024</p>
            
            <p>
              At VocalAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI voice generation services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (name, email, password)</li>
              <li>Billing information</li>
              <li>User content (text inputs for voice generation)</li>
              <li>Voice recordings (when using voice cloning features)</li>
              <li>Communication preferences</li>
              <li>Feedback and support requests</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Train and improve our AI models (always anonymized)</li>
              <li>Respond to comments, questions, and requests</li>
              <li>Send technical notices, updates, and security alerts</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention and Security</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing of your personal information</li>
              <li>Data portability</li>
              <li>Objection to processing of your personal information</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="font-medium mt-2">
              privacy@vocalai.com<br />
              VocalAI Inc.<br />
              123 AI Boulevard<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;

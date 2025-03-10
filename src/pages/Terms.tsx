
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="bg-noise absolute inset-0 z-0 opacity-30"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink/5 blur-[150px] opacity-60 z-0"></div>
      
      <Navbar />
      
      <div className="container px-4 py-20 relative z-10">
        <div className="glass-morphism rounded-xl p-8 md:p-12 max-w-4xl mx-auto animate-smooth-appear">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Terms of Service</h1>
          
          <div className="space-y-6 text-white/80">
            <p className="italic">Last updated: June 15, 2024</p>
            
            <p>
              Welcome to VocalAI. These Terms of Service ("Terms") govern your access to and use of our website, products, and services. By using VocalAI, you agree to be bound by these Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Using VocalAI</h2>
            <p>
              You may use our services only as permitted by these Terms and any applicable laws. You may not use our services to engage in or promote illegal activities or to infringe on others' intellectual property rights.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Your Account</h2>
            <p>
              You are responsible for maintaining the security of your account and password. VocalAI cannot and will not be liable for any loss or damage resulting from your failure to comply with this security obligation.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Content and Ownership</h2>
            <p>
              You retain all rights to your content. By submitting content to VocalAI, you grant us a worldwide, non-exclusive, royalty-free license to use, store, display, reproduce, modify, create derivative works, and distribute your content solely for the purpose of providing and improving our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Responsible Use of AI Voices</h2>
            <p>
              You agree to use our AI voice generation technology responsibly. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Not creating content that impersonates individuals without their consent</li>
              <li>Not generating content that is deceptive, fraudulent, or misleading</li>
              <li>Not creating content that promotes hate speech, discrimination, or violence</li>
              <li>Not using generated voices for scams or other illegal activities</li>
              <li>Properly disclosing when AI-generated voices are used in public content</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Payment Terms</h2>
            <p>
              Some of our services require payment. By choosing a paid plan, you agree to pay the fees in accordance with the pricing terms. All fees are exclusive of taxes, which may be added to the fee. Subscription fees are non-refundable except as required by law.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
            <p>
              We may terminate or suspend your access to all or any part of our services at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate your account, you may simply discontinue using our services or contact us for account deletion.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
            <p>
              In no event will VocalAI, its suppliers, or licensors be liable for any indirect, special, incidental, consequential, exemplary, or punitive damages arising from or relating to your use of or inability to use our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting a notice on our website or sending you an email. Your continued use of our services after any change constitutes your acceptance of the new Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="font-medium mt-2">
              legal@vocalai.com<br />
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

export default Terms;

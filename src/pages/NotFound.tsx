
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="bg-noise absolute inset-0 z-0 opacity-30"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-pink/5 blur-[150px] opacity-60 z-0"></div>
      
      <Navbar />
      
      <div className="container px-4 py-20 flex items-center justify-center min-h-[70vh] relative z-10">
        <div className="glass-morphism rounded-xl p-8 md:p-12 max-w-2xl mx-auto text-center animate-smooth-appear">
          <h1 className="text-5xl font-bold text-gradient mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-white/70 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved. 
            Don't worry, you can return to our homepage and explore our AI voice technology.
          </p>
          <Button asChild className="bg-pink hover:bg-pink-dark transition-colors pink-glow">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;

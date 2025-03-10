
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

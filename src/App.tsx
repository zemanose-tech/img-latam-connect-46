import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Sports from "./pages/Sports";
import SportDetail from "./pages/SportDetail";
import AdultPrograms from "./pages/AdultPrograms";
import Contact from "./pages/Contact";

import Camps from "./pages/Camps";
import Boarding from "./pages/Boarding";
import Facilities from "./pages/Facilities";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/sport/:sportId" element={<SportDetail />} />
          <Route path="/adult-programs" element={<AdultPrograms />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/camps" element={<Camps />} />
          <Route path="/boarding" element={<Boarding />} />
          <Route path="/facilities" element={<Facilities />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

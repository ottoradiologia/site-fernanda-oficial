
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageRoute from "@/components/LanguageRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Clinic from "./pages/Clinic";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Vaccination from "./pages/Vaccination";
import SleepConsulting from "./pages/SleepConsulting";
import Pneumopediatrics from "./pages/Pneumopediatrics";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";

import StructuredData from "@/components/StructuredData";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <StructuredData />
        <BrowserRouter>
          <LanguageRoute>
            <Routes>
              {/* Portuguese routes (default) */}
              <Route path="/" element={<Index />} />
              <Route path="/sobre-mim" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/vacinacao" element={<Vaccination />} />
              <Route path="/consultoria-do-sono" element={<SleepConsulting />} />
              <Route path="/pneumopediatria" element={<Pneumopediatrics />} />
              <Route path="/consultorio" element={<Clinic />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/duvidas-frequentes" element={<FAQ />} />
              <Route path="/obrigado" element={<ThankYou />} />
              
              {/* English routes */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/sobre-mim" element={<About />} />
              <Route path="/en/servicos" element={<Services />} />
              <Route path="/en/vacinacao" element={<Vaccination />} />
              <Route path="/en/consultoria-do-sono" element={<SleepConsulting />} />
              <Route path="/en/pneumopediatria" element={<Pneumopediatrics />} />
              <Route path="/en/consultorio" element={<Clinic />} />
              <Route path="/en/contato" element={<Contact />} />
              <Route path="/en/duvidas-frequentes" element={<FAQ />} />
              <Route path="/en/obrigado" element={<ThankYou />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageRoute>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Clinic from "./pages/Clinic";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Vaccination from "./pages/Vaccination";
import MilCuidados from "./pages/MilCuidados";
import ConsultoriaSono from "./pages/ConsultoriaSono";
import Pneumologia from "./pages/Pneumologia";
import ConsultaPreNatal from "./pages/ConsultaPreNatal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre-mim" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/vacinacao" element={<Vaccination />} />
            <Route path="/mil-cuidados" element={<MilCuidados />} />
            <Route path="/consultoria-sono" element={<ConsultoriaSono />} />
            <Route path="/pneumologia" element={<Pneumologia />} />
            <Route path="/consulta-pre-natal" element={<ConsultaPreNatal />} />
            <Route path="/consultorio" element={<Clinic />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/duvidas-frequentes" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

// App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProcessSection from "./pages/ProcessSection";
import BookingForm from "./components/BookingForm";
import PricingAndValue from "./pages/PricingAndValue";
import { useLenis } from "@/hooks/useLenis";
import PrivacyPolicy from "./pages/PrivacyPolicy";


const queryClient = new QueryClient();

const App = () => {
  useLenis();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/the-lunchbox-way" element={<ProcessSection />} />
            <Route path="/pricing-and-value" element={<PricingAndValue />} />
            <Route path="/lets-talk" element={<BookingForm />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

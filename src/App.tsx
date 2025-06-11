import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import generated pages
import AccountsDashboard from "./pages/AccountsDashboard";
import MoveMoneyPage from "./pages/MoveMoneyPage";
import CardManagementPage from "./pages/CardManagementPage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner /> {/* For toast notifications used in MoveMoneyPage */}
      <BrowserRouter>
        <Routes>
          {/* Default route to AccountsDashboard */}
          <Route path="/" element={<AccountsDashboard />} />
          
          {/* Application Routes */}
          <Route path="/accounts-dashboard" element={<AccountsDashboard />} />
          <Route path="/move-money" element={<MoveMoneyPage />} />
          <Route path="/card-management" element={<CardManagementPage />} />
          
          {/* Placeholder for a login page route - can be implemented later */}
          {/* <Route path="/login" element={<LoginPage />} /> */}

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} /> {/* Always Include This Line As It Is. */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
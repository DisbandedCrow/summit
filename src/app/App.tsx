import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { FAQPage } from "./pages/FAQPage";
import { ProductPage } from "./pages/ProductPage";
import { AboutUs } from "./pages/AboutUs";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { EventPage } from "./pages/EventPage";

function AppContent() {
  const location = useLocation();
  const isEventPage = location.pathname === "/AnnaSummit2026" || location.pathname === "/event";

  return (
    <div className="min-h-screen bg-white">
      {!isEventPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/AnnaSummit2026" element={<EventPage />} />
        <Route path="/event" element={<Navigate to="/AnnaSummit2026" replace />} />
      </Routes>
      {!isEventPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
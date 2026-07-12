import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import ApartmentDetails from "./pages/ApartmentDetails";
import Gallery from "./pages/Gallery";
import Explore from "./pages/Explore";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const basePath = process.env.BASE_PATH || "/";
  const routerBaseName = basePath === "/" ? undefined : basePath.replace(/\/$/, "");

  return (
    <BrowserRouter basename={routerBaseName}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/accommodation/:id" element={<ApartmentDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;

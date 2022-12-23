import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import GoToTop from "./components/GoToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/react-gh-pages/" element={<Home />} />
        <Route path="/react-gh-pages/services" element={<Services />} />
        <Route path="/react-gh-pages/about" element={<About />} />
        <Route path="/react-gh-pages/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <GoToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

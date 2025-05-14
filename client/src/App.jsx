import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import DreamPlots from "./components/DreamPlots";
import OtoB from "./components/OtoB";
import Contact from "./components/Contact";
import Construction from "./components/Construction";
import Footer from "./components/Footer";
import LandDetailed from "./components/LandDetailed";
import LandList from "./components/LandList";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dream-plots" element={<DreamPlots />} />
        <Route path="/oto-business" element={<OtoB />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/land-details/:id" element={<LandDetailed />} />
        <Route path="/lands" element={<LandList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

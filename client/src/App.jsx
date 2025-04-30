import "./App.css";
// import CircularTextLoader from './components/CircularTextLoader';
// import MagButton from './components/MagButton';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import DreamPlots from "./components/DreamPlots";
import OtoB from "./components/OtoB";
import Contact from "./components/Contact";
import Construction from "./components/Construction";
import Footer from "./components/Footer";
import LandDetailed from "./components/LandDetailed";
import LandList from "./components/LandList";

function App() {
  return (
    <>
      {/*   
  <CircularTextLoader
    text="BangloreSites"
    onHover="speedUp"
    spinDuration={20}
    className="custom-class"
  /> */}
      {/* <MagButton
  padding={10}
  disabled={false}
  magnetStrength={1}>
  <p>Pull ME</p>
  </MagButton> */}
      <NavBar />
      <Hero></Hero>
      <DreamPlots />
      <OtoB />
      <Contact />
      <Construction />
      <LandDetailed />
      <LandList />
      <Footer />
    </>
  );
}

export default App;

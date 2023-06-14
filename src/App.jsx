import "./App.css";
import About from "./Components/About/About";
import ChooseUs from "./Components/ChooseUs/ChooseUs";
import Client from "./Components/Client/Client";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Founders from "./Components/Founders/Founders";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Founders />
      <Services />
      <ChooseUs />
      <Client />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

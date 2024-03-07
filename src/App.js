import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <SocialLinks/>
      <Portfolio/>
      <Skills/>
      <Contact/>
    </div>

  );
}

export default App;

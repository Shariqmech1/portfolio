
import { Link } from 'react-scroll';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from "./components/Navbar/Navbar";
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <Link to ="/About">{<About/>}</Link>
    <Skills/>
    <Project/>
    <Contact/>
    </div>
  );
}

export default App;

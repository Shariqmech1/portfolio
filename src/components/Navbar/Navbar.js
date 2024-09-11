import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="logoh1">
          S<span>hariq</span> Q<span>ureshi</span>
        </h1>
      </div>
      <div className="listItems">
            <Link activeClass="active" to="herosection" spy={true} smooth={true} offset={-100} duration={500} className="list">Home</Link>
           
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}  className="list">About</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500}  className="list">Skills</Link>
            <Link activeClass="active" to="project" spy={true} smooth={true} offset={-100} duration={500}   className="list">Pojects</Link>
           </div>
           <div className="btnNav">
   <button className="btn" onClick={()=>{
    const contactSection = document.getElementsByClassName("contact")[0];
    if(contactSection){
        contactSection.scrollIntoView({behavior:"smooth"})
    }
   }}>Contact me</button>
           </div>
        </div>
    )
}
import "./About.css";
import computerimage from "../../assest/computerimage.jpeg"
import resume from "../../assest/resume.pdf"
export default function About(){
     const handleDownload = () => {
        
         const link = document.createElement('a');
         link.href = URL + '/resume.pdf'; 
         link.setAttribute("download","resume.pdf")
         document.body.appendChild(link);
        link.click();
      };
    return(
        <div className="about">
 <div className="img">
    <img src={computerimage} alt="" className="about-img"/>
 </div>
 <div className="about-section">
    <div className="about-heading">
        <h1>ABOUT</h1>
    </div>
    <div className="about-heading2">
<h3>Profesional web developer </h3>
<div className="para-about">Looking forward to start my career as a FrontEnd (React) developer in a globally
respected company where i can implement my knowledge and skills acquired
while pursuing my degree in Product Engineering through a continuous
learning process.</div>
<div>
    <button className="about-btn" onClick={handleDownload} >Download CV</button>
</div>
    </div>
 </div>

        </div>
    )
}
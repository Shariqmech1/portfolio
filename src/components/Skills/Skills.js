import "./Skills.css"
import react from "../../assest/react.png"
import html from "../../assest/html.png"
import javascript from "../../assest/javascript.png"
import css from "../../assest/css.png"

export default function Skills(){
    return(
        <div className="skills">
            <div className="headingskills">
                <h1>My Skills</h1>
            </div>
            <div className="skills1">
                <div className="react">
                    <div className="reactimg">
                        <img src={react} alt="" className="reactimg2" />
                    </div>
                </div>
                <div className="html">
                    <div className="htmlimg">
                        <img src={html} alt="" className="htmlimg1"/>
                    </div>
                </div>
                <div className="tailwind">
                    <div className="tailwindimg">
                        <img src={javascript} alt="" className="tailwindimg1" />
                    </div>
                </div>
                <div>
                <div className="css">
                    <div className="cssimg">
                        <img src={css} alt="" className="cssimg1" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
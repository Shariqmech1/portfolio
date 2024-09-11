import "./HeroSection.css"

import myimage2 from "../../assest/myimage2.jpeg"
import React from 'react'

export default function HeroSection() {
  return (
    <div className="herosection">
           <div className="left">
         <div className="para">
           <p> Web Developer,</p>
         </div>
         <div className="herosectionh1">
            <h1>I'm <span>Shariq</span></h1>
         </div>
         <div className="stack">
            <h1>FrontEnd Developer</h1>
         </div>
         <div className="para2">
            <p></p>
         </div>
           </div>
           <div className="right">
          <img src={myimage2} alt="" />
           </div>
           
        </div>
    )
}
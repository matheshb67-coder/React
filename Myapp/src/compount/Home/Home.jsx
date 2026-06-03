import React from "react";
import "./Home.css";
import Mathesh from "../../assets/Mathesh.png";
import { TypeAnimation } from "react-type-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line1",{
      y:80,
      duration:1,opacity:0
    })
     tl1.from(".line2",{
      y:80,
      duration:1,opacity:0
    })
     tl1.from(".line3",{
      y:80,
      duration:1,opacity:0
    })
    gsap.from(".righthome img",{
       x:200,
      duration:1,opacity:0
    })
  })

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetials">
          <div className="line1">I'M</div>
          <div className="line2">MATHESH.B</div>
         <div className="line3">
  <TypeAnimation
   sequence={[
  "Frontend Developer", 2000,
  "Backend Developer", 2000,
  "Full Stack Developer", 2000,
  "Software Developer", 2000,
  "AI Enthusiast", 2000,
]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>
<button>Hire Me</button>
        </div>
      </div>

      <div className="righthome">
        <img src={Mathesh} alt="Mathesh" className="img"/>
      </div>
    </div>
  );
}
import React from 'react'
import "./About.css"
import mern from "../../assets/mern.jpg"
import dsa from "../../assets/dsa.jpg"
import java from "../../assets/java.webp"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import Card from "../Card/Card";
export default function About() {
useGSAP(() => {
    gsap.from(".circle", {
        x: -100,
        duration: 1,
        opacity: 0,
          stagger:1,
        scrollTrigger: {
            trigger: ".circle",
            scroll: "body",
            scrub: 2,
            start: "top 62%",
            end: "top 30%"
        }
    });
    gsap.from(".line", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger:1,
        scrollTrigger: {
            trigger: ".line",
            scroll: "body",
            scrub: 2,
            start: "top 50%",
            end: "top 30%"
        }
    });
     gsap.from(".aboutdetails h1", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger:1,
        scrollTrigger: {
            trigger: "aboutdetails h1",
            scroll: "body",
            scrub: 2,
            start: "top 50%",
            end: "top 30%"
        }
    });
     gsap.from(".aboutdetails ul ", {
        y:100,
        duration: 1,
        opacity: 0,
        stagger:1,
        scrollTrigger: {
            trigger: ".aboutdetails ul ",
            scroll: "body",
            scrub: 2,
            start: "top 60%",
            end: "top 30%"
        }
    });
        gsap.from(".rightabout", {
        y:100,
        duration: 1,
        opacity: 0,
        stagger:1,
        scrollTrigger: {
            trigger: ".rightabout",
            scroll: "body",
            scrub: 2,
            start: "top 60%",
            end: "top 30%"
        }
    });
});
  return (
    <div  id="about">
      <div className="leftabout">
       <div className="circle-line">
    <div className="circle"></div>
    <div className="line"></div>
    <div className="circle"></div>
    <div className="line"></div>
    <div className="circle"></div>
</div>
<div className="aboutdetails">
  <div className="person">
    <h1>Personal Info</h1>
    <ul>
      <li><span>Name</span> : MATHESH  </li>
         <li><span>Age</span> : 19 YEARS OLD  </li>
         <li><span>Gender</span> : MALE    </li>
         <li><span>Languag</span> : TAMIL,ENGLISH     </li>
    </ul>
  </div>
   <div className="Eduction">
    <h1>Eduction</h1>
    <ul>
      <li><span>Degree</span> : B C A </li>
         <li><span>Branch</span> : Bachelor of Computer Application </li>
         <li><span>CGPA</span> : 8.5</li>
             </ul>
  </div>
   <div className="skill">
    <h1>SKILLS</h1>
    <ul>
      <li>Mearn Stack</li>
      <li>DSA</li>
      <li>JAVA/PYTHON </li>
    </ul>
  </div>
</div>
</div>


<div className="rightabout">
 <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
 <Card title="DSA" image={dsa}/>
 <Card title="JAVA FULL STACK DEVELOPER" image={java}/>
</div>
    </div>
  )
}

import React from "react";
import Card from "../Card/Card";
import premium from "../../assets/premium.png";
import Studentmanagement from "../../assets/Student_management.png";
import AIproject from "../../assets/AI_project.png";
import Data from "../../assets/Data.png";
import "./Project.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Project() {

  useGSAP(() => {

    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#para",
        scrub: 2,
        start: "top 82%",
        end: "top 30%",
      }
    });

    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".slider",
        scrub: 2,
        start: "top 82%",
        end: "top 30%",
      }
    });

  });

  return (
    <div id="projects">
      <h1 id="para">I'm a Fresher</h1>

      <div className="slider">
        <Card title="Premium" image={premium} />
        <Card title="Student Management" image={Studentmanagement} />
        <Card title="AI" image={AIproject} />
        <Card title="Dashboard" image={Data} />
      </div>
    </div>
  );
}
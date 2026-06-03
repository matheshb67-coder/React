import React from 'react'
import "./Contact.css"
import contact from "../../assets/contact.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Contact() {
   useGSAP(() => {

    gsap.from(".leftcontact img", {
      x:-100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scrub: 2,
        start: "top 62%",
        end: "top 30%",
      }
    });
      gsap.from("form ", {
      x:100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "form",
        scrub: 2,
        start: "top 62%",
        end: "top 30%",
      }
    });
  })
  return (
<div className="contact">
    <div className="leftcontact">
        <img src={contact} alt="" />
    </div>
    <div className="rightcontact">
       <form action="https://formspree.io/f/mykvadkj" method='POST' className='form'>
         <input type="text" name='Username' placeholder='name'/>
        <input type="email" name='Email' placeholder='email' />
        <textarea name="message" id="textarea" placeholder='message me'></textarea>
        <input type="submit" name="" id="btn" value="Submit"/>


       </form>
    </div>
</div>
  )
}

export default Contact

import React from 'react'
import "./Card.css"
import mern from "../../assets/mern.jpg"

export default function card({title,image}) {
  return (
  <div className="card">
  <h1>{title}</h1>
  <div className="hover">
    <img src={image} alt="" />
  </div>
</div>
  )
}



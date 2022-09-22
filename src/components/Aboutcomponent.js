import "./Aboutcomponent.css"
import React from 'react'
import about1 from "../assets/newabout.jpg"
import {Link}  from "react-router-dom"


const Aboutcomponent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am i?</h1>
            <p>Im a student and a front end developer</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

    <div className="right">
        <div className="img-container">
            <div className="img-stack">
            <img src={about1} className="img" alt="true"></img>
            </div>
        </div>
        
    </div>
      
    </div>
  )
}

export default Aboutcomponent

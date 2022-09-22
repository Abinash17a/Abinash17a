import "./Projectcard.css"
import { NavLink } from "react-router-dom"
import React from 'react';

const Pro = (props) => {
  return (
    // <div className="projectcard">
    //   <div className="pcard-container">
        <div className="pcard">
           <img className="T-img" src={props.imgsrc} alt="Timg"></img>
           <div className="pro-name">{props.title}</div>
            <p>{props.text}</p>
            <NavLink to="/"
                className="btn pbtn">Source Code</NavLink>
          </div>
 
        /* <div className="pcard">
            <img className="D-img" src={Dimg} alt="Dimg"></img>
            <div className="pro-name">Drumkit</div>
            <p>Its a web application for playing Full set drum sounds (For Javascript practice) </p>
            <NavLink to="/"
                className="btn pbtn">Source code</NavLink>
          </div> */
    //   </div>
    // </div>
  )
}

export default Pro
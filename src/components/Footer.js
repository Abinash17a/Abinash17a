import  "./Footerstyles.css";
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
    <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
        <div>
            <p>Unlce Pg</p>
            <p>WestBengal,India</p>
        </div>
        </div>
        <div className="phone">
            <FaPhone size={20} style={{color:"#fff"}} />
        </div>
        <div>
            <p>+916296344129</p>
        </div>
        <div className="email">
            <FaMailBulk size={20} style={{color:"#fff"}} />
        </div>
        <div>
            <p>abianshchhetri.44@gamil.com</p>
        </div>
    </div>
    <div className="right">
       <h4>About</h4>
            
            <p>Its just a project now nothing aini the about section sorry for this shit</p>
            <div className="Social">
            <a href="https://www.facebook.com/abinashchhetri.chhetri/">   <FaFacebook size={25} style={{color:"#fff"}}/></a> 
                <a href="https://www.linkedin.com/in/abinash-chhetri-4b080a20b/"><FaLinkedin size={25} style={{color:"#fff"}}/></a>
                <a href="https://github.com/Abinash17a"><FaGithub size={25} style={{color:"#fff"}}/></a>

            </div>
        </div>

    </div>
</div>
  )
}

export default Footer

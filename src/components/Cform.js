import "./FormsStyles.css"

import React from 'react'

const Cforms = () => {
  return (
    <div>
        <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message here"></textarea>
        <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Cforms
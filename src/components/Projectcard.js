import "./Projectcard.css"
import Card from "./pro";
import prodata from "./prodata";
import React from 'react'

const Projectcard = () => {
  return (
    <div className="projectcard">
      <div className="heading">
        Projects
      </div>
      <div className="pcard-container">
        {prodata.map((val,ind)=>{
          return(
            <Card
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Projectcard

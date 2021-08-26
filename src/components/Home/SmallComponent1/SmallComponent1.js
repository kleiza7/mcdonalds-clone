import React from 'react'
import "./SmallComponent1.css";

const SmallComponent1 = ({img, buttonText}) => {
    return (
        <div style={{background:`url(${img})`, backgroundSize:"cover", height:"300px"}}>
            <button className="customButton">{buttonText}&nbsp;&nbsp;<b>></b></button>
        </div>
    )
}

export default SmallComponent1

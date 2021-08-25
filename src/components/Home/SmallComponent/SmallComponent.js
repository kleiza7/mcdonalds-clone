import React from 'react'
import "./SmallComponent.css";

const SmallComponent = ({img, buttonText}) => {
    return (
        <div style={{background:`url(${img})`, backgroundSize:"cover", height:"300px"}}>
            <button className="customButton">{buttonText}&nbsp;&nbsp;<b>></b></button>
        </div>
    )
}

export default SmallComponent

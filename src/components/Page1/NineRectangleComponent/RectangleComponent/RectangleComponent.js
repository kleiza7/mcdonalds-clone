import React from 'react'
import "./RectangleComponent.css";
import backgroundImage from "../../../../assets/photos/products-box-bg.jpg";
import {Container} from "reactstrap";

const RectangleComponent = ({img, text}) => {
    return (
        <Container style={{background:`url(${backgroundImage})`, backgroundSize:"cover", height:"600px"}}>
            <img id="customImg" src={img} width="100%" />
            <p id="bigText">{text}</p>
            <button id="customInfoButton">Daha Fazla Bilgi</button>
        </Container>
    )
}

export default RectangleComponent

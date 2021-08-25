import React from 'react'
import "./Page2.css";
import {Col, Row, Container} from "reactstrap";
import NineRectangleWithImageComponent from "./NineRectangleWithImageComponent/NineRectangleWithImageComponent";

const Page2 = () => {
    return (
        <div>
            <p id="customBigHeader">KAMPANYALAR</p>
            <p id="customBigText">Hem cebinize, hem damak tadınıza hitap eden lezzetler!</p>

            <Container id="buttonsContainer">
                <Row>
                    <Col className="buttonContainer" md="6"><button id="customButton1" className="customComponentButton">RESTAURANT</button></Col>
                    <Col className="buttonContainer" md="6"><button id="customButton2" className="customComponentButton">PAKET SERVİS</button></Col>
                </Row>
            </Container>

            <NineRectangleWithImageComponent />
        </div>
    )
}

export default Page2

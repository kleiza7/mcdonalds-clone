import React from "react";
import "./RectangleWithImageComponent.css";
import { Row, Col, Container } from "reactstrap";

const RectangleWithImageComponent = ({ img, text }) => {
  return (
    <Container>
      <Row id="customBackgroundRow">
        <Col md="6" id="imgContainer">
          <img src={img} width="100%" />
        </Col>
        <Col md="6">
          <p id="customComponentText">{text}</p>
          <Container id="myButtonsContainer"><button id="myButton1" className="myButton">
            DAHA FAZLA BİLGİ
          </button>
          <button id="myButton2" className="myButton">
            SİPARİŞ VER
          </button></Container>
        </Col>
      </Row>
    </Container>
  );
};

export default RectangleWithImageComponent;

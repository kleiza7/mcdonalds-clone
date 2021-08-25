import React from "react";
import "./NineRectangleComponent.css";
import RectangleComponent from "./RectangleComponent/RectangleComponent";
import image1 from "../../../assets/photos/sandviches.png";
import image2 from "../../../assets/photos/atistirmalik.png";
import image3 from "../../../assets/photos/happymeal.png";
import image4 from "../../../assets/photos/salata.png";
import image5 from "../../../assets/photos/tatlı.png";
import image6 from "../../../assets/photos/mcdcafe.png";
import image7 from "../../../assets/photos/kahvalti.png";
import image8 from "../../../assets/photos/içecekler.png";
import image9 from "../../../assets/photos/sos.png";
import { Container, Col, Row } from "reactstrap";

const NineRectangleComponent = () => {
  return (
    <Container id="myContainer1">
      <Row className="myRow">
        <Col md="4">
          <RectangleComponent img={image1} text="SANDVİÇLER" />
        </Col>
        <Col md="4">
          <RectangleComponent img={image2} text="ATIŞTIRMALIKLAR" />
        </Col>
        <Col md="4">
          <RectangleComponent img={image3} text="HAPPY MEAL" />
        </Col>
      </Row>
      <Row className="myRow">
        <Col md="4">
          <RectangleComponent img={image4} text="SALATALAR" />
        </Col>
        <Col md="4">
          <RectangleComponent img={image5} text="TATLILAR & MILKSHAKE'LER" />
        </Col>
        <Col md="4">
          <RectangleComponent img={image6} text="McD CAFE" />
        </Col>
      </Row>
      <Row className="myRow">
        <Col md="4">
          <RectangleComponent img={image7} text="KAHVALTILAR" />
        </Col>
        <Col md="4">
          <RectangleComponent img={image8} text="İÇECEKLER" />
        </Col>
        <Col md="4">
          <RectangleComponent img={image9} text="SOSLAR" />
        </Col>
      </Row>
    </Container>
  );
};

export default NineRectangleComponent;

import React from "react";
import "./NineRectangleWithImageComponent.css";
import { Col, Row, Container } from "reactstrap";
import menuImg from "../../../assets/photos/r-1.jpg";
import RectangleWithImageComponent from "./RectangleWithImageComponent/RectangleWithImageComponent";

const NineRectangleWithImageComponent = () => {
  return (
    <Container id="myContainer2">
      <Row>
        <Col md="6"><RectangleWithImageComponent img={menuImg} text="Milli Burger Menü" /></Col>
        <Col md="6"><RectangleWithImageComponent img={menuImg} text="Milli Burger Menü" /></Col>
      </Row>
      <Row>
        <Col md="6"><RectangleWithImageComponent img={menuImg} text="Milli Burger Menü" /></Col>
        <Col md="6"><RectangleWithImageComponent img={menuImg} text="Milli Burger Menü" /></Col>
      </Row>
      <Row>
        <Col md="6"><RectangleWithImageComponent img={menuImg} text="Milli Burger Menü" /></Col>
        <Col md="6"><RectangleWithImageComponent img={menuImg} text="Milli Burger Menü" /></Col>
      </Row>
      <Row>
        <Col md="6"><RectangleWithImageComponent img={menuImg} text="Milli Burger Menü" /></Col>
        <Col md="6"><RectangleWithImageComponent img={menuImg} text="Milli Burger Menü" /></Col>
      </Row>
      <Row>
        <Col md="6"><RectangleWithImageComponent img={menuImg} text="Milli Burger Menü" /></Col>
        <Col md="6"><RectangleWithImageComponent img={menuImg} text="Milli Burger Menü" /></Col>
      </Row>
    </Container>
  );
};

export default NineRectangleWithImageComponent;

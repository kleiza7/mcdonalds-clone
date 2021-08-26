import React from "react";
import "./Home.css";
import bigImage from "../../assets/photos/1.jpg";
import image1 from "../../assets/photos/4.jpg";
import image2 from "../../assets/photos/5.jpg";
import image3 from "../../assets/photos/6.jpg";
import { Container, Row, Col } from "reactstrap";
import SmallComponent1 from "./SmallComponent1/SmallComponent1";
import SmallComponent2 from "./SmallComponent2/SmallComponent2";

const Home = () => {
  return (
    <div>
      <img src={bigImage} width="100%" />

        <Container fluid>
      <Row>
        <Col md="4" className="customComponentCol">
          <SmallComponent1 img={image1} buttonText="KAMPANYALARI GÖR" />
        </Col>
        <Col md="4" className="customComponentCol">
          <SmallComponent1 img={image2} buttonText="KEŞFET" />
        </Col>
        <Col md="4" className="customComponentCol">
          <SmallComponent1 img={image3} buttonText="HEMEN İNDİR" />
        </Col>
      </Row>
      </Container>
      <SmallComponent2 />
    </div>
  );
};

export default Home;

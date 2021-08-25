import React from "react";
import "./Home.css";
import bigImage from "../../assets/photos/1.jpg";
import image1 from "../../assets/photos/4.jpg";
import image2 from "../../assets/photos/5.jpg";
import image3 from "../../assets/photos/6.jpg";
import { Container, Row, Col } from "reactstrap";
import SmallComponent from "./SmallComponent/SmallComponent";
import icon1 from "../../assets/photos/social-fb.png";
import icon2 from "../../assets/photos/social-tw.png";
import icon3 from "../../assets/photos/social-in.png";

const Home = () => {
  return (
    <div>
      <img src={bigImage} width="100%" />

        <Container fluid>
      <Row>
        <Col md="4" className="customComponentCol">
          <SmallComponent img={image1} buttonText="KAMPANYALARI GÖR" />
        </Col>
        <Col md="4" className="customComponentCol">
          <SmallComponent img={image2} buttonText="KEŞFET" />
        </Col>
        <Col md="4" className="customComponentCol">
          <SmallComponent img={image3} buttonText="HEMEN İNDİR" />
        </Col>
      </Row>
      </Container>
      <Container id="followContainer">
          <p id="bigHeader">BİZİ TAKİP EDİN</p>
      </Container>
      <Container id="followIcons">
          <Row>
              <Col md="4" className="followIconContainer">
                      <img src={icon1}/>
                      <h6>/McDonaldsTurkiye</h6>
              </Col>
              <Col md="4" className="followIconContainer">
                  <img src={icon2} />
                  <h6>@McDonaldsTR</h6>
              </Col>
              <Col md="4" className="followIconContainer">
                  <img src={icon3} />
                  <h6>@mcdonaldsturkiye</h6>
              </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Home;

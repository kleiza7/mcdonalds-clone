import React from 'react'
import "./SmallComponent2.css";
import icon1 from "../../../assets/photos/social-fb.png";
import icon2 from "../../../assets/photos/social-tw.png";
import icon3 from "../../../assets/photos/social-in.png";
import { Container, Row, Col } from "reactstrap";

const SmallComponent2 = () => {
    return (
        <Container>
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
      </Container>
    )
}

export default SmallComponent2

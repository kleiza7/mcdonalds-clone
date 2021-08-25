import React from "react";
import "./Footer.css";
import { Container, Row, Col, List, ListInlineItem } from "reactstrap";
import footerLogo from "../../assets/photos/footer-logo.png";
import footerPhone from "../../assets/photos/footer-phone.png";
import footerSocial from "../../assets/photos/footer-social.png";
import footerIcons from "../../assets/photos/footer-icons.png";
import appDownload from "../../assets/photos/app-download.png";
import download1 from "../../assets/photos/app-store.png";
import download2 from "../../assets/photos/google-play.png";

const Footer = () => {
  return (
    <Container fluid id="bigContainer">
      <Container fluid id="container1">
        <Row>
          <Col md="1">
            <img src={footerLogo} />
          </Col>
          <Col md="8" id="customFooterCol">
            <List type="inline">
              <ListInlineItem>
                <a href="#">Gizlilik ve Veri Güvenliği Politikası</a>
              </ListInlineItem>
              <ListInlineItem>
                <a href="#">Kullanım Koşulları</a>
              </ListInlineItem>
              <ListInlineItem>
                <a href="#">Bilgi Toplumu Hizmetleri</a>
              </ListInlineItem>
            </List>
            <a href="#">Bize Ulaşın</a>
            <p id="footerSmallText">
              Copyright© Anadolu Restoran İşletmeleri Ltd. Şti.
            </p>
          </Col>
          <Col md="3">
            <Col id="customCol">
              <img src={footerPhone} />
              <p id="footerCustomText">444 62 62</p>
            </Col>
          </Col>
        </Row>
      </Container>
      <Container fluid id="container2">
        <Row id="footerCustomRow">
          <Col md="4">
            <div id="footerCustomBox">
              <img src={footerSocial} />
              <p>Sosyal Medyada McDonald's</p>
            </div>
            <img src={footerIcons} id="footerIcons" />
          </Col>
          <Col md="2"></Col>
          <Col md="6">
              <Row><div id="footerCustomBox"><img src={appDownload} /><p>McDonald's Uygulamasını İndirin</p></div></Row>
            <Row><div id="customDownloadContainer"><img src={download1}/><img id="downloadImg2" src={download2}/></div></Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;

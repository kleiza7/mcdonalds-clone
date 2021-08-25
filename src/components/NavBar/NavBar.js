import React from "react";
import "./NavBar.css";
import { Row, Col, Container, List, ListInlineItem } from "reactstrap";
import logo from "../../assets/photos/logo.png";
import phoneLogo from "../../assets/photos/menu-phone.png";

const NavBar = () => {
  return (
    <Container fluid id="navContainer">
      <Row>
        <Col id="firstSection" md="8">
          <img src={logo} id="logo" />
          <List type="inline" id="customList">
            <ListInlineItem>
              <a href="/mcdonalds-lezzetleri">McDONALD'S LEZZETLERİ</a>
            </ListInlineItem>
            <ListInlineItem>
              <a href="/kampanyalar">KAMPANYALAR</a>
            </ListInlineItem>
            <ListInlineItem>
              <a href="/hakkimizda">HAKKIMIZDA</a>
            </ListInlineItem>
            <ListInlineItem>
              <a href="/mcdonalds-in-sirri">McDONALD'S'IN SIRRI</a>
            </ListInlineItem>
            <ListInlineItem>
              <a href="/restoranlar">RESTORANLAR</a>
            </ListInlineItem>
          </List>
        </Col>
        <Col id="secondSection" md="2">
          <Row id="customRow1">
            <Col>
              <img src={phoneLogo}></img>
            </Col>
            <Col>
              <p id="customText">444 62 62</p>
            </Col>
          </Row>
        </Col>
        <Col id="thirdSection" md="2">
            <Row id="customRow1">
                <Col md="5"></Col>
                <Col md="7" id="customText">SİPARİŞ VER</Col>
            </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;

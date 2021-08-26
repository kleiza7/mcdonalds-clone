import React from "react";
import "./Page3.css";
import {
  Card,
  CardBody,
  Row,
  Col,
  Container,
  CardImg,
  CardImgOverlay,
} from "reactstrap";
import bigImage1 from "../../assets/photos/h-1.jpg";
import bigImage2 from "../../assets/photos/cocuk-vakfi.jpg";
import image1 from "../../assets/photos/insan-kaynaklari.jpg";
import image2 from "../../assets/photos/franchising.jpg";
import SmallComponent2 from "../Home/SmallComponent2/SmallComponent2";

const Page3 = () => {
  return (
    <Container id="myBigContainer">
      <p id="customHeader">McDonald's Hakkında | McDonald's</p>
      <p className="customText">
        2017 Brand Z Raporu’na göre dünyanın en değerli sekizinci markası olan
      </p>
      <p className="customText">
        McDonald’s olarak, dünyanın dört bir yanında yer alan 34 bini aşkın
        restoran
      </p>
      <p className="customText">
        ve 1,6 milyonu geçen çalışanımızla, günde ortalama
      </p>
      <p className="customText">
        58 milyon müşterimizi mutlu edebilmek için çalışıyoruz. Türkiye'de de
        McDonald’s, bugün yaklaşık 260 restoranı ve
      </p>
      <p className="customText">
        6000 civarında çalışanı ile yılda 100 milyon kişiye hizmet vermektedir.
      </p>

      <Card inverse>
        <CardImg width="100%" src={bigImage1} />
        <CardImgOverlay>
          <p id="myBigHeader">TARİHÇEMİZ</p>
          <p className="myBigText">
            1954’te başladığımız serüven devam ediyor.
          </p>
          <p className="myBigText">Zaman yolculuğuna ne dersiniz?</p>
          <button id="myCustomButton1" className="myCustomButton">
            DAHA FAZLA BİLGİ
          </button>
        </CardImgOverlay>
      </Card>

      <Card id="customCard" inverse>
        <CardImg width="100%" src={bigImage2} />
        <CardImgOverlay>
          <p id="myBigHeader">McDONALD'S ÇOCUK VAKFI</p>
          <p className="myBigText">
            1974’ten bu yana dünyanın dört bir yanında
          </p>
          <p className="myBigText">tedavi gören çocukların yanındayız.</p>
          <button id="myCustomButton1" className="myCustomButton">
            DAHA FAZLA BİLGİ
          </button>
        </CardImgOverlay>
      </Card>

      <Row>
        <Col md="6">
          <Card id="customCard" inverse>
            <CardImg width="100%" src={image1} />
            <CardImgOverlay>
              <CardBody id="myCardBody">
                <p id="myBigHeader">İNSAN KAYNAKLARI</p>
                <p className="myBigText">
                  McDonald’s Ailesi’nin bir parçası olmaya ne dersiniz?
                </p>
                <button id="myCustomButton2" className="myCustomButton">
                  DAHA FAZLA BİLGİ
                </button>
              </CardBody>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md="6">
          <Card id="customCard" inverse>
            <CardImg width="100%" src={image2} />
            <CardImgOverlay>
              <CardBody id="myCardBody">
                <p id="myBigHeader">FRANCHISING</p>
                <p className="myBigText">
                  McDonald’s markası altında kendi işinizin sahibi olun!
                </p>
                <button id="myCustomButton2" className="myCustomButton">
                  DAHA FAZLA BİLGİ
                </button>
              </CardBody>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>

      <h3 id="myCustomText">Bize farklı kanallar üzerinden ulaşabilirsiniz.</h3>
      <button id="myCustomButton3" className="myCustomButton">
        İLETİŞİM >
      </button>

      <hr style={{ width: "100%" }}></hr>

      <SmallComponent2 />
    </Container>
  );
};

export default Page3;

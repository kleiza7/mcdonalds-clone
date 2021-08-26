import React from "react";
import "./Page4.css";
import { Card, CardImg, CardImgOverlay, Container, Row, Col } from "reactstrap";
import image1 from "../../assets/photos/beslenme.jpg";
import image2 from "../../assets/photos/kalite.jpg";
import image3 from "../../assets/photos/şey.jpg";
import image4 from "../../assets/photos/alerjen-listesi.jpg";
import alerjen from "../../assets/photos/alerjen.pdf";

const Page4 = () => {
  return (
    <div>
      <p id="customBigHeader">Beslenme Ve Alerjen Maddeler | McDonald's</p>
      <p id="customBigText">
        Aklınızda soru işareti kalmasın. Hakkımızda merak ettiğiniz her şey
        burada!
      </p>
      <Container>
        <Row>
          <Col md="4" className="myCustomCol">
            <a href="#">
              <Card inverse>
                <CardImg className="cardImage" width="100%" src={image1} />
                <CardImgOverlay>
                  <p id="myCustomBigText">BESLENME</p>
                </CardImgOverlay>
              </Card>
            </a>
          </Col>
          <Col md="4" className="myCustomCol">
            <a href="#">
              <Card inverse>
                <CardImg className="cardImage" width="100%" src={image2} />
                <CardImgOverlay>
                  <p id="myCustomBigText">KALİTE</p>
                </CardImgOverlay>
              </Card>
            </a>
          </Col>
          <Col md="4" className="myCustomCol">
            <a href="#">
              <Card inverse>
                <CardImg className="cardImage" width="100%" src={image3} />
                <CardImgOverlay>
                  <p id="myCustomBigText">MERAK ETTİĞİNİZ HER ŞEY</p>
                </CardImgOverlay>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md="6">
            <h3 style={{ marginTop: "4rem" }}>ALERJİ VE ALERJEN NE DEMEK?</h3>
            <p className="paragraphText">
              Vücudun normalde zararlı olmayan bazı maddelere karşı aşırı
              reaksiyon göstermesidir. Vücudu<br></br>
              hastalıklara karşı koruyan bağışıklık sistemi bazı insanlarda
              zararlı olmayan bir takım<br></br>
              maddelere karşı aşırı tepki verir. Bu reaksiyonlara “Alerji”,
              alerjik reaksiyonlara yol açan<br></br>
              maddelere de “Alerjen” denir. Türk Gıda Kodeksi Etiketleme ve
              Tüketicileri Bilgilendirme<br></br>
              Yönetmeliği’nde yer alan gıda alerjilerine sebep olan maddeler
              tabloda yatay kolonda<br></br>
              belirtilmiştir. Menüde yer alan ürünlerin içerisinde olan
              alerjenler tabloda “+“ ile ifade edilmiştir.<br></br>
              Herhangi bir müşterimiz; gıda alerjisi veya gıda intoleransına
              sahip olduğunu söylüyorsa ya da<br></br>
              çölyak hastasıysa müşterimize bu dökümandan faydalanarak menü
              önerisinde bulunabilirsiniz.
            </p>

            <p className="paragraphText">
              Patates kızartması ve hash brown gibi ürünler herhangi bir alerjen
              kaynağı içermemektedir.<br></br>
              Buna karşın mutfaklarımızda alerjenlerin çapraz bulaşmasını
              önleyici ekstra bir önlem<br></br>
              bulunmamaktadır.
            </p>

            <p className="paragraphText">
              Açık mutfaklarda yoğun tempoyla çalışıldığı için tüketicilere
              alerjen içeren öğelerle çapraz<br></br>
              bulaşma riski olduğu bilgisi mutlaka verilmelidir. Konuyla ilgili
              tüketicilerden gelen farklı sorular<br></br>
              olursa Kalite Güvence Departmanı’na danışabilirsiniz.
            </p>

            <a href={alerjen}><button id="myCustomButton">ALERJEN LİSTESİ</button></a>
          </Col>
          <Col md="6">
            <img src={image4} width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page4;

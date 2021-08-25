import React from 'react'
import NineRectangleComponent from './NineRectangleComponent/NineRectangleComponent';
import "./Page1.css";
import bigImage1 from "../../assets/photos/00.jpg";
import bigImage2 from "../../assets/photos/01.jpg";
import {Container, Col} from "reactstrap";

const Page1 = () => {
    return (
        <div>
            <p id="customHeader">McDONALD'S LEZZETLERİ</p>
            <p className="customText">Size özel hazırladığımız, ağzınıza layık efsane</p>
            <p className="customText">McDonald's lezzetleri ile tanışmaya hazır mısınız?</p>

            <NineRectangleComponent />

            <Container>
            <img className="bigImage" src={bigImage1} width="100%" />
            <img id="bigImage2" className="bigImage" src={bigImage2} width="100%" />
            </Container>
        </div>
    )
}

export default Page1

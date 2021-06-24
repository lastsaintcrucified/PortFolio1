import React from "react";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from "../../assets/hero/hero.png";
//Components
import Button from "../ui-components/button/button";

const hero = () => (
  <AnimatedOnScroll animationIn="bounceInLeft" animationOut="fadeOut">
    <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Hey!!!</h1>
            <h1 className="weight800 font60">
              MERN stack savyy in on the way...
            </h1>
            <p className="font12">
              Working hard to sharpen my ability to serve accurately to the
              clients and learn interesting things along the way
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
  </AnimatedOnScroll>
  
);

export default hero;

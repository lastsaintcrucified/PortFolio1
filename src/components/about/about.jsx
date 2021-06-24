import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from "./teamBox";
import TeamInfo from "./teamInfo";
// Assets
import Person01 from "../../assets/about/person01.png";
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const about = () => (
  <AnimatedOnScroll animationIn="pulse"  animationOut="fadeOut">
    <div id="about">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <TeamBox avatar={Person01} name="MD. TOWHIDUL ISLAM BHY" job="MERN developer" />
        </Col>
        
        <Col md={12} lg={6}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
  </AnimatedOnScroll>
  
);

export default about;

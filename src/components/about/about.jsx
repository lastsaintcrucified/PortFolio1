import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from "./teamBox";
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME" />
      <p className="font12">
        I am a React savyy and also a CSE graduate from International Islamic
        University. I love to face challenges and solve them with utmost care.
        <br></br>To be dedicated in lifelong development of my soul is my motivation.
      </p>
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
);

export default about;

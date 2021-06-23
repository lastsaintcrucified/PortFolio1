import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import FacebookIcon from "../../../assets/contact/facebook.svg";
import GithubIcon from "../../../assets/contact/github.svg";
import LinkedIcon from "../../../assets/contact/linkedin.svg";


const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.facebook.com/towhhidul.islam/" target="_blank">
          <img src={FacebookIcon} alt="facebook" />
          </a>
          
        </Col>
        <Col xs={12} lg={1} className="contact__social">
        <a href="https://github.com/lastsaintcrucified" target="_blank">
          <img src={GithubIcon} alt="github" />
        </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
        <a href="https://www.linkedin.com/in/md-towhidul-islam-bhy-a6a814158/" target="_blank">
          <img src={LinkedIcon} alt="linkedin" />
        </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;

import React from "react";
// Scss
import "./projectBox.scss";

const projectBox = (props) => {
  const linkDirection = (title) =>{
    if(title === "Chat"){
      return "https://react-fb-chat.firebaseapp.com/"
    }else if(title === "Nasheed"){
      return "https://lastsaintcrucified.github.io/music-master/"
    }else if(title === "Portfolio"){
      return "https://lastsaintcrucified.github.io/portfolio/"
    }
    
    else if(title === "Furniture"){
      return "https://lastsaintcrucified.github.io/landingpage-2/"
    }else if(title === "E-shop"){
      return "https://duniya-live.herokuapp.com/"
    }else if(title === "Client Panel"){
      return "https://react-fb-clientspanel.firebaseapp.com/"
    }else{
      return ""
    }
  }
  return(
  <a href={linkDirection(props.title)}>
    <div className="portfolio__box">
    <img src={props.preview} alt="project" />
    <div className="portfolio__hover-info flex-center">
      <div className="text-center">
        <p className="font30 weight800">{props.title}</p>
        <p className="font12 weight500">{props.tag}</p>
      </div>
    </div>
  </div>
  </a>
)};

export default projectBox;

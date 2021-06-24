import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "swiper/css/swiper.css";
// Components
import PartnerBox from "./partnerBox";
// Assets
import Partner01 from "../../assets/partners/html5.svg";
import Partner02 from "../../assets/partners/css3.svg";
import Partner03 from "../../assets/partners/bootstrap.svg";
import Partner04 from "../../assets/partners/jquery.svg";
import Partner05 from "../../assets/partners/javascript.svg";
import Partner06 from "../../assets/partners/react.svg";
import Partner07 from "../../assets/partners/redux.svg";
import Partner08 from "../../assets/partners/mongodb.svg";
import Partner09 from "../../assets/partners/nodejs.svg";
import Partner10 from "../../assets/partners/nextjs.svg";

class MutipleSlidesPerView extends React.Component {
  state = {
    partners: [
      {
        preview: Partner01,
        id: "1",
      },
      {
        preview: Partner02,
        id: "2",
      },
      {
        preview: Partner03,
        id: "3",
      },
      {
        preview: Partner04,
        id: "4",
      },
      {
        preview: Partner05,
        id: "5",
      },
      {
        preview: Partner06,
        id: "6",
      },

      {
        preview: Partner07,
        id: "7",
      },
      {
        preview: Partner08,
        id: "8",
      },
      {
        preview: Partner09,
        id: "9",
      },
      {
        preview: Partner10,
        id: "10",
      },
    ],
  };

  render() {
    let partnersRender = null;

    if (this.state.partners) {
      partnersRender = this.state.partners.map((partner) => (
        <div key={partner.id}>
          <PartnerBox partner={partner.preview} />
        </div>
      ));
    }

    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    };
    return <Swiper {...params}>{partnersRender}</Swiper>;
  }
};
export default MutipleSlidesPerView;

import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "./blog.scss";
import "swiper/css/swiper.css";
// Assets
import Preview01 from "../../assets/blog/Chat.png";
import Preview02 from "../../assets/blog/shop.png";
import Preview03 from "../../assets/blog/Nasheed.png";
// Components
import Title from "../ui-components/title/title";
import BlogBox from "./blogBox";

class Blog extends React.Component {
  state = {
    // LIST ARRAY OF BLOG STORIES
    stories: [
      {
        image: Preview01,
        id: "1",
        title: "Bro Chat",
        description: "This is a chatting apps where anyone can create their own chat room",
        date: "Chatting with friends!",
      },
      {
        image: Preview02,
        id: "2",
        title: "Duniya Shop",
        description: "This is a online shop where payment can be made with stripe",
        date: "Shopping your favourite things!",
      },
      {
        image: Preview03,
        id: "3",
        title: "Favourite Nasheed",
        description: "Anyone can find their favourite nasheed here",
        date: "Full On nasheed",
      }
    ],
  };

  render() {
    // BLOG STORIES RENDER
    let storiesRender = null;
    if (this.state.stories) {
      storiesRender = this.state.stories.map((story) => (
        <div key={story.id}>
          <BlogBox article={story} />
        </div>
      ));
    }
    // OPTIONS FOR BLOG SLIDER
    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };

    return (
      <div className="blog" id="blog">
        <div className="wrapper">
          <Title title="MY WORK." />
          <p className="font12">
            These are some of my favourite projects I've built so far<br></br>There are more to come.
          </p>
          <div className="padding30">
            <Swiper {...params}>{storiesRender}</Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;

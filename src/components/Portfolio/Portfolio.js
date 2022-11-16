import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import PostBlog from "../../img/blogpost.jpg"
import ChatBot from "../../img/chatbot.jpg"
import TwitterBot from "../../img/twitterbot.jpg"
import CovidSite from "../../img/covidsite (1).jpg"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={PostBlog} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ChatBot} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CovidSite} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TwitterBot} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

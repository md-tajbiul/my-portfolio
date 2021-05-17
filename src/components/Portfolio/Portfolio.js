import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Portfolio.css';

const Portfolio = () => {

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">Portfolio</h1>
          <div className="commonBorder"></div>
        </div>
        {/* PortfolioBox */}
        <div className="">
      <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src="https://images.unsplash.com/photo-1620862498158-dc039764b452?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img"/></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1620862498158-dc039764b452?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img"/></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1620862498158-dc039764b452?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img"/></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1620862498158-dc039764b452?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img"/></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1620862498158-dc039764b452?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img"/></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1620862498158-dc039764b452?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img"/></SwiperSlide>
      </Swiper>
      {/* <div className="pBox">
        <img src="https://images.unsplash.com/photo-1620862498158-dc039764b452?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img"/>
        </div> */}

          </div>

        <div className="headerButton text-center mt-4">
          <a target="_blank" href="https://github.com/md-tajbiul" className="btn btn-outline" rel="noreferrer">
          See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

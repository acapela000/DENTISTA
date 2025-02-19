"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, EffectCards } from "swiper/modules";

export default function Carousel() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        hideOnClick: true,
      }}
      style={{
        "--swiper-pagination-color": "#F96E2A",
        "--swiper-pagination-bullet-inactive-color": "#FFB38E",
        "--swiper-pagination-bullet-horizontal-gap": "2px",
        "--swiper-pagination-bullet-inactive-opacity": "40%",
        "--swiper-pagination-bullet-width": "15px",
        "--swiper-pagination-bullet-inactive-width": "8px",
        "--swiper-pagination-bullet-height": "8px",
        "--swiper-pagination-bullet-border-radius": "25%",
        "--swiper-pagination-bottom": "-20px",
      }}
      modules={[Autoplay, Pagination, EffectCards]}
    >
      <SwiperSlide className="rounded-3xl">
        <img
          src="/nav_bar/image 7.svg"
          alt="carousel_img"
          className="rounded-3xl"
        />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl">
        <img
          src="/nav_bar/Orthodontist.svg"
          alt="carousel_img"
          className="rounded-3xl"
        />
      </SwiperSlide>
      <SwiperSlide className="rounded-3xl">
        <img
          src="/nav_bar/DentalImplant.svg"
          alt="carousel_img"
          className="rounded-3xl"
        />
      </SwiperSlide>
    </Swiper>
  );
}

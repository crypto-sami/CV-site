import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styles from "../styles/Home.module.css";
import "../styles/Home.module.css"
import a from "./images/a.jpg";
import b from "./images/b.jpg";
import c from "./images/c.jpg";
import d from "./images/d.jpg";
import e from "./images/e.jpg";

SwiperCore.use([EffectCoverflow, Pagination]);
// if you want to use array
const slide_img = [
  a.src,
  b.src,
  c.src,
  d.src,
  e.src,
];

const App = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >

        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default App;
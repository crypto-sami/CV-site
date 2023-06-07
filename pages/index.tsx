import type { NextPage } from "next";
import wave from "./images/wave.png";
import me from "./images/sami.jpeg";
import styles from "../styles/Home.module.css";
import Timeline from "./components/timeline-points";
import 'font-awesome/css/font-awesome.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../styles/Home.module.css"
import a from "./images/a.jpg";
import b from "./images/b.jpg";
import c from "./images/c.jpg";
import d from "./images/d.jpg";
import e from "./images/e.jpg";
import { Navigation } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination]);
// if you want to use array
const slide_img = [
  a.src,
  b.src,
  c.src,
  d.src,
  e.src,
];




const Home: NextPage = () => {
  const width = 250;
  return (
    <>
      <div className={styles.top_container}>
        <div>
          <h1 className={styles.introduction}>
            Hey{" "}
            <img
              src={wave.src}
              width="50px"
              height="50px"
              alt="👋"
              className={styles.wave}
            ></img>
            , I'm Sami.
          </h1>
          <h2>I'm passionate about aviation and technology</h2>
        </div>
        <div>
          <img
            className={styles.my_image}
            src={me.src}
            width={width}
            height={864 * (width / 640)}
            alt="Me"
          ></img>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.boxed}>
          <h1>About Me</h1>
          <Timeline
            Timeline={[
              <>
                <h1>Private Pilot's Licence</h1>
                <p>
                  In the Summer of 2021 i started my PPL journey, first flying solo in November 2021 at the age of 16
                </p>
              </>,
              <>
                <h1>Aircraft Photography</h1>
                <p>
                  Recently i got into aircraft photography. What primarily started as a hobby along side my flying lessons, i now regularly like to photograph and edit my pictures of different aircraft
                </p>
              </>,
              <>
                <h1>Started Programming</h1>
                <p>
                  Started Programming in late 2020, my first project being a discord bot that simulates investing in modern cryptocurrencies. Check out my GitHub {" "}
                  <a
                    href="https://github.com/crypto-sami"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                </p>
              </>,
              <>
                <h1>Lived in Australia</h1>
                <p>
                  I moved back to the UK in 2017 after 6 years living in Sydney, Australia
                </p>
              </>,
            ]}
          ></Timeline>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.contact}>
          <h1>Contact Me</h1>
          <p>
            Email{" "}
            <a href="mailto:me@sturk.au" target="_blank">
              me@sturk.au
            </a>
            , or visit my{" "} 
            <a href="/links" target="_blank">
              links
            </a>
            {" "}page.
          </p>
        </div>
        <div>
          <div className={styles.bottom_Icons}>
            <a
              className={`${styles.icons} fa fa-github`}
              href="https://github.com/crypto-sami"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className={`${styles.icons} fa fa-instagram`}
              href="https://www.instagram.com/pilot.sami05"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className={`${styles.icons} fa fa-plane`}
              href="https://www.jetphotos.com/photographer/103259"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
      <div className={styles.seperator}>
        View some of my photos below
      </div>
      <div className={styles.slideshow}>
        <Swiper
          effect={"coverflow"}
          navigation={true}
          modules={[Navigation]}
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
      <div className={styles.footer}>
        <p>
          Developed by Sami Turk, Visit my {" "} 
          <a href="https://github.com/crypto-sami" target="_blank">
            GitHub
          </a>
          {" "}to learn more
        </p>
      </div>
    </>
  );
};



export default Home;

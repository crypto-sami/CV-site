import type { NextPage } from "next";
import wave from "./images/wave.png";
import me from "./images/sami.jpeg";
import plane from "./images/plane.jpg";
import styles from "../styles/Home.module.css";
import Timeline from "./components/timeline-points";
import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';





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
          <h2>I'm passionate about aviation and software</h2>
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
                <a
                  href="https://github.com/Ugric/typechat"
                  target="_blank"
                  className={styles.source}
                >
                  Source
                </a>
              </>,
              <>
                <h1>Aircraft Photography</h1>
                <p>
                  Recently i got into aircraft photography.What primarily started as a hobby along side my flying lessons, i now regularly like to photograph and edit my pictures of different aircraft
                </p>
                <a
                  href= "https://raw.githubusercontent.com/crypto-sami/CV-site/main/pages/images/plane.jpg"
                  target="_blank"
                  className={styles.source}
                >
                  Source
                </a>
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
                <a
                  href="https://github.com/crypto-sami/Easy-Crypto-Bot"
                  target="_blank"
                  className={styles.source}
                >
                  Source
                </a>
              </>,
              <>
                <h1>Lived in Australia</h1>
                <p>
                  I moved back to the UK in 2017 after 6 years living in Sydney, Australia
                </p>
                <a
                  href="https://github.com/crypto-sami/Easy-Crypto-Bot"
                  target="_blank"
                  className={styles.source}
                >
                  Source
                </a>
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
            <a href="mailto:me@samiturk.com" target="_blank">
              me@samiturk.com
            </a>
            , or visit my{" "} 
            <a href="/about" target="_blank">
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
              href="https://www.instagram.com/planespotter.sami"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className={`${styles.icons} fa fa-twitter`}
              href="https://twitter.com/SamiTurk12"
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
        <Carousel>
          <div>
              <img src="/img5.jpg" alt="image2" />

          </div>
          <div>
              <img src="/img6.jpg" alt="image3"/>

          </div>
          <div>
              <img src="/img4.jpg" alt="image4"/>

          </div>
        </Carousel>
      </div>
      <div className={styles.footer}>
        Developed by Sami Turk
      </div>
    </>
  );
};

export default Home;

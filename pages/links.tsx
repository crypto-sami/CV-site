import type { NextPage } from "next";
import wave from "./images/wave.png";
import me from "./images/sami.jpeg";
import styles from "../styles/Home.module.css";
import Timeline from "./components/timeline-points";
import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Head from "next/head";


const Home: NextPage = () => {
  const width = 250;
  return (
    <>
      <Head>
        <title>Links - Sami Turk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={styles.top_about_container}>
        <div>
          <h1 className={styles.introduction}>Hey, I'm Sami.</h1>
          <h2>I'm passionate about aviation and technology</h2>
        </div>
      </div>
      <div className={styles.bottom_about_container}>
        <div>
          <div className={styles.bottom_about_Icons}>
            <a
              className={`${styles.icons} fa fa-instagram`}
              href="https://www.instagram.com/pilot.sami05"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className={`${styles.icons} fa fa-twitter`}
              href="https://twitter.com/SamiTurk12"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className={`${styles.icons} fa fa-github`}
              href="https://github.com/crypto-sami"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className={`${styles.icons} fa fa-youtube`}
              href="https://www.youtube.com/channel/UCX7iSRADrkmBpr95yR_eNeA"
              target="_blank"
              rel="noopener noreferrer"
            ></a>            
            <a
              className={`${styles.icons} fa fa-coffee`}
              href="https://www.buymeacoffee.com/samiturk"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className={`${styles.icons} fa fa-envelope`}
              href="mailto:me@sturk.au"
              target="_blank"
              rel="noopener noreferrer"
            ></a>            
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          Developed by Sami Turk, Click {" "} 
          <a href="/" target="_blank">
            here
          </a>
          {" "}to learn more
        </p>
      </div>
    </>
  );
};

export default Home;

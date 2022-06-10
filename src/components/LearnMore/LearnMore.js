import React from "react";
import { dummyData } from "../../DummyData";
import Styles from "./LearnMore.module.scss";

function LearnMore() {
  return (
    <div className={Styles.LearnMore_Container}>
      <div className={Styles.Content1}>
        <h2>Made For You</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pulvinar ac tortor imperdiet commodo.
        </p>
        <button>LEARN MORE</button>
        <img src={dummyData[6].variants[0].featured_image.src} alt="" />
      </div>
      <div className={Styles.Content2}>
        <img src={dummyData[7].variants[0].featured_image.src} alt="" />
        <img src={dummyData[8].variants[0].featured_image.src} alt="" />
      </div>
      <div className={Styles.Content3}>
        <div className={Styles.ImageContainer}>
          <img src={dummyData[13].variants[0].featured_image.src} alt="" />
          <h2>FIND YOUR SPARKLE.</h2>
          <p>SHOP OUR PRODUCTS {">"} </p>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;

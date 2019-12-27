import React from "react";
import Slide from "./Slide";
import styles from "./Slider.module.scss";

const Slider = () => {
  return (
    <section className={styles.wrapper}>
      <Slide
        title="Project title"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti dolore fugiat incidunt beatae cum saepe quibusdam ipsum sed illum."
      ></Slide>
    </section>
  );
};

export default Slider;

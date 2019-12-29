import React from "react";
import Slide from "./Slide";
import styles from "./Slider.module.scss";

class Slider extends React.Component {
  state = {
    repos: []
  };
  render() {
    fetch("https://api.github.com/users/pkawula/repos")
      .then(res => res.json())
      .then(res => {
        for (const data of res) {
          const { id, name, html_url, description } = data;
          this.setState({ repos: data });
        }
      });

    return (
      <section className={styles.wrapper}>
        <div className={styles.wrapperControls}>
          <span className={styles.wrapperControlsBtn}>Prev</span>
          <span className={styles.wrapperControlsBtn}>Next</span>
        </div>
        {/* <Slide
        {...title}
        {...descritpion}
        {...code}
        {...demo}
      ></Slide> */}
      </section>
    );
  }
}

export default Slider;

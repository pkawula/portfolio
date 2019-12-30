import React from "react";
import Slide from "./Slide";
import styles from "./Slider.module.scss";

class Slider extends React.Component {
  state = {
    repos: {}
  };

  componentDidMount() {
    // const api = 'https://api.github.com/users/pkawula/repos';
    // const data = async () => fetch(api);
    // const repos = await data.json();
    // await console.log(repos);

    fetch("https://api.github.com/users/pkawula/repos")
      .then(res => res.json())
      .then(res => {
        const repos = res;
        this.setState({ repos: repos });
      })
      .catch(err => console.log("Error: ", err));
  }

  render() {
    const projects = Object.entries(this.state.repos);

    return (
      <section className={styles.wrapper}>
        <div className={styles.wrapperControls}>
          <span className={styles.wrapperControlsBtn}>Prev</span>
          <span className={styles.wrapperControlsBtn}>Next</span>
        </div>
        <div
          style={{ width: `${projects.length * 100}%` }}
          className={styles.wrapperSlides}
        >
          {projects.map((project, index) => {
            const { name, html_url, description, homepage } = project[1];
            if (name && html_url && description && homepage) {
              return (
                <Slide
                  key={index}
                  title={name}
                  code={html_url}
                  description={description}
                  demo={homepage}
                ></Slide>
              );
            } else return null;
          })}
        </div>
      </section>
    );
  }
}

export default Slider;

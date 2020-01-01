import React from "react";
import Slide from "./Slide";
import styles from "./Slider.module.scss";
const api = "https://api.github.com/users/pkawula/repos";

class Slider extends React.Component {
  state = {
    repos: [],
    width: ""
  };

  async componentDidMount() {
    try {
      const data = await fetch(api);
      const repos = await data.json();
      await this.setState({ repos: repos, width: repos.length * 100 });

      if (!data.ok) {
        throw Error(data.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { repos: projects } = this.state;
    const { width } = this.state;

    console.log(projects);

    return (
      <section className={styles.wrapper}>
        <div className={styles.wrapperControls}>
          <span className={styles.wrapperControlsBtn}>Prev</span>
          <span className={styles.wrapperControlsBtn}>Next</span>
        </div>
        <div style={{ width: `${width}%` }} className={styles.wrapperSlides}>
          {projects.map((project, index) => {
            const { name, html_url, description, homepage } = project;
            return (
              <Slide
                key={index}
                title={name}
                code={html_url}
                description={description}
                demo={homepage}
              ></Slide>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Slider;

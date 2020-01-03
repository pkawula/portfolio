import React from "react";
import Slide from "./Slide";
import styles from "./Slider.module.scss";
const api = "https://api.github.com/users/pkawula/repos";

class Slider extends React.Component {
  state = {
    repos: [],
    width: "",
    current: 0
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

  prevSlide = () => {
    const { repos, current } = this.state;
    const slides = repos.length;

    if (slides > 0) {
      if (current === 0) {
        let moveSlide = -100 + 100 / slides;
        this.setState({ current: moveSlide });
      } else {
        this.setState({ current: current + 100 / slides });
      }
    }
  };

  nextSlide = () => {
    const { repos, current } = this.state;
    const slides = repos.length;

    if (slides > 0) {
      if (current > -100 + 100 / slides) {
        let moveSlide = current - 100 / slides;
        this.setState({ current: moveSlide });
      } else {
        this.setState({ current: 0 });
      }
    }
  };

  render() {
    const { repos: projects, width, current } = this.state;

    return (
      <section className={styles.wrapper}>
        <div className={styles.wrapperControls}>
          <button
            className={styles.wrapperControlsBtn}
            onClick={this.prevSlide}
          >
            Prev
          </button>
          <button
            className={styles.wrapperControlsBtn}
            onClick={this.nextSlide}
          >
            Next
          </button>
        </div>
        <div className={styles.wrapperSlides}>
          <div
            style={{ width: `${width}%`, transform: `translateX(${current}%)` }}
            className={styles.wrapperSlidesWrapper}
          >
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
        </div>
      </section>
    );
  }
}

export default Slider;

import React from "react";
import Slide from "./Slide";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Slider.module.scss";
import "./custom_styles.css";

const api = "https://api.github.com/users/pkawula/repos";

class Slider extends React.Component {
  state = {
    repos: [],
    images: []
  };

  getImages = async (owner, repo) => {
    const req = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/src/images`
    );
    const data = await req.json();

    let arrayOfImages = [];

    if (data.length) {
      await data.forEach(item => {
        if (
          item.name.split(".").pop() === "png" ||
          item.name.split(".").pop() === "jpg"
        ) {
          arrayOfImages.push(item.download_url);
        }
      });

      await this.setState(prevState => ({
        images: { ...prevState.images, [repo]: arrayOfImages }
      }));
    }
  };

  async componentDidMount() {
    try {
      const data = await fetch(api);
      const repos = await data.json();
      await this.setState({ repos: repos });

      await repos.forEach(repo => {
        const { owner, name: title } = repo;
        this.getImages(owner.login, title);
      });

      if (!data.ok) {
        throw Error(data.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { repos: projects, images } = this.state;

    return (
      <section className={styles.wrapper}>
        <div className={styles.wrapperSlides}>
          <Carousel
            transitionTime={1000}
            emulateTouch={true}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
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
                  images={images[name] ? images : []}
                ></Slide>
              );
            })}
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Slider;

import React from "react";
import Slide from "./Slide";
import styles from "./Slider.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
      await data.forEach(({ name, download_url }) => {
        if (
          name.split(".").pop() === "png" ||
          name.split(".").pop() === "jpg"
        ) {
          arrayOfImages.push(download_url);
        }
      });

      await this.setState(({ images }) => ({
        images: { ...images, [repo]: arrayOfImages }
      }));
    }
  };

  async componentDidMount() {
    try {
      const data = await fetch(api);
      const repos = await data.json();
      await this.setState({ repos });

      await repos.forEach(({ owner: { login }, name }) => {
        this.getImages(login, name);
      });
    } catch (err) {
      throw new Error(err);
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
            {projects.map(({ name, html_url, description, homepage }) =>
              <Slide
                key={name}
                title={name}
                code={html_url}
                description={description}
                demo={homepage}
                images={images[name]}
              />
            )}
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Slider;

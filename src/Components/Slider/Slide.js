import React from "react";
import styles from "./Slide.module.scss";
import GithubImage from "../../assets/images/icons/github-dark.svg";
import WebImage from "../../assets/images/icons/web.svg";
import NoImage from "../../assets/images/no_image_available.jpg";

class Slide extends React.Component {
  state = {
    currentPos: 0
  };

  prev = () => {
    const { currentPos } = this.state;
    const { images } = this.props;

    if (!images.length) return;

    const imagesCount = images.length - 1;

    if (currentPos === 0) {
      this.setState({ currentPos: -100 * imagesCount });
    } else {
      this.setState({ currentPos: currentPos + 100 });
    }
  };

  next = () => {
    const { currentPos } = this.state;
    const { images } = this.props;

    if (!images.length) return;

    const imagesCount = images.length - 1;

    if (currentPos === -100 * imagesCount) {
      this.setState({ currentPos: 0 });
    } else {
      this.setState({ currentPos: currentPos - 100 });
    }
  };

  render() {
    const { title, description, demo, code, images } = this.props;
    const { currentPos } = this.state;

    return (
      <div className={styles.slideWrapper}>
        <div className={styles.slideWrapperContainer}>
          <div className={styles.slideWrapperDescription}>
            <h3 className={styles.slideWrapperDescriptionTitle}>{title}</h3>
            <p className={styles.slideWrapperDescriptionParagraph}>
              {description}
            </p>
          </div>
          <div className={styles.slideWrapperLinks}>
            <a
              href={demo}
              rel="noreferrer noopener"
              target="_blank"
              className={
                demo
                  ? styles.slideWrapperLinksLink
                  : styles.slideWrapperLinksLinkDisabled
              }
            >
              <img
                className={styles.slideWrapperLinksLinkImg}
                src={WebImage}
                alt="Vist Page"
              />
              <span className={styles.slideWrapperLinksLinkText}>Visit</span>
            </a>
            <a
              href={code}
              rel="noreferrer noopener"
              target="_blank"
              className={styles.slideWrapperLinksLink}
            >
              <span className={styles.slideWrapperLinksLinkText}>Code</span>
              <img
                className={styles.slideWrapperLinksLinkImg}
                src={GithubImage}
                alt="View Code"
              />
            </a>
          </div>
        </div>
        <section className={styles.slideWrapperGallery}>
          <h3 className={styles.slideWrapperGalleryTitle}>Gallery</h3>
          <div className={styles.slideWrapperGalleryControls}>
            <span
              className={styles.slideWrapperGalleryControlsBtn}
              onClick={this.prev}
            >
              {"<"}
            </span>
            <span
              className={styles.slideWrapperGalleryControlsBtn}
              onClick={this.next}
            >
              {">"}
            </span>
          </div>
          <section className={styles.slideWrapperGallerySlides}>
            <div
              style={{ transform: `translateX(${currentPos}%)` }}
              className={styles.slideWrapperGallerySlidesSlide}
            >
              {Array.isArray(images) && images.length
                ?
                images.map((image, index) =>
                  <img
                    src={image}
                    alt={title}
                    title={title}
                    className={styles.slideWrapperGallerySlidesSlideImg}
                    key={index}
                  />
                )
                :
                <img
                  className={styles.slideWrapperGallerySlidesSlide}
                  src={NoImage}
                  alt="This repository has missing images"
                  title={title}
                />
              }
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Slide;

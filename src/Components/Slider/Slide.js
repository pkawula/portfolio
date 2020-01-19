import React from "react";
import styles from "./Slide.module.scss";
import GithubImage from "../../assets/images/icons/github-dark.svg";
import WebImage from "../../assets/images/icons/web.svg";

class Slide extends React.Component {
  state = {
    currentPos: 0,
    imagesCount: 0
  };

  prev = () => {
    const { currentPos, imagesCount } = this.state;
    const { images, title } = this.props;

    this.setState({ imagesCount: images[title].length - 1 });

    if (currentPos === 0) {
      this.setState({ currentPos: -100 * imagesCount });
    } else {
      this.setState({ currentPos: currentPos + 100 });
    }
  };

  next = () => {
    const { currentPos, imagesCount } = this.state;
    const { images, title } = this.props;

    this.setState({ imagesCount: images[title].length - 1 });

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
              {images[title] ? (
                images[title].map((image, index) => {
                  return (
                    <img
                      src={image}
                      alt={title}
                      className={styles.slideWrapperGallerySlidesSlideImg}
                      key={index}
                    />
                  );
                })
              ) : (
                <img
                  className={styles.slideWrapperGallerySlidesSlide}
                  src="https://via.placeholder.com/1920x1080"
                  alt="img"
                ></img>
              )}
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Slide;

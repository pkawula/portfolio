import React from "react";
import styles from "./Slide.module.scss";
import GithubImage from "../../assets/images/icons/github-dark.svg";
import WebImage from "../../assets/images/icons/web.svg";

const Slide = ({ title, description, demo, code, images }) => {
  let slidePosition = {
    current: 0
  };

  const prevSlide = () => {
    const { current } = slidePosition;

    if (current === 0) {
      slidePosition.current = 100;
      console.log(`Moved left by: ${current - 100};
Set current to ${current}`);
    }
    if (current >= 100) {
      slidePosition.current = 0;
    }
  };

  const { current } = slidePosition;

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
            onClick={prevSlide}
          >
            {"<"}
          </span>
          <span className={styles.slideWrapperGalleryControlsBtn}>{">"}</span>
        </div>
        <section className={styles.slideWrapperGallerySlides}>
          <div
            style={{ transform: `translateX(${current}%)` }}
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
};

export default Slide;

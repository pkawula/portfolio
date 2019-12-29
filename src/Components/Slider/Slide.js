import React from "react";
import styles from "./Slide.module.scss";
import GithubImage from "../../assets/images/icons/github-dark.svg";
import WebImage from "../../assets/images/icons/web.svg";

const Slide = ({ title, description, demo, code }) => {
  return (
    <section className={styles.slideWrapper}>
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
            className={styles.slideWrapperLinksLink}
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
          <span className={styles.slideWrapperGalleryControlsBtn}>{"<"}</span>
          <span className={styles.slideWrapperGalleryControlsBtn}>{">"}</span>
        </div>
        <section className={styles.slideWrapperGallerySlides}>
          <img
            className={styles.slideWrapperGallerySlidesSlide}
            src="https://via.placeholder.com/1920x1080"
            alt="img"
          ></img>
          <img
            className={styles.slideWrapperGallerySlidesSlide}
            src="https://via.placeholder.com/1920x1080"
            alt="img"
          ></img>
          <img
            className={styles.slideWrapperGallerySlidesSlide}
            src="https://via.placeholder.com/1920x1080"
            alt="img"
          ></img>
        </section>
      </section>
    </section>
  );
};

export default Slide;

import React from "react";
import styles from "./Slide.module.scss";
import GithubImage from "../../assets/images/icons/github-dark.svg";
import WebImage from "../../assets/images/icons/web.svg";

const Slide = ({ title, description }) => {
  return (
    <section className={styles.slideWrapper}>
      <div className={styles.slideWrapperControls}>
        <span className={styles.slideWrapperControlsBtn}>Prev</span>
        <span className={styles.slideWrapperControlsBtn}>Next</span>
      </div>
      <div className={styles.slideWrapperDescription}>
        <h3 className={styles.slideWrapperDescriptionTitle}>{title}</h3>
        <p className={styles.slideWrapperDescriptionParagraph}>{description}</p>
      </div>
      <div className={styles.slideWrapperLinks}>
        <button className={styles.slideWrapperLinksLink}>
          <img
            className={styles.slideWrapperLinksLinkImg}
            src={WebImage}
            alt="Vist Page"
          />
          <span className={styles.slideWrapperLinksLinkText}>Visit</span>
        </button>
        <button className={styles.slideWrapperLinksLink}>
          <img
            className={styles.slideWrapperLinksLinkImg}
            src={GithubImage}
            alt="Vist Website"
          />
          <span className={styles.slideWrapperLinksLinkText}>Code</span>
        </button>
      </div>
      <div className={styles.slideWrapperGallery}>
        <div className={styles.slideWrapperGalleryControls}>
          <span className={styles.slideWrapperGalleryControlsBtn}>
            {"<"} Prev
          </span>
          <span className={styles.slideWrapperGalleryControlsBtn}>
            Next {">"}
          </span>
        </div>
        <section className={styles.slideWrapperGallerySlides}>
          <img alt="img"></img>
          <img alt="img"></img>
          <img alt="img"></img>
        </section>
      </div>
    </section>
  );
};

export default Slide;

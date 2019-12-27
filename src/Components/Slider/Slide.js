import React from "react";
import styles from "./Slide.module.scss";

const Slide = ({ title, description }) => {
  return (
    <section className={styles.slideWrapper}>
      <div className={styles.slideWrapperControls}>
        <span className={styles.slideWrapperControlsBtn}>{"<"} Prev</span>
        <span className={styles.slideWrapperControlsBtn}>Next {">"}</span>
      </div>
      <div className={styles.slideWrapperDescription}>
        <h3 className={styles.slideWrapperDescriptionTitle}>{title}</h3>
        <p className={styles.slideWrapperDescriptionParagraph}>{description}</p>
      </div>
      <div className={styles.slideWrapperLinks}>
        <button>
          <img />
          Visit
        </button>
        <button>
          <img />
          Code
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
          <img></img>
          <img></img>
          <img></img>
        </section>
      </div>
    </section>
  );
};

export default Slide;

import React from "react";
import styles from "./List.module.scss";
import ok from "../../assets/images/icons/ok.png";
import like from "../../assets/images/icons/like.png";
import stop from "../../assets/images/icons/stop.png";

const List = ({ data, children, imgok, imglike, imgstop }) => {

  return (
    <article className={styles.wrapper}>
    <h3 className={styles.wrapperTitle}>{children}</h3>
    <ul className={styles.wrapperList}>
      {data.map((value, index) => (
        <li key={index} className={styles.wrapperListItem}>
          {imgok && <img src={ok} alt={"alt"} className={styles.wrapperListItemIcon} />}
          {imglike && <img src={like} alt={"alt"} className={styles.wrapperListItemIcon} />}
          {imgstop && <img src={stop} alt={"alt"} className={styles.wrapperListItemIcon} />}
          {value}
        </li>
      ))}
    </ul>
    </article>
  );
};

export default List;

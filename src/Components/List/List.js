import React from "react";
import styles from "./List.module.scss";
import ok from "../../assets/images/icons/ok.png";

const List = ({ data }) => {
  return (
    <ul className={styles.wrapper}>
      {data.map((value, index) => (
        <li key={index} className={styles.wrapperItem}>
          <img src={ok} alt={"alt"} className={styles.wrapperItemIcon} />
          {value}
        </li>
      ))}
    </ul>
  );
};

export default List;

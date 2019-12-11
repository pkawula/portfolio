import React from "react";
import styles from "./FormInput.module.scss";

const FormInput = ({ textarea, id, children, email }) => {
  const type = email ? "email" : "text";
  return (
    <>
      {textarea ? (
        <label className={styles.formLabel} for={id}>
          {children}
          <textarea
            className={styles.formLabelTextarea}
            id={id}
            name={id}
          ></textarea>
        </label>
      ) : (
        <label className={styles.formLabel} for={id}>
          {children}
          <input
            className={styles.formLabelInput}
            id={id}
            name={id}
            type={type}
          />
        </label>
      )}
    </>
  );
};

export default FormInput;

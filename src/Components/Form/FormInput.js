import React from "react";
import styles from "./FormInput.module.scss";

const FormInput = ({ textarea, id, children, email, checkName }) => {
  const type = email ? "email" : "text";

  return (
    <>
      {textarea ? (
        <label className={styles.formLabel} htmlFor={id}>
          <textarea
            className={styles.formLabelTextarea}
            id={id}
            name={id}
            onChange={checkName}
            required
          ></textarea>
          <span className={styles.formLabelText}>{children}</span>
        </label>
      ) : (
        <label onChange={checkName} className={styles.formLabel} htmlFor={id}>
          <input
            className={styles.formLabelInput}
            id={id}
            name={id}
            type={type}
            required
          />
          <span className={styles.formLabelText}>{children}</span>
        </label>
      )}
    </>
  );
};

export default FormInput;

import React from "react";
import styles from "./FormInput.module.scss";

const FormInput = ({ textarea, id, children, email, checkInput }) => {
  const type = email ? "email" : "text";

  return (
    <>
      {textarea ? (
        <label className={styles.formLabel} htmlFor={id}>
          <textarea
            className={styles.formLabelTextarea}
            id={id}
            name={id}
            onChange={checkInput}
            onBlur={checkInput}
            required
          />
          <span className={styles.formLabelText}>{children}</span>
        </label>
      ) : (
        <label
          onChange={checkInput}
          onBlur={checkInput}
          className={styles.formLabel}
          htmlFor={id}
        >
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

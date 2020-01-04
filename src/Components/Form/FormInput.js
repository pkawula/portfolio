import React from "react";
import styles from "./FormInput.module.scss";

const FormInput = ({
  textarea,
  id,
  children,
  email,
  checkInput,
  value,
  isErrored
}) => {
  const type = email ? "email" : "text";

  const errColor = {
    borderBottomColor: "#ff0000"
  };

  const inputErr = isErrored ? errColor : null;

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
            value={value}
            style={inputErr}
          />
          <span className={styles.formLabelText}>{children}</span>
        </label>
      ) : (
        <label className={styles.formLabel} htmlFor={id}>
          <input
            className={styles.formLabelInput}
            id={id}
            name={id}
            onChange={checkInput}
            onBlur={checkInput}
            type={type}
            required
            value={value}
            style={inputErr}
          />
          <span className={styles.formLabelText}>{children}</span>
        </label>
      )}
    </>
  );
};

export default FormInput;

import React from "react";
import styles from "./Input.module.css";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className={styles.form_control} >
      <label htmlFor={name} >
        {text}:
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={handleOnChange}
        value={value}
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
      </label>
    </div>
  );
}

export default Input;

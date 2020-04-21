import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./InputRow.module.css";

const InputRow = ({ submitFn }) => {
  return (
    <form onSubmit={submitFn} className={styles.wrapperForm}>
      <input
        className={styles.formInputName}
        type="text"
        name="product"
        placeholder="podaj produkt"
      />
      <input
        className={styles.formInputAmount}
        type="number"
        name="amount"
        placeholder="0"
      />
      <input
        className={styles.formInputUnit}
        type="text"
        name="unit"
        placeholder="jedn."
      />
      <input
        className={styles.formInputCategory}
        type="text"
        name="category"
        placeholder="podaj kategorie"
      />
      <input
        className={styles.formInputPlace}
        type="text"
        name="place"
        placeholder="podaj miejsce"
      />
      <button className={styles.formButtonAction} type="submit">
        <FontAwesomeIcon
          className={styles.wrapperHeaderIcon}
          icon={faPlusSquare}
          size="2x"
        />
      </button>
    </form>
  );
};

export default InputRow;

import React from "react";
import PropTypes from "prop-types";
import styles from "./Table.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const TableRow = ({ product, amount, unit, category, place, deleteFn }) => {
  return (
    <tr>
      <td className={styles.headRowName}>{product}</td>
      <td className={styles.headRowAmount}>{amount}</td>
      <td className={styles.headRowUnit}>{unit}</td>
      <td className={styles.headRowCategory}>{category}</td>
      <td className={styles.headRowPlace}>{place}</td>
      <td className={styles.headRowEdit}>
        <FontAwesomeIcon
          className={styles.wrapperFooterIcon}
          icon={faEdit}
          size="2x"
        />
      </td>
      <td className={styles.headRowDelete}>
        <FontAwesomeIcon
          onClick={deleteFn}
          className={styles.wrapperFooterIcon}
          icon={faTrashAlt}
          size="2x"
        />
      </td>
    </tr>
  );

  TableRow.propTypes = {
    product: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    category: PropTypes.string,
    place: PropTypes.string,
  };

  TableRow.defaultProps = {
    category: "brak",
    place: "brak",
  };
};

export default TableRow;

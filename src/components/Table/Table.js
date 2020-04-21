import React from "react";
import TableRow from "../Table/TableRow";
import styles from "./Table.module.css";
import { v4 as uuidv4 } from "uuid";

const Table = ({ product, deleteFn }) => {
  return (
    <table className={styles.wrapper}>
      <thead className={styles.head}>
        <tr className={styles.headRow}>
          <th className={styles.headRowName}>Nazwa</th>
          <th className={styles.headRowAmount}>Ilość</th>
          <th className={styles.headRowUnit}>Jednostka</th>
          <th className={styles.headRowCategory}>Kategoria</th>
          <th className={styles.headRowPlace}>Miejsce</th>
          <th className={styles.headRowEdit}>Edytuj</th>
          <th className={styles.headRowDelete}>Usuń</th>
        </tr>
      </thead>
      <tbody>
        {product.map((item) => (
          <TableRow key={uuidv4()} {...item} deleteFn={deleteFn} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

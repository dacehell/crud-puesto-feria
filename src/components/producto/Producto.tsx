import React from "react";
import styles from "../producto/productos.module.css";

interface Props {
  id: number;
  name: string;
  price: number;
}

const Producto = ({ id, name, price }: Props) => {
  return (
    <>
      <tr>
        <td className={styles.bgRow}>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    </>
  );
};

export default Producto;

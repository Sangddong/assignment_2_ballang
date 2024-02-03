import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductListItem.module.scss";

function ProductListItem({ product }) {
  return (
    <Link to={`/${product.id}`}>
      <ul className={styles.product}>
        <li>
          <img src={product.img_i} alt={product.goodsnm} />
        </li>
        <li>{product.brand.name}</li>
        <li>{product.goodsnm}</li>
        <ul>
          <li>{product.price}</li>
          <li>{product.sale_percent}%</li>
        </ul>
      </ul>
    </Link>
  );
}

export default ProductListItem;

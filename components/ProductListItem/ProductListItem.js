import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductListItem.module.scss";

function ProductListItem({ product }) {
  return (
    <div>
    <Link to={`/detail/${product.id}`} className={styles.product}>
      <ul className={styles.item}>
        <li>
          <img src={product.img_i} alt={product.goodsnm} />
        </li>
        <li>{product.brand.name}</li>
        <li>{product.goodsnm}</li>
        <ul>
          <li>{product.price}원</li>
          <li>{product.sale_percent}%</li>
        </ul>
      </ul>
    </Link>
    </div>
  );
}

export default ProductListItem;

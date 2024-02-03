import React from "react";
import ProductListItem from "../ProductListItem";
import styles from './PostList.module.scss';

function ProductList({ products }) {

  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <li key={product.goodsno}>
          <ProductListItem product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;

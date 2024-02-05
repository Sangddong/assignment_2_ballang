import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductListItem.module.scss";
import { AiFillShopping } from "react-icons/ai";
import { useAuth } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemActionCreator,
  reQuantityActionCreator,
} from "../../store/reducers/cart.reducer";

function ProductListItem({ product }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      const existingCartItem = cartItems.find((item) => item.id === product.id);

      if (existingCartItem) {
        const newQuantity = existingCartItem.quantity + 1;
        dispatch(reQuantityActionCreator(product.id, newQuantity));
      } else {
        dispatch(addItemActionCreator({ ...product, quantity: 1 }));
      }

      alert("장바구니에 담겼습니다.");
    } else {
      navigate("/sign-in");
    }
  };

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

      <button onClick={handleButtonClick}><AiFillShopping /></button>
    </div>
  );
}

export default ProductListItem;

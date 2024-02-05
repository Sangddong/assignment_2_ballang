import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemActionCreator,
  reQuantityActionCreator,
} from "../../store/reducers/cart.reducer";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);
  const [newquantities, setNewquantities] = useState({});

  const handleRemoveItem = (itemID) => {
    dispatch(removeItemActionCreator(itemID));
  };

  const handleReQuantity = (itemId, newQuantity) => {
    setNewquantities({
      ...newquantities,
      [itemId]: newQuantity,
    });
  };

  const handleSetQuantity = (itemId) => {
    const newQuantity = newquantities[itemId];
    dispatch(reQuantityActionCreator(itemId, newQuantity));
    setNewquantities((prevEditedquantities) => {
      const newQuantities = { ...prevEditedquantities };
      delete newQuantities[itemId];
      return newQuantities;
    });
    alert("수정되었습니다");
  };

  return (
    <div>
      <h2>장바구니</h2>
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.img_i} alt={item.goodsnm} />
              <div>
                <p>{item.goodsnm}</p>
                <p>{item.price}원</p>
                <input
                  type="number"
                  value={newquantities[item.id] || item.quantity}
                  onChange={(e) => handleReQuantity(item.id, e.target.value)}
                  min="1"
                />
                {newquantities[item.id] !== undefined && (
                  <button onClick={() => handleSetQuantity(item.id)}>
                    수정
                  </button>
                )}
                <button onClick={() => handleRemoveItem(item.id)}>삭제</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>장바구니가 비었습니다.</p>
      )}
    </div>
  );
}

export default CartPage;

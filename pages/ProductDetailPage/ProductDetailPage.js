import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import api from '../../api/api';
import { AiFillShopping } from "react-icons/ai";

function DetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  console.log(productId);

  useEffect(() => {
    api.products.singleProduct(productId).then((product) =>  setProduct(product));
  }, [productId]);

  return (
    <div>
        <ul>
          <li><img src={product.img_i} alt={product.goodsnm}/></li>
          <ul>
            <li>{product.brandnm}</li>
            <ul>
              <li>{product.goodsnm}</li>
              <li>발란코드[{product.goodsno}]</li>
            </ul>
            <ul>
              <li>상품 금액</li>
              <li>{product.standard_price}</li>
              <li>판매가</li>
              <li>{product.price}</li>
              <button><AiFillShopping /></button>
            </ul>
          </ul>
        </ul>
    </div>
  )
}

export default DetailPage;
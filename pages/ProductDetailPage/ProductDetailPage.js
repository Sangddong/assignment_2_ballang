import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import api from '../../api/api';

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
              <button><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcjaXK5%2FbtsEmUHaqUj%2Fwq2hfJFM2IxUfCVANazyy0%2Fimg.png" alt="장바구니"></img></button>
            </ul>
          </ul>
        </ul>
    </div>
  )
}

export default DetailPage;
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function DetailPage({product}) {
  return (
    <div>
        <Header />
        <ul>
          <li><img src={product.img_i} alt={product.goodsnm}/></li>
          <ul>
            <li>{product.brandnm}</li>
            <ul>
              <li>{product.goodsnm}</li>
              <li>{product.goodsno}</li>
            </ul>
          </ul>
        </ul>
        <Footer />
    </div>
  )
}

export default DetailPage
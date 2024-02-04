import { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import api from '../../api/api';

function Homepage() {
  const [products, setProducts] = useState({ endpoint1:[] });

  useEffect(() => {
    api.products.wholeProducts("endpoint1")
      .then((data) => {
        setProducts({ endpoint1: data }); // 상태를 올바르게 업데이트
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <ProductList products={products.endpoint1} />
    </div>
  );
}

export default Homepage;

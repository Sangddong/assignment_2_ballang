import { useEffect, useState } from 'react';
import productsAPI from '../../api/products/products.api';
import ProductList from '../../components/ProductList/ProductList';

function Homepage() {
  
  const [products, setProducts] = useState({endpoint1: []});

  useEffect(() => {
    productsAPI.products.wholeProducts("endpoint1")
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <ProductList movies={products.endpoint1} />
    </div>
  );
}

export default Homepage;

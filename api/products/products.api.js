const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const wholeProducts = async () => {
  const endpoint1 = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products`;

  const response = await fetch(endpoint1, options);
  const data = await response.json();
  return data;
};

const onlyProduct = async (productId) => {
  const endpoint2 = `https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products/${productId}`;

  const response = await fetch(endpoint2, options);
  const data = await response.json();
  return data;
};

const productsAPI = {
  wholeProducts,
  onlyProduct,
};

export default productsAPI;
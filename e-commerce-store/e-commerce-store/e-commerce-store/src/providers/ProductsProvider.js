import axios from 'axios';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';

class ProductProvider {
  static async getAllProduct(allProducts,setAllProduct) {
    axios.get(PRODUCTS_URL)
    .then((response) => {
        setAllProduct(response.data);
    })
    .catch(console.log)
  }
}

export default ProductProvider;

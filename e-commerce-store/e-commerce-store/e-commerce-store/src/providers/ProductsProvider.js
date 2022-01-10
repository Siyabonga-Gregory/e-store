import axios from 'axios';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';

class ProductProvider {
  static LoadProducts = () => {    
    axios.get(PRODUCTS_URL)
    .then((response) => {
        console.log(response);
    })
    .catch(console.log)
}

  static async getAllProduct(allProducts,setAllProduct) {
    axios.get(PRODUCTS_URL)
    .then((response) => {
        setAllProduct(response.data);
    })
    .catch(console.log)
  }
}

export default ProductProvider;

import axios from 'axios';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';

class ProductProvider {

  static async get() {
    return axios({
      mode: 'no-cors',
      method: 'GET',
      url: PRODUCTS_URL,
    })
      .then(res => res.data)
      .catch(err => err);
  }
}

export default ProductProvider;

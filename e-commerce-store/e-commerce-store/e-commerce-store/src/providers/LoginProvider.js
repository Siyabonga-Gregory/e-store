import axios from 'axios';

const LOGIN_URL = 'https://fakestoreapi.com/auth/login';

class LoginProvider {

  static async get() {
    return axios({
      mode: 'no-cors',
      method: 'POST',
      url: LOGIN_URL,
      body:JSON.stringify({
        username: "mor_2314",
        password: "83r5^_"
    })
    })
      .then(res => res.data)
      .catch(err => err);
  }
  
}

export default LoginProvider;

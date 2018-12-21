import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'http://localhost:3000/'
    // baseURL: 'http://node-js-library.herokuapp.com/'
  })
}

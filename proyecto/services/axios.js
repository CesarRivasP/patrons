const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

console.log(instance)
// implementacion del patron adaptador
const adapter = {
  get: (url) => instance.get(url),
  post: (url, body) => instance.post(url, body),
  put: (url, body) => instance.put(url, body),
  delete: (url) => instance.delete(url)
}
console.log(adapter)
//module.exports = instance;
module.exports = adapter;
// asi podemos llamar a axios sin necesidad de importarlo en este archivo
module.exports.get = (axios) = async(request, response) => {
  const { data } = await axios.get('https://jsonplaceholder.typecode.com/users');
  response.send(data);
}

module.exports.post = (axios, db, storage, auth) = async(request, response) => {
  const { data } = await axios.get('https://jsonplaceholder.typecode.com/users');
  response.send(data);
}
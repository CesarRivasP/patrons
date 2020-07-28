module.exports = (resources) => ({ axios }) => ({ //esta funcion recibe todos los servicios, es una funcion curried
  get: async(request, response) => {
    const { data } = await axios.get(`/${resources}`);

    return response.send(data);
  },
  post: async(request, response) => {
    const { data } = await axios.post(`/${resources}`, request.body);

    return response.send(data);
  },
  put: async(request, response) => {
    const { data } = await axios.put(`/${resources}/${request.params.id}`, request.body);

    return response.send(data);
  },
  delete: async(request, response) => {
    await axios.delete(`/${resources}/${request.params.id}`);

    return response.sendStatus(204);
  }
});
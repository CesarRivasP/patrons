class Api {
  constructor(){
    this.operations = function (url, opts, verb){
      switch (verb){
        case 'get':
          // return fetch
        case 'post':
          // return fetch
        default: 
          return 
      }
    };
  }
}

// Api mejorada
class Api2 {
  constructor(){
    this.get = function (url, opts){
      // return axios.get  ...
    };
    this.post = function (url, opts){
      // return axios.post  ...
    };
  }
}

// adaptador
class ApiAdapter {
  constructor(){
    const API_V2 = new Api2();

    this.operations = function (url, opts, verb){
      switch (verb){
        case 'get':
          return API_V2,get(url, opts)
        case 'post':
          return API_V2.post(url, opts)
        default: 
          return 
      }
    };
  }
}

// este patron lo que hace es usar el api de la version 1, pero por debajo llama a la version 2

// -- en el uso --

// v1
const api = new Api();
api.operations('www.google.cl', { q: 1 }, 'get');

// v2
const apiV2 = new Api2();
apiV2.get('www.google.cl', { q: 1 });

// adapter
const adapterAPI = new ApiAdapter();

adapterAPI.operations('www.google.cl', { q: 1 }, 'get');
//Capa intermedia que nos va a permitir crear recursos para poder ser guardados en una api


const Users = (() => {
  const recurse = 'https://jsonplaceholder.typicode.com/users';

  return {
    list: async() => {
      return await fetch(recurse).then((value) => value.json())
    },
    crear: async(data) => {
      return await fetch(recurse, { type: 'POST', body: JSON.stringify(data) }).then((value) => value.json())
    },
  }
})();
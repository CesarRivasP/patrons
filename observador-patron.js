const user = new User();

const init = () => {
  user.on('login', userLoggedIn);
  user.on('login', retrieveInitData);
}

const userLoggedIn = () => {
  //usuario inicio sesion
}

app.init();  //inicializacion de la aplicacion

const login = () => {
  //logica de inicio de sesion

  // ...

  // luego
  user.trigger('login');  //esto lo que va a hacer es ejecutar la funcion de userLoggedIn
}

login();

//Asi podemos establecer que la app esta escuchando al usuario
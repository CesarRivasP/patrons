const users = [
  { edad: 24, nombre: 'Cesar', apellido: 'Rivas'},
  { edad: 26, nombre: 'Maria', apellido: 'Ortiz'},
  { edad: 64, nombre: 'Maria', apellido: 'Perez'},
  { edad: 61, nombre: 'Pedro', apellido: 'Rivas'},
  { edad: 31, nombre: 'Andres', apellido: 'Rivas'},
  { edad: 1, nombre: 'Sofia', apellido: 'Bello'},
];

//Cuando compose parezca muy complicada o confusa
const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);
// la primera vez que llamemos a compose va a recibir (...fns) -> esto lo que hace es tomar todos los argumentos que le 
// llegan a componse y los transforma en un array para que sea mas facil de manejar
// la segunda vez que se llame compose, va a recibir (x), que puede ser un array o un elemento en particular, pero este va a
// ser el input principal esta funcion que se esta componiendo.
// y es equivalente a las funciones acumuladas, y f es la funcion que se esta iterando.
// Por lo que se llama a f() con las funciones acumuladas de y. Como esto no se esta ejecutando inmediatamente, va a partir
// con x

const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

const trace = (x) => (y) => console.log(x,y);

const filterUser = (func) => (data) => data.filter(func);

const head = (xs) => xs[0];

const formateo = (user) => ({ //asi se retorna un objeto
  nombreCompleto: `${user.nombre} ${user.apellido}`,
  edad: user.edad
});

const formato = (x) => `${x.nombreCompleto} tiene ${x.edad} año(s)`;

const traerPrimerInfante = pipe(
  filterUser((infante) => infante.edad < 2),
  trace('despues de filter'),
  head,
  formateo,
  formato
);

// traerPrimerInfante(users)

//Pipe y compose son equivalentes
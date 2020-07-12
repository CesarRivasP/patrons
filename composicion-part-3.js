const users = [
  { edad: 24, nombre: 'Cesar', apellido: 'Rivas'},
  { edad: 26, nombre: 'Maria', apellido: 'Ortiz'},
  { edad: 64, nombre: 'Maria', apellido: 'Perez'},
  { edad: 61, nombre: 'Pedro', apellido: 'Rivas'},
  { edad: 31, nombre: 'Andres', apellido: 'Rivas'},
  { edad: 1, nombre: 'Sofia', apellido: 'Bello'},
];


// Lo que va a hacer la primera vez que la llamemos, es recibir funciones. Va a tomar todos los argumentos que va a recibir
// compose y los va a transformar en un arreglo para que sea mas facil de manejar despues.
// La segunda vez que lo llamemos va a recibir un (x) que puede ser un arreglo o elemento. Pero va a ser el input principal
//de esta funcion que se esta componiendo
//reduceRight es para que empiece de derecha a izquiera
//y funciones acumuladas, y f la funcion que se esta iterando
const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const filterUser = (func) => (data) => data.filter(func);

const head = (xs) => xs[0];

const formateo = (user) => ({ //asi se retorna un objeto
  nombreCompleto: `${user.nombre} ${user.apellido}`,
  edad: user.edad
});

const formato = (x) => `${x.nombreCompleto} tiene ${x.edad} año(s)`;

const traerPrimerInfante = compose(
  formato,
  formateo,
  head,
  filterUser((infante) => infante.edad < 2) //empieza por aqui
);

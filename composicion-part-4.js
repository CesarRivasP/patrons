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

//Pipe y compose son equivalentes
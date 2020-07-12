const users = [
  { edad: 24, nombre: 'Cesar', apellido: 'Rivas'},
  { edad: 26, nombre: 'Maria', apellido: 'Ortiz'},
  { edad: 64, nombre: 'Maria', apellido: 'Perez'},
  { edad: 61, nombre: 'Pedro', apellido: 'Rivas'},
  { edad: 31, nombre: 'Andres', apellido: 'Rivas'},
  { edad: 1, nombre: 'Sofia', apellido: 'Bello'},
];

const head = (xs) => xs[0];

const formateo = (user) => ({ //asi se retorna un objeto
  nombreCompleto: `${user.nombre} ${user.apellido}`,
  edad: user.edad
});

const formato = (x) => `${x.nombreCompleto} tiene ${x.edad} año(s)`;

// Esto se conoce como una composicion de funciones
const traerPrimerInfante = (data) => formato(formateo(head(data.filter((infante) => infante.edad < 2))));

/* 
Cuando se toman todas estas pequeñas funcionalidades que se crearon, lo que se esta haciendo es desacoplando nuestro codigo
para que sea lo mas reutilizable posible
*/
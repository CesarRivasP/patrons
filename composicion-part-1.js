const users = [
  { edad: 24, nombre: 'Cesar', apellido: 'Rivas'},
  { edad: 26, nombre: 'Maria', apellido: 'Ortiz'},
  { edad: 64, nombre: 'Maria', apellido: 'Perez'},
  { edad: 61, nombre: 'Pedro', apellido: 'Rivas'},
  { edad: 31, nombre: 'Andres', apellido: 'Rivas'},
  { edad: 1, nombre: 'Sofia', apellido: 'Bello'},
];

const traerPrimerInfante = (data) => {
  const infantes = data.filter((infante) => infante.edad < 2);
  const primerInfante = infantes[0];
  const infante = {
    nombreCompleto: `${primerInfante.nombre} ${primerInfante.apellido}`,
    edad: primerInfante.edad
  };

  return `${infante.nombreCompleto} tiene ${infante.edad} año(s)`;
}
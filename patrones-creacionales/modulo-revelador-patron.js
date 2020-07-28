// Esta compuesto por un ifi?
const result = (() => {
  const x = {}; //constantes privadas

  return { //se retorna lo que nosotros queremos que sea accesible por el desarrollador
    a: () => console.log(x),
    b: (key, value) => x[key] = value
  }
})();

result.a();
result.b('queso','cabra');
result.a();
console.log(result.x); // no se puede acceder a x

// asi se tiene una api publica y una privada
// la api privada solos los metodos van a poder acceder a modificarlos
// la api publica vamos a poder utilizarla para poder modificar la api privada
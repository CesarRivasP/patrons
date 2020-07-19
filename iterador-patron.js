function* interador(coleccion){
  var nextIndex = 0;

  while(nextIndex < coleccion.length){
    yield coleccion[nextIndex++]; //acceder al siguiente elemento de esta coleccion
  }
}

const x = [1,2,3,4,5,6,7,8,9];
const generador = interador(x);
console.log(generador.next()); // console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next()); // { value: undefined, done: true }
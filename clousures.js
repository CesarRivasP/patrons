// Alcance lexico de las funciones
const y = 'yeye'; //global, el cual se encuentra fuera de los parentesis de la funcion

const f = () => {  //privado, el cual se encuentra dentro de los parentesis
  const x = 'lala';
  console.log(x, y);

  return () => {
    //Aqui no se puede acceder a los valores que estan fuera del alcance lexico de esta funcion
    const z = 'lololo';
    console.log(x, y, z);
  }
}

const g = () => {  //privado, el cual se encuentra dentro de los parentesis
  const a = 'lala';
  console.log(a, y);
  /* console.log(a, x); */
}

f();

// console.log(x);  va a retornar un error, porque x se encuentra definido dentro del alcance lexico de la funcion "f"
/* console.log(y); */

/* g(); */



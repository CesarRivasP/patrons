//mutabilidad: cuando un objeto puede cambiar su estrctura, se le pueden agregar o quitar propiedades, o cambiar
//inmutabilidad: cuando se crea un objeto, y a este no le cambian las propiedades y tampoco se le pueden agregar o
//quitar metodos. Es decir, cuando se crea un objeto, este se va a mantener asi.
// los beneficios de esta es que va predecir pequeños errores que van a ser dificiles de detectar cuando se este
//corriendo el codigo ya en produccion.

// -- Aplicar inmutabilidad --
// * Regla 1: hay que definir todo con const

const obj = {
  a: 1
};

// obj.b = 2; // los dos objetos cambian su valor

const obj2 = {
  ...obj, //copia del primer objeto
  //agregar mas propiedades
  c: 3
};

obj.b = 2; //solo muta el objeto principal, mas no la copia que se le saca en obj2. No usar esta manera

console.log(obj, obj2) 
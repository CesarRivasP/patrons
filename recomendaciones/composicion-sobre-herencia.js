// Herencia
class Persona {
  constructor(){
    this.nombre = 'lala'
  }

  saludar(){
    console.log(`hola, soy ${this.nombre}`)
  }
}

class Perro extends Persona {

}

// hay oportunidades en donde pierde el sentido el hecho de heredar de otras clases metodos y valores innecesarios


// -- Esto se puede evitar utilizando la composicion --

const saludar = (name) => console.log(`HOla soy ${name}`);
const despedir = () => console.log(`Adios!!`);
const dormir = () => console.log(`Zzzzzz...`);

const persona = {
  nombre: 'lala',
  saludar: function(){ saludar(this.nombre) }
};
//De esta manera estamos empezando a componer, ya que no estamos heredando de otra clase, sino que en este caso en
// particular, estamos tomando una funcion que ya esta definida, que ya tiene su comportamiento, y a nuestro objeto
// despues le agregamos ese metodo que a nosotros nos intereza

// -- tambien se puede aplicar a una clase --

class Persona {
  constructor(){
    this.nombre = 'lalala';
  }

  salute(){
    saludar(this.nombre)
  }

  dormir(){
    dormir()
  }

  despedir(){
    despedir()
  }
}
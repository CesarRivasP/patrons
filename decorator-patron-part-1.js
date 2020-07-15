// la forma mas sencilla de aplicar decoradores a una instancia es agregandole propiedades a esta misma
// Decorador mas sencillo que se puede aplicar. Se esta definiendo una funcion en otra seccion de nuestro codigo
// y finalmente se va a ir componiendo a medida que nosotros la vayamos necesitando.

class Macbook {
  constructor(){
    this.price = 1000;
    this.screen = 11.6;
  }
}

const macbook = new Macbook();

macbook.setMoreMemory = function(){
  this.price += 100;
};

macbook.setMoreMemory();

console.log(macbook.price)
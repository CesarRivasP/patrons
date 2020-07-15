// --- Otra forma de aplicar el patron decorador ----
// en lugar de definir metodos como en el ejemplo anterior, e ir asignandolos a la clase
// se van a envolver los metodos para poder obtener los precios de macbook, y se va a obtener el valor, pero este va a
// ser decorado por otra funcion que va a hacer que aumente el valor

class Macbook {
  price(){
    return 1000;
  };
}

const memory = (macbook) => {
  const value = macbook.price();
  macbook.price = function(){ //reemplazo del metodo de price que tiene la clase Macbook
    return value + 100;
  }
}

const macbook = new Macbook();

memory(macbook);

console.log(macbook.price());
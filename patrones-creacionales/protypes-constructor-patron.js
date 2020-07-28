class MyClass {
  constructor(p1, p2){
    /* this.property = 1; */
    this.property = p1;
    this.propertyTwo = p2;
  }

  method(){
    // i am method of prototypes
  }
}

const newInstance = new MyClass(4, 6);

console.log(newInstance);

// En vez de declarar el metodo en el constructor, ahora se declara afuera.
// antes se accedia al prototipo mediante newInstance.__proto__, ahora ya no hay forma de poder acceder al prototipo desde la terminal
// Solo se puede visualizar lo que contiene el prototipo en el navegador
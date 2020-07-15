let mixin = {
  saludar(){
    console.log(`Hola ${this.name}`);
  },
  despedir(){
    console.log(`Chao ${this.name}`);
  }
};

class User {
  constructor(name){
    this.name = name;
  }
}

Object.assign(User.prototype, mixin);
// asi se aumentan los prototipos de las distintas clases que se quieran definir

const user = new User('Chanchito feliz');

user.saludar();
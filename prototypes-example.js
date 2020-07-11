// La clase object la tienen todos los objetos que creemos en javascript

Object.prototype.log = function(){
  console.log(this);
}

const x = {  //esto es equivalente a hacer un "new Object" con otra sintaxus
  a: 1
};

x.log();


if(!String.prototype.trim){
  String.prototype.trim = function(){
    try {
      return this.replace(/^\s+|\s+S/g, ""); //para reemplazar los espacios en blanco al inicio y final.
    }
    catch(error){
      return this;
    }
  }
}


const y = "     LALALALA ".trim();


y.log();

// los strings tambien terminan heredando de la clase objeto
//String hereda de la clase objeto
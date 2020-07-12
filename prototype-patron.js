const perro = {
  raza: 'killterrier',
  ladrar: function(){
    console.log(`Guauuu! Soy un ${this.raza}`)
  }
}

const killtro = Object.create(perro);

killtro.ladrar();

console.log(killtro) //retorna vacio, porque las propiedades de este objeto se encuentran en el prototipo


killtro.raza = 'Super perro';

killtro.ladrar();
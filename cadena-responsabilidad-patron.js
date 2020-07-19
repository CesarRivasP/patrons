class Suma {
  constructor(v = 0){
    this.value = v;
  }

  suma(v){
    this.value += v;

    return this;
  } 
}

const valor = new Suma(1);

console.log(
  valor
    .suma(1)
    .suma(2)
    .suma(3)
    .suma(4)
    .value
);
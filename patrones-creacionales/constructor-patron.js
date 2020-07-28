
// ECMAS 6
class MyClass {
  constructor(p1, p2){
    /* this.property = 1; */
    this.property = p1;
    this.propertyTwo = p2;
    this.method = () => {
      // i am method
    }
  }
}

const newInstance = new MyClass(4, 6);

console.log(newInstance);


// ECMAS 5

/* function MyClass(){
  this.property = 1;
  this.method = () => {
    // i am method
  }
}

const newInstance = new MyClass();
console.log(newInstance); */
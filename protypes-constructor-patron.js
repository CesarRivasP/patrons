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

// antes se accedia al prototipo mediante newInstance.__proto__
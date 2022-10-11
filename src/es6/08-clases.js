//CLASES

//ES6
class user {
  //creando metodos para la clase
  greeting() {
    return "Hello";
  }

  //constructor
  constructor() {
    console.log("Nuevo Usuario");
  }
}
const pipe = new user(); // instancia de la clase creada
console.log(pipe.greeting());

// EJEMPLO CON THIS

class miClase {
  constructor(name) {
    this.name = name;
  }

  //metodos

  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name} have a nice day`;
  }
}

let felipe = new miClase("Felipe");

console.log(felipe.greeting());

// SETTERS AND GETTERS

class ejemplo {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  speak() {
    return "Hello";
  }

  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }

  set uAge(nuevaEdad) {
    this.age = nuevaEdad;
  }
}

let matias = new ejemplo("Matias", 1);
console.log(matias.uAge);
console.log((matias.uAge = 2)); // set funciona con la asignacion = es decir que matias.uAge(2) no va a funcionar

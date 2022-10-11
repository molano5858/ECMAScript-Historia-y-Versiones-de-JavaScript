// DESESTRUCTURACION
// Existen dos formas o sintaxis para usar la desestructuracion , CON OBJETOS Y CON ARRAYS

// DESESTRUCTURACION CON ARRYAS

let fruits = ["Apple", "Banano"];
let [a, b] = fruits;
console.log(a, b);

// DESESTRUCTURACION CON OBJETOS

let miObjeto = {
  nombre: "Felipe",
  age: 31,
};

let { age, nombre } = miObjeto; // funciona e desorden, obviamente porque tienen que ser los mismos keys del objeto, si no no funciona
console.log(nombre, age, "hola");

// PROMISE ANY
// le debemos pasar un arreglo con las promesas y va a capturar la primera promesa que sea satisfactoria, es decir que no va a tener en cuenta las que esten en reject, seria la primera que es la resolve

const promise1 = new Promise((resolve, reject) => reject("Se ejecuto Reject"));
const promise2 = new Promise((resolve, reject) =>
  resolve("Se ejecuto Resolve promesa 2")
);
const promise3 = new Promise((resolve, reject) =>
  resolve("Se ejecuto Resolve promesa 3")
);

console.log(promise1);
console.log(promise2);
console.log(promise3);

Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log('Ejemplo ANY '+response)
);

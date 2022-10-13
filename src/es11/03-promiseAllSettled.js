// PROMISE ALL SETTLED
// sirve para devolver el estado de promesas, es decir saber si un grupo de promesas se cumplieron y muestra el estado de si se cumplieron o no

// se le tiene que pasar un arreglo con las promesas que queremos verificar o mostrar

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

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

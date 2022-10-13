// FINALLY PROMISE
//mostrar una funcion anonima con arrow function para mostrar algo cuando nustra promesa ya termino, por ejemplo mostrar un mensaje o ejecutar alguna accion.

// en resumen sea lo que sea que ejecute, si el resolve o el reject, fanally se va a ejecutar.

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("RESOLVE");
    } else {
      reject("REJECT");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));

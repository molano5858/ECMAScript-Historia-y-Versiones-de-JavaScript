const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true // if de forma ternaria entonces seria, comparacion ? bloque de codigo si es verdadero : bloque si es falso
      ? setTimeout(() => resolve("ASYNC"), 2000)
      : reject(new Error("Error"));
  });
};

const anotherFunction = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("Hello");
};

console.log("Before"); // se muestra primero a pesar de que esta escrita mucho despues en el codigo
anotherFunction(); // es lo ultimo que se va a mostrar porque esta esperando a que se ejecute la fnAsync
console.log("After"); // se muestra despues del before pero antes que la ejecucion de another

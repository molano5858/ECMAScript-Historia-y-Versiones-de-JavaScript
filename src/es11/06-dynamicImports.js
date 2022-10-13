// DYNAMIC IMPORTS
// nos da la facilidad de ir importando a medida que pasa algo, esto para hacer mas rapida la pagina. Es decir yo puedo ir cargando cierto codigo en la medida que el usuario haga algo. Pero solamente en ese punto, esto es mucho mejor que tener que cargar absolutamente todo el codigo o los codigos (si es que los tiene) desde el principio.

// const button = document.getElementById("btn");
// button.addEventListener("click", async function () {
//   const module = await import("./moduleForDynamicImports");
//   console.log(module);
//   module.hello();
// });

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
  const module = await import("./moduleForDynamicImports.js");
  console.log(module);
  module.hello();
});

// TRY CATCH

// Anteriormente,
try {
  hello();
} catch (error) {
  console.log(error); // entra aqui porque la funcion hello() no existe'
} // en esta opcion se muestran mas detalles

//es10, ya no se pasa como parametro el error, osea se hace como personalizado, pero ojo que no muestra tanta informacion como si se hiciera de la anterior forma

try {
  hello2();
} catch {
  console.log("Esto es un error porque la funcion hello2() no existe");
}

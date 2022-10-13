// FROM ENTRIES
// inicialmente tenemos en entries devuelve un arreglo de arrglos apartir de un array
let miObjeto = {
  name: "Felipe",
  apellido: "Molano",
  edad: 31,
};
let ejemploentries = Object.entries(miObjeto);

// fromEntries entonces convierte de un array de arrays a un objeto.
const fromEntries = Object.fromEntries(ejemploentries); // este quedaria igualito a miObjeto

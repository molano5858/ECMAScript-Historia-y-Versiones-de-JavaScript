// FLAT MAP
// recorre y "aplana" al mismo tiempo

const array = [1, 2, 3, 4, 5];
const flatMap = array.flatMap((parametro) => [parametro, parametro * 2]); // notese que estoy devolviendo un arreglo, pero en el console de aqui abajo me muestra un arreglo ya aplanado.
console.log(flatMap);

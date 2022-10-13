//NULLISH ??
// simbolo de doble pregunta ??
// preguntamos si el valor es null entonces hacemos algo
const anotherNumber = 1;
const nullExample = null;
const validate = anotherNumber ?? 5;
const validate2 = nullExample ?? 5; // en este caso estamos preguntando si el valor  es null entonces asignele el valor de 5

console.log(validate);
console.log(validate2);

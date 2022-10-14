// REPLACE ALL
// .replace('El texto que quiero reemplazar', 'el nuevo texto que quiero poner')
const string =
  "Javascript es un maravilloso lenguaje de programacion Javascript";
const replacedString = string.replace("Javascript", "Typescript");
const replacedStringAll = string.replaceAll("Javascript", "Typescript"); // solo me sirvio en el navegador y no aqui

console.log(replacedString);
console.log(replacedStringAll);

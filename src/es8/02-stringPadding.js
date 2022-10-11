// PADDING :
//padStart(numero de caracteres totales que quiero que tenga el string,'lo que quiero rellenar')
// ****** si el string tiene por ejemplo 5 y yo le pongo 5 pues no va a hacer nada, si tiene 5 y le pongo 7 va a hacer que el string mida los 7 con lo que yo le pude en el segundo parametro

const miVariable = "Hello"; // tiene 5 caracteres

console.log(miVariable.padStart(7, "abc")); // le digo que quede de 7 osea que solo va a cojer las dos primeras
console.log(miVariable.padEnd(8, "abcd")); // le digo que quede de 8 osea que solo va a cojer 3 de las 4 letras.

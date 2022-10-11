// trailing commas
// respeta la existencia de elemento de un array que esten vacios osea que solo pusimos la coma
const array = [24, 34, 25, 24]; // tiene 4 elementos
const array2 = [24, 34, 25, 24, , ,]; // tiene 6 elementos porque respeta los creados con las comas asi esten vacios.
console.log(array);
console.log(array.length);
console.log(array2.length);

//spread operator
let person = { name: "Felipe", age: 31 };
let country = "Colombia";

let personaCompleto = { id: 1234, ...person, country };
console.log(personaCompleto);

//rest parameter
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 2, 3, 4);

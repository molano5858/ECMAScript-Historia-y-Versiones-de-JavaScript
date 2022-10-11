//ARROW FUNCTIONS

// DOCUMENTACIN : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Funcion antes de ES6

function square(num) {
  return num * num;
}

// Arrow Function
const square = (num) => {
  return num * num;
};

const square2 = (num) => num * num; // si solo queremos retornar algo podemos hacerlos asi, sin llaves, sin parentesis y sin la palabra return

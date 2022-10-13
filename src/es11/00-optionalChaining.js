// OPTIONAL CHAINING (objetos dentro de objetos)
// es agregar un signo de pregunta ? para acceder a algun elemento y que no nos arroje un error, es decir.
// si yo intento ingresar a un elemento que no existe me va a arrojar un error, pero si trato de ingresar con un signo de pregunta me va a arrojar un undefined pero no me va a romper el codigo
const users = {
  felipe: {
    country: "Colombia",
  },
  paola: {
    country: "Tutulandia",
  },
};

console.log(users.felipe.country); // puedo acceder sin problema
console.log(users.matias); // aqui me muestra undefined, optional chain es para tratar de acceder al objeto del objeto
console.log(users?.matias?.age); // aqui no me arroja el error
console.log(users.matias.age); // matias no esta definido y age tampoco si no uso el optional chain esto me arroja un error

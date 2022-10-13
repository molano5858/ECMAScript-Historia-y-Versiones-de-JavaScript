// con REGEX es una forma en la que podemos generar diferentes filtros o diferentes reglas que nos van a permitir filtar buscar. con REGEX podemos validar si una contraseña cumple con algun objetivo, digamos que X caracteres mayuscula miniscula etc . Tambien podemos validar si un input si tenemos un correo electronico valido es decir n caracteres+@+n caracteres + dominio.

const regex = /\b(Apple)+\b/g;

const fruit = "Apple, banana kiwi, Apple, orange, etc etc";

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}

// OBJECT LITERALS
// Si la informacion que se recibe tiene el mismo nombre, podemos pasarlo sin ningun prolema, ejemplo:
// en ves de hacer name: name, podemos solo dejar name y funciona.
//ANTERIORMENTE
function newUser(user, age, country) {
  return {
    user: user,
    age: age,
    country: country,
  };
}
console.log(newUser("Felipe", 31, "Colombia"));
// nuevo
function newUser2(user, age, country, userID) {
  return {
    user,
    age,
    country,
    id: userID, // este es un ejemplo de cuando el nombre del parametro es diferente al key que queremos, en este caso si se tiene que escribir todo
  };
}
console.log(newUser2("Felipe2", 32, "Colombia2",12345));

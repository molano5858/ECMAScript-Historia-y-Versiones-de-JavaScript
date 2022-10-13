// SPREAD OPERATOR, ahora en es9 nos permite con objetos
// el spread son los tres puntos ...

const user = {
  username: "Felipe",
  age: 31,
  country: "Colombia",
};

const { username, ...values } = user;
console.log(username); // muestra 'Felipe'
console.log(values); // muestra un objeto con age y country

const user2 = {
  username2: "Matias",
  age2: 1,
  country2: "Colombia",
};

const { username2, ...values2 } = user2;
console.log(username2);
console.log(values2.age2); //accedo al valor de age2 osea 1

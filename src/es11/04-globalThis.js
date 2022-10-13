// GLOBAL THIS
// lo que pasa es que elementos globales como window se pueden ejecutar en el navegador pero no aqui en la terminal (del lado de node)
// es decir si en el navegador colocamos en consola window este existe.
// pero si colocamos window aqui en la terminar arroja error

console.log(window); // en el navegador arroja lo que ya sabes que es window
console.log(window); // en la terminal arroja error porque estoy del lado de node

// entonces GLOBAL THIS

console.log(window); // navegador
console.log(global); //node
console.log(globalThis); // funciona en navegador y en node

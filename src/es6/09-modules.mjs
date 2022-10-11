import hello from "./export-module.mjs"// ojo aqui colocarle la extension para que funcione

// ir al archivo package.json y escribir al final del archivo
// "type": 'module',
// o en vez de hacer esto podemos ponerle extension .mjs a ambos archivos y listo

hello();

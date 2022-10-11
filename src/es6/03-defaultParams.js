// PAREMTROS POR DEFECTO

// antes de ES6

function newUser(name, age, country) {
  var name = name || "Felipe"; // name es igual al parametro name OR (por defecto) que sea Felipe
  var age = age || "Molano";
  var country = country || "Colombia";

  console.log(`${name} tiene ${age} años y es de ${country}`);
}

newUser();
newUser("Matias", "El mas hermoso", "Tutulandia");

// ES6 parametros por defecto

function newUser2(name = "Felipe", age = "31", country = "Finlandia") {
  console.log(name, age, country);
}

newUser2();
newUser2("Matias", "El mas hermoso", "Tutulandia");

const fruits = () => {
  if (true) {
    var fruit1 = "Apple"; // function scope
    let fruit2 = "Banana"; // block scope
    const fruit3 = "Kiwi"; // block scope
  }
  console.log(fruit1); // funciona
  console.log(fruit2); // no funciona
  console.log(fruit3); // no funciona
};

fruits();

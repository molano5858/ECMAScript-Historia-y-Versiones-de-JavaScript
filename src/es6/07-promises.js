// PROMISES

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      console.log("RESOLVE");
    } else {
      console.log("REJECT");
    }
  });
};

anotherFunction()
  .then((response) => console.log(resolve))
  .catch((err) => console.log(reject));

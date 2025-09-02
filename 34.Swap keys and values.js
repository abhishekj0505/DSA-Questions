const swapKeysAndValues = (obj) => {
  const swapped = {};

  for (let key in obj) {
    const value = obj[key];
    swapped[value] = key;
  }

  return swapped;
};


const input = {
  a: "one",
  b: "two",
  c: "three"
};


const output = swapKeysAndValues(input);



console.log(output);

const removeFalsy = (obj) => {
  const result = {};

  for (let key in obj) {
    if (obj[key]) {
      result[key] = obj[key];
    }
  }

  return result;
};

const input = {
  name: "Abhishek",
  age: 0,
  email: "",
  isActive: false,
  city: "Jabalpur",
  phone: undefined
};

console.log(removeFalsy(input));

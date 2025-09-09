function unflatten(obj) {
  const result = {};

  for (const key in obj) {
    const keys = key.split(".");
    let current = result;

    keys.forEach((k, i) => {
      if (i === keys.length - 1) {

        current[k] = obj[key];
      } else {

        if (!current[k] || typeof current[k] !== "object") {
          current[k] = {};
        }
        current = current[k];
      }
    });
  }

  return result;
}

// Example:
const flatObj = {
  "user.name": "Abhishek",
  "user.age": 27,
  "user.address.city": "Jabalpur"
};

console.log(unflatten(flatObj));

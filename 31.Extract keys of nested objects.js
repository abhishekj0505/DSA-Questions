const nestedObj = {
  name: "Abhishek",
  address: {
    city: "Jabalpur",
    pin: 482001,
  },
  skills: {
    frontend: ["React", "JS"],
    backend: {
      language: "Node",
      db: "MongoDB",
    }
  }
};

const getAllKeys = (obj, prefix = '') => { 
  let result = [];  

  for (let key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    result.push(fullKey);

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      result = result.concat(getAllKeys(obj[key], fullKey));
    }
  }

  return result;
};

console.log(getAllKeys(nestedObj));

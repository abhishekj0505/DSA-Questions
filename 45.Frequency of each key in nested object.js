function countKeyFrequency(obj, counts = {}) {
  for (const key in obj) {
    counts[key] = (counts[key] || 0) + 1;

    if (obj[key] !== null && typeof obj[key] === "object") {
      countKeyFrequency(obj[key], counts);
    }
  }
  return counts;
}


const obj = {
  name: "Abhi",
  details: {
    age: 27,
    address: {
      city: "Jabalpur",
      pin: 482001
    }
  },
  extra: {
    city: "Duplicate city key"
  }
};

console.log(countKeyFrequency(obj));

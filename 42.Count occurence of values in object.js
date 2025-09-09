function countValueOccurrencesDeep(obj, counts = {}) {
  for (const key in obj) {
    const value = obj[key];
    if (value !== null && typeof value === "object") {
      countValueOccurrencesDeep(value, counts);
    } else {
      counts[value] = (counts[value] || 0) + 1;
    }
  }
  return counts;
}


const nestedObj = {
  a: 1,
  b: { x: 2, y: 1 },
  c: { z: 2, w: { k: 1 } }
};

console.log(countValueOccurrencesDeep(nestedObj));
// { '1': 3, '2': 2 }

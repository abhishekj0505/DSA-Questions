function deepEqual(obj1, obj2) {

  if (obj1 === obj2) return true;


  if (obj1 === null || typeof obj1 !== "object" ||
      obj2 === null || typeof obj2 !== "object") {
    return false;
  }


  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

 
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}


const a = { name: "Abhi", details: { age: 27, skills: ["JS", "React"] } };
const b = { name: "Abhi", details: { age: 27, skills: ["JS", "React"] } };

console.log(deepEqual(a, b)); // true

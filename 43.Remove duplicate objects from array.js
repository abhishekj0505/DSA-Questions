function removeDuplicateObjects(arr) {
  const seen = new Set();
  return arr.filter(obj => {
    const str = JSON.stringify(obj); // serialize object
    if (seen.has(str)) {
      return false; // duplicate
    }
    seen.add(str);
    return true;
  });
}

// Example usage:
const arr = [
  { id: 1, name: "Abhi" },
  { id: 2, name: "Jay" },
  { id: 1, name: "Abhi" },
  { id: 3, name: "Raj" }
];

console.log(removeDuplicateObjects(arr));

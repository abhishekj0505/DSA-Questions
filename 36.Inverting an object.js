const originalObject = {
    a: 1,
    b: 2,
    c: 3
};


const getInvertedObject = Object.fromEntries(
    Object.entries(originalObject).map(([key, value]) => [value, key])
)

console.log(getInvertedObject)
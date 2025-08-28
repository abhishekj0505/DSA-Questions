const flattenArray = (arr) => {
    return arr.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
    )
}
const nestedArray = [1, [2, [3, [4, 5]]], 6];      // array that needs to be flattened
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);


const flattenArray1 = (arr) => {
    return arr.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
    )
}
const nestedArray1 = [1, [2, [3, [4, 5]]], 6];      // array that needs to be flattened
const flattenedArray1 = flattenArray(nestedArray);
console.log(flattenedArray);
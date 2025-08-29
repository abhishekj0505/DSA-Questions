// code for moving to right
const arr = [1, 2, 3, 4, 5, 6]
const third = arr.splice(2, 1)[0]
arr.push(third)
console.log(`Moved to right ${arr}`)

// code for moving to left 
const arr2 = [11, 21, 31, 41, 51, 61]
const fifth = arr2.splice(4, 1)[0]
arr2.unshift(fifth)
console.log(`Moved to left ${arr2}`)
 

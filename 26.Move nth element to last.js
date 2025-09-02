// code for moving to right
const arr = [1, 2, 3, 4, 5, 6]
const removed = arr.splice(2, 1)
const third = removed[0]
arr.push(third)
console.log(`Moved to right ${arr}`)

// code for moving to left 
const arr2 = [11, 21, 31, 41, 51, 61]
const removed2 = arr2.splice(3, 1)
const fourth = removed2[0]
arr2.unshift(fourth)
console.log(arr2)


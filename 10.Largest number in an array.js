const array = [10, 34, 54, 56, 34, 89, 62]

let largestNumber = array[0]

for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
        largestNumber = array[i]
    }
}
console.log(largestNumber)


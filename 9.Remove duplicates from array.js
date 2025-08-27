const array = [1, 1, 2, 3, 4, 5, 5, 5, 3, 2, 1]

const uniqueArray = []

for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i])
    }
}
console.log(uniqueArray)
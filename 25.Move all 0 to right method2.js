const arr = [1, 2, 0, 4, 0, 23, 54, 0, 65, 6, 0, 67]

let writeIndex = 0

for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] !== 0) {
        arr[writeIndex] = arr[i]
        writeIndex++
    }
}

for (i = writeIndex; i < arr.length; i++) {
    arr[i] = 0
}

console.log(arr)
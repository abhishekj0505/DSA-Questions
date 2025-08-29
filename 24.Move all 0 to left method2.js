const arr = [1, 2, 0, 4, 0, 23, 54, 0, 65, 6, 0, 67]

let writeIndex = arr.length - 1

for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
        arr[writeIndex] = arr[i]
        writeIndex--;
    }
}

for (i = writeIndex; i >= 0; i--) {
    arr[i] = 0
}

console.log(arr)
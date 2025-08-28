const rotateRight = (arr, k) => {
    const length = arr.length
    k = k % length

    return arr.slice(-k).concat(arr.slice(0, length - k))
}

const array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(rotateRight(array, 3))
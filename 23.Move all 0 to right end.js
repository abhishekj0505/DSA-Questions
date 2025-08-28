const array = [3, 4, 45, 32, 12, 0, 76, 0, 5, 0, 43, 6, 0]

const move0toRight = (arr) => {
    return arr.filter((x) => x !== 0).concat(arr.filter((x) => x === 0))
}

console.log(move0toRight(array))

const array2 = [3, 4, 45, 32, 12, 0, 76, 0, 5, 0, 43, 6, 0]

const move0toRight2 = (arr) => {
    return arr.filter((x) => x !== 0).concat(arr.filter((x) => x === 0))
}

console.log(move0toRight(array))
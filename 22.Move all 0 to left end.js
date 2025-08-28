const array = [3, 4, 45, 32, 12, 0, 76, 0, 5, 0, 43, 6, 0]

const move0toLeft = (arr) => {
    return array.filter((x) => x === 0).concat(array.filter((x) => x !== 0))
}

console.log(move0toLeft(array))
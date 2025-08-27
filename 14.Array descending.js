const arr = [2, 4, 3, 6, 55, 334, 45, 23]

const sort = (arr) => {
    return arr.sort((a, b) => {
        return b - a
    })
}

console.log(sort(arr))
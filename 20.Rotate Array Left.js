const rotateLeft = (arr, k) => {
    const l = arr.length

    k = k % l

    return arr.slice(k).concat(arr.slice(0, k))
}


const arr = [1, 2, 3, 4, 5];
console.log(rotateLeft(arr, 2)); 
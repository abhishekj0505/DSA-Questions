const counter = () => {

    let count = 0

    return () => {
        return ++count
    }
}

let c = counter()

console.log(c())
console.log(c())
console.log(c())
console.log(c())
console.log(c())
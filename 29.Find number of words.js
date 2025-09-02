const string = "hi i am abhishek and i work at brain inventory"

const count = string.split(" ").filter((word) => {
    return word !== " "
}).length

console.log(count)
let str = "hi i am abhishek"

const answer = (str.split(' ').map((word) => (word.charAt(0).toUpperCase() + word.slice(1))).join(' '))

console.log(answer)
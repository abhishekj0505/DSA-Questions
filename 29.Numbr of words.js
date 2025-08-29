const string = " We  have  a  string "

const count = string.split(' ').filter((item) => {
    return item !== ''
}).length

console.log(count)
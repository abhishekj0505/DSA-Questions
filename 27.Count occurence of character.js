const countChar = (str) => {
    const countedChar = {}
    for (let char of str) {
        countedChar[char] = (countedChar[char] || 0) + 1
    }
    return countedChar  
}

const string = "I am abhishek"
console.log(countChar(string))
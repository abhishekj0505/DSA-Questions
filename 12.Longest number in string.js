const str = "Hi I am abhishek and no one knows my office is in shekharCentral"

const strArray = str.split(' ')

let longestWord = strArray[0]

for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > longestWord.length)
        longestWord = strArray[i]
}

console.log(longestWord)
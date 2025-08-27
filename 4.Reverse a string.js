const string = 'abhishek'

let reversedString = ""

for (i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString.concat(string[i])
}

console.log(reversedString)
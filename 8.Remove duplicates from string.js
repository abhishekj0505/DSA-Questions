const string = "abhishek"

let uniqueString = ""

for (let i = 0; i < string.length; i++) {
    if (uniqueString.indexOf(string[i]) === -1) {
        uniqueString = uniqueString + string[i]
    }
}

console.log(uniqueString)
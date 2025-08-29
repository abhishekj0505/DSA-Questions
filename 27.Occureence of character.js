const countChars = (str) => {
    const charCount = {}

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1
    }
    return charCount
}

const String = "Hi i am abhishek"

console.log(countChars(String))



const countCharacters = (String) => {
    const charactersCount = {}

    for (let character of String) {
        charactersCount[character] = (charactersCount[character] || 0) + 1
    }

    return charactersCount
}

console.log(countCharacters("Hello World"))
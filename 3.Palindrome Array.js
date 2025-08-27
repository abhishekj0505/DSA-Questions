const string = "abccba"

const strArray = string.split('')

const reversedStrArray = strArray.reverse()

const reversedString = reversedStrArray.join('')

if (string === reversedString) {
    console.log('It is a palindrome')
} else {
    console.log("It isn't a palindrome")
}
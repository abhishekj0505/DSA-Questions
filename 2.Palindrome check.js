const string = 'abccba'

let isPalinDrome = true

for (i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1])
        isPalinDrome = false
}

if (isPalinDrome) {
    console.log("It is a palindrome")
} else {
    console.log("It is not a palindrome")
}
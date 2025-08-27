const fibArray = [1, 2]
const fib = (a) => {

    for (i = 2; i < a; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
    }
}

const count = 8   // numer of elements I want to add to fibonacci array 

fib(count)

console.log(fibArray)
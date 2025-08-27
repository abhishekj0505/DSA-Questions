const greet = (name, callback) => {
    console.log(`hi ${name}`)
    
    callback()
}

const saySomething = () => {
    console.log('Good Morning')
}

greet("abhishek", saySomething)
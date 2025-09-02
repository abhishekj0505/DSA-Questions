 const multiplyNumericOnly = (a, b) => {
    const result = {};

    for (let key in a) {
        if (typeof a[key] === "number") {
            result[key] = a[key] * b;
        }
    }

    return result;
};


const input = {
    x: 2,
    y: 4,
    z: 6,
    a: 8,
    name: "Abhishek",
    isActive: true,
};


const multiplier = 3;


const output = multiplyNumericOnly(input, multiplier);


console.log(output);

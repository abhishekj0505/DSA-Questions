function deepMerge(obj1, obj2) {
    const result = { ...obj1 };

    for (const key in obj2) {
        if (
            obj2.hasOwnProperty(key) &&
            obj1.hasOwnProperty(key) &&
            typeof obj1[key] === 'object' &&
            obj1[key] !== null &&
            typeof obj2[key] === 'object' &&
            obj2[key] !== null
        ) {

            result[key] = deepMerge(obj1[key], obj2[key]);
        } else {

            result[key] = obj2[key];
        }
    }

    return result;
}


const object1 = {
    a: 1,
    b: { x: 10, y: 20 },
    c: 3
};

const object2 = {
    b: { y: 50, z: 100 },
    d: 4
};

const mergedObject = deepMerge(object1, object2);
console.log(mergedObject);

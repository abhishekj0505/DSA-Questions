const nestedObj = {
    name: "Abhishek",
    address: {
        city: "Jabalpur",
        pin: 482001,
        pastCities: {
            city1: 'nashik',
            city2: 'aurangabad'
        }
    },
    skills: {
        frontend: ["React", "JavaScript"],
        backend: {
            language: "NodeJS",
            db: "MongoDB"
        }
    },
    isActive: true
};

const flattenObject = (obj, prefix = '', result = {}) => {
    for (let key in obj) {
        const fullKey = prefix ? `${prefix}.${key}` : key;

        if (
            typeof obj[key] === 'object' &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
        ) {
            flattenObject(obj[key], fullKey, result);
        } else {
            result[fullKey] = obj[key];
        }
    }
    return result;
};

console.log(flattenObject(nestedObj));


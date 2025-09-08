function deepClone(obj) {

    if (obj === null || typeof obj !== "object") {
        return obj;
    }


    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }


    const clone = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}


const original = {
    name: "Abhishek",
    age: 27,
    skills: ["React", "JS"],
    address: { city: "Jabalpur", state: "MP" }
};

const copy = deepClone(original);


copy.name = "Changed";
copy.skills.push("Node");
copy.address.city = "Bhopal";

console.log(original);
// original remains unchanged
console.log(copy);

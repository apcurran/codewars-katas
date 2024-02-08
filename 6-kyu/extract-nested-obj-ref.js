"use strict";

// return the nested property value if it exists,
// otherwise return undefined
/**
 * solution 1
 * n = object properties in str
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {object}
 */
Object.prototype.hash = function (str) {
    const propertiesPath = str.split(".");
    let currentObject = this;

    for (let property of propertiesPath) {
        currentObject = currentObject[property];

        if (currentObject === undefined) break;
    }

    return currentObject;
};

const obj = {
    person: {
        name: "joe",
        history: {
            hometown: "bratislava",
            bio: {
                funFact: "I like fishing."
            }
        }
    }
};

console.log(obj.hash("person.name")); // 'joe'
console.log(obj.hash("person.history.bio")); // { funFact: 'I like fishing.' }
console.log(obj.hash("person.history.homeStreet")); // undefined
console.log(obj.hash("person.animal.pet.needNoseAntEater")); // undefined

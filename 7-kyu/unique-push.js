"use strict";

//only push obj onto arr if it has a unique phoneNumber
/**
 * 
 * @param {array} arr - array of people objects 
 * @param {object} obj - person object with a name and phoneNumber properties
 * @returns {boolean} - true of person obj is unique, false if person obj is NOT unique or person does not have a phoneNumber obj property.
 */
function uniquePush(arr, obj) {
    const objAlreadyExists = arr.some((personObj) => {
        return Object.is(personObj.phoneNumber, obj.phoneNumber);
    });

    if (objAlreadyExists) {
        return false;
    }

    arr.push(obj);

    return true;
}

console.log(uniquePush([{name:"bob", phoneNumber:1234}, {name:"joe", phoneNumber:12345}], {name:"I am duped", phoneNumber:12345}));
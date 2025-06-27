"use strict";

function getNames(data) {
    return data.map((item) => item.name);
}

console.log(
    getNames([
        { name: "Joe", age: 20 },
        { name: "Bill", age: 30 },
        { name: "Kate", age: 23 },
    ]),
); // ['Joe', 'Bill', 'Kate']

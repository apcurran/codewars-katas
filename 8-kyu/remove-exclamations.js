"use strict";

function remove(str) {
    const regex = /!+$/g;
    
    return str.replace(regex, "");
}

console.log(remove("Hello!"));
console.log(remove("Hello!!!"));
console.log("Hi");
console.log("Hi! Hi!");

"use strict";

class Animal {
    /**
     * @param {string} name
     * @param {string} type
     */
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    toString() {
        return `${this.name} is a ${this.type}`;
    }
}

const dog = new Animal("Max", "dog");
console.log(dog.toString());
console.log(dog.type);
console.log(dog.name);
dog.name = "Lassie";
console.log(dog.name);

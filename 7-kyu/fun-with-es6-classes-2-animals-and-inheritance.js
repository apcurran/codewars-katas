"use strict";

class Animal {
    /**
     * @param {string} name 
     * @param {number} age 
     * @param {number} legs 
     * @param {string} species 
     * @param {string} status 
     */
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    /**
     * @param {string} name 
     * @param {number} age 
     * @param {string} status 
     */
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    /**
     * @param {string} name 
     * @param {number} age 
     * @param {string} status 
     */
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    /**
     * @param {string} name 
     * @param {number} age 
     * @param {string} status 
     * @param {string} master 
     */
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}

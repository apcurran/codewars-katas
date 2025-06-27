"use strict";

class Cat extends Animal {
    /**
     * @param {string} name
     */
    constructor(name) {
        super(name);
    }

    speak() {
        return `${this.name} meows.`;
    }
}

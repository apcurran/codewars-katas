"use strict";

class Dinglemouse {
    /**
     * @param {string} firstName
     * @param {string} lastName
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * solution 1
     * time: O(n)
     * space: O(n)
     *
     * @returns {string}
     */
    getFullName() {
        return `${this.firstName} ${this.lastName}`.trim();
    }
}

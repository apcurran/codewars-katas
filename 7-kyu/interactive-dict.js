"use strict";

class Dictionary {
    constructor() {
        this.dict = new Map();
    }

    /**
     * @param {string} key 
     * @param {string} value 
     * @returns {void}
     */
    newEntry(key, value) {
        this.dict.set(key, value);
    }

    /**
     * @param {string} key 
     * @returns {string}
     */
    look(key) {
        const value = this.dict.get(key) || `Can't find entry for ${key}`;
        
        return value;
    }
}

let d = new Dictionary();
d.newEntry("Apple", "A fruit");
console.log( d.look("Apple") );// "A fruit"
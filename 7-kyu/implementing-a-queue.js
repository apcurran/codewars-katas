"use strict";

class Queue {
    constructor() {
        this.data = [];
    }
    
    enqueue(value) {
        this.data.push(value);
    }

    /**
     * time: O(n)
     * space: O(1)
     * 
     * @returns {any}
     */
    dequeue() {
        return this.data.shift();
    }

    /**
     * @returns {number}
     */
    size() {
        return this.data.length;
    }
}

let queue = new Queue();
console.log( queue.size() ); // 0
queue.enqueue(1);
console.log( queue.size() ); // 1

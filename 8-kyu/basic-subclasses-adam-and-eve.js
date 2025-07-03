"use strict";

class God {
    /**
     * @returns Human[]
     */
    static create() {
        const adam = new Man();
        const eve = new Woman();

        return [adam, eve];
    }
}

class Human {
    constructor() {
        this.alive = true;
    }
}

class Man extends Human {
    
}

class Woman extends Human {
    
}

console.log(God.create()); // [Man obj, Woman obj]

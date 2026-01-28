class Counter {
    constructor() {
        this.count = 0;
    }

    incr() {
        this.count++;

        return this;
    }

    valueOf() {
        return this.count;
    }
}

let c = new Counter();
c.incr(); // now 1 as this.count
console.log(c + 1); // 2
console.log(c > 1); // false
console.log(c > 0); // true
console.log(c == 1); // true
console.log(Math.sqrt(c)); // 1

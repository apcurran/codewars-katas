"use strict";

class Quark {
    /**
     * @param {string} color
     * @param {string} flavor
     */
    constructor(color, flavor) {
        this.color = color;
        this.flavor = flavor;
        this.baryon_number = 1 / 3;
    }

    /**
     * exchange colors between objects
     * @param {Quark} qrk particle object
     */
    interact(qrk) {
        const tempColor = this.color;
        this.color = qrk.color;
        qrk.color = tempColor;
    }
}

const q1 = new Quark("red", "up");
const q2 = new Quark("blue", "strange");
q1.interact(q2);
console.log(q1.color);
console.log(q2.color);

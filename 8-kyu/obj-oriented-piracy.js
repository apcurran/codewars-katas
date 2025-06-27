"use strict";

class Ship {
    /**
     * 
     * @param {number} draft 
     * @param {number} crew 
     */
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }

    /**
     * solution 1
     * time: O(1)
     * space: O(1)
     * 
     * @returns {boolean}
     */
    isWorthIt() {
        // calc weight after removing crew
        // if weight is greater than 20, return true
        // otherwise, return false
        const crewWeight = 1.5 * this.crew;
        const shipWeightDiff = this.draft - crewWeight;

        return shipWeightDiff > 20;
    }
}

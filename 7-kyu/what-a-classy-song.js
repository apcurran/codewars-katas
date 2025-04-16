"use strict";

class Song {
    /**
     * @param {string} title 
     * @param {string} artist 
     */
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.listeners = new Set();
    }

    /**
     * @param {string[]} people 
     * @returns {number} count of new people added
     */
    howMany(people) {
        let newListenersCount = 0;

        for (let person of people) {
            const loweredPersonName = person.toLowerCase();

            if (!this.listeners.has(loweredPersonName)) {
                // increment count
                newListenersCount++;
                // add to hashset
                this.listeners.add(loweredPersonName);
            }
        }

        return newListenersCount;
    }
}

const mountMoose = new Song("Mount Moose", "The Snazzy Moose");
// day 1
console.log(mountMoose.howMany(["John", "joHN", "carl"])); // 2

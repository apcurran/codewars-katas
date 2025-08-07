"use strict";

/**
 * solution 1
 * time: O(n) -- jokes results
 * space: O(n) -- jokes results
 *
 * @param {string} apiUrl
 * @param {number} targetJokeID
 * @returns {Promise}
 */
async function sayJoke(apiUrl, targetJokeID) {
    const givenApiURL = "http://great.jokes/christmas";

    if (apiUrl !== givenApiURL) {
        throw new Error(`No jokes at url: ${apiUrl}`);
    }

    const response = await fetch(apiUrl);
    const jokesObj = await response.json();

    // // getting jokes from a another API URL may return a different data shape
    if (!jokesObj.hasOwnProperty("jokes")) {
        throw new Error(`No jokes at url: ${apiUrl}`);
    }

    const joke = jokesObj.jokes.find(function getJokeByID(joke) {
        return joke.id === targetJokeID;
    });

    if (!joke) {
        throw new Error(`No jokes found id: ${targetJokeID}`);
    }

    return {
        saySetup() {
            return joke.setup;
        },
        sayPunchLine() {
            return joke.punchLine;
        },
    };
}

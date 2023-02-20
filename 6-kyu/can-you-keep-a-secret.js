"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} secret 
 * @returns {object}
 */
function createSecretHolder(secret) {
    let mySecret = secret;

    function getSecret() {
        return mySecret;
    }

    function setSecret(updatedSecret) {
        mySecret = updatedSecret;
    }

    return {
        getSecret,
        setSecret
    };
}

const obj = createSecretHolder(5);
console.log( obj.getSecret() ); // 5
obj.setSecret(2);
console.log( obj.getSecret() ); // 2
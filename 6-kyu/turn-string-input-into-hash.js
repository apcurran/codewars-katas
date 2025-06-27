/**
 * 
 * @param {string} str - Input string that needs to be formatted into an object with key/value pairs
 * @returns {object} - Return object with various key/value pairs
 */
function strToHash(str){
    if (str === "") return {};

    const splitStrArr = str
        .split(", ")
        .map((partialStr) => {
            return partialStr.split("=");
        });

    let resultObj = {};

    for (let innerArr of splitStrArr) {
        const [key, val] = innerArr;

        resultObj[key] = Number(val);
    }

    return resultObj;
}

console.log((strToHash("a=1, b=2, c=3, d=4"))); // { 'a': 1, 'b': 2, 'c': 3, 'd': 4}

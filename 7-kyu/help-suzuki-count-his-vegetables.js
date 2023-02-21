"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {string} vegetables 
 * @returns {array[]} list of tuples containing [count, veg]
 */
function countVegetables(vegetables) {
    const allPossibleVegetables = new Set(["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"]);
    const vegList = vegetables.split(" ");
    let vegCache = new Map();

    for (let veg of vegList) {
        // remove non-veg
        if (!allPossibleVegetables.has(veg)) continue;

        const previousVegCount = vegCache.get(veg) || 0;
        vegCache.set(veg, previousVegCount + 1);
    }

    let vegTupleList = [];
    
    for (let [veg, count] of vegCache) {
        vegTupleList.push([count, veg]);
    }
    
    vegTupleList.sort((tupleA, tupleB) => {
        if (tupleB[0] > tupleA[0]) {
            return 1;
        }

        if (tupleB[0] < tupleA[0]) {
            return -1;
        }

        if (tupleB[0] === tupleA[0]) {
            if (tupleB[1] > tupleA[1]) {
                return 1;
            }

            if (tupleB[1] < tupleA[1]) {
                return -1;
            }

            return 0;
        }
    });

    return vegTupleList;
}

const strTest = "mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber " +
"mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber " +
"onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper " +
"onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot " +
"potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip " +
"mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip";

console.log( countVegetables(strTest) );
// [[15, 'turnip'], [15, 'mushroom'], [13, 'cabbage'], [10, 'carrot'], [9, 'potato'], [7, 'onion'], [6, 'tofu'], [6, 'pepper'], [5, 'cucumber'], [4, 'celery']]

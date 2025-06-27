"use strict";

function number(busStops) {
    let totalPeople = 0;

    for (let busStop of busStops) {
        const [numPeopleAdded, numPeopleSubtracted] = busStop;
        const totalAddedFromStop = numPeopleAdded - numPeopleSubtracted;

        totalPeople += totalAddedFromStop;
    }

    return totalPeople;
}

console.log(number([[10, 0], [3, 5], [5, 8]])); // 5
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])); // 17

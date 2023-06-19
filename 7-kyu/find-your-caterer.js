"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} budget 
 * @param {number} people 
 * @returns {-1 | 1 | 2 | 3}
 */
function findCaterer(budget, people) {
    const BASIC_BUFFET_1_COST = 15;
    const ECONOMY_BUFFET_2_COST = 20;
    const PREMIUM_BUFFET_3_COST = 30;
    const costOfBuffetsBasic = BASIC_BUFFET_1_COST * people;
    
    if (people <= 0 ||
        costOfBuffetsBasic > budget) {
        return -1;
    }

    const costOfBuffetsEconomy = ECONOMY_BUFFET_2_COST * people;
    const costOfBuffetsPremium = PREMIUM_BUFFET_3_COST * people;
    const premiumBuffetsDiscount = people > 60 ? .2 * costOfBuffetsPremium : 0;

    if (budget >= costOfBuffetsPremium - premiumBuffetsDiscount) {
        return 3;
    } else if (budget >= costOfBuffetsEconomy) {
        return 2;
    } else {
        return 1;
    }
}

console.log( findCaterer(150, 10) ); // 1
console.log( findCaterer(1500, 60) ); // 2
console.log( findCaterer(1500, 61) ); // 3
console.log( findCaterer(100, 0) ); // -1

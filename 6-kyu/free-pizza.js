"use strict";

// /**
//  * solution 1
//  * time: O(n * m)
//  * space: O(m)
//  * 
//  * @param {object} customers 
//  * @param {number} minOrders 
//  * @param {number} minPrice 
//  */
// function pizzaRewards(customers, minOrders, minPrice) {
//     let eligibleCustomers = [];

//     for (let customer in customers) {
//         const customerOrders = customers[customer];
//         const customerOrdersAboveMinPrice = customerOrders.filter((order) => order >= minPrice);

//         if (customerOrdersAboveMinPrice.length >= minOrders) {
//             eligibleCustomers.push(customer);
//         }
//     }

//     return eligibleCustomers;
// }

/**
 * solution 2
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {object} customers 
 * @param {number} minOrders 
 * @param {number} minPrice 
 */
function pizzaRewards(customers, minOrders, minPrice) {
    let eligibleCustomers = [];

    for (let customer in customers) {
        const customerOrders = customers[customer];
        let customerOrdersAboveMinPriceCount = 0;

        for (let order of customerOrders) {
            if (order >= minPrice) customerOrdersAboveMinPriceCount++;
        }

        if (customerOrdersAboveMinPriceCount >= minOrders) {
            eligibleCustomers.push(customer);
        }
    }

    return eligibleCustomers;
}

const minOrders = 5;
const minPrice = 20;
const customers = {
  "John Doe": [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
  "Jane Doe": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45] // Has six orders above 20$, which means FREE PIZZA!
};
console.log(pizzaRewards(customers, minOrders, minPrice)); // ['Jane Doe']
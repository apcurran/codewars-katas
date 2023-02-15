"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} name 
 * @returns {string} role of employee
 */
function findEmployeesRole(name) {
    const [firstName, lastName] = name.split(" ");
    const employee = employees.find((employee) => employee.firstName === firstName && employee.lastName === lastName);

    if (employee) {
        return employee.role;
    }

    return "Does not work here!";
}
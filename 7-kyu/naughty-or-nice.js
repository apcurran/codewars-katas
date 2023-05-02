"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(1)
 * 
 * @param {object} data 
 * @returns {string}
 */
function naughtyOrNice(data) {
    let yearNaughtyCount = 0;
    let yearNiceCount = 0;

    for (let key in data) {
        const monthObj = data[key];
        let monthNaughtyCount = 0;
        let monthNiceCount = 0;

        for (let monthBehaviorKey in monthObj) {
            const monthBehavior = monthObj[monthBehaviorKey];
            
            if (monthBehavior === "Naughty") {
                monthNaughtyCount++;
            } else {
                monthNiceCount++;
            }
        }

        yearNaughtyCount += monthNaughtyCount;
        yearNiceCount += monthNiceCount;
    }

    return yearNiceCount >= yearNaughtyCount ? "Nice!" : "Naughty!";
}

console.log( naughtyOrNice({"January": {"1": "Naughty", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Nice", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Nice", "11": "Nice", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Nice", "16": "Naughty", "17": "Nice", "18": "Nice", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Nice", "23": "Naughty", "24": "Naughty", "25": "Nice", "26": "Nice", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Nice", "31": "Nice"}, "February": {"1": "Nice", "2": "Nice", "3": "Naughty", "4": "Naughty", "5": "Nice", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Nice", "10": "Nice", "11": "Nice", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Nice", "17": "Nice", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Naughty", "27": "Nice", "28": "Nice"}, "March": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Nice", "5": "Nice", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Nice", "14": "Nice", "15": "Nice", "16": "Naughty", "17": "Naughty", "18": "Naughty", "19": "Nice", "20": "Naughty", "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty", "31": "Nice"}, "April": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Naughty", "16": "Naughty", "17": "Nice", "18": "Nice", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Naughty", "28": "Nice", "29": "Nice", "30": "Naughty"}, "May": {"1": "Nice", "2": "Nice", "3": "Nice", "4": "Naughty", "5": "Nice", "6": "Nice", "7": "Naughty", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Naughty", "14": "Nice", "15": "Nice", "16": "Nice", "17": "Naughty", "18": "Naughty", "19": "Naughty", "20": "Naughty", "21": "Nice", "22": "Nice", "23": "Naughty", "24": "Naughty", "25": "Naughty", "26": "Nice", "27": "Nice", "28": "Nice", "29": "Nice", "30": "Naughty", "31": "Nice"}, "June": {"1": "Nice", "2": "Naughty", "3": "Naughty", "4": "Nice", "5": "Nice", "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", "11": "Nice", "12": "Nice", "13": "Naughty", "14": "Naughty", "15": "Naughty", "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Naughty", "20": "Naughty", "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Nice", "27": "Nice", "28": "Naughty", "29": "Nice", "30": "Naughty"}, "July": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Naughty", "5": "Naughty", "6": "Naughty", "7": "Naughty", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Nice", "13": "Nice", "14": "Nice", "15": "Nice", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", "21": "Nice", "22": "Nice", "23": "Naughty", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", "31": "Nice"}, "August": {"1": "Naughty", "2": "Naughty", "3": "Naughty", "4": "Nice", "5": "Naughty", "6": "Nice", "7": "Nice", "8": "Nice", "9": "Nice", "10": "Naughty", "11": "Nice", "12": "Naughty", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Naughty", "17": "Naughty", "18": "Naughty", "19": "Nice", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Nice", "24": "Nice", "25": "Nice", "26": "Nice", "27": "Nice", "28": "Naughty", "29": "Naughty", "30": "Naughty", "31": "Nice"}, "September": {"1": "Naughty", "2": "Naughty", "3": "Nice", "4": "Nice", "5": "Nice", "6": "Nice", "7": "Nice", "8": "Naughty", "9": "Naughty", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Nice", "14": "Nice", "15": "Nice", "16": "Naughty", "17": "Naughty", "18": "Naughty", "19": "Nice", "20": "Nice", "21": "Nice", "22": "Naughty", "23": "Naughty", "24": "Nice", "25": "Naughty", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Nice", "30": "Naughty"}, "October": {"1": "Nice", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Nice", "6": "Naughty", "7": "Nice", "8": "Nice", "9": "Nice", "10": "Nice", "11": "Nice", "12": "Nice", "13": "Nice", "14": "Naughty", "15": "Nice", "16": "Nice", "17": "Nice", "18": "Nice", "19": "Nice", "20": "Nice", "21": "Naughty", "22": "Nice", "23": "Nice", "24": "Naughty", "25": "Naughty", "26": "Naughty", "27": "Nice", "28": "Nice", "29": "Nice", "30": "Naughty", "31": "Nice"}, "November": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Naughty", "5": "Naughty", "6": "Nice", "7": "Nice", "8": "Nice", "9": "Nice", "10": "Nice", "11": "Nice", "12": "Nice", "13": "Nice", "14": "Nice", "15": "Naughty", "16": "Naughty", "17": "Naughty", "18": "Naughty", "19": "Naughty", "20": "Nice", "21": "Naughty", "22": "Naughty", "23": "Naughty", "24": "Naughty", "25": "Nice", "26": "Naughty", "27": "Naughty", "28": "Nice", "29": "Nice", "30": "Naughty"}, "December": {"1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Nice", "6": "Nice", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", "11": "Naughty", "12": "Naughty", "13": "Naughty", "14": "Nice", "15": "Naughty", "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Naughty", "21": "Naughty", "22": "Nice", "23": "Nice", "24": "Naughty", "25": "Nice", "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Nice", "30": "Nice", "31": "Naughty"} }) );
// "Nice!"

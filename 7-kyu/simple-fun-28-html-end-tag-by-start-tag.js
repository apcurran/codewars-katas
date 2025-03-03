"use strict";

/**
 * solution 1 -- regex with capture group for HTML tagname
 * time: O(n)
 * space: O(n) -- string.match() creates an array result with captured portions
 * 
 * @param {string} startTag 
 * @returns {string}
 */
function htmlEndTagByStartTag(startTag) {
    const match = startTag.match(/<(\w+)/);

    if (!match) return "No match";

    return `</${match[1]}>`;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>")); // "</button>"
console.log(htmlEndTagByStartTag("<i>")); // "</i>"
console.log(htmlEndTagByStartTag("<div id='my_area' class='data' title='This is a test for title on Div tag'>")); // "</div>"

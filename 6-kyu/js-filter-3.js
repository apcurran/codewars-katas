/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string[]} logins
 * @returns {string[]}
 */
function searchNames(logins) {
    return logins.filter(function getEmailsOnly(val, i, arr) {
        // when index exists and is odd
        if (arr[i - 1] && i % 2 === 1) {
            const username = arr[i - 1];
            const isInvalidName =
                username.startsWith(".") || username.endsWith(".");

            return isInvalidName; // keep this email address
        }

        return false;
    });
}

console.log(
    searchNames([
        "foo",
        "foo@bar.com",
        "bar",
        "bar@foo.com",
        ".foo",
        "food@bar.com",
    ]),
); // ["food@bar.com"]

/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} pageNumber
 * @param {number} pageSize
 * @param {number} totalProducts
 * @returns {string}
 */
function paginationText(pageNumber, pageSize, totalProducts) {
    const start = (pageNumber - 1) * pageSize + 1;
    const end = Math.min(totalProducts, pageNumber * pageSize);

    return `Showing ${start} to ${end} of ${totalProducts} Products.`;
}

console.log(paginationText(1, 10, 30)); // 'Showing 1 to 10 of 30 Products.'

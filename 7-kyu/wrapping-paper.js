/**
 * solution 1 -- math formula
 * @param {number[][]} boxes
 * @returns {number}
 */
function wrappingPaper(boxes) {
    let totalWrappingPaper = 0;

    for (let [length, width, height] of boxes) {
        // per box, get SurfaceArea = 2 * (l*w + l*h + w*h)
        const surfaceArea = 2 * (length * width + length * height + width * height);
        // per box, get slack = Math.min(topAndBottomArea, frontAndBackArea, leftAndRightArea);
        const slack = Math.min(length * width, length * height, width * height);
        // add SA + SL = total wrapping paper
        const boxWrappingPaper = surfaceArea + slack;
        totalWrappingPaper += boxWrappingPaper;
    }

    return totalWrappingPaper;
}

console.log(
    wrappingPaper([
        [2, 3, 4],
        [1, 1, 1],
    ]),
); // 65 (58 + 7)

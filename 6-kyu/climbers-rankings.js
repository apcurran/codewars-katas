"use strict";

class RankCalculator {
    /**
     * solution 1
     * n = list of climbers
     * m = list of points for each climber
     * time: O(n * m * log m)
     * space: O(n)
     *
     * @param {object[]} climbers
     * @returns {object[]}
     */
    static GetRankings(climbers) {
        const climbersSummedPoints = climbers.map((climberObj) => {
            const pointsSum = climberObj.points
                .sort((a, b) => b - a)
                .slice(0, 6)
                .reduce((sum, curr) => sum + curr, 0);

            return {
                name: climberObj.name,
                points: pointsSum,
            };
        });

        return climbersSummedPoints.sort(
            (climberA, climberB) => climberB.points - climberA.points,
        );
    }
}

console.log(
    RankCalculator.GetRankings([
        { name: "SKOFIC Domen", points: [55, 100, 100, 25, 100, 51, 80] },
        { name: "SCHUBERT Jakob", points: [80, 80, 40, 47, 65, 100, 65, 37] },
    ]),
); // [{"name":"SKOFIC Domen", "points":486}, {"name":"SCHUBERT Jakob", "points":437}]

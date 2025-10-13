Math.degrees = function (angleRadians) {
    const angleDegrees = angleRadians * (180 / Math.PI);
    const angleAdjusted = Number.isInteger(angleDegrees)
        ? Math.trunc(angleDegrees)
        : Number(angleDegrees.toFixed(2));

    return `${angleAdjusted}deg`;
};

Math.radians = function (angleDegrees) {
    const angleRadians = angleDegrees * (Math.PI / 180);
    const angleAdjusted = Number.isInteger(angleRadians)
        ? Math.trunc(angleRadians)
        : Number(angleRadians.toFixed(2));

    return `${angleAdjusted}rad`;
};

console.log(Math.degrees(Math.PI)); // "180deg"
console.log(Math.radians(180)); // "3.14rad"

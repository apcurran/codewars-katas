"use strict";

function zombie_shootout(zeds, range, ammo) {
    const steps = range * 2;

    if (ammo < steps && zeds > ammo) {
        return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
    } else if (zeds > steps) {
        return `You shot ${steps} zombies before being eaten: overwhelmed.`;
    } else {
        return `You shot all ${zeds} zombies.`;
    }
}

console.log( zombie_shootout(3, 10, 10) ); // "You shot all 3 zombies."
console.log( zombie_shootout(100, 8, 200) ); // "You shot 16 zombies before being eaten: overwhelmed."
console.log( zombie_shootout(50, 10, 8) ); // "You shot 8 zombies before being eaten: ran out of ammo."

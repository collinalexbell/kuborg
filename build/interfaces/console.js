"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.js
const Borg_1 = require("../src/Borg");
const Holon_1 = require("../src/Holon");
const World_1 = require("../src/World");
class Console {
    constructor() {
    }
    usage() {
        console.log("there isn't any useage as of yet");
    }
    render(world) {
        const holons = world.getHolons();
        const positions = holons.map((h) => world.positionOf(h));
    }
}
const singleton = new Console();
const world = new World_1.World();
singleton.render(world);
const collin = new Holon_1.Holon("collin");
const zeus = new Holon_1.Holon("zeus");
world.addHolon(collin);
world.addHolon(zeus);
collin.print(world);
zeus.print(world);
function flashTheBorg() {
    const borg = new Borg_1.Borg();
    borg.flash();
}
flashTheBorg();

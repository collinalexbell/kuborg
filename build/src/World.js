"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
class World {
    constructor() {
        this.holons = [];
        this.positions = {};
    }
    getHolons() {
        return this.holons;
    }
    addHolon(toAdd) {
        this.holons.concat(toAdd);
        this.positions[toAdd.getName()] = null;
    }
    positionOf(inWorld) {
        return this.positions[inWorld.getName()];
    }
}
exports.World = World;

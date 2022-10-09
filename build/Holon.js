"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Holon = void 0;
class Holon {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    print(world) {
        console.log(this.getName(), " at ", world.positionOf(this));
    }
}
exports.Holon = Holon;

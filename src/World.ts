import {Holon} from "./Holon";

type Position = {x: number, y: number};
export class World {
    holons: Holon[] = [];
    positions: Record<string, Position | null> = {}
    getHolons() {
        return this.holons
    }
    addHolon(toAdd: Holon) {
        this.holons.concat(toAdd);
        this.positions[toAdd.getName()] = null;
    }
    positionOf(inWorld: Holon): Position | null {
        return this.positions[inWorld.getName()]

    }
}
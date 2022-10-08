import {Holon} from "./Holon";
export class World {
    holons: Holon[] = [];
    positions: Record<string, Holon | null> = {}
    getHolons() {
        return this.holons
    }
    addHolon(toAdd: Holon) {
        this.holons.concat(toAdd);
        this.positions[toAdd.getName()] = null;
    }
    positionOf(inWorld: Holon){
        inWorld
    }
}
import {Holon} from "./Holon";
export class World {
    holons: Holon[] = [];
    getHolons() {
        return this.holons
    }
    addHoolon(toAdd: Holon) {
        this.holons.concat(toAdd);
    }
}
import { World } from "./World";

export class Holon {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }

    print(world: World) {
        console.log(this.getName(), " at ", world.positionOf(this))
    }
}
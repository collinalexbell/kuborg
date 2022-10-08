// index.js
import { Holon } from "../src/Holon";
import { World } from "../src/World";
class Console {
   constructor() {
   } 
   usage() {
    console.log("there isn't any useage as of yet");
   }
   render(world: World){
      const holons = world.getHolons()
      const positions = holons.map((h) => world.positionOf(h));
   }
}

const singleton = new Console();
singleton.usage();
const world = new World()
singleton.render(world);
const collin = new Holon("collin")
const zeus = new Holon("zeus")
world.addHolon(collin);
world.addHolon(zeus);
console.log(world.positionOf(collin))
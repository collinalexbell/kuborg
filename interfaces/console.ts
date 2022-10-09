// index.js
import { Borg } from "../src/Borg";
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
const world = new World()
singleton.render(world);
const collin = new Holon("collin")
const zeus = new Holon("zeus")
world.addHolon(collin);
world.addHolon(zeus);
collin.print(world);
zeus.print(world);

function flashTheBorg(){
   const borg = new Borg();
   borg.flash()
}

flashTheBorg()
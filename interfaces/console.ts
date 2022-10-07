// index.js
import { World } from "../src/World";
class Console {
   constructor() {
   } 
   usage() {
    console.log("there isn't any useage as of yet");
   }
   render(world: World){

   }
}

const singleton = new Console();
singleton.usage();
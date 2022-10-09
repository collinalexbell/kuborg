
import {} from "johnny-five"
import Avrgirl from "avrgirl-arduino";
export class Borg {
  flash() {
    var avrgirl = new Avrgirl({
      board: "mega",
    });

    avrgirl.flash("borgs/Blink.cpp.hex", function (error: Error) {
      if (error) {
        console.error(error);
      } else {
        console.info("done.");
      }
    });
  }
}
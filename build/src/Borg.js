"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borg = void 0;
const avrgirl_arduino_1 = __importDefault(require("avrgirl-arduino"));
class Borg {
    flash() {
        var avrgirl = new avrgirl_arduino_1.default({
            board: "mega",
        });
        avrgirl.flash("borgs/Blink.cpp.hex", function (error) {
            if (error) {
                console.error(error);
            }
            else {
                console.info("done.");
            }
        });
    }
}
exports.Borg = Borg;

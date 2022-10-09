declare module "avrgirl-arduino"{
    export default class AvrGirl {
        constructor(settings: {board: string})
        flash(a: any, b: any)
    }
}
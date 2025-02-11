import Module from "../../module";
import hooks from "../../../hooks";
import utils from "../../../utils/utils";

export default class Fly extends Module {
    constructor () {
        super("Fly", "Movement", {
            "Speed": 5
        })
    }

    onRender () {
        utils.localPlayer.rigidBody.fly = true;
        utils.localPlayer.flySpeed = this.options["Speed"];
    }

    onDisable () {
        utils.localPlayer.rigidBody.fly = false;
        utils.localPlayer.flySpeed = 0;
    }
};
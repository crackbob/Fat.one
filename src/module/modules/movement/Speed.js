import Module from "../../module";
import hooks from "../../../hooks";
import utils from "../../../utils/utils";

export default class Speed extends Module {
    constructor () {
        super("Speed", "Movement", {
            "Speed": 80
        })
    }

    onRender () {
        utils.localPlayer.walkSpeed = this.options["Speed"];
    }

    onDisable () {
        let localPlayer = hooks.game.getMyPlayer();
        localPlayer.walkSpeed = 60;
    }
};
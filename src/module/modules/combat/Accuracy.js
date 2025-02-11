import Module from "../../module";
import hooks from "../../../hooks";
import utils from "../../../utils/utils";

export default class Accuracy extends Module {
    constructor () {
        super("Accuracy", "Combat")
    }

    onEnable () {;
        utils.freezeValue(utils.localPlayer.bowWeapon, "fireAmount01", 1);
        utils.freezeValue(hooks.game.crosshair, "currentAccuracy", 0);
        utils.localPlayer.statClassValues.set("shootingFocus", 0);
    }

    onDisable () {
        utils.unfreezeValue(utils.localPlayer.bowWeapon, "fireAmount01", 0);
        utils.unfreezeValue(hooks.game.crosshair, "currentAccuracy", 30);
        utils.localPlayer.statClassValues.set("shootingFocus", 2);
    }
};
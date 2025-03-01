import Module from "../../module";
import hooks from "../../../hooks";
import utils from "../../../utils/utils";

export default class NoClip extends Module {
    constructor () {
        super("NoClip", "Movement")
    }

    onRender () {
        utils.localPlayer.rigidBody.noclip = true;
    }

    onDisable () {
        utils.localPlayer.rigidBody.noclip = false;
    }
};
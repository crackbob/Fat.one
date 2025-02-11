import Module from "../../module";
import hooks from "../../../hooks";

export default class Chams extends Module {
    constructor () {
        super("Chams", "Visual", null)
    }

    onRender () {
        if (!hooks.game.getMyPlayer()?.teamId) return;
        
        let localTeam = hooks.game.getMyPlayer().teamId;
        hooks.game.players.forEach(function (player) {
            player.obj.material.forEach((material) => {
                material.depthTest = false;
                if (player.teamId == localTeam) {
                    material.uniforms.colorAdder.value.g = 255;
                } else {
                    material.uniforms.colorAdder.value.r = 255;
                }
            })
        })
    }

    onDisable () {
        hooks.game.players.forEach(function (player) {
            player.obj.material.forEach((material) => {
                material.depthTest = true;
                material.uniforms.colorAdder.value.g = 0;
                material.uniforms.colorAdder.value.r = 0;
            })
        })
    }
};
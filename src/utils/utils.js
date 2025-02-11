import hooks from "../hooks";

export default {
    get localPlayer () {
        return hooks.game.getMyPlayer();
    },

    freezeValue(obj, prop, value) {
        obj.__defineGetter__(prop, () => value);
        obj.__defineSetter__(prop, () => value);
    },

    unfreezeValue(obj, prop, value) {
        delete obj[prop];
        obj[prop] = value;
    },

}
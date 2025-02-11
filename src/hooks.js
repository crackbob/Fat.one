import events from "./events";

export default {
    "init" () {
        let hooksContext = this;
        let _from = Array.from;
        Array.from = function (obj) {
            if (obj?.next && obj?.next()?.value?.game) {
                hooksContext.game = obj.next().value.game;
            }
            return _from.apply(this, arguments);
        }
    }
}
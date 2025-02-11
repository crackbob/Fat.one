import moduleManager from "./module/moduleManager";
import events from "./events";
import hooks from "./hooks"

setInterval(() => {
    events.emit("render");
}, (1000 / 60));

document.addEventListener("keydown", (e) => {
    events.emit("keydown", e.code);
});

hooks.init();
moduleManager.init();

window.hooks = hooks;
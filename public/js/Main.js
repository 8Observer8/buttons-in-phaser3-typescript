define(["require", "exports", "jquery", "Phaser", "./Scenes/SimpleScene"], function (require, exports, $, Phaser, SimpleScene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    $(function () {
        var gameConfig = {
            width: 400,
            height: 300,
            scene: [SimpleScene_1.default]
        };
        new Phaser.Game(gameConfig);
    });
});
//# sourceMappingURL=Main.js.map
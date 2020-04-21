"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = require("Phaser");
var SimpleScene = /** @class */ (function (_super) {
    __extends(SimpleScene, _super);
    function SimpleScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleScene.prototype.create = function () {
        var helloButton = this.add.text(100, 100, "Hello Phaser!", { fill: "#0f0" });
        helloButton.setInteractive();
        helloButton.on("pointerover", function () { console.log("pointerover"); });
    };
    return SimpleScene;
}(Phaser.Scene));
exports.default = SimpleScene;

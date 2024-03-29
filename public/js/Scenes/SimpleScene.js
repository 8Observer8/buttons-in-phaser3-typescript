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
define(["require", "exports", "Phaser"], function (require, exports, Phaser) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SimpleScene = /** @class */ (function (_super) {
        __extends(SimpleScene, _super);
        function SimpleScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SimpleScene.prototype.create = function () {
            var _this = this;
            var clickCount = 0;
            this._clickCountText = this.add.text(50, 200, "");
            var clickButton = this.add.text(50, 100, "Click me!", { fill: "#0f0" })
                .setInteractive()
                .on("pointerdown", function () { _this.UpdateClickCountText(++clickCount); });
            this.UpdateClickCountText(clickCount);
        };
        SimpleScene.prototype.UpdateClickCountText = function (clickCount) {
            this._clickCountText.setText("Button has been clicked " + clickCount + " times.");
        };
        return SimpleScene;
    }(Phaser.Scene));
    exports.default = SimpleScene;
});
//# sourceMappingURL=SimpleScene.js.map
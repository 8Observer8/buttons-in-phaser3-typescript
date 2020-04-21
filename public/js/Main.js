"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Phaser = require("Phaser");
var SimpleScene_1 = require("./Scenes/SimpleScene");
$(function () {
    var gameConfig = {
        width: 400,
        height: 300,
        scene: [SimpleScene_1.default]
    };
    new Phaser.Game(gameConfig);
});

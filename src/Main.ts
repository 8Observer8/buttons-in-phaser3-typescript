
import * as $ from "jquery";
import * as Phaser from "Phaser";
import SimpleScene from "./Scenes/SimpleScene";

$(() =>
{
    const gameConfig: Phaser.Types.Core.GameConfig = {
        width: 400,
        height: 300,
        scene: [SimpleScene]
    };

    new Phaser.Game(gameConfig);
});

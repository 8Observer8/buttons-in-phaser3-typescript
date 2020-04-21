
import * as Phaser from "Phaser";

export default class SimpleScene extends Phaser.Scene
{
    private preload(): void
    {
        this.load.image("cokecan", "./assets/cokecan.png");
    }

    private create(): void
    {
        this.add.text(100, 100, "Hello Phaser!", { fill: "#0f0" });
        this.add.image(100, 200, "cokecan");
    }
}
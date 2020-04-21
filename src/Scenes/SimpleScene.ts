
import * as Phaser from "Phaser";

export default class SimpleScene extends Phaser.Scene
{
    private create(): void
    {
        const helloButton = this.add.text(100, 100, "Hello Phaser!", { fill: "#0f0" });
        helloButton.setInteractive();

        helloButton.on("pointerover", () => { console.log("pointerover"); });
    }
}
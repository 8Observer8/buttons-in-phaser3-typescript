
import * as Phaser from "Phaser";

export default class SimpleScene extends Phaser.Scene
{
    private _clickCountText: Phaser.GameObjects.Text;

    private create(): void
    {
        let clickCount = 0;
        this._clickCountText = this.add.text(50, 200, "");

        const clickButton = this.add.text(50, 100, "Click me!", { fill: "#0f0" })
            .setInteractive()
            .on("pointerdown", () => { this.UpdateClickCountText(++clickCount) });

        this.UpdateClickCountText(clickCount);
    }

    private UpdateClickCountText(clickCount: number): void
    {
        this._clickCountText.setText(`Button has been clicked ${clickCount} times.`);
    }
}
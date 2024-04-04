import { Ball } from "../objects/ball";
import settings from "../settings";

const BRICK_COLORS: number[] = [0xf2e49b, 0xbed996, 0xf2937e, 0xffffff];

export class GameScene extends Phaser.Scene {
    private ball: Ball;
    private leftDir: boolean;

    constructor() {
        super({
            key: "GameScene",
        });
    }

    init(): void {
        this.leftDir = false;
    }

    create(): void {
        this.ball = new Ball({
            scene: this,
            x: 50,
            y: 200,
            fillAlpha: 1,
            fillColor: 0xffffff,
        }).setVisible(true);
    }

    update(): void {
        if (this.leftDir) {
            this.ball.setPosition(
                this.ball.x + 1,
                +this.game.config.height / 2
            );

            if (this.ball.x > 200) this.leftDir = false;
        }

        if (!this.leftDir) {
            this.ball.setPosition(
                this.ball.x - 1,
                +this.game.config.height / 2
            );

            if (this.ball.x < 0) this.leftDir = true;
        }

        console.log(this.ball.x);
    }
}

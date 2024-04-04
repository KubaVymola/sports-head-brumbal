import { EllipseConstructor } from "../interfaces/interfaces";

export class Ball extends Phaser.GameObjects.Ellipse {
    body: Phaser.Physics.Arcade.Body;

    constructor(params: EllipseConstructor) {
        super(
            params.scene,
            params.x,
            params.y,
            params.majorAxis,
            params.semiMajorAxis,
            params.fillColor,
            params.fillAlpha
        );

        this.initEllipse();
        this.scene.add.existing(this);
    }

    private initEllipse(): void {
        this.setOrigin(0);
        this.width = 10;
        this.height = 10;
        // this.setFillStyle(0xffffff);
    }

    private initPhysics(): void {
        // this.scene.physics.world.enable(this);
        // this.body.setBounce(1, 1);
        // this.body.setCollideWorldBounds();
    }
}

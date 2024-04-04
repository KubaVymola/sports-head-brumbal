import { EllipseConstructor } from "../interfaces/interfaces";

interface Controllable {}

export class SportsHead
    extends Phaser.GameObjects.Ellipse
    implements Controllable
{
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

    private initEllipse() {
        this.setOrigin(0, 0);

        this.width = 10;
        this.height = 10;
    }
}

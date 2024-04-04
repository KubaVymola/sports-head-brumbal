export interface EllipseConstructor {
    scene: Phaser.Scene;
    x: number;
    y: number;
    majorAxis?: number;
    semiMajorAxis?: number;
    fillColor?: number;
    fillAlpha?: number;
}

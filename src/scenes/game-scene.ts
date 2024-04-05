import { Bodies } from "matter";
import { Ball } from "../objects/ball";
import { Vertices } from "matter-js";

export class GameScene extends Phaser.Scene {
    preload() {
        this.load.tilemapTiledJSON("map", "../assets/tilemaps/simple-map.json");
        this.load.image(
            "kenney-tileset-64px-extruded",
            "../assets/tilesets/kenney-tileset-64px-extruded.png"
        );

        // An atlas is a way to pack multiple images together into one texture. For more info see:
        //  https://labs.phaser.io/view.html?src=src/animation/texture%20atlas%20animation.js
        this.load.atlas(
            "emoji",
            "../assets/atlases/emoji.png",
            "../assets/atlases/emoji.json"
        );
    }

    create() {
        const gameWidth = this.cameras.main.width;
        const gameHeight = this.cameras.main.height;
        const wallThickness = 100000020;
        const wallThicknessVisible = 20;

        const floor = this.add.rectangle(
            gameWidth / 2,
            gameHeight + wallThickness / 2 - wallThicknessVisible,
            gameWidth,
            wallThickness,
            0x666666
        );

        const roof = this.add.rectangle(
            gameWidth / 2,
            -wallThickness / 2 + wallThicknessVisible,
            gameWidth,
            wallThickness,
            0x666666
        );

        const leftWall = this.add.rectangle(
            -wallThickness / 2 + wallThicknessVisible,
            gameHeight / 2,
            wallThickness,
            gameHeight,
            0x666666
        );

        const rightWall = this.add.rectangle(
            gameWidth + wallThickness / 2 - wallThicknessVisible,
            gameHeight / 2,
            wallThickness,
            gameHeight,
            0x666666
        );

        const vertsLeft = [
            { x: 0, y: 0 },
            { x: 100, y: 0 },
            { x: 0, y: 100 },
        ];
        this.add.polygon(69, 60, Vertices.clockwiseSort(vertsLeft), 0x666666);

        const vertsRight = [
            { x: -100, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 100 },
        ];
        this.add.polygon(
            gameWidth - 60,
            60,
            Vertices.clockwiseSort(vertsRight),
            0x666666
        );

        this.matter.add.gameObject(floor, { isStatic: true });
        this.matter.add.gameObject(roof, { isStatic: true });
        this.matter.add.gameObject(leftWall, { isStatic: true });
        this.matter.add.gameObject(rightWall, { isStatic: true });
        this.matter.add.fromVertices(
            50,
            50,
            [Vertices.clockwiseSort(vertsLeft)],
            {
                isStatic: true,
            }
        );
        this.matter.add.fromVertices(
            gameWidth - 70,
            50,
            [Vertices.clockwiseSort(vertsRight)],
            {
                isStatic: true,
            }
        );
        // this.matter.add.gameObject(rightChamfer, { isStatic: true });

        // this.matter.add.fromVertices(200, 200, verts);

        // Create a physics-enabled image
        const image1 = this.matter.add.image(275, 100, "emoji", "1f92c");
        // Change it's body to a circle and configure its body parameters
        image1.setCircle(image1.width / 2, {
            restitution: 0.8,
            friction: 0,
            frictionAir: 0,
        });
        image1.setScale(0.5);
        image1.setVelocityX(-5);

        // const image2 = this.matter.add.image(300, 75, "emoji", "1f60d");
        // image2.setCircle(image2.width / 2, { restitution: 1, friction: 0.25 });
        // image2.setScale(0.5);

        // // We can also pass in our Matter body options directly into to this.matter.add.image, along with
        // // a Phaser "shape" property for controlling the type & size of the body
        // const image3 = this.matter.add
        //     .image(325, 100, "emoji", "1f4a9", {
        //         restitution: 1,
        //         friction: 0,
        //         shape: "circle",
        //     })
        //     .setScale(0.5);
    }
}

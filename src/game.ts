import "phaser";
import gameConfig from "./config";

import { Bodies, Engine, Render, Runner, World } from "matter-js";

export class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

window.addEventListener("load", () => {
    const game = new Game(gameConfig);
});

// const engine = Engine.create();
// const render = Render.create({
//     element: document.getElementById("game-container"),
//     engine: engine,
//     options: {
//         width: 800,
//         height: 600,
//         wireframes: false, // Draw the shapes as solid colors
//         background: "#f4f4f8",
//     },
// });

// // Create a rectangle centered at the top of the screen, (400, 0), with 120px width and 80px height
// const rectangle = Bodies.rectangle(400, 0, 120, 80, {
//     restitution: 0.25,
//     angle: Math.PI / 4,
// });

// // Create an immovable rectangle at the bottom of the screen that will act as the floor
// const floor = Bodies.rectangle(400, 575, 800, 50, { isStatic: true });

// // Add the newly minted bodies to our physics simulation
// World.add(engine.world, [rectangle, floor]);

// const DEGREES_TO_RADIANS = Math.PI / 180; // Helper to convert from degrees to radians

// const circle = Bodies.circle(400, -150, 50, { friction: 0, restitution: 1 });
// // Polygon parameters: x, y, number of sides, radius of the shape, body options. A three-sided
// // polygon will give us a triangle.
// const triangle = Bodies.polygon(400, 0, 3, 50, {
//     friction: 0,
//     restitution: 0.5,
// });

// // Create some vertical walls that are positioned just off screen.
// const leftWall = Bodies.rectangle(-25, 400, 50, 800, {
//     isStatic: true,
//     friction: 0,
// });
// const rightWall = Bodies.rectangle(825, 400, 50, 800, {
//     isStatic: true,
//     friction: 0,
// });

// // Create some bouncy, static obstacles in the world for our bodies to ricochet off of
// const obstacle1 = Bodies.circle(150, 200, 85, {
//     isStatic: true,
//     friction: 0,
//     restitution: 1,
// });
// const obstacle2 = Bodies.polygon(400, 400, 3, 75, {
//     isStatic: true,
//     angle: 90 * DEGREES_TO_RADIANS,
//     friction: 0,
//     restitution: 1,
// });
// const obstacle3 = Bodies.circle(650, 200, 85, {
//     isStatic: true,
//     friction: 0,
//     restitution: 1,
// });

// World.add(engine.world, [
//     rectangle,
//     triangle,
//     circle,
//     floor,
//     leftWall,
//     rightWall,
//     obstacle1,
//     obstacle2,
//     obstacle3,
// ]);

// // Kick off the simulation and the render loops
// Render.run(render);
// const runner = Runner.create();
// Runner.run(runner, engine);

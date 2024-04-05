import { Bodies, Engine, Render, Runner, World, Vector, Body, Events } from "matter-js";

const width = 1200;
const height = 600;
const wallThickness = 50000;

const keyPressed: Set<string> = new Set();

const engine = Engine.create();
const render = Render.create({
    element: document.getElementById("game-container"),
    engine: engine,
    options: {
        width,
        height,
        wireframes: false, // Draw the shapes as solid colors
        background: "#f4f4f8",
        hasBounds: true,
    },
    bounds: {
        min: Vector.create(0, 0),
        max: Vector.create(width, height),
    },
});

function createStaticShapeFromVertices(vertices: Vector[], position: Vector) {
    const toReturn = Bodies.fromVertices(0, 0, [vertices], {
        isStatic: true,
    });

    setStaticShapePosition(toReturn, position);

    return toReturn;
}

function setStaticShapePosition(body: Body, position: Vector) {
    Body.setPosition(
        body,
        Vector.create(position.x - body.bounds.min.x, position.y - body.bounds.min.y)
    );
}

function createMap() {
    World.add(
        engine.world,
        createStaticShapeFromVertices(
            [
                Vector.create(-wallThickness, 0),
                Vector.create(100, 0),
                Vector.create(20, height),
                Vector.create(-wallThickness, height),
            ],
            Vector.create(-wallThickness, 0)
        )
    );

    World.add(
        engine.world,
        createStaticShapeFromVertices(
            [
                Vector.create(wallThickness, 0),
                Vector.create(-100, 0),
                Vector.create(-20, height),
                Vector.create(wallThickness, height),
            ],
            Vector.create(width - 100, 0)
        )
    );

    const floor = Bodies.rectangle(0, 0, width, wallThickness, {
        isStatic: true,
    });
    setStaticShapePosition(floor, Vector.create(0, height - 20));

    const roof = Bodies.rectangle(0, 0, width, wallThickness, {
        isStatic: true,
    });
    setStaticShapePosition(roof, Vector.create(0, -wallThickness + 20));

    const leftGoalTop = Bodies.rectangle(0, 0, 200, 20, { isStatic: true });
    setStaticShapePosition(leftGoalTop, Vector.create(0, height - 250));

    const rightGoalTop = Bodies.rectangle(0, 0, 200, 20, { isStatic: true });
    setStaticShapePosition(rightGoalTop, Vector.create(width - 200, height - 250));

    World.add(engine.world, floor);
    World.add(engine.world, roof);
    World.add(engine.world, leftGoalTop);
    World.add(engine.world, rightGoalTop);
}

const player1 = Bodies.circle(width - 300, height - 100, 50, {
    render: { fillStyle: "blue" },
    friction: 10,
    frictionStatic: 10,
});
const player2 = Bodies.circle(300, height - 100, 50, {
    render: { fillStyle: "green" },
    friction: 10,
    frictionStatic: 10,
});
const ball = Bodies.circle(width / 2, height - 100, 20, {
    render: { fillStyle: "red" },
    friction: 10,
    frictionStatic: 10,
});

document.addEventListener("keydown", (event) => {
    console.log(event.key);

    keyPressed.add(event.key);
});

document.addEventListener("keyup", (event) => {
    keyPressed.delete(event.key);
});

function calculateMovement() {
    console.log("tick");
    if (keyPressed.has("ArrowLeft")) {
        Body.setVelocity(player1, Vector.create(-5, player1.velocity.y));
    } else if (keyPressed.has("ArrowRight")) {
        Body.setVelocity(player1, Vector.create(+5, player1.velocity.y));
    }
    if (keyPressed.has("ArrowUp")) {
        Body.setVelocity(player1, Vector.create(player1.velocity.x, player1.velocity.y - 10));
    }

    if (keyPressed.has("a")) {
        Body.setVelocity(player2, Vector.create(-5, player2.velocity.y));
    } else if (keyPressed.has("d")) {
        Body.setVelocity(player2, Vector.create(+5, player2.velocity.y));
    }
    if (keyPressed.has("w")) {
        Body.setVelocity(player2, Vector.create(player2.velocity.x, player2.velocity.y - 10));
    }
}

setInterval(() => calculateMovement(), 50);

World.add(engine.world, [player1, player2, ball]);
createMap();

Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);

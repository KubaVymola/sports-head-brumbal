import { BootScene } from "./scenes/boot-scene";
import { GameScene } from "./scenes/game-scene";

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: "Sports head brumbal",
    version: "0.0.1",
    type: Phaser.AUTO,
    scene: GameScene,
    input: {
        keyboard: true,
        gamepad: true,
    },
    physics: {
        default: "matter",
        matter: {
            gravity: { x: 0, y: 1 },
            setBounds: {
                left: true,
                right: true,
                bottom: true,
                top: true,
            },
            debug: true,
        },
    },
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "game",
        width: 1024,
        height: 768,
    },
    backgroundColor: 0x000000,
    render: { pixelArt: true },
};

export default gameConfig;

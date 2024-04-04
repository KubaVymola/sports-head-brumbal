import { BootScene } from "./scenes/boot-scene";
import { GameScene } from "./scenes/game-scene";

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: "Sports head brumbal",
    version: "0.0.1",
    type: Phaser.AUTO,
    scene: [BootScene, GameScene],
    input: {
        keyboard: true,
        gamepad: true,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 0 },
        },
    },
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "game",
        width: 1024,
        height: 768,
    },
    backgroundColor: 0x262626,
    render: { pixelArt: true },
};

export default gameConfig;

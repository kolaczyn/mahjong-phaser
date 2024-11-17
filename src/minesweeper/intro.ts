import Phaser from "phaser";

export class Intro extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    console.log("preload");
    this.load.setBaseURL("https://cdn.phaserfiles.com/v385");
    this.load.setPath("https://labs.phaser.io/assets/games/minesweeper/");

    this.load.spritesheet("tiles", "tiles.png", { frameWidth: 16 });
    this.load.spritesheet("digits", "digits.png", {
      frameWidth: 13,
      frameHeight: 23,
      endFrame: 9,
    });
    this.load.spritesheet("buttons", "digits.png", {
      frameWidth: 26,
      frameHeight: 26,
      startFrame: 5,
    });
    this.load.image("topLeft", "top-left.png");
    this.load.image("topRight", "top-right.png");
    this.load.image("topBg", "top-bg.png");
    this.load.image("botLeft", "bot-left.png");
    this.load.image("botRight", "bot-right.png");
    this.load.image("botBg", "bot-bg.png");
    this.load.image("left", "left.png");
    this.load.image("right", "right.png");
    this.load.image("intro", "intro.png");
  }

  create() {
    console.log("create");
    this.input.mouse.disableContextMenu();

    this.highlight = this.add
      .rectangle(0, 334, 800, 70, 0x0182fb)
      .setOrigin(0)
      .setAlpha(0.75);

    this.intro = this.add.image(0, 0, "intro").setOrigin(0);

    const zone1 = this.add.zone(0, 334, 400, 70).setOrigin(0);
    const zone2 = this.add.zone(0, 411, 800, 70).setOrigin(0);
    const zone3 = this.add.zone(0, 488, 800, 70).setOrigin(0);

    zone1.setInteractive();
    zone2.setInteractive();
    zone3.setInteractive();

    zone1.on("pointerover", () => {
      this.highlight.y = zone1.y;
    });

    zone2.on("pointerover", () => {
      this.highlight.y = zone2.y;
    });

    zone3.on("pointerover", () => {
      this.highlight.y = zone3.y;
    });

    zone1.once("pointerdown", () => {
      this.startGame(9, 9, 10);
    });

    zone2.once("pointerdown", () => {
      this.startGame(16, 16, 40);
    });

    zone3.once("pointerdown", () => {
      this.startGame(16, 30, 99);
    });
  }

  startGame(width, height, bombs) {
    this.scene.start("MineSweeper", {
      width,
      height,
      bombs,
    });
  }
}

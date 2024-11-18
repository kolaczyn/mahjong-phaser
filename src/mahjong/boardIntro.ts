import { tiles } from "./tiles.ts";
import { HandScene } from "./handScene.ts";

export class BoardIntro extends Phaser.Scene {
  preload() {
    this.load.setBaseURL("/public/tiles");

    // TODO this should be a spritesheet
    this.load.image(tiles.man1, "man1.png");
    this.load.image(tiles.greenDragon, "Dragons/Green.png");
  }

  create() {
    new HandScene(this);
  }
}

import Phaser from "phaser";
import { Grid } from "./grid.ts";

export class MineSweeper extends Phaser.Scene {
  constructor() {
    super("MineSweeper");
  }

  init(data) {
    this.width = data.width;
    this.height = data.height;
    this.bombs = data.bombs;
  }

  preload() {
    this.load.setBaseURL("https://cdn.phaserfiles.com/v385");
    this.load.setPath("https://labs.phaser.io/assets/games/minesweeper/");

    this.load.image("win95", "win95.png");
  }

  create() {
    this.add.image(0, 0, "win95").setOrigin(0);

    this.grid = new Grid(this, this.width, this.height, this.bombs);
  }
}

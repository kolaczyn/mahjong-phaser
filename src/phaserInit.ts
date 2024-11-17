import Phaser from "phaser";
import { config } from "./minesweeper/config";

export const phaserInit = () => {
  new Phaser.Game(config);
};

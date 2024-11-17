import Phaser from "phaser";
import { minesweeperConfig } from "./minesweeper/minesweeperConfig.ts";
import { mahjongConfig } from "./mahjong/config.ts";

const showMinesweeper = false;

export const phaserInit = () => {
  const config = showMinesweeper ? minesweeperConfig : mahjongConfig;

  new Phaser.Game(config);
};

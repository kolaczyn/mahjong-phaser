import Phaser from "phaser";
import GameConfig = Phaser.Types.Core.GameConfig;
import { MineSweeper } from "./minesweeper.ts";
import { Intro } from "./intro.ts";

export const minesweeperConfig: GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x2e874a,
  parent: "riichi-mahjong",
  scene: [Intro, MineSweeper],
};

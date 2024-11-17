import GameConfig = Phaser.Types.Core.GameConfig;
import { BoardIntro } from "./boardIntro.ts";

export const mahjongConfig: GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x2e874a,
  scene: [BoardIntro],
};

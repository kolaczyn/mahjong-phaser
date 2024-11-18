import GameConfig = Phaser.Types.Core.GameConfig;
import { BoardIntro } from "./boardIntro.ts";

export const mahjongConfig: GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  dom: {
    createContainer: true,
  },
  parent: "body",
  backgroundColor: 0x2e874a,
  scene: [BoardIntro],
};

import { useStore } from "./store.ts";

export class BoardIntro extends Phaser.Scene {
  preload() {
    this.load.setBaseURL("/public/tiles");

    // TODO this should be a spritesheet
    this.load.image("man1", "man1.png");
    this.load.image("dragons/green", "Dragons/Green.png");
  }

  create() {
    const man1 = this.add.image(200, 300, "man1");
    man1.setScale(0.1);

    man1.setInteractive();
    man1.on("pointerdown", () => {
      useStore.getState().increasePopulation();
      console.log("there are", useStore.getState().bears, "of bears");
    });

    const dragon = this.add.image(200, 400, "dragons/green");
    dragon.setScale(0.1);

    useStore.subscribe((x) => {
      dragon.setScale(x.bears * 0.1);
    });
  }
}

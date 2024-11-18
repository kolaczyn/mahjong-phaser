import { useStore } from "./store.ts";
import { tiles } from "./tiles.ts";

export class HandScene {
  scene!: Phaser.Scene;
  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    this.create();
  }

  create() {
    const man1 = this.scene.add.image(200, 300, "man1");
    man1.setScale(0.1);

    man1.setInteractive();
    man1.on("pointerdown", () => {
      useStore.getState().increasePopulation();
      console.log("there are", useStore.getState().bears, "of bears");
    });

    const dragon = this.scene.add.image(200, 400, tiles.greenDragon);
    dragon.setScale(0.1);

    useStore.subscribe((x) => {
      dragon.setScale(x.bears * 0.1);
    });
  }
}

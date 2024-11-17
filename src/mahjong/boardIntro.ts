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

    const dragon = this.add.image(200, 400, "dragons/green");
    dragon.setScale(0.1);
  }
}

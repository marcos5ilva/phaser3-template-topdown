import phaser from 'phaser';
import PreloadScene from './Preload';
import PlayScene from './Play';

export default class Menu extends Phaser.Scene {
  constructor() {
    super({ key: 'Menu', active: false });
  }

  init() {}

  preload() {}

  create() {
    console.log(this);

    this.scene.add('Play', PlayScene);

    //Game title
    this.text = this.add.text(
      this.game.CONFIG.centerX,
      this.game.CONFIG.centerY,
      'Game Title'
    );

    //Click to play text
    this.text = this.add.text(
      this.game.CONFIG.centerX,
      this.game.CONFIG.centerY + 75,
      'click to play'
    );

    //Create keyboard input
    this.createKeyboardInput();

    //Create Mouse input
    this.createMouseInput();
  }

  createMouseInput() {
    this.input.on('pointerup', this.startPlay, this);
  }

  createKeyboardInput() {
    function handleKeyUp(e) {
      switch (e.code) {
        case 'Enter':
          this.startPlay();
          break;
      }
    }
    this.input.keyboard.on('keyup', handleKeyUp, this);
  }

  startPlay() {
    this.scene.start('Play');
  }
}

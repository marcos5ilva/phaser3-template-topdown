import phaser from 'phaser';
import MenuScene from './Menu';

//load player spritesheet image
import sprPlayer from '../assets/img/dude.png';

export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: 'Preload' });
  }

  init() {
    this.URL = this.sys.game.URL;
    this.CONFIG = this.sys.game.CONFIG;
  }

  preload() {
    //load player spritesheet and add frameWidth, and frameHeight
    this.load.spritesheet('spr-player', sprPlayer, {
      frameWidth: 32,
      frameHeight: 48,
    });

    //Create loading bar
    this.createLoadingBar();
  }

  create() {
    console.log('Preload  loaded');

    //Create Animations
    this.createAllAnims();

    //Game title

    //Click to play
    this.scene.add('Menu', MenuScene);
    this.scene.start('Menu');
  }

  createLoadingBar() {
    //Title
    //Progress text
    //Progress bar
  }

  startPlay() {
    this.scene.start('Play');
  }

  createAllAnims() {
    //walking
    this.anims.create({
      key: 'spr-player-walk',
      frames: this.anims.generateFrameNames('spr-player', {
        frames: [0, 1, 0, 2],
      }),
      repeat: -1,
      frameRate: 10,
    });
  }
}

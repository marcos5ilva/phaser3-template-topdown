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
      key: 'spr-player-walk-left',
      frames: this.anims.generateFrameNames('spr-player', {
        frames: [0, 1, 2, 3],
      }),
      repeat: -1,
      frameRate: 7,
    });

    this.anims.create({
      key: 'spr-player-walk-right',
      frames: this.anims.generateFrameNames('spr-player', {
        frames: [5, 6, 7, 8],
      }),
      repeat: -1,
      frameRate: 7,
    });

    this.anims.create({
      key: 'spr-player-walk-up',
      frames: this.anims.generateFrameNames('spr-player', {
        frames: [0, 1, 2, 3],
      }),
      repeat: -1,
      frameRate: 7,
    });

    this.anims.create({
      key: 'spr-player-walk-down',
      frames: this.anims.generateFrameNames('spr-player', {
        frames: [0, 1, 2, 3],
      }),
      repeat: -1,
      frameRate: 7,
    });

    this.anims.create({
      key: 'spr-player-idle',
      frames: this.anims.generateFrameNames('spr-player', {
        frames: [4, 5],
      }),
      repeat: -1,
      frameRate: 3,
    });
  }
}

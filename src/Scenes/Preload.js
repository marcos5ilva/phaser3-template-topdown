import phaser from 'phaser';
import MenuScene from './Menu';
import spHero from '../assets/img/playerGirl.png';

export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: 'Preload' });
  }

  init() {
    this.URL = this.sys.game.URL;
    this.CONFIG = this.sys.game.CONFIG;
  }

  preload() {
    //Create loading bar
    this.createLoadingBar();

    //this.load.setPath('assets/img');

    this.load.spritesheet('sp-hero', spHero, {
      frameWidth: 16,
      frameHeight: 17,
    });
  }

  create() {
    console.log('Preload  loaded');

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
}

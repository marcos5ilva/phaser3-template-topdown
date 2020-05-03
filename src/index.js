import Phaser from 'phaser';
import config from './config';
import BootScene from './Scenes/Boot';
import PreloadScene from './Scenes/Preload';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.IS_DEV = 'In development';
    this.VERSION = 0.01;

    //GLOBALS
    this.CONFIG = {
      width: config.width,
      height: config.height,
      centerX: Math.round(0.5 * config.width),
      centerY: Math.round(0.5 * config.height),
      title: 16,
    };
    //adding scenes to the game

    this.scene.add('Boot', BootScene);

    this.scene.start('Boot');
  }
}

window.game = new Game();

//let game = new Game();
//Globals

//game.IS_DEV = this.IS_DEV;
//game.VERSION = this.VERSION;

//game.URL = '';
/*
window.game.CONFIG = {
  width: config.width,
  height: config.height,
  centerX: Math.round(0.5 * config.width),
  CenterY: Math.round(0.5 * config.height),
  title: 16,
};*/

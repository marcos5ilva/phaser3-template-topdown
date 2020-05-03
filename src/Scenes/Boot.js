import phaser from 'phaser';
import PreloadScene from './Preload';

export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot', active: true });
  }

  init() {}

  preload() {}

  create() {
    console.log('Boot loaded');
    this.scene.add('Preload', PreloadScene);
    this.scene.start('Preload');
  }
}

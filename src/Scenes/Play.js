import phaser from 'phaser';
import Entity from '../prefabs/Entity';

import logoImg from '../assets/logo.png';

//load player spritesheet image
import sprPlayer from '../assets/img/dude.png';

export default class PlayScene extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  preload() {
    //this.load.image('logo', logoImg);

    //load player spritesheet and add frameWidth, and frameHeight
    this.load.spritesheet('spr-player', sprPlayer, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    console.log('Play scene loaded');
    //const logo = this.add.image(400, 150, 'logo');

    //Create a player based on the Entity prefab
    this.createPlayer();
  }

  createPlayer() {
    //Create a player instance of the Entity prefab
    this.player = new Entity(
      this,
      this.game.CONFIG.centerX,
      this.game.CONFIG.centerY,
      'spr-player'
    );

    this.player.createSprite();
  }
}

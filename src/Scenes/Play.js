import phaser from 'phaser';
import Entity from '../prefabs/Entity';
import Player from '../prefabs/Player';

import logoImg from '../assets/logo.png';

export default class PlayScene extends Phaser.Scene {
  constructor(key) {
    super(key);

    //Controls
    this.is_holding = {
      up: false,
      down: false,
      left: false,
      right: false,
      direction: false,
    };
  }

  preload() {
    //this.load.image('logo', logoImg);
  }

  create() {
    console.log('Play scene loaded');
    //const logo = this.add.image(400, 150, 'logo');

    ///Create controls
    this.createControls();

    //Create a player based on the Entity prefab
    this.createPlayer();
  }

  update() {
    //pass input control to the player prefab
    this.player.update(this.cursors);
  }

  createPlayer() {
    //Create a player instance of the Entity prefab
    this.player = new Player(
      this,
      this.game.CONFIG.centerX,
      this.game.CONFIG.centerY,
      'spr-player'
    );

    this.player.createSprite();
    if (this.player.spr) {
      //this.player.startNewAnim('walk');
    }
  }

  createControls() {
    ///listen for keyboard  input
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    //Add input callbacks
  }
}

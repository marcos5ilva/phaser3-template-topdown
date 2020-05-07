export default class Entity {
  constructor(ctx, x, y, key) {
    //ctx = context
    //this.MAP_OFFSET = ctx.game.CONFIG.map_offset;
    //this.TILE_SIZE = ctx.game.CONFIG.tile;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.key = key;

    this.frames = {
      idle: 4,
      hurt: 3,
    };

    //animation states
    this.state = {
      idle: true,
      walk: false,
      hurt: false,
      dead: false,
      attack: false,
      last: false,
    };

    this.direction = {
      last: false,
      current: 'down',
    };

    this.health = {
      total: 1,
      current: 1,
    };

    this.speed = {
      base: 0,
      current: 0,
      max: 0,
    };
  }

  createSprite() {
    if (this.spr) {
      this.spr.destroy();
    }

    this.spr = this.ctx.physics.add.sprite(this.x, this.y, this.key);

    this.spr.setOrigin(0.5);
  }

  destroySprite() {
    if (this.spr) {
      this.spr.destroy();
    }
    this.spr = false;
  }

  updateSpriteDirection() {
    switch (this.direction.current) {
      case 'left':
        this.spr.setAngle(90);
        break;
      case 'left':
        this.spr.setAngle(90);
        break;
      case 'right':
        this.spr.setAngle(-90);
        break;
      case 'up':
        this.spr.setAngle(100);
        break;
      case 'down':
        this.spr.setAngle(0);
        break;
    }
  }

  //Animations
  startNewAnim(key) {
    // this.stopAnim();

    switch (key) {
      case 'idle':
        this.startIdleAnim();
        console.log('switch start idle anim');
        break;
      case 'walk-left':
        this.startWalkLeftAnim();
        console.log('switch walk left');
        break;
      case 'walk-right':
        this.startWalkRightAnim();
        break;
      case 'walk-up':
        this.startWalkUpAnim();
        break;
      case 'walk-down':
        this.startWalkDownAnim();
        break;
      case 'attack':
        this.startAttackAnim();
        break;
      case 'hurt':
        this.startHurtAnim();
        break;
      case 'die':
        this.startDieAnim();
        break;

      default:
        console.log(this.key + ' invalid ANIM key ', key);
        break;
    }
  }

  startIdleAnim() {
    console.log('starting idle anim');
    this.spr.play(this.key + '-idle', true);
  }

  startWalkAnim() {
    console.log('startWalkAnim()', this.spr);
    this.spr.play(this.key + '-walk-left', true);
  }

  startWalkLeftAnim() {
    this.spr.play(this.key + '-walk-left', true);
  }

  startWalkRightAnim() {
    this.spr.play(this.key + '-walk-right', true);
  }

  startWalkUpAnim() {
    this.spr.play(this.key + '-walk-up', true);
  }

  startWalkDownAnim() {
    this.spr.play(this.key + '-walk-down', true);
  }

  startAttackAnim() {
    this.spr.play(this.key + '-attack', true);
  }

  startHurtAnim() {
    this.spr.play(this.key + '-hurt', true);
  }

  startDieAnim() {
    this.spr.play(this.key + '-die', true);
  }

  stopAnim() {
    this.spr.anims.stop();
    // this.spr.setFrame(this.frames.idle, true);
  }

  //Animation control
  animControl() {
    console.log('animControl state.walk ', this.state.walk);
    if (!this.state.walk) {
      this.stopAnim();
      /*switch (this.direction.current) {
        case 'up':
          this.startNewAnim('walk-up');
          break;
        case 'down':
          this.startNewAnim('walk-down');
          break;
        case 'left':
          this.startNewAnim('walk-left');
          break;
        case 'right':
          this.startNewAnim('walk-right');
          break;
      }*/
    } else {
      this.startNewAnim(`walk+${this.state.direction}`);
    }
  }
}

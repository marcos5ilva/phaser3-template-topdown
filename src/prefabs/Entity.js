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
      idle: 0,
      hurt: 3,
    };

    //animation states
    this.states = {
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
    this.spr = this.ctx.add.sprite(this.x, this.y, this.key);
    console.log('this.spr ', this.spr);
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
    this.stopAnim();

    switch (key) {
      case 'idle':
        this.startIdleAnim();
        break;
      case 'walk':
        this.startWalkAnim();
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
    this.spr.play(this.key + '-idle');
  }

  startWalkAnim() {
    console.log('startWalkAnim()', this.spr);
    this.spr.play(this.key + '-walk');
  }

  startAttackAnim() {
    this.spr.play(this.key + '-attack');
  }

  startHurtAnim() {
    this.spr.play(this.key + '-hurt');
  }

  startDieAnim() {
    this.spr.play(this.key + '-die');
  }

  stopAnim() {
    this.spr.anims.stop();
    this.spr.setFrame(this.frames.idle);
  }
}

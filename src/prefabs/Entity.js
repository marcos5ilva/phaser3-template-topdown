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
}

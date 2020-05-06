import Entity from './Entity';
export default class Player extends Entity {
  constructor(ctx, x, y, key) {
    super(ctx, x, y, key);

    this.CONFIG = {
      velocity: 150,
    };

    console.log('player class ', this);
  }

  update(cursors) {
    this.spr.setVelocity(0);

    //check up or down keys
    if (cursors.up.isDown) {
      this.spr.setVelocityY(-this.CONFIG.velocity);
    } else if (cursors.down.isDown) {
      this.spr.setVelocityY(this.CONFIG.velocity);
    }

    //check left or right keys
    if (cursors.left.isDown) {
      this.spr.setVelocityX(-this.CONFIG.velocity);
    } else if (cursors.right.isDown) {
      this.spr.setVelocityX(this.CONFIG.velocity);
    }
  }
}

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
    this.state.walk = false;

    //check up or down keys
    if (cursors.up.isDown) {
      this.spr.setVelocityY(-this.CONFIG.velocity);
      this.direction.current = 'up';
      this.state.walk = true;
    } else if (cursors.down.isDown) {
      this.spr.setVelocityY(this.CONFIG.velocity);
      this.direction.current = 'down';

      this.state.walk = true;
    }

    //check left or right keys
    if (cursors.left.isDown) {
      this.spr.setVelocityX(-this.CONFIG.velocity);
      this.direction.current = 'left';
      this.state.walk = true;
    } else if (cursors.right.isDown) {
      this.spr.setVelocityX(this.CONFIG.velocity);
      this.direction.current = 'right';
      this.state.walk = true;
    }

    if (!this.state.walk) {
      //this.startIdleAnim();
      this.startNewAnim('idle');
    } else {
      this.startNewAnim(`walk-${this.direction.current}`);
    }

    //this.animControl();
  }
}

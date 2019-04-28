import Car from '../classes/Car';
import Utils from '../classes/mathHelpers';

class gameScene extends Phaser.Scene {
  constructor(test) {
    super({
      key: 'gameScene'
    });
  }
  create() {
    //this.camera = this.cameras3d.add(90).setPosition(0, -40, 100).setPixelScale(64);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.utils = new Utils(this);

    this.playerCar = new Car({
      scene: this,
      key: 'car',
      x: this.sys.game.config.width/2,
      y: this.sys.game.config.height/2
    });
  }
  update() {

    if (this.cursors.up.isDown) {
      this.playerCar.y += 1;
    } else if (this.cursors.down.isDown) {
      this.playerCar.y -= 1;
    }
  }
}
export default gameScene;

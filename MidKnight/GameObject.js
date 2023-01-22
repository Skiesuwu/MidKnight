export default class GameObject {
  constructor() {
    this.vertices = [];
    this.color = [1, 1, 1];
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
  }

  update() {}

  draw(renderer) {
    renderer.draw(this);
  }
}

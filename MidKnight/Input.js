export default class Input {
  constructor() {
    this.keyboard = {};
    this.mouse = { x: 0, y: 0, leftButton: false, rightButton: false };
    this.bindKeys();
    this.bindMouse();
  }

  bindKeys() {
    document.addEventListener('keydown', (e) => {
      this.keyboard[e.code] = true;
    });
    document.addEventListener('keyup', (e) => {
      this.keyboard[e.code] = false;
    });
  }

  bindMouse() {
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    document.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        this.mouse.leftButton = true;
      } else if (e.button === 2) {
        this.mouse.rightButton = true;
      }
    });
    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.mouse.leftButton = false;
      } else if (e.button === 2) {
        this.mouse.rightButton = false;
      }
    });
  }
}

export default class Animations {
  constructor() {
    this.frameId = null;
    this.callback = null;
  }

  start(callback) {
    this.callback = callback;
    this.frameId = requestAnimationFrame(this.animate.bind(this));
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate(timestamp) {
    this.callback(timestamp);
    this.frameId = requestAnimationFrame(this.animate.bind(this));
  }
}

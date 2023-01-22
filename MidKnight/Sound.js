export default class Sound {
  constructor() {
    this.sounds = {};
  }

  loadSound(key, path) {
    let sound = new Audio(path);
    this.sounds[key] = sound;
  }

  playSound(key) {
    let sound = this.sounds[key];
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  }

  stopSound(key) {
    let sound = this.sounds[key];
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
    }
  }
}

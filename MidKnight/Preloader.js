export default class Preloader {
  constructor() {
    this.loaded = false;
    this.assets = {
      images: {},
      audio: {},
      fonts: {},
    };
  }

  load() {
    for (let key in this.assets.images) {
      this.assets.images[key] = new Image();
      this.assets.images[key].src = key;
      this.assets.images[key].addEventListener(
        'load',
        this.onAssetLoaded.bind(this)
      );
    }

    for (let key in this.assets.audio) {
      this.assets.audio[key] = new Audio();
      this.assets.audio[key].src = key;
      this.assets.audio[key].addEventListener(
        'canplaythrough',
        this.onAssetLoaded.bind(this)
      );
    }

    for (let key in this.assets.fonts) {
      this.assets.fonts[key] = key;
      this.onAssetLoaded();
    }
  }

  onAssetLoaded() {
    this.assetsLoaded++;
    if (this.assetsLoaded === Object.keys(this.assets).length) {
      this.loaded = true;
    }
  }
}

import Animations from './Animations.js';
import GameObject from './GameObject.js';
import Input from './Input.js';
import Physics from './Physics.js';
import Preloader from './Preloader.js';
import Renderer from './Renderer.js';
import Sound from './Sound.js';
import State from './State.js';
import Utils from './Utils.js';
import Net from './Network/Net.js';

export default class Game {
  constructor(
    canvas,
    rendererConfig = {
      vertexShaderSource: null,
      fragmentShaderSource: null,
      clearColor: {},
    }
  ) {
    this.gameObjects = [];
    this.preloader = new Preloader();
    this.renderer = new Renderer(
      canvas,
      rendererConfig.vertexShaderSource,
      rendererConfig.fragmentShaderSource,
      rendererConfig.clearColor
    );
    this.physics = new Physics();
    this.input = new Input();
    this.sound = new Sound();
    this.network = new Net();
    this.state = new State();
    this.animations = new Animations();
    this.utils = new Utils();
    this.gameObject = new GameObject();
    this.objects = [];

    this.gameObjects = [];

    this.start();
  }

  addObject(obj) {
    this.objects.push(obj);
  }

  start() {
    this.preloader.load();
    this.animations.start(() => {
      this.physics.update(0);
      this.renderer.clear();
      this.gameObjects.forEach((gobj) => gobj === this.gameObject.update());
    });
  }
}

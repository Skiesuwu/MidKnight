import MidKnight from '../MidKnight/lib/index.js';

const vertexShaderSource = `
  attribute vec2 a_position;

  void main() {
    gl_Position = vec4(a_position, 0, 1);
  }
`;

const fragmentShaderSource = `
  precision mediump float;

  void main() {
    gl_FragColor = vec4(1, 0, 0, 1);
  }
`;

const clearColor = { red: 0, green: 0, blue: 0, alpha: 1 };

const canvas = document.getElementById('123');
const game = new MidKnight.Game(canvas, {
  vertexShaderSource,
  fragmentShaderSource,
  clearColor,
});

game.renderer.clear();

game.renderer.setVertices([0, 0, 0, 0.5, 0.7, 0]);
game.renderer.render(0, 3);

game.start();

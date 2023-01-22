export default class Renderer {
  constructor(canvas, vertexShaderSource, fragmentShaderSource, clearColor) {
    this.gl = canvas.getContext('webgl');

    this.width = innerWidth;
    this.height = innerHeight;

    this.gl.clearColor(
      clearColor.red,
      clearColor.green,
      clearColor.blue,
      clearColor.alpha
    );

    this.vertexShader = this.createShader(
      this.gl.VERTEX_SHADER,
      vertexShaderSource
    );
    this.fragmentShader = this.createShader(
      this.gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );

    this.program = this.createProgram();

    this.positionAttributeLocation = this.gl.getAttribLocation(
      this.program,
      'a_position'
    );

    this.positionBuffer = this.gl.createBuffer();

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

    this.gl.enableVertexAttribArray(this.positionAttributeLocation);

    var size = 2;
    var type = this.gl.FLOAT;
    var normalize = false;
    var stride = 0;
    var offset = 0;

    this.gl.vertexAttribPointer(
      this.positionAttributeLocation,
      size,
      type,
      normalize,
      stride,
      offset
    );
  }

  createShader(type, source) {
    const shader = this.gl.createShader(type);

    this.gl.shaderSource(shader, source);

    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      console.error(
        `Error compiling ${
          type === this.gl.VERTEX_SHADER ? 'vertex' : 'fragment'
        } shader: ${this.gl.getShaderInfoLog(shader)}`
      );
      return null;
    }

    return shader;
  }

  createProgram() {
    // Create program
    const program = this.gl.createProgram();

    // Attach shaders
    this.gl.attachShader(program, this.vertexShader);
    this.gl.attachShader(program, this.fragmentShader);

    // Link program
    this.gl.linkProgram(program);

    // Check for linking errors
    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      console.error(
        `Error linking program: ${this.gl.getProgramInfoLog(program)}`
      );
      return null;
    }

    return program;
  }

  setVertices(vertices) {
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(vertices),
      this.gl.STATIC_DRAW
    );
  }

  clear() {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  render(offset, count) {
    this.gl.useProgram(this.program);

    this.clear();

    var primitiveType = this.gl.TRIANGLES;
    var offset = 0;
    var count = 3;
    this.gl.drawArrays(primitiveType, offset, count);
  }
}

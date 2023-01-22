export default class Physics {
  constructor() {
    this.bodies = [];
  }

  addBody(body) {
    this.bodies.push(body);
  }

  update(dt) {
    for (let i = 0; i < this.bodies.length; i++) {
      let bodyA = this.bodies[i];
      for (let j = i + 1; j < this.bodies.length; j++) {
        let bodyB = this.bodies[j];
        if (this.checkCollision(bodyA, bodyB)) {
          this.resolveCollision(bodyA, bodyB);
        }
      }
    }
  }

  checkCollision(bodyA, bodyB) {
    if (bodyA.shape === 'circle' && bodyB.shape === 'circle') {
      return this.checkCircleCircleCollision(bodyA, bodyB);
    } else if (bodyA.shape === 'circle' && bodyB.shape === 'rectangle') {
      return this.checkCircleRectangleCollision(bodyA, bodyB);
    } else if (bodyA.shape === 'rectangle' && bodyB.shape === 'circle') {
      return this.checkCircleRectangleCollision(bodyB, bodyA);
    } else if (bodyA.shape === 'rectangle' && bodyB.shape === 'rectangle') {
      return this.checkRectangleRectangleCollision(bodyA, bodyB);
    }
  }

  resolveCollision(bodyA, bodyB) {
    // resolve collision between two bodies
    // ...
  }

  checkCircleCircleCollision(bodyA, bodyB) {
    let dx = bodyA.x - bodyB.x;
    let dy = bodyA.y - bodyB.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    return distance < bodyA.radius + bodyB.radius;
  }

  checkCircleRectangleCollision(circle, rectangle) {
    let cx = Math.abs(circle.x - rectangle.x - rectangle.width / 2);
    let cy = Math.abs(circle.y - rectangle.y - rectangle.height / 2);

    if (cx > rectangle.width / 2 + circle.radius) {
      return false;
    }
    if (cy > rectangle.height / 2 + circle.radius) {
      return false;
    }

    if (cx <= rectangle.width / 2) {
      return true;
    }
    if (cy <= rectangle.height / 2) {
      return true;
    }

    let cornerDistance_sq =
      (cx - rectangle.width / 2) ** 2 + (cy - rectangle.height / 2) ** 2;

    return cornerDistance_sq <= circle.radius ** 2;
  }

  checkRectangleRectangleCollision(rectA, rectB) {
    // check for collision between two rectangles
    // ...
  }
}

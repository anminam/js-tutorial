class Paticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() + 0.5;
    this.speed = Math.random() * 3 + 0.5;
  }

  draw() {
    cm.context.beginPath();
    cm.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    cm.context.fill();
  }
}

class Line {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 300;

    const particleLength = 30;
    this.particles = [];
    for (let i = 0; i < particleLength; i++) {
      this.particles.push(new Paticle(this.x, this.y));
    }
  }

  draw() {
    cm.context.beginPath();
    cm.context.moveTo(this.x, this.y);
    cm.context.lineTo(this.x, this.y - this.height);
    cm.context.stroke();

    let particel;
    for (let i = 0; i < this.particles.length; i++) {
      particel = this.particles[i];
      particel.y -= particel.speed;
      if (particel.y < this.y - this.height) {
        particel.y = this.y;
      }
      particel.draw();
    }
  }
}

class Light {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 300;

    const lineLength = 5;
    this.lines = [];

    for (let i = 0; i < lineLength; i++) {
      this.lines.push(
        new Line(
          this.x + (Math.random() + this.width - this.width * 0.5),
          this.y
        )
      );
    }
  }
}

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
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.height = 300;

    const gradientStartY =
      cm.canvasHight - (this.height + (cm.canvasHight - this.y));
    this.gradient = cm.context.createLinearGradient(
      0,
      gradientStartY,
      0,
      this.y
    );
    this.gradient.addColorStop(0, `rgba(${cm.colors2[index]}, 0)`);
    this.gradient.addColorStop(0.5, `rgba(${cm.colors2[index]}, 0.5)`);
    this.gradient.addColorStop(1, `rgba(${cm.colors2[index]}, 0.8)`);

    const particleLength = 30;
    this.particles = [];
    for (let i = 0; i < particleLength; i++) {
      this.particles.push(new Paticle(this.x, this.y));
    }
  }

  draw() {
    cm.context.strokeStyle = this.gradient;

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
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 300;
    this.angle = 0;

    const lineLength = 5;
    this.lines = [];

    for (let i = 0; i < lineLength; i++) {
      const x = this.x + (Math.random() * this.width - this.width * 0.5);
      this.lines.push(new Line(index, x, this.y));
    }

    this.gradient = cm.context.createLinearGradient(
      0,
      cm.canvasHight - (this.height + (cm.canvasHight - this.y)),
      0,
      this.y
    );

    this.gradient.addColorStop(0, `rgba(${cm.colors[index]}, 0)`);
    this.gradient.addColorStop(0.5, `rgba(${cm.colors[index]}, 0.5)`);
    this.gradient.addColorStop(0.75, `rgba(${cm.colors[index]}, 0.5)`);
    this.gradient.addColorStop(1, `rgba(${cm.colors[index]}, 1)`);
  }

  draw() {
    cm.context.fillStyle = this.gradient;

    cm.context.save();
    cm.context.filter = "blur(20px)";
    cm.context.beginPath();
    cm.context.ellipse(
      this.x,
      this.y,
      this.width * 2 +
        Math.abs(Math.sin(((this.angle * Math.PI) / 180) * 30)) * 5,
      this.width * 0.5 +
        Math.abs(Math.sin(((this.angle * Math.PI) / 180) * 30)) * 5,
      0,
      0,
      Math.PI * 2
    );
    cm.context.fill();
    this.angle++;

    cm.context.filter = "blur(5px)";
    cm.context.beginPath();
    cm.context.ellipse(
      this.x,
      this.y,
      this.width * 2,
      this.width * 0.5,
      0,
      0,
      Math.PI * 2
    );
    cm.context.fill();

    cm.context.fillRect(
      this.x - this.width * 0.5,
      cm.canvasHight - (this.height + (cm.canvasHight - this.y)),
      this.width,
      this.height
    );

    cm.context.restore();

    let line;
    for (let i = 0; i < this.lines.length; i++) {
      line = this.lines[i];
      line.draw();
    }
  }
}

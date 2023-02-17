const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;

// Global Canvas Settings
ctx.lineWidth = 10;
ctx.strokeStyle = 'magenta';

class Line {
  constructor(canvas) {
    this.canvas = canvas;
    this.startX = Math.random() * canvas.width;
    this.startY = Math.random() * canvas.height;
    this.endX = Math.random() * canvas.width;
    this.endY = Math.random() * canvas.height;
    this.lineWidth = Math.floor(Math.random() * 15 + 1);
  }
  draw(context) {
    context.lineWidth = this.lineWidth;
    context.beginPath();
    context.moveTo(this.startX, this.startY);
    context.lineTo(this.endX, this.endY);
    context.stroke();
  }
}

const line1 = new Line(canvas);
line1.draw(ctx);

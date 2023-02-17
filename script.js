const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;

// Global Canvas Settings
ctx.lineWidth = 10;
ctx.strokeStyle = 'magenta';

class Line {
  constructor() {
    this.startX = Math.random() * canvas.width;
    this.startY = Math.random() * canvas.height;
    this.endX = Math.random() * canvas.width;
    this.endY = Math.random() * canvas.height;
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
  }
}

const line1 = new Line();
line1.draw();

class Circle {
    constructor(canvas, ctx) {
      this.circleMaxRadius = MAX_RADIUS;
      this.posX = 0;
      this.speed = SPEED;
      this.canvas = canvas;
      this.ctx = ctx;
      this.x1 = 0;
      this.y1 = 0;
      this.x2 = 0;
      this.y2 = 0;

    }
  
    drawCircle = () => {
      this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      this.posX++;
      this.position = this.posX * this.speed;
  
      for (var count = 0; count < 1; count++) {
  
        this.x1 = 0;
        this.x2 = 0;
        this.offset = 0;
        this.phase = this.position + Math.PI;
  
        for (var i = 0; i < ROW; i++) {
          this.x1 += 50;
          this.offset = (i * 2 * Math.PI) / 15;
  
          for (var j = 0; j < COLUMN; j++) {
            this.y1 = CANVAS_HEIGHT / 4 + j * 20 + Math.sin(this.phase + this.offset) * 100;
            var radiusEffect = (Math.cos(this.phase + (j * 0.1) + this.offset) + 1) * 0.5;
            var radius = (radiusEffect * this.circleMaxRadius)+3;
            this.ctx.beginPath();
            this.ctx.fillStyle = '#ffae73';
            this.ctx.arc(this.x1, this.y1, radius, 0, 2 * Math.PI);
            this.ctx.closePath();
            this.ctx.fill();
  
          }

        }
      }

        for (var i = ROW; i > 0; i--) {
          this.x2 += 50;
          this.offset = (i * 2 * Math.PI) / 15;
  
          for (var j = COLUMN; j > 0; j--) {
            this.y2 = CANVAS_HEIGHT / 4 + j * 20 + Math.cos(this.phase + this.offset) * 100;
            var radiusEffect = (Math.sin(this.phase + (j * 0.1) + this.offset) + 1) * 0.5;
            var radius = (radiusEffect * this.circleMaxRadius)+3;
  
            this.ctx.beginPath();
            this.ctx.fillStyle = '#ef8b97';
            this.ctx.arc(this.x2, this.y2, radius, 0, 2 * Math.PI);
            this.ctx.closePath();
            this.ctx.fill();
  
          }
      }
    
      requestAnimationFrame(this.drawCircle);
  
    }
  }

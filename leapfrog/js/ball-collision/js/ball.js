const canvas = document.getElementById('myCanvas');

let ctx = canvas.getContext('2d');


canvas.height = 800;
canvas.width = innerWidth;
let x = 100;
let y = 100;

class Ball {
    constructor(positionX, positionY, radius, color){
        this.positionX = positionX;
        this.positionY = positionY;
        this.radius = radius;
        this.color = color;
        this.speed = {
            x: Math.random(),
            y: Math.random()
        };
        this.mass = 1;

    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.positionX, this.positionY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
       ctx.closePath();
    
    }

    update(balls){
        this.draw();
        for (var i=0; i<balls.length; i++){
            if (this == balls[i]){
                continue;
            }
            if (getDistance(this.positionX, this.positionY, balls[i].positionX, balls[i].positionY)- this.radius * 2 < 0){
                checkCollision(this, balls[i]);
            }
        }

        if (this.positionX - this.radius <=0 || this.positionX + this.radius >= innerWidth){
            this.speed.x = -this.speed.x;
        }

        if (this.positionY - this.radius <=0 || this.positionY + this.radius >= innerHeight){
            this.speed.y = -this.speed.y;
        }

        this.positionX  += this.speed.x * 5;
        this.positionY += this.speed.y * 5;
    }

}

function getDistance(x1, y1, x2, y2){
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}


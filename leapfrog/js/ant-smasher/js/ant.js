const canvas = document.getElementById('myCanvas');

let ctx = canvas.getContext('2d');


canvas.height = 800;
canvas.width = 600;

class Ant {
    constructor(positionX, positionY, width, height){
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.speed = {
            x: Math.random(),
            y: Math.random()
        };
        this.mass = 1;

    }
    draw() {
        let base_image = new Image();
        base_image.src = 'img/ant.png';
        ctx.drawImage(base_image, this.positionX, this.positionY, this.width, this.height);
    
    }

    update(ants){
        this.draw();
        for (var i=0; i<ants.length; i++){
            if (this == ants[i]){
                continue;
            }
            if (getDistance(this.positionX, this.positionY, ants[i].positionX, ants[i].positionY)-this.width < 0){
                checkCollision(this, ants[i]);
            }
        }

        if (this.positionX <=0 || this.positionX >= 500){
            this.speed.x = -this.speed.x;
        }

        if (this.positionY <=0 || this.positionY >= 750){
            this.speed.y = -this.speed.y;
        }

        this.positionX  += this.speed.x ;
        this.positionY += this.speed.y ;
    }

}

function getDistance(x1, y1, x2, y2){
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}


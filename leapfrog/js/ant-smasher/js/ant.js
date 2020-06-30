const canvas = document.getElementById('myCanvas');

let ctx = canvas.getContext('2d');


canvas.height = 850;
canvas.width = 900;

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
    getAnt() {
        let base_image = new Image();
        base_image.src = 'img/ant.png';
        ctx.drawImage(base_image, this.positionX, this.positionY, this.width, this.height);
    
    }

    update(ants){
        this.getAnt();
        for (var i=0; i<ants.length; i++){
            if (this == ants[i]){
                continue;
            }
            if (getDistance(this.positionX, this.positionY, ants[i].positionX, ants[i].positionY)-this.width < 0){
                checkCollision(this, ants[i]);
            }
        }

        if (this.positionX <=0 || this.positionX >= 850){
            this.speed.x = -this.speed.x;
        }

        if (this.positionY <=0 || this.positionY >= 800){
            this.speed.y = -this.speed.y;
        }

        this.positionX  += this.speed.x * 3;
        this.positionY += this.speed.y * 3;
    }

}




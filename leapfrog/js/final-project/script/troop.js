class Troop {
    constructor(x, y, direction, sx, sy, swidth, sheight) {
        this.width = swidth;
        this.height = sheight;
        this.frameX = sx;
        this.frameY = sy;
        this.theta = 30/180 * Math.PI
        this.x = Math.floor(Math.cos(this.theta) * x);
        this.y = y;
        this.dWidth = 50;
        this.dHeight = 40;
        this.speed = 1;
        this.life = 5;
        this.direction = direction;
        this.life = 5;
        this.attacking = false;
    }


    draw() {
        drawSprite(image6, this.frameX,
            this.frameY, this.width, this.height,
            this.x, this.y, this.dWidth, this.dHeight
        );
    }


    update() {
        if (this.direction === 'down') {
            if (!this.attacking){
                this.y += this.speed;
                this.x -= 1;
                
            }
            
        }
        else if (this.direction === 'right'){
            if (!this.attacking){
                this.x += this.speed;  
                if (this.x > 100){
                    this.frameX = 1095;
                    this.frameY = 1113;
                    this.width = 203;
                    this.height = 157;
                    this.direction = 'down';
                }
            }
            
            setTimeout(function(){
                this.attacking = false;
            }, 3000);
        }
    }

}


function drawSprite(img, sx, sy, sw, sh, dx, dy, dw, dh) {
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
}
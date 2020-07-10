class Character {
    constructor() {
        this.width = 103.0625;
        this.height = 113.125;
        this.frameX = 3;
        this.frameY = 3;
        this.x = 45;
        this.y = Math.floor(Math.random()) * 450;
        this.dWidth = 50;
        this.dHeight = 40;
        this.speed = 1;
        this.life = 5;
        this.action = 'up';
        this.destroy = false;

        if (this.action === 'up') {
            this.frameY = 0;
        } else if (this.action === 'down'){
            this.frameY = 6;
        } else if (this.action === 'left'){
            this.frameY = 5;
        }
    }


    draw() {
        if (this.destroy){
            this.destroy = false;
            if (this.action === 'up') {
                this.action = 'left';
            }
            else if (this.action === 'left') {
                this.action = 'up';
            } 
        }
        drawSprite(image3, this.width * this.frameX,
            this.height * this.frameY, this.width, this.height,
            this.x, this.y, this.dWidth, this.dHeight
        );
        if (this.frameX < 13) {
            this.frameX++;
        } else {
            this.frameX = 3;
        }
    }


    update() {
        if (this.action === 'right') {
            this.x += this.speed;
        } else if (this.action === 'up') {
            this.y -= this.speed;
            if (this.y < 300){
                this.y = 340
            } 
        } else if (this.action === 'down'){
            this.y += this.speed;
        } else if (this.action === 'left'){
            this.x -= this.speed;
        }
    }

}


function drawSprite(img, sx, sy, sw, sh, dx, dy, dw, dh) {
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
}
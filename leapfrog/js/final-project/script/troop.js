class Character {
    constructor() {
        this.width = 529;
        this.height = 311;
        this.frameX = 1394;
        this.frameY = 1872;
        this.x = -42;
        this.y = 120;
        this.dWidth = 50;
        this.dHeight = 40;
        this.speed = 1;
        this.life = 5;
        this.action = 'up';
        this.destroy = false;
        this.wall = false;
        this.horizontalMove = false;
        this.verticalMove = true;
        this.life = 5;
    }


    draw(direction) {
        if (this.destroy) {
            this.destroy = false;
            if (this.action === 'up') {
                this.action = 'left';
            }
            else if (this.action === 'left') {
                this.action = 'up';
            }
        }

        if (direction === 'down') {
            drawSprite(image6, this.frameX,
                this.frameY, this.width, this.height,
                this.x, this.y, this.dWidth, this.dHeight
            );
        }
        if (direction === 'right'){
            this.frameX = 1280;
            this.frameY = 948;
            this.width = 360;
            this.height = 556;
            this.x = -63;
            this.y = 420;
            drawSprite(image6, this.frameX,
                this.frameY, this.width, this.height,
                this.x, this.y, this.dWidth, this.dHeight
            );
        }
    }


    update(direction) {
        if (this.verticalMove && direction === 'down') {
            this.y += this.speed;
        }
        if (this.verticalMove && direction === 'right'){
            this.x += this.speed;
        }
    }

}


function drawSprite(img, sx, sy, sw, sh, dx, dy, dw, dh) {
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
}
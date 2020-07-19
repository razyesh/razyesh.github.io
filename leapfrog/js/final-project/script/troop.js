/**
 * class that defines the characteristics of our troops that is going to attack the village
 */
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
        this.health = 40;
        this.direction = direction;
        this.life = 5;
        this.attacking = false;
    }

    /**
     * this draw method helps to introduce new troop and we can make them ready to face the 
     * battle
     */
    draw() {
        drawSprite(image6, this.frameX,
            this.frameY, this.width, this.height,
            this.x, this.y, this.dWidth, this.dHeight
        );
    }

    /**
     * update the current state of the troops as they start destroying villages
     */

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
                if (this.x > 80){
                    this.frameX = 2391;
                    this.frameY = 1143;
                    this.width = 423;
                    this.height = 381;
                    this.direction = 'down';
                }
            }
            
            setTimeout(function(){
                this.attacking = false;
            }, 3000);
        }
    }

}



/**
 * this class the defines the random moving characters in our game
 */
class Character {
    constructor(){
        this.width = 40;
        this.height = 43.875;
        this.frameX = 3;
        this.x = Math.random() * -450 ;
        this.y = Math.random() * 500 ;
        this.speed = (Math.random() * 2) + 1;
        this.minFrame = 0;
        this.action = characterActions[Math.floor(Math.random() * characterActions.length)];

        //checking on which direction does the characters were moving
        if (this.action === 'up') {
            this.frameY = 0; 
            this.minFrame = 4;
            this.maxFrame = 15;
        }
        else if (this.action === 'top right') {
            this.frameY = 1; 
            this.minFrame = 4;
            this.maxFrame = 14;
        }
        else if (this.action === 'right') {
            this.frameY = 3; 
            this.minFrame = 3;
            this.maxFrame = 13;
        }
        else if (this.action === 'down right') {
            this.frameY = 4;
            this.minFrame = 4;
            this.maxFrame = 15;
        } 
        else if (this.action === 'down') {
            this.minFrame = 0;
            this.frameY = 6;
            this.maxFrame = 12;
        }
        else if (this.action === 'jump') {
            this.minFrame = 0;
            this.frameY = 7; 
            this.maxFrame = 9;
        }

    }
    /**
     * draw the new character with the random intial position
     */
    draw(){
        drawSprite(images.player, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width - 10, this.height - 20);
        
        if (this.frameX < this.maxFrame) this.frameX++;
        else this.frameX = this.minFrame;
    }

    /**
     * helps in animating the character
     */
    update(){
        if (this.action === 'up') {
            if (this.y < 0 - (this.height * 5)) {
                 this.y = CANVAS_HEIGHT - 200 + this.height;
                 this.x = Math.random() * CANVAS_WIDTH;
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.y -= this.speed;  
             }
         }
         else if (this.action === 'top right') {
             if (this.y < 0 - this.height && this.x > CANVAS_WIDTH + this.width) {
                 this.y = CANVAS_HEIGHT - 200 + this.height
                 this.x = Math.random() * 100;
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.y -= this.speed; 
                 this.x += this.speed; 
             }
         }
         else if (this.action === 'right') {
             if (this.x > CANVAS_WIDTH + (this.width * 5)) {
                 this.x = 0 - this.width;
                 this.y = Math.random() * CANVAS_HEIGHT; 
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.x += this.speed; 
             }
         }
         else if (this.action === 'down right') {
             if (this.y > CANVAS_HEIGHT + this.height && this.x > CANVAS_WIDTH + this.width) {
                 this.y = 0 - this.height
                 this.x = Math.random() * CANVAS_WIDTH;
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.y += this.speed; 
                 this.x += this.speed; 
             }
         } 
         else if (this.action === 'down') {
             if (this.y > CANVAS_HEIGHT + (this.height * 5)) {
                 this.y = 0 - this.height;
                 this.x = Math.random() * CANVAS_WIDTH;
                 this.speed = (Math.random() * 2) + 3;
             } else {
                 this.y += this.speed;  
             }
         }

         if (this.x > 200){
             this.action = 'down';
         }
    }
}

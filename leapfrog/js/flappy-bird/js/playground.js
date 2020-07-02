/**
 * The PlayGround Class Where player will begin playing flappy bird
 */

class PlayGround {

    constructor(){
        this.padding = 2
        this.birdSpeed = 6;
    }

    //drawing stripe with the background image
    renderBackground = () => {
        drawSprite(bgSprite, 0, 0);
    }

    //rendering the bottom graphics on our canvas
    renderFloor = () => {
        // animate floor
        floorSprite.x = 292 + (time * SPEED % 14);
        drawSprite(floorSprite, 0, 400);
    }


    //rending pipes into our playing area
    renderPipes = () => {
        for (var i = 0; i < pipes.length; ++i) {
            if (pipes[i].y === 0) {
                drawSprite(topPipeSprite, pipes[i].x, pipes[i].h - topPipeSprite.h);
            }
            else {
                drawSprite(bottomPipeSprite, pipes[i].x, pipes[i].y);
            }
        }
    }


    //displaying scores on top of out playground
    renderScore = () => {
        let numbers = score.toString(10).split("").map(Number);
        let scale = numSprite[0].scale;
        let width = numSprite[0].w;
        let offset = W/2; // center of canvas
        offset -= numbers.length * width/2 * scale; // left to center numbers
        offset -= this.padding * (numbers.length - 1); // left to adjust for padding
        for (var i = 0; i < numbers.length; ++i) {
            drawSprite(numSprite[numbers[i]], offset + i*width*scale + i*this.padding*2, 50);
        }
    }

    //displaying flappy bird
    renderBird = () =>  {
        // iterating through sprites (flap animation)
        let birdState = Math.floor((time % (4 *  this.birdSpeed)) / this.birdSpeed);
        ctx.save();
        ctx.translate(bird.x + birdSprite[0].w/2, bird.y + birdSprite[0].h/2);
        ctx.rotate(-bird.dy * 5 * (Math.PI/180));
        drawSprite(birdSprite[birdState], -birdSprite[0].w/2, -birdSprite[0].h/2);
        ctx.restore();
    }

    //displaying game over
    renderGameOver = () => {
        let sprite = {x: 292, y: 397, w: 188, h: 39};
        drawSprite(sprite, 50, 200);
    }
}
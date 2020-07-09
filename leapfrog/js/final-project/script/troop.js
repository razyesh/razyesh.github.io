

class Troop {
    constructor(playground, dx, dy) {

        this.playground = playground
        this.dx = dx;
        this.dy = dy;
        this.rightMove;
        this.leftMove;
        this.x = 0;
        this.rightMax = dx + 10;

    }

    moveRight = () => {
        this.dx += 1;
        ctx.clearRect(0, 0, 20, 30);
        this.playground.draw();
        characterDrawFrame(this.x, 188,this.dx, this.dy);
        this.x += CHARACTER_DIFF_PLACE;
        if (this.x > MAX_CHARACTER_WIDTH) {
            this.x = 0;
        }
        if (this.dx > this.rightMax) {
            clearInterval(this.rightMove);
            this.leftMove = setInterval(this.moveLeft, 100);
        }

    }

    moveLeft = () => {
        this.dx -= 1;
        ctx.clearRect(0, 0, 20, 30);
        this.playground.draw();
        characterDrawFrame(this.x, 125,this.dx, this.dy);
        this.x += CHARACTER_DIFF_PLACE;
        if (this.x > MAX_CHARACTER_WIDTH) {
            this.x = 0;
        }
        if (this.dx < this.dy) {
            clearInterval(this.leftMove);
            // this.rightMove = setInterval(this.moveRight, 100)

        }
    }

    move = () => {
    this.moveLeft();
    }


}
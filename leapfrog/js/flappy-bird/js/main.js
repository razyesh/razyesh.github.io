let canvas = document.getElementById('canvas');
let sprites = document.getElementById('sprites');
let ctx = canvas.getContext('2d');
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;
ctx.imageSmoothingEnabled = false;


//Actual function rending all the Playground Stuffs.

function main(){
    ctx.clearRect(0, 0, W, H);
    p1 = new PlayGround()
    p1.renderBackground();
    p1.renderFloor();
    p1.renderBird();
    p1.renderPipes();
    p1.renderScore();
    setTimeout(main, 20);
}

main();
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
    p1.displayBackground();
    p1.displayFloor();
    p1.displayBird();
    p1.displayPipes();
    p1.displayScore();
    setTimeout(main, 20);
}

main();
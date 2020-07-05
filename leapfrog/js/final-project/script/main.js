

let p1;
function init(){
    p1 = new PlayGround();
    gamePlay = setInterval(p1.draw, 6000);

}

init();
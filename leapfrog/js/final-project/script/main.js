let p1;
function init(){
    p1 = new PlayGround();
    gamePlay = setInterval(p1.draw, 6000);
    t1 = new Troop(p1, 315, 280);
    t1.move();
    t2 = new Troop(p1, 0, 0);
    t2.move();


}
window.onload = function(){   
    init();
}
class PlayGround {
    constructor (){

    }

    draw = () => {
        clearInterval(gamePlay)
        bg.draw();
        verticalBar.draw();
        townHall.draw();
        horizontalBar.draw(350, 160);
        horizontalBar.draw(350, 230);
        verticalBar.draw(337, 170);
        canon.draw();
        horizontalBar.draw(350, 290);
        campFire.draw(290, 300);
    }
}
class PlayGround {
    constructor (){

    }

    draw = () => {
        clearInterval(gamePlay);
	    bg.draw();
	    townHall.draw();
	    verticalBar.draw();
    }
}
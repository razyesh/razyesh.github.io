class PlayGround {
    constructor() {
        this.height = 700;
        this.speed = 5;
    }

    initialize = () => {
        document.querySelector('.playground').style.display = 'inline-block';
        document.querySelector('.playground').style.height = this.height + 'px';
    }

    roadLane = (n) => {
        for ( var i=0; i<5; i++){
            let lane = document.createElement('div');
            lane.setAttribute('class', `lane${n}`);
            lane.top = (i * 150);
            lane.style.top = lane.top + 'px';
            document.querySelector('.playground').appendChild(lane);
        }
    }

    moveLane = (n) => {
        let lanes = document.querySelectorAll(`.lane${n}`);
        var self = this;
        function move(){
            lanes.forEach(function(lane){
                if (lane.top >= self.height){
                    lane.top = -100;
                } 
                lane.top = lane.top + self.speed;
                lane.style.top = lane.top + 'px';

            })
            requestAnimationFrame(move);
        }
        requestAnimationFrame(move);

    }
}
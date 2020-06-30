let ball1;
let ball2;
let balls;

/**
 * function initializing
 */

function init(){
    balls = [];

    for (var i=0; i<1000; i++){
        let radius = 10;
        let x = Math.random() * innerWidth - radius * 2;
        let y = Math.random() * innerHeight;

        if (i != 0){
            for (var j=0; j < balls.length; j++){

                if (getDistance(x, y, balls[j].positionX, balls[j].positionY)- radius * 2 < 0){
                    x = Math.random() * innerWidth;
                    y = Math.random() * innerHeight;
                    j = -1;
                }
            }
        }

        let color = colorGenerator();
        balls.push(new Ball(x, y, i/100, color))
    }

    h4 = document.createElement('h4');
    h4.innerHTML = `Total number of balls ${balls.length}`;
    document.querySelector('.info').appendChild(h4);

    h4 = document.createElement('h4');
    balls.forEach(ball => {
        h4.innerHTML = `Total balls were moving at speed x-direction: ${ball.speed.x}, y-direction: ${ball.speed.y}`;
        document.querySelector('.info').appendChild(h4);
    })

    
}

/**
 * function to change the position of ball
 */
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
        ball.update(balls);
    });    
}

init();
animate();

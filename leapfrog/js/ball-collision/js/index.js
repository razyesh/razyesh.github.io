let circle1;
let circle2;
let circles;

/**
 * function initializing
 */

function init(){
    circles = [];

    for (var i=0; i<1000; i++){
        let radius = 10;
        let x = Math.random() * innerWidth - radius * 2;
        let y = Math.random() * innerHeight;

        if (i != 0){
            for (var j=0; j < circles.length; j++){

                if (getDistance(x, y, circles[j].positionX, circles[j].positionY)- radius * 2 < 0){
                    x = Math.random() * innerWidth;
                    y = Math.random() * innerHeight;
                    j = -1;
                }
            }
        }

        let color = colorGenerator();
        circles.push(new Circle(x, y, i/100, color))
    }

    h4 = document.createElement('h4');
    h4.innerHTML = `Total number of balls ${circles.length}`;
    document.querySelector('.info').appendChild(h4);

    h4 = document.createElement('h4');
    circles.forEach(circle => {
        h4.innerHTML = `Total balls were moving at speed x-direction: ${circle.speed.x}, y-direction: ${circle.speed.y}`;
        document.querySelector('.info').appendChild(h4);
    })

    
}

/**
 * function to change the position of circle
 */
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => {
        circle.update(circles);
    });    
}

init();
animate();

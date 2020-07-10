let p1;
const characterActions = ['up'];
let playerMove;
const characters = [];
let isMoving = false;
let loaded = false;

const numberofCharacters = 1;
function init() {
    let life = 5;
    p1 = new PlayGround();
    p1.draw();
    for (i = 0; i < numberofCharacters; i++) {
        characters.push(new Character());
    }
    function animate() {
        if (characters.length > 0){
            isMoving = true;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            p1.draw();
            for (i = 0; i < numberofCharacters; i++) {
                characters[i].draw();
                characters[i].update();
                for (let key of Object.keys(obstaclePosition)){  
                    if (key === 'wall'){
                        for(let j =0; j < obstaclePosition[key].y.length; j++){
                            if (characters[i].y === obstaclePosition[key].y[j]){
                                characters[i].wall = true;
                                break;
                            }
                        }
                    }
                    if (characters[i].y - obstaclePosition[key].y === 0 && (
                        obstaclePosition[key].x  - characters[i].x === 0 || obstaclePosition[key].x + characters[i].x === 0
                        )){
                        delete obstaclePosition[key];
                        characters[i].destroy = true;
                        break;
                    }
                }
            }
            
            if (life > 0){
                if (isMoving && p1.fy < 380){
                    p1.fire();
                } else {
                    p1.fy = 323;
                    p1.fx = -5;
                }
            }
        }
    }

    document.addEventListener('keydown', function(e){
        p1.attack = true;
        if (e.key === 'a'){
            playerMove = setInterval(animate, 100);
        }
    })

   

    canvas.addEventListener('click', function (e) {
        if (e.clientY - 365 < 20 && e.clientY - 365 > 0) {
            if (p1.collector) {
                p1.elixirStorage += 500;
            }
            p1.collector = false;
            p1.draw();
        }
    })
    setInterval(p1.minerCollectorCollectTrue, 20000);

}
window.onload = function () {
    loaded = true;
    init();
}

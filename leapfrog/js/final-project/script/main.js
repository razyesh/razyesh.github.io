let p1;
const characterActions = ['up'];
let playerMove;
const characters = [];
let isMoving = false;
let loaded = false;
const tempObstacle = obstaclePosition;

const numberofCharacters = 1;

let direction;


function init() {
    let x = -125;
    direction = 'down';
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    p1 = new PlayGround();
    p1.draw();
    for (let i = 0; i < numberofCharacters; i++) {
        characters.push(new Character());
    }
    item = 0;
    function animate() {
        if (characters.length > 0) {
            isMoving = true;
            p1.isAttacking = true;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            p1.draw();
            for (let i = 0; i < numberofCharacters; i++) {
                try {
                    characters[i].draw(direction);
                    characters[i].update(direction);
                    bow = setInterval(p1.fire(), 100);
                    if (characters[i].x === obstaclePosition[playgroundItem[item]].x) {
                        if (characters[i].x - p1.fx < 5){
                            x += 10;
                            p1.fx = x;
                            p1.fy = 265;
                            characters[i].life--;
                            if (characters[i].life < 0){
                                delete characters[i];
                            }
                            clearInterval(bow);
                            setInterval(bow);
                        }
                        characters[i].verticalMove = true;
                        if (obstaclePosition[playgroundItem[item]].y - characters[i].y < 50) {
                            fire = setInterval(ctx.drawImage(image6, 1472, 1512, 246, 273, characters[i].x + 20, characters[i].y + 30, 10, 30), 100);
                            if (obstaclePosition[playgroundItem[item]].y - characters[i].y < 30) {
                                delete obstaclePosition[playgroundItem[item]];
                                item++;
                                characters[i].verticalMove = false;
                                clearInterval(fire);
                            }
                        }
                    }
                } catch (e) {

                }
            }
    }
}


document.addEventListener('click', function (e) {
    p1.attack = true;
    if (e.clientX - 520 < 5 && CANVAS_HEIGHT - e.clientY < 50) {
        playerMove = setInterval(animate, 100);
    }
})



canvas.addEventListener('click', function (e) {
    if (e.clientY - 354 < 20 && e.clientY - 354 > 0) {
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
    introPlay();
}

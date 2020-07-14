let p1;
const characterActions = ['up'];
let playerMove;
const characters = [];
let isMoving = false;
let loaded = false;
const tempObstacle = obstaclePosition;


let direction;


function init() {
    let x = -125;
    direction = 'down';
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    p1 = new PlayGround();
    p1.draw();
    c1 = new Troop(-280, 290, 'right', 1281, 952, 360, 552);
    c2 = new Troop(-120, 180, 'right', 1281, 952, 360, 552);
    c3 = new Troop(-240, 240, 'right', 1281, 952, 360, 552);


    characters.push(c1);
    characters.push(c2);
    characters.push(c3);
    let bow;

    function animate() {
        p1.isAttacking = true;
        if (characters.length > 0) {
            isMoving = true;
            fx = 20;
            fy = 210;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            p1.draw();
            characters.forEach(function (item) {
                item.draw();
                item.update();
                len = Object.keys(obstaclePosition).length
                obstacle = Object.keys(obstaclePosition)
                if (len >0) {
                    for (var j = 0; j < len; j++) {
                        if (obstaclePosition[obstacle[j]].y - item.y < 30) {
                            p1.count++;
                            bow = setInterval(p1.fire, 100);
                            if (p1.fx < 0){
                                console.log(p1.fx);
                                clearInterval(bow);
                            }
                            if (item.direction === 'right') {
                                if (obstaclePosition[obstacle[j]].x - item.x < 30) {
                                    ctx.drawImage(image6, 2232, 2520, 219, 252, item.x + 30, item.y + 20, 30, 20);
                                    ctx.beginPath();
                                    ctx.rect(obstaclePosition[obstacle[j]].x - 10, obstaclePosition[obstacle[j]].y - 10, 40, 5);
                                    ctx.fillStyle = 'blue';
                                    ctx.fill();
                                    
                                    item.attacking = true;
                                    setTimeout(function () {
                                        item.attacking = false;
                                    }, 3000);
                                }
                                if (obstaclePosition[obstacle[j]].x - item.x < 20) {
                                    delete obstaclePosition[obstacle[j]]
                                }
                            } else if (item.direction === 'down') {
                                if (obstaclePosition[obstacle[j]].x - item.x < 30) {
                                    
                                    ctx.drawImage(image6, 2682, 2484, 198, 240, item.x + 10, item.y + 40, 30, 20);
                                    item.attacking = true;
                                    setTimeout(function () {
                                        item.attacking = false;
                                    }, 3000);
                                }
                                if (obstaclePosition[obstacle[j]].y - item.y < 10) {
                                    delete obstaclePosition[obstacle[j]]
                                }
                            }
                        } else {
                            if (obstaclePosition[obstacle[j]].y > item.y) {
                                item.direction === 'down'
                            }
                        }
                    }
                } else {
                    ctx.drawImage(image6, 12, 2549, 935, 646, 0, 0, -450, 0);
                }
            })

        }
    }


    document.addEventListener('click', function (e) {
        p1.attack = true;
        if (e.clientX - 520 < 5 && CANVAS_HEIGHT - e.clientY < 50) {
            playerMove = setInterval(animate, 100);
        }
    })



    canvas.addEventListener('click', function (e) {
        if (e.clientY - CANVAS_WIDTH < 20 && CANVAS_HEIGHT - 354 > 0) {
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

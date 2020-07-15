let p1;
let playerMove;
const characters = [];
let isMoving = false;
let loaded = false;
const tempObstacle = obstaclePosition;

const randomCharacters = [];

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

    const numberOfCharacters = 5;
    for (i = 0; i < numberOfCharacters; i++) {
        randomCharacters.push(new Character());
    }

    function randomCharAnimation() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p1.draw();
        for (i = 0; i < randomCharacters.length; i++) {
            randomCharacters[i].draw();
            randomCharacters[i].update();
        }

    }

    randomCharMove = setInterval(randomCharAnimation, 100);

    let flag = false;
    fx = 20;
    fy = 210;

    function animate() {
        clearInterval(randomCharMove);
        if (characters.length > 0) {
            isMoving = true;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            p1.draw();
            characters.forEach(function (item) {
                item.draw();
                item.update();
                len = Object.keys(obstaclePosition).length
                obstacle = Object.keys(obstaclePosition)
                if (len > 0) {
                    if (obstaclePosition['archerTower2']){
                        if (flag) {
                            console.log(flag);
                            fx -= 10;
                            fy -= 1;
                            ctx.drawImage(image6, 1202, 284, 172, 33, fx, fy, 25, 15), 100;
                            ctx.drawImage(image6, 1202, 284, 172, 33, fx, fy, 25, 15), 100;
                            if (fx < -50) {
                                fx = 20;
                                fy = 210 
                            }
                        }
                    }
                    flag = true;
                    for (var j = 0; j < len; j++) {
                        
                        if (obstaclePosition[obstacle[j]].y - item.y < 30) {
                           
                            if (obstaclePosition[obstacle[j]].y - fy === 34){
                                flag = false;
                                delete characters[1];
                                console.log(item);
                            }
                            
                            if (item.direction === 'right') {
                                if (obstaclePosition[obstacle[j]].x - item.x < 30) {
                                    ctx.drawImage(image6, 2232, 2520, 219, 252, item.x + 30, item.y + 20, 30, 20);
                                    ctx.beginPath();
                                    ctx.rect(obstaclePosition[obstacle[j]].x - 10, obstaclePosition[obstacle[j]].y - 10, 40, 5);
                                    ctx.fillStyle = 'blue';
                                    ctx.fill();
                                    item.attacking = true;
                                    let x = obstaclePosition[obstacle[j]].x;
                                    let y = obstaclePosition[obstacle[j]].y;
                                    let width = 40;
                                    setTimeout(function () {
                                        ctx.rect(x - 10, y - 10, width, 5);
                                        ctx.fillStyle = 'red';
                                        ctx.fill();
                                        item.attacking = false;

                                    }, 1000);

                                }
                                if (obstaclePosition[obstacle[j]].x - item.x < 20) {
                                    delete obstaclePosition[obstacle[j]]
                                }
                            } else if (item.direction === 'down') {
                                if (obstaclePosition[obstacle[j]].x - item.x < 30) {
                                    ctx.drawImage(image6, 2682, 2484, 198, 240, item.x + 10, item.y + 40, 30, 20);
                                    ctx.beginPath();
                                    ctx.rect(obstaclePosition[obstacle[j]].x - 10, obstaclePosition[obstacle[j]].y - 10, 40, 5);
                                    ctx.fillStyle = 'blue';
                                    ctx.fill();
                                    item.attacking = true;
                                    let x = obstaclePosition[obstacle[j]].x;
                                    let y = obstaclePosition[obstacle[j]].y;
                                    let width = 40;
                                    setTimeout(function () {
                                        ctx.rect(x - 10, y - 10, width, 5);
                                        ctx.fillStyle = 'red';
                                        ctx.fill();
                                        item.attacking = false;
                                    }, 1000);
                                }
                                if (obstaclePosition[obstacle[j]].x - item.x < 20) {
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
                    if (p1.isAttacking) {
                        ctx.drawImage(image6, 147, 2556, 702, 645, -200, 150, 400, 300);
                    }
                }
            })

        }
    }


    document.addEventListener('click', function (e) {
        if (e.clientX - 520 < 5 && CANVAS_HEIGHT - e.clientY < 50) {
            p1.isAttacking = true;

            playerMove = setInterval(animate, 100);
        }
    })

    canvas.addEventListener('mousedown', function (e) {
        let len = Object.values(obstaclePosition);
        obstacle = Object.keys(obstaclePosition);
        console.log(e.clientX - (obstaclePosition[obstacle[0]].x + 450));
        obstacle.forEach(function (item, index) {
            if (e.clientX - (obstaclePosition[item].x + 450) < 150 && e.clientX - (obstaclePosition[item].x + 450) > 100 && e.clientY + 50 - obstaclePosition[item].y < 50) {
                console.log(item);
            }
        })
    })

    canvas.addEventListener('click', function (e) {
        if (e.clientY - CANVAS_WIDTH < 20 && CANVAS_HEIGHT - 354 > 0) {
            if (p1.collector) {
                p1.elixirStorage += 500;
            }
            p1.collector = false;
            p1.draw();
        }
        if (600 - e.clientX < 100 && 500 - e.clientY < 100) {
            location.reload();
        }
    })
    setInterval(p1.minerCollectorCollectTrue, 20000);

}
window.onload = function () {
    loaded = true;
    init();
}

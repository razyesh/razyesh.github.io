let p1;
let playerMove;
const characters = [];
let isMoving = false;
let loaded = false;
const randomCharacters = [];
let tempObstacle;
let direction;

function init() {

    tempObstacle = obstaclePosition;
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
        let width = 40;
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
                            fx -= 2;
                            ctx.drawImage(image6, 1202, 284, 172, 33, fx, fy, 25, 15), 100;
                            if (fx - item.x < 20) {
                                if (item.health > 10){
                                    item.health -= 10;
                                }
                                ctx.beginPath();
                                ctx.rect(item.x, item.y, item.health, 5);
                                ctx.fillStyle = 'green';
                                ctx.fill();
                                ctx.closePath();
                                fx = 20;
                                fy = 210 
                                
                            }
                        }
                    }
                    flag = true;
                    for (var j = 0; j < len; j++) {
                        if (obstaclePosition[obstacle[j]].y - item.y < 30) {
                            console.log(fx - item.x);
                            if (fx - item.x < 20){
                                flag = false;
                                if (item.health < 0){
                                    delete item;
                                }
                                
                            }

                            if (item.direction === 'right') {
                                if (obstaclePosition[obstacle[j]].x - item.x < 30) {
                                    ctx.drawImage(image6, 2232, 2520, 219, 252, item.x + 30, item.y + 20, 30, 20);
                                    ctx.beginPath();
                                    ctx.rect(obstaclePosition[obstacle[j]].x - 10, obstaclePosition[obstacle[j]].y - 10, 40, 5);
                                    ctx.fillStyle = 'blue';
                                    ctx.fill();
                                    ctx.closePath();
                                    item.attacking = true;
                                    let x = obstaclePosition[obstacle[j]].x;
                                    let y = obstaclePosition[obstacle[j]].y;
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
                        console.log(tempObstacle);
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


    canvas.addEventListener('mousedown', handleMouseDown, true);

    function handleMouseDown(e){
        obstacle = Object.keys(obstaclePosition);
        obstacle.forEach(function (item) {
            if ((e.offsetX - obstaclePosition[item].OffSetX < 10 && e.offsetX - obstaclePosition[item].OffSetX > 0) &&
                (e.offsetY - obstaclePosition[item].OffSetY < 30)) {
                    ctx.fillText(`${item}`, obstaclePosition[item].x, obstaclePosition[item].y);
                    ctx.drawImage(image6, 2096, 2919, 873, 194, -250, 400, 200, 40);
                
            }
        })
    }

    // canvas.addEventListener('click', function(e){
    //     obstacle = Object.keys(obstaclePosition);
    //     obstacle.forEach(function (item) {
    //         if ((e.offsetX - obstaclePosition[item].OffSetX < 10 && e.offsetX - obstaclePosition[item].OffSetX > 0) &&
    //             (e.offsetY - obstaclePosition[item].OffSetY < 30)) {
    //             ctx.fillText(`${item}`, obstaclePosition[item].x, obstaclePosition[item].y);
    //             ctx.drawImage(image6, )
    //         }
    //     })
    // });


    function handleMouseMove(e, item){
        obstaclePosition[item].x = e.offsetX;
        obstaclePosition[item].y = e.offsetY;
        obstaclePosition[item].OffSetX = e.offsetX;
        obstaclePosition[item].OffSetY = e.offsetY;
        ctx.fillText(`${item}`, e.clientX, e.clientY);
    }

    canvas.addEventListener('mouseup', function(e){
        // canvas.removeEventListener('mousedown', handleMouseDown, false);
        // canvas.removeEventListener('mousemove', handleMouseMove, false);
        ctx.drawImage(image6, 2096, 2919, 873, 194, -250, 400, 200, 40);

    })

    canvas.addEventListener('click', function (e) {
        if (e.clientY - CANVAS_WIDTH < 30 && CANVAS_HEIGHT - 385 > 0) {
            if (p1.collector) {
                p1.elixirStorage += 500;
            }
            p1.collector = false;
            p1.draw();
        }
        if (600 - e.clientX < 100 && 500 - e.clientY < 100) {
            p1.isAttacking = false;
            obstaclePosition = tempObstacle;
            p1.draw();
        }
    })
    setInterval(p1.minerCollectorCollectTrue, 20000);

}
window.onload = function () {
    loaded = true;
    init();
}

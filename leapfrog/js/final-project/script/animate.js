let flag = false;
fx = 20;
fy = 210;
let width = 40;

/**
 * method to move the dragon and through out the response from the archer
 */

function animate() {
    clearInterval(randomCharMove);
    if (characters.length > 0) {
        isMoving = true;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        p1.draw();
        characters.forEach(function (character) {
            ctx.beginPath();
            ctx.rect(character.x, character.y, character.health, 5);
            ctx.fillStyle = '#03fc20';
            ctx.fill();
            ctx.closePath();
            character.draw();
            character.update();
            len = Object.keys(obstaclePosition).length;
            obstacle = Object.keys(obstaclePosition)
            if (len > 0) {
                if (obstaclePosition['archerTower2'] || obstaclePosition['archerTower']) {
                    if (flag) {
                        fx -= 3;
                        archer_attack.play();
                        setTimeout(ctx.drawImage(image6, 1202, 284, 172, 33, fx, fy, 25, 15), 2000);
                        if (fx - character.x < 5) {
                            if (character.health > 5) {
                                character.health -= 2;
                            }
                            fx = 20;
                            fy = 210;
                        }
                    }
                }
                flag = true;
                for (var j = 0; j < len; j++) {
                    if (obstaclePosition[obstacle[j]].y - character.y < 30) {
                        if (fx - character.x < 20) {
                            flag = false;
                            if (character.health < 0) {
                                delete character;
                            }

                        }

                        if (character.direction === 'right') {
                            if (obstaclePosition[obstacle[j]].x - character.x < 30) {
                                drag_fire.play();
                                ctx.drawImage(image6, 2232, 2520, 219, 252, character.x + 30, character.y + 20, 30, 20);
                                ctx.beginPath();
                                ctx.rect(obstaclePosition[obstacle[j]].x - 10, obstaclePosition[obstacle[j]].y - 10, 40, 5);
                                ctx.fillStyle = 'blue';
                                ctx.fill();
                                ctx.closePath();
                                character.attacking = true;
                                let x = obstaclePosition[obstacle[j]].x;
                                let y = obstaclePosition[obstacle[j]].y;

                                if (width > 0) {
                                    width -= 5;
                                    ctx.rect(x - 10, y - 10, width, 5);
                                    ctx.fill();
                                    character.attacking = false;
                                } else {
                                    width = 40;
                                    character.attacking = false;
                                }


                            }
                            if (obstaclePosition[obstacle[j]].x - character.x < 20) {
                                delete obstaclePosition[obstacle[j]]
                            }
                        } else if (character.direction === 'down') {
                            if (character.y - obstaclePosition[obstacle[j]].y < 10) {
                                drag_fire.play();
                                ctx.drawImage(image6, 2682, 2484, 198, 240, character.x + 5, character.y + 40, 30, 20);
                                ctx.beginPath();
                                ctx.rect(obstaclePosition[obstacle[j]].x - 10, obstaclePosition[obstacle[j]].y - 10, 40, 5);
                                ctx.fillStyle = 'blue';
                                ctx.fill();
                                character.attacking = true;
                                let x = obstaclePosition[obstacle[j]].x;
                                let y = obstaclePosition[obstacle[j]].y;
                                let width = 40;
                                setTimeout(function () {
                                    ctx.rect(x - 10, y - 10, width, 5);
                                    ctx.fill();
                                    character.attacking = false;
                                }, 1000);
                            }
                            if (character.y - obstaclePosition[obstacle[j]].y < 5 && character.x - obstaclePosition[obstacle[j]].x < 5) {
                                delete obstaclePosition[obstacle[j]]
                            }
                        }
                    } else {
                        if (obstaclePosition[obstacle[j]].y > character.y) {
                            character.direction === 'down'
                        }
                    }
                }
            } else {
                if (p1.isAttacking) {
                    if (p1.elixirStorage < 8100000){
                        p1.elixirStorage += 546000;
                    }
                    if (p1.goldStorage < 8100000){
                        p1.goldStorage += 340000;
                    }
                    ctx.rect(-300, 50, 500, 400);
                    ctx.fillStyle = '#000';
                    ctx.fill();
                    ctx.fillStyle = '#fff';
                    ctx.font = "bold 18px Arial";
                    ctx.fillText("340000", -130, 250);
                    ctx.fillText("546000", -130, 270);
                    ctx.fillText("14000", 50, 270)
                    ctx.fillText("14000", 50, 290)
                    ctx.drawImage(image6, 147, 2556, 702, 645, -250, 100, 400, 300);                    
                }
            }
        })

    }
}

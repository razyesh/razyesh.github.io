
class Car {
    constructor() {
        this.keys = {
            ArrowLeft: false,
            ArrowRight: false,
        }
        this.playerSpeed = 200;
        this.carLeft = 0;
        this.enemySpeed = 5;
        this.score = 0;

    }

    playerCar = () => {
        let car = document.createElement('img');
        car.setAttribute('class', 'playerCar');
        car.src = "img/1.png";
        document.querySelector('.playground').appendChild(car);
    }

    enemyCar = (n) => {
        let enemyCar = document.createElement('img');
        enemyCar.setAttribute('class', `enemyCar${n}`);
        enemyCar.src = "img/1.png";
        document.querySelector('.playground').appendChild(enemyCar);
    }

    playerCarPosition = () => {
        this.carLeft = parseInt(window.getComputedStyle(document.querySelector('.playerCar')).left);
    }

    reset = () => {
        document.querySelector('.enemyCar1').style.top = 0;
    }


    moveEnemy = (n) => {
        let enemy = document.querySelector(`.enemyCar${n}`);
        let car = document.querySelector('.playerCar');
        let enemyPosition = {
            top : parseInt(window.getComputedStyle(enemy).top),
        }
        var self = this;

        function move() {
            let count = 0;

            isCollide(car, enemy);
            if (enemyPosition.top >= 700){
            if (document.querySelector('.play-again').style.display != 'inline-block'){

                self.score = self.score + 3;
                enemyPosition.top = - (Math.random()+n) * 500;
                document.getElementById('score').innerHTML = self.score;
                localStorage.setItem('score', self.score);
                if (localStorage.getItem('highest-score')){
                    if (self.score > localStorage.getItem('highest-score')){
                        localStorage.setItem('highest-score', self.score);
                    }
                } else {
                    localStorage.setItem('highest-score', self.score);
                    
                }
            }
            }
 
            enemyPosition.top = enemyPosition.top + self.enemySpeed;
            enemy.style.top = enemyPosition.top + 'px';
            requestAnimationFrame(move);
        }
        requestAnimationFrame(move);
    }

    keyUpPress = (e) => {
        e.preventDefault();
        this.keys[e.key] = false;
    }

    keyDownPress = (e) => {
        e.preventDefault();
        this.keys[e.key] = true;
        if (this.keys.ArrowLeft && this.carLeft > 100) {
            this.carLeft -= this.playerSpeed;
            this.gamePlay();
        } else if (this.keys.ArrowRight && this.carLeft < 500) {
            this.carLeft += this.playerSpeed;
            this.gamePlay();
        }
    }

    gamePlay = () => {
        let playerCar = document.querySelector('.playerCar');
        let playGround = document.querySelector('.playground');
        let road = playGround.getBoundingClientRect();
        playerCar.style.left = this.carLeft + 'px';

    }



}





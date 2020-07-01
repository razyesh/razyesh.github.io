
class Car {
    constructor() {
        this.keys = {
            ArrowLeft: false,
            ArrowRight: false,
            ArrowUp: false,
        }
        this.playerSpeed = 200;
        this.carLeft = 0;
        this.enemySpeed = 5;
        this.score = 0;
        this.bulletCount = 10;
    }

    playerCar = () => {
        let car = document.createElement('img');
        car.setAttribute('class', 'playerCar');
        car.src = "img/Police.png";
        document.querySelector('.playground').appendChild(car);
    }

    enemyCar = (n, filename) => {
        let enemyCar = document.createElement('img');
        enemyCar.setAttribute('class', `enemyCar${n}`);
        enemyCar.src = filename;
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
        let count = 0;


        

        function move() {

            let healers = document.querySelectorAll('.healer');
            if (healers){
                healers.forEach(function(healer) {
                    if (healer.top >= 700){
                        healer.top = -(Math.random() *500) + 'px';
                    }
                    healer.style.top = healer.top + 5 + 'px';
                    console.log(healer.style.top)
                })
            }

            if (document.querySelector('.bullet')){
                

                var bullet = document.querySelector('.bullet');
                if (parseInt(bullet.style.top) - parseInt(enemy.style.top) < 10 && parseInt(bullet.style.left) == parseInt(window.getComputedStyle(enemy).left)){
                    console.log(parseInt(bullet.style.left))
                    bullet.remove();
                    console.log(count++);
                    enemy.style.display = 'none';
                    if( self.bulletCount < 5){
                        self.initHealer();
                    }
                    // self.vehicleDestroy = self.vehicleDestroy + 1;
                }
            }

            isCollide(car, enemy);
            if (enemyPosition.top >= 700){
            if (document.querySelector('.play-again').style.display != 'inline-block'){
                enemy.style.display = 'inline-block';
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
        } else if (this.keys.ArrowUp){
            this.bullet();
        }
    }

    gamePlay = () => {
        let playerCar = document.querySelector('.playerCar');
        let playGround = document.querySelector('.playground');
        let road = playGround.getBoundingClientRect();
        playerCar.style.left = this.carLeft + 'px';

    }

    initHealer = () => {
        const leftPosition = [100, 300, 500];
        let healer = document.createElement('div');
        healer.setAttribute('class', 'healer');
        healer.top = Math.random() * 700;
        const randomLeft = leftPosition[Math.floor(Math.random() * leftPosition.length)];
        healer.style.left = randomLeft + 'px';
        healer.style.top = healer.top + 'px';
        document.querySelector('.playground').appendChild(healer);
    }

    bullet = () => {
       
        if (this.bulletCount > 0){
            console.log("call")
            this.bulletCount-- ;
            document.getElementById('vehicleDestroy').innerHTML = this.bulletCount;
            let bullet = document.createElement('div');
            bullet.setAttribute('class', `bullet`);
            bullet.top = 300 ;
            bullet.style.left = document.querySelector('.playerCar').style.left;
            bullet.style.top = bullet.top + 'px';
            document.querySelector('.playground').appendChild(bullet);
        }
        
    }

    increaseBullet = () => {
        this.bulletCount += 3;
    }



}





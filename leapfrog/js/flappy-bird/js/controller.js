

let bird;
let pipes = [];
let playing;
let time;
let score;


//Not Displaying the Gates that were out of our player ground
function removeInvisibleGates() {
    s = pipes.length;
    pipes = pipes.filter(function (item) {
        return item.x + item.w >= 0;
    });
}


//function where we initiating the bird position and definning its assets
function init() {
    bird = {x: W/2 - BIRD_WIDTH/2,
            y: H/2 - BIRD_HEIGHT/2,
            w: BIRD_WIDTH,
            h: BIRD_HEIGHT,
            dy: 0};
    playing = true;
    time = 0;
    score = 0;
    pipes = [];
}


//Capturing the each step of player playing the flappy bird
function step() {
    if (playing) {

        for (var i = 0; i < pipes.length; ++i) {
            pipes[i].x -= SPEED;
        }
        removeInvisibleGates();
        if (time % PIPE_SPACING == 0) {
            spawnGate();
        }

        bird.dy += GRAVITY;
        newBirdBox = {x: bird.x, y: bird.y - bird.dy, w: bird.w, h: bird.h}

        // collisions
        for (var i = 0; i < pipes.length; ++i) {
            if (detectStrike(newBirdBox, pipes[i])) {
                playing = false;
                hideUnhideDom();
                main();
                break;
            }
        }
        if (newBirdBox.y + bird.h >= H) {
            playing = false;
            hideUnhideDom()
            main();
        }
        if (playing) {
            bird.y = newBirdBox.y;
            if (newBirdBox.y < 0) {
                bird.y = 0;
                bird.dy = 0;
            }
        }

        // score and time
        if (time > 0 && time % PIPE_SPACING == 0) {
            score += 1;
            localStorage.setItem('highest-score', score);
            if (score > localStorage.getItem('highest-score', score)){
                localStorage.setItem('highest-score', score);
            }
        }
        time += 1;
    }
    setTimeout(step, 20);
}

init();
step();

function hideUnhideDom(){
    document.querySelector('.after-crash').style.display = 'block';
    document.getElementById('score').innerHTML = score;
    document.getElementById('high-score').innerHTML = localStorage.getItem('highest-score');

}

//Getting the pipes of differest sizes
function spawnGate() {
    gateY = Math.floor(Math.random() * (H - PIPE_HEIGHT) + PIPE_HEIGHT/2)
    gateY = Math.max(PIPE_HEIGHT, gateY);
    gateY = Math.min(H - PIPE_HEIGHT, gateY);
    pipes.push({x: W, y: 0, w: PIPE_WIDTH, h: gateY - PIPE_HEIGHT/2});
    pipes.push({x: W, y: gateY + PIPE_HEIGHT/2, w: PIPE_WIDTH, h: H - gateY - PIPE_HEIGHT/2});
}

//Controller that is used to start the game and control the flappy
document.onkeydown = function (e) {

    document.getElementById('canvas').style.display = 'block';
    document.querySelector('.before-start').style.display = 'none';

    if (e.keyCode === 32) {
    document.querySelector('.after-crash').style.display = 'none';
        init();
        
    }
    else if (e.keyCode === 38)
        if (playing) {
            bird.dy = FLAPPING;
        }
    else if (e.keyCode === 82) {
        if (!playing) {
            init();
        }
    }
};


let bird;
let pipes = [];
let flapping;
let time;
let score;


//Not Displaying the Gates that were out of our player ground
function hideUndisplayPipes() {
    s = displayPipes.length;
    pipes = displayPipes.filter(function (item) {
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
    flapping = true;
    time = 0;
    score = 0;
    displayPipes = [];
}


//Capturing the each step of player playing the flappy bird
function step() {
    if (flapping && document.querySelector('#canvas').style.display == 'block') {

        for (var i = 0; i < displayPipes.length; ++i) {
            displayPipes[i].x -= SPEED;
        }
        hideUndisplayPipes();
        if (time % PIPE_SPACING == 0) {
            spawnGate();
        }

        bird.dy += GRAVITY;
        newBird= {x: bird.x, y: bird.y - bird.dy, w: bird.w, h: bird.h}

        // collisions
        for (var i = 0; i < displayPipes.length; ++i) {
            if (detectStrike(newBird, displayPipes[i])) {
                flapping = false;
                hideUnhideDom();
                main();
                break;
            }
        }
        if (newBird.y + bird.h >= H) {
            flapping = false;
            hideUnhideDom()
            main();
        }
        if (flapping) {
            bird.y = newBird.y;
            if (newBird.y < 0) {
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


//function to perform dom manipulation
function hideUnhideDom(){
    document.querySelector('.after-crash').style.display = 'block';
    document.getElementById('score').innerHTML = score;
    document.getElementById('high-score').innerHTML = localStorage.getItem('highest-score');

}


//Getting the pipes of differest sizes
function spawnGate() {
    gateUp = Math.floor(Math.random() * (H - TWO_PIPE_HEIGHT_DIFF) + TWO_PIPE_HEIGHT_DIFF/2)
    gateUp = Math.max(TWO_PIPE_HEIGHT_DIFF, gateUp);
    gateUp = Math.min(H - TWO_PIPE_HEIGHT_DIFF, gateUp);
    displayPipes.push({x: W, y: 0, w: PIPE_WIDTH, h: gateUp - TWO_PIPE_HEIGHT_DIFF/2});
    displayPipes.push({x: W, y: gateUp + TWO_PIPE_HEIGHT_DIFF/2, w: PIPE_WIDTH, h: H - gateUp - TWO_PIPE_HEIGHT_DIFF/2});
}

//Controller that is used to start the game and control the flappy
document.onclick = function (e) {

    document.getElementById('canvas').style.display = 'block';
    document.querySelector('.before-start').style.display = 'none';

    
    
if (e.keyCode === 82) {
        if (!flapping) {
            GRAVITY = -0.5;
            init();
        }
    }
};

document.onkeydown = function (e){
    document.getElementById('canvas').style.display = 'block';
    document.querySelector('.before-start').style.display = 'none';
    if (e.keyCode === 32) {
        document.querySelector('.after-crash').style.display = 'none';
            init();
            
        }

    else if (e.keyCode === 38)
    if (flapping) {
        bird.dy = FLAPPING;
    }
}


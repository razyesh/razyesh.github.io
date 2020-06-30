
let ants;
let score = 0;
let numberOfAnt = 20;

/**
 * function initializing
 */

function init(){
    ants = [];

    for (var i=0; i<numberOfAnt; i++){
        let x = Math.random() * 850 ;
        let y = Math.random() * 900;
        const height = 40;
        const width = 50;
        if (i != 0){
            for (var j=0; j < ants.length; j++){

                if (getDistance(x, y, ants[j].positionX, ants[j].positionY) < 0){
                    x = Math.random() * 850;
                    y = Math.random() * 900;
                    j = -1;
                }
            }
        }
        ants.push(new Ant(x, y, width, height))
    }
    
}

function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}  




document.getElementById('myCanvas').addEventListener('mousedown', function(e){

    for (i=0; i<ants.length; i++){
        if (getDistance(event.pageX, event.pageY, parseInt(ants[i].positionX), parseInt(ants[i].positionY)) <= 50){
            console.log(getDistance(event.pageX, event.pageY, parseInt(ants[i].positionX), parseInt(ants[i].positionY)))

            score ++;
            document.getElementById('score').innerHTML = score;
            index = ants.indexOf(ants[i]);
            ants.splice(index, 1);
            break;
        }
    }

    if (score == numberOfAnt){
        document.getElementById('score').innerHTML = "Winner, Refresh to play again";


    }
})

/**
 * function to change the position of circle
 */
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerHeight, innerWidth);
    ants.forEach(ant => {
        ant.update(ants);
    });    
}

init();
animate();

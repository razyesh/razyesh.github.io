
let ants;
let score = 0;

/**
 * function initializing
 */

function init(){
    ants = [];

    for (var i=0; i<20; i++){
        let x = Math.random() * 600 ;
        let y = Math.random() * 800;
        const height = 30;
        const width = 40;
        if (i != 0){
            for (var j=0; j < ants.length; j++){

                if (getDistance(x, y, ants[j].positionX, ants[j].positionY) < 0){
                    x = Math.random() * 600;
                    y = Math.random() * 800;
                    j = -1;
                }
            }
        }
        ants.push(new Ant(x, y, width, height))
    }
    h4 = document.createElement('h4');
    h4.innerHTML = `Total number of balls ${ants.length}`;
    document.querySelector('.info').appendChild(h4);

    h4 = document.createElement('h4');
    ants.forEach(ant => {
        h4.innerHTML = `Total balls were moving at speed x-direction: ${ant.speed.x}, y-direction: ${ant.speed.y}`;
        document.querySelector('.info').appendChild(h4);
    })

    
}

function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}  

document.getElementById('myCanvas').addEventListener('click', function(e){
    for (var i=0; i<ants.length; i++){
        console.log(e.clientX)
        console.log(ants[i].positionX);
        if ((ants[i].positionX - e.clientX) == 1) {
            
            score ++;
            console.log(score)
            index = ants.indexOf(ants[i])
            ants.splice(index, 1);
            continue;
            
        }
    }
    if (score == ants.length){
        console.log("Winner")
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

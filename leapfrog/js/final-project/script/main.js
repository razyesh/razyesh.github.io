let p1; //defining the playgorund
let playerMove; //checking the troops move
const characters = []; //troops that are going to face the battle
let isMoving = false; //checking whether troops is moving forward or not
let loaded = false; //checking whether the documents loaded completely or not
const randomCharacters = []; //the random characters
let direction; //finding on which direction character is moving
var draggable = false; 
let storedTransform = ctx.getTransform();
let count = 0;


/**
 * intial function that will run after the document loads completely
 */
function init() {
    clearInterval(loading);
    direction = 'down';
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    /**
     * declaration of playground
     */
    p1 = new PlayGround();
    p1.draw();

    /**
     * declaration of new attacking troops
     */
    c1 = new Troop(-320, 290, 'right', 1281, 952, 360, 552);
    c2 = new Troop(-150, 180, 'right', 1281, 952, 360, 552);
    c3 = new Troop(-280, 240, 'right', 1281, 952, 360, 552);
    characters.push(c1);
    characters.push(c2);
    characters.push(c3);

    const numberOfCharacters = 5;
    for (i = 0; i < numberOfCharacters; i++) {
        randomCharacters.push(new Character());
    }

    //function to update to state of our character
    function randomCharAnimation() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        p1.draw();
        for (i = 0; i < randomCharacters.length; i++) {
            randomCharacters[i].draw();
            randomCharacters[i].update();
        }

    }

    randomCharMove = setInterval(randomCharAnimation, 100);
    canvas.addEventListener('mousedown', handleMouseDown, true);

    //handling mouse down events for drag and drop
    function handleMouseDown(e) {
        console.log("mouse down");
        clearInterval(randomCharMove);
        obstacle = Object.keys(obstaclePosition);
        obstacle.forEach(function (character) {
            console.log(getMousePos(canvas, e).x - obstaclePosition[character].x - storedTransform.e);
            if ((obstaclePosition[character].x - getMousePos(canvas, e).x - storedTransform.e < 10 && obstaclePosition[character].x - getMousePos(canvas, e).x - storedTransform.e > 0)) {
                ctx.fillText(`${character}`, obstaclePosition[character].x, obstaclePosition[character].y);
                ctx.drawImage(image6, 2096, 2919, 873, 194, -250, 400, 200, 40);
                canvas.addEventListener('mousemove', handleDrag(e, character), false);
                canvas.addEventListener('mouseup', handleDrop, false);
            }
        })
    }


    //getting the current mouse position in canvas
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }


    //handling drag events
    function handleDrag(e, character) {
        draggable = true;
        if (draggable){
            obstaclePosition[character].x = getMousePos(canvas, e).x - storedTransform.e - obstaclePosition[character].dw / 2;
            obstaclePosition[character].y = getMousePos(canvas, e).y - storedTransform.f -  obstaclePosition[character].dh / 2;
            obstaclePosition[character].OffSetX = getMousePos(canvas, e).x;
            obstaclePosition[character].OffSetY = getMousePos(canvas, e).y;
        }
    }


    //handling drop events
    function handleDrop(){
        draggable = false;
        setInterval(randomCharMove);
        canvas.removeEventListener('mousemove', handleDrag);
        canvas.removeEventListener('mouseup', handleDrop);

    }


    //handling onclick events
    canvas.addEventListener('click', function (e) {
        if (CANVAS_HEIGHT - getMousePos(canvas, e).x - storedTransform.e < 10 && CANVAS_HEIGHT - getMousePos(canvas, e).x - storedTransform.e > 0){
            p1.collector = false;
            ctx.drawImage(image6, 2480, 78, 706, 466, -350, 10, 600, 400);
            clearInterval(randomCharMove);
        }
        else if (e.clientX - 520 < 5 && CANVAS_HEIGHT - e.clientY < 50) {
            p1.isAttacking = true;
            playerMove = setInterval(animate, 100);
        }
        else if ((getMousePos(canvas, e).x - storedTransform.e) > 25 && (getMousePos(canvas, e).x - storedTransform.e) < 40){
            if (!p1.upgrade){
                ctx.drawImage(image6, 934, 2910, 1002, 650, -350, 10, 600, 400);
            }
        }
        else if ((getMousePos(canvas, e).x - storedTransform.e) > 65 && (getMousePos(canvas, e).x - storedTransform.e) < 75){
            p1.draw();
            ctx.drawImage(image7, 88, 20, 2216, 1240, -350, 10, 600, 400);
        } else if((getMousePos(canvas, e).x - storedTransform.e) > 90 && (getMousePos(canvas, e).x - storedTransform.e) < 100) {

            if (p1.elixirStorage > 8000000){
                p1.upgrade = true;
                p1.elixirStorage -= 8000000;
                p1.draw();

            } else {
                ctx.font = "bold 18px Arial";
                ctx.fillStyle = 'red';
                ctx.fillText("You Don't have Enough Elixir to Upgrade Dragon", -200, 400);
            }
        } else if (-(getMousePos(canvas, e).x - storedTransform.e) > 430 && -(getMousePos(canvas, e).x - storedTransform.e) < 440){
            ctx.drawImage(image7, 264, 1444, 1068, 1424, -450, 0, 300, CANVAS_HEIGHT);
        } else if (-(getMousePos(canvas, e).x - storedTransform.e) > 160 && -(getMousePos(canvas, e).x - storedTransform.e) < 180){
            p1.draw();
        }
        else if ((getMousePos(canvas, e).x - storedTransform.e) > 10 && (getMousePos(canvas, e).x - storedTransform.e) < 20){
            if (this.training){
                count++;
                ctx.clearRect(140, 60, 20, 20);
                ctx.fillStyle = 'red';
                ctx.fillText(count, 140, 75);
            } else {
                ctx.drawImage(image7, 1517, 1501, 144, 142, 140, 30, 70, 60);
            }
            this.training = true 
        }
        else if (-(getMousePos(canvas, e).x - storedTransform.e) > 10 && -(getMousePos(canvas, e).x - storedTransform.e) < 20) {
            if (p1.collector) {
                coin_collect.play();
                p1.elixirStorage += Math.floor(Math.random() * 50);
                p1.goldStorage += Math.floor(Math.random() * 50);

            }
            p1.collector = false;
            p1.draw();
        }
        else if (600 - e.clientX < 100 && 500 - e.clientY < 100) {
            p1.isAttacking = false;
            p1.draw();
            clearInterval(playerMove);
        } 

        
    })
    setInterval(p1.minerCollectorCollectTrue, 20000);
    

}

//checking whether windows loaded completely or not
window.onload = function () {
    loaded = true;
    introPlay();
}

if (!loaded){
    ctx.font = '18px Times New Roman';
    ctx.fillText('loading...', 0, 240);
}

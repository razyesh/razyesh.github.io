var styles = `

    #canvas {
        border: 1px solid #cfc6c6;
        margin-top: 50px;
        height: 300px;
        width: 300px;
        margin-left: 40%;
        position: relative;
        background-color: #000;
    }

    .circle {
        background-color: #fff;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-bottom: 0;
        position: absolute;
        right: 40%;
        bottom: 0;
    }

    .heading1 {
        text-align: center;
    }

`
var stylesheet = document.createElement('style');
stylesheet.type = "text/css";
stylesheet.innerHTML = styles;
document.head.appendChild(stylesheet);



canvas = document.createElement('div');
canvas.id = "canvas"
document.body.appendChild(canvas)


circle = document.createElement('p');
circle.className = "circle";
circle.id = "c1"
document.getElementById('canvas').appendChild(circle);

h1 = document.createElement('h1');
h1.className = 'heading1';
h1.innerHTML = "Keep Bounce";
document.body.appendChild(h1);

elem = document.getElementById('c1');
top = window.getComputedStyle(elem, null).top;

ballUp();

function ballUp(){
    x = setInterval(function(){
        bottom = window.getComputedStyle(elem, null).bottom;
        if (bottom == "250px"){
            clearInterval(x);
            ballDown();
        }
        bottom = parseInt(bottom) + 1;
        document.getElementById('c1').style.bottom = `${bottom}px`;
        
    }, 1);
}

function ballDown(){
    x = setInterval(function(){
        bottom = window.getComputedStyle(elem, null).bottom;
        if (bottom == "0px"){
            clearInterval(x);
            ballUp();
        }
        bottom = parseInt(bottom) - 1;
        document.getElementById('c1').style.bottom = `${bottom}px`;
        
    }, 1);
}





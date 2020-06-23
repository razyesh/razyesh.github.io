var styles = `

    #canvas {
        border: 1px solid #cfc6c6;
        margin-top: 50px;
        height: 50vh;
        width: 25%;
        margin-left: 40%;
        position: relative;
    }

    .point {
        background-color: #5594e2;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        margin: 20px;
        position: absolute;
    }

    .heading1 {
        text-align: center;
    }

`

var points = [

    {x: 80, y: 0},
    {x: 50, y: 70},
    {x: 100, y: 100},
    {x: 150, y: 170},
    {x: 200, y: 238},
    {x: 100, y: 270},
    {x: 275, y: 320}

]


for (var i = 0 ; i<7; i++){
    point_style = `#p${i}{ top: ${points[i]['x']}px; left: ${points[i]['y']}px}`;
    styles = styles.concat(point_style)
}

var stylesheet = document.createElement('style');
stylesheet.type = "text/css";
stylesheet.innerHTML = styles;
document.head.appendChild(stylesheet);

h1 = document.createElement('h1');
h1.innerHTML = "Point Plot in CANVAS"
h1.className = 'heading1'
document.body.appendChild(h1);

canvas = document.createElement('div');
canvas.id = "canvas"
document.body.appendChild(canvas)


for (var i=0; i<7; i++){   
    point = document.createElement('p');
    point.className = "point";
    point.id = `p${i}`;
    document.getElementById('canvas').appendChild(point);
}



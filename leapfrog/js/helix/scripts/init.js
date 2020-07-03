

function init(){

let canvas = document.getElementById('canvas');
let ctx = this.canvas.getContext('2d');
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;
var helix = new Circle(canvas, ctx);
helix.drawCircle();
}

init();
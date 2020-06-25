
/*

    Plotting Points with JS OOP

*/

/**
 * 
 * @param {Number} x The left style of canvas 
 * @param {Number} y The top style of canvas 
 */

function Plot(x, y, container){

    this.x = x;
    this.y = y;
    this.element = document.createElement("div");
    this.element.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #000;
            top: ${this.y}px;
            left: ${this.x}px;
    `
    stylesheet = document.createElement('style');
    stylesheet.innerHTML = this.styles;
    document.head.appendChild(stylesheet);

    container.appendChild(this.element)

}

/**
 * 
 * @param {Number} x The left style of canvas 
 * @param {Number} y The top style of canvas 
 */

function Canvas(height, width, borderColor, x, y, id){
    this.points = points;
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.borderColor = borderColor;

    this.canvas = document.createElement("div");
    this.canvas.id = `canvas${id}`;
    this.canvas.style.position = 'relative';
    this.canvas.style.top = this.y + 'px';
    this.canvas.style.left = this.x + 'px';
    this.canvas.style.height = this.height + 'px';
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.padding = "20px";
    this.canvas.style.margin = "20px";
    this.canvas.style.float = "left";
    this.canvas.style.border = `1px solid ${this.borderColor}`;
    
    document.body.appendChild(this.canvas);

}



for (var i=0; i<20; i++){
    points = Array(20).fill().map(function(){ return {'x':Math.random()*200, 'y':Math.random()*200}});
    new Canvas(200, 200, 'red', 20, 40, i);
    points.forEach(plotCanvas);
    function plotCanvas(item, index){
        new Plot(item.x, item.y, document.getElementById(`canvas${i}`));
    }
}


// var canvas1 = new Canvas([plot1, plot2], 200, 200, 'red', 200, 200, 1);






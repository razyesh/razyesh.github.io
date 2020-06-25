/**
 * 
 * @param {Number} x The left style of canvas 
 * @param {Number} y The top style of canvas 
 */

function Canvas(height, width, borderColor, x, y, id){
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

/**
 * 
 * @param {Number} x The left style of canvas 
 * @param {Number} y The top style of canvas 
 */

function Circle(container, id, color){

    this.circle = document.createElement('p');
    this.circle.id = `circle${id}`;
    this.color = color;
    this.circle.style.cssText = `
        background-color: ${this.color};
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-bottom: 0;
        position: absolute;
        right: 40%;
        bottom: 0;
    `
    container.appendChild(this.circle);

}

/**
 * @param {HTMLElement} elem Circle Element to bounce;
 * @param {Number} speed Speed to Ball;
 */


class BallUp {
    constructor(elem, speed){
        this.speed = speed;
        this.elem = elem;   
        this.bounce = this.bounce.bind(this);
    }
    bounce() {
        try {
            this.bottom = window.getComputedStyle(this.elem, null).bottom;
            this.newJump = parseInt(this.bottom) + this.speed;
            this.elem.style.bottom = this.newJump + 'px';
            if (parseInt(this.newJump) >= 200 || parseInt(this.newJump)<=0){
                this.speed *= -1;
                
            }
        } catch(e){
            
        }
        
        window.requestAnimationFrame(this.bounce);
    }

}



for (var i=0; i<5; i++){
    var canvas = new Canvas(200, 200, `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, 0, 0, i);
    var circle = new Circle(document.getElementById(`canvas${i}`), i, `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);
    elem = document.getElementById(`circle${i}`);
    bounce = new BallUp(elem, i+2);
    window.requestAnimationFrame(bounce.bounce);
}






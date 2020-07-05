//Sprite for Background of my playground
const bg = {
	sx: 32,
	sy: 32,
	sw: 350,
	sh: 100,
	dx: 0,
	dy: 0,
	dw: 300,
	dh: 125,

	draw: function(){
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw + (1 * this.dw), this.dh + (1 * this.dh));
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw + (2 * this.dw), this.dh + (2 * this.dh));
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw + (3 * this.dw), this.dh + (3 * this.dh));


	}
}


//Sprite of Town Hall
const townHall = {

	sx: 280,
	sy: 266,
	sw: 40,
	sh: 40,
	dx: 380,
	dy: 225,
	dw: 60,
	dh: 60,

	draw: function(){
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);

	}

}


//sprite of vertical wall
const verticalBar = {

	sx: 329,
	sy: 239,
	sw: 16,
	sh: 92,
	dx: 440,
	dy: 210,
	dw: 16,
	dh: 92,

	draw: function(){
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx , this.dy + 92, this.dw, this.dh);


	}

}
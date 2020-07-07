const bg = {
	sx: 32,
	sy: 32,
	sw: 350,
	sh: 125,
	dx: 0,
	dy: 0,
	dw: 350,
	dh: 125,

	draw: function(){
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw + (1 * this.dw), this.dh + (1 * this.dh));
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw + (2 * this.dw), this.dh + (2 * this.dh));
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw + (3 * this.dw), this.dh + (3 * this.dh));


	}
}

const townHall = {

	sx: 280,
	sy: 266,
	sw: 40,
	sh: 40,
	dx: 350,
	dy: 175,
	dw: 60,
	dh: 60,

	draw: function(x, y){
		if (x && y){
			ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, x, y, this.dw, this.dh);
		} else {
			ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);

		}

	}

}

const verticalBar = {

	sx: 329,
	sy: 239,
	sw: 16,
	sh: 92,
	dx: 410,
	dy: 170,
	dw: 16,
	dh: 92,

	draw: function(x, y){
		if (x && y){

		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, x, y, this.dw, this.dh);
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, x , y + 92, this.dw, this.dh);
	} else {
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx , this.dy + 92, this.dw, this.dh);
	}

	}

}

const horizontalBar = {
	sx: 210,
	sy: 255,
	sw: 61,
	sh: 16,
	dx: 210,
	dy: 255,
	dw: 61,
	dh: 16,

	draw: function(x, y){
		if (x && y){
			ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, x, y, this.dw, this.dh);
		} else {
			ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);

		}

	}
}

const canon = {
	sx: 227,
	sy: 272,
	sw: 42,
	sh: 42,
	dx: 360,
	dy: 250,
	dw: 42,
	dh: 42,
	name:'canon',

	draw: function(x, y){
		if (x && y){
			ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, x, y, this.dw, this.dh);
		} else {
			ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);

		}
	}
}

const goldStorage = {

	sx: 227,
	sy: 272,
	sw: 42,
	sh: 42,
	dw: 42,
	dh: 42,

	draw: function(x, y){
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, x, y, this.dw, this.dh);

	}

}


const campFire = {
	sx: 150,
	sy: 388,
	sw: 52,
	sh: 43,
	dw: 45,
	dh: 43,

	draw: function(x, y){
		ctx.drawImage(image, this.sx, this.sy, this.sw, this.sh, x, y, this.dw, this.dh);

	}
}
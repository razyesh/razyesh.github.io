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
	sw: 38,
	sh: 37,
	dw: 80,
	dh: 80,

	draw: function(sx, sy, dx, dy, image){
		
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);

	}

}

const wall = {

	sw: 11,
	sh: 13,
	dw: 11,
	dh: 13,

	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}

}


const canon = {
	sw: 42,
	sh: 42,
	dw: 62,
	dh: 62,

	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const goldStorage = {
	sw: 26,
	sh: 27,
	dw: 42,
	dh: 42,

	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);

	}

}


const campFire = {
	sw: 52,
	sh: 43,
	dw: 45,
	dh: 43,

	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);

	}
}
const bg = {
	sx: 32,
	sy: 32,
	sw: 350,
	sh: 125,
	dx: 0,
	dy: 0,
	dw: 350,
	dh: 125,
	draw: function () {
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
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const wall = {
	sw: 11,
	sh: 13,
	dw: 11,
	dh: 13,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const canon = {
	sw: 42,
	sh: 42,
	dw: 62,
	dh: 62,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	},
}


const canonBall = {
	sw: 6,
	sh: 7,
	dw: 6,
	dh: 7,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	},
}


const goldStorage = {
	sw: 26,
	sh: 27,
	dw: 42,
	dh: 42,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const campFire = {
	sw: 52,
	sh: 43,
	dw: 45,
	dh: 43,

	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const elixirCollector = {
	sw: 40,
	sh: 45,
	dw: 45,
	dh: 43,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const goldCollector = {
	sw: 33,
	sh: 32,
	dw: 45,
	dh: 43,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const getMine = {
	sw: 14,
	sh: 15,
	dw: 14,
	dh: 15,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const barrack = {
	sw: 23,
	sh: 28,
	dw: 23,
	dh: 28,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}



const obstaclePosition = {
	goldCollector : {
		x: 45,
		y: 340
	},
	elixirCollector: {
		x: -60,
		y: 340
	},

	canon: {
		x: -60,
		y: 305
	},

	goldStorage: {
		x: 60,
		y: 280,
	},

	campFire: {
		x: -80,
		y: 320
	},

	wall: {
		x: [-80, -65, -45, -30, 0, 20, 40],
		y: [280, 263, 275, 320, 310, 270, 320, 290],

	}
}
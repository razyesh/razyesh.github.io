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
	sw: 337,
	sh: 342,
	dw: 80,
	dh: 80,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const wall = {
	sw: 54,
	sh: 87,
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


const attackButton = {
	sw: 236,
	sh: 233,
	dw: 90,
	dh: 80,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}

}


const trophy = {
	sw: 368,
	sh: 126,
	dw: 130,
	dh: 50,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}  


const elixirDisplay = {
	sw: 454,
	sh: 109,
	dw: 180,
	dh: 40,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const goldDisplay = {
	sw: 464,
	sh: 113,
	dw: 180,
	dh: 40,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const gemDisplay = {
	sw: 333,
	sh: 105,
	dw: 130,
	dh: 40,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const shopClick = {
	sw: 221,
	sh: 216,
	dw: 100,
	dh: 80,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const archerTower = {
	sw: 396,
	sh: 459,
	dw: 100,
	dh: 80,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
} 

const playgroundItem = ['townHall', 'canon', 'elixirCollector', 'goldCollector', 'campFire']


const obstaclePosition = {
	goldCollector : {
		x: 0,
		y: 325
	},
	elixirCollector: {
		x: -42,
		y: 350
	},

	canon: {
		x: -42,
		y: 305
	},

	goldStorage: {
		x: 60,
		y: 280,
	},

	campFire: {
		x: -100,
		y: 330
	},

	wall: {
		x: [-80, -65, -45, -30, 0, 20, 40],
		y: [280, 263, 275, 320, 310, 270, 320, 290],

	},

	townHall: {
		x: -42,
		y: 220
	}
}


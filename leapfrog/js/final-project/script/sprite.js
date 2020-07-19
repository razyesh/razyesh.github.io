/**
 * collection of all the sprites info for our playground
 */

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
	sw: 174,
	sh: 160,
	dw: 45,
	dh: 43,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const getMine = {
	sw: 321,
	sh: 335,
	dw: 24,
	dh: 25,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const barrack = {
	sw: 23,
	sh: 28,
	dw: 40,
	dh: 50,
	draw: function (sx, sy, dx, dy, image) {
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}


const attackButton = {
	sw: 244,
	sh: 240,
	dw: 90,
	dh: 80,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}

}


const trophy = {
	sw: 598,
	sh: 423,
	dw: 200,
	dh: 150,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}  


const elixirDisplay = {
	sw: 470,
	sh: 117,
	dw: 180,
	dh: 50,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const goldDisplay = {
	sw: 464,
	sh: 113,
	dw: 180,
	dh: 50,
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
	sw: 208,
	sh: 305,
	dw: 50,
	dh: 70,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
} 

const endBattle = {
	sw: 140,
	sh: 50,
	dw: 100,
	dh: 50,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const baseTroop = {
	sw: 418,
	sh: 384,
	dw: 50,
	dh: 40,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const baseTroop2 = {
	sw: 530,
	sh: 318,
	dw: 50,
	dh: 40,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const warMapTrainTroop = {
	sw: 138,
	sh: 285,
	dw: 50,
	dh: 100,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const settingMyBase = {
	sw: 140,
	sh: 433,
	dw: 50,
	dh: 150,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const clanCastle = {
	sw: 310,
	sh: 350,
	dw: 50,
	dh: 60,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const laboratory = {
	sw: 192,
	sh: 198,
	dw: 70,
	dh: 60,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const spellFactory = {
	sw: 216,
	sh: 196,
	dw: 50,
	dh: 60,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const elixirStorage = {
	sw: 268,
	sh: 270,
	dw: 50,
	dh: 60,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const builderShield = {
	sw: 876,
	sh: 132,
	dw: 250,
	dh: 40,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

const builder = {
	sw: 182,
	sh: 216,
	dw: 30,
	dh: 30,
	draw: function(sx, sy, dx, dy, image){
		ctx.drawImage(image, sx, sy, this.sw, this.sh, dx, dy, this.dw, this.dh);
	}
}

let obstaclePosition = {
	goldCollector : {
		x: 40,
		y: 300,
		dw: 45,
		dh: 43,
		OffSetX: 480,
		OffSetY: 280,
	},
	elixirCollector: {
		x: -42,
		y: 350,
		dw: 45,
		dh: 43,
		OffSetX: 430,
		OffSetY: 390,
		
	},

	canon: {
		x: -42,
		y: 305,
		dw: 62,
		dh: 62,
		OffSetX: 425,
		OffSetY: 330,
	},

	goldStorage: {
		x: -150,
		y: 310,
		dw: 42,
		dh: 42,
		OffSetX: 525,
		OffSetY: 330,
		
	},

	campFire: {
		x: 100,
		y: 200,
		dw: 45,
		dh: 43,
		OffSetX: 425,
	},

	townHall: {
		x: -42,
		y: 220,
		dw: 80,
		dh: 80,
		OffSetX: 450,
	},

	archerTower: {
		x: -125,
		y: 235,
		dw: 50,
		dh: 70,
		OffSetX: 355,
		OffSetY: 220
	}, 
	archerTower2: {
		x: 30, 
		y: 200,
		dw: 50,
		dh: 70,
		OffSetX: 515,
		OffSetY: 240,
	},
	barrack: {
		x: 80,
		y: 260,
		dw: barrack.dw,
		dh: barrack.dh,
		OffSetX: 540,
		OffSetY: 300
	}, 

	clanCastle: {
		x: -80,
		y: 200,
		dw: 50,
		dh: 60,
	}, 

	laboratory: {
		x: 0,
		y: 150,
		dw: laboratory.dw,
		dh: laboratory.dh,
	},

	spellFactory: {
		x: -180,
		y: 205,
		dw: spellFactory.dw,
		dh: spellFactory.dh,
	},

	elixirStorage: {
		x: 130,
		y: 230,
		dw: elixirCollector.dw,
		dh: elixirCollector.dh
	},
	builderShield : {
		x : -150,
		y: 0,
		dw: builderShield.dw,
		dh: builderShield.dh,
	},
	builder1: {
		x: -30,
		y: 180,
		dw: builder.dw,
		dh: builder.dh,
	},

	builder2 : {
		x: -120,
		y: 180,
		dw: builder.dw,
		dh: builder.dh,
	}

}


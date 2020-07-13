/**
 * Playground is the actual Base or Village that is pre-defined on our set
 */

class PlayGround {
    constructor() {

        this.collector = true;
        this.elixirStorage = 1000;
        this.goldStorage = 1000;
        this.attack = false;
        this.fx = -125;
        this.fy = 265;
        this.speed = 3;
        this.decorateHeight = 50;
        this.decorateWidth = 25;

    }

    // draw method simply draws different sprites on our village
    draw = () => {
        for (var x = 0; x < 40; x++) {
            for (var y = 0; y < 30; y++) {
                this.drawImageTile(x, y);
            }
        }

        for (var x = 0; x < 17; x++) {
            for (var y = 0; y < 8; y++) {
                this.drawEdgeTileLeft(x, y);
            }
        }
        for (var x = 0; x < 10; x++) {
            for (var y = 0; y < 20; y++) {
                this.drawEdgeTileTop(x, y);
            }
        }
        this.horizontalWall(6, 40, 280);
		this.horizontalWall(5, -15, 250);
		this.verticalWall(6, -65, 275);
		this.horizontalWall(6, 20, 320);
		this.verticalWall(2, 0, 310);
        this.verticalWall(5, -5, 250);
        this.verticalWall(5, -80, 320);
        this.horizontalWall(6, -30, 290);

        if (obstaclePosition.canon){
            canon.draw(101, 87, -42, 305, image);
        }
        archerTower.draw(208, 1300, -145, 245, image6);
        goldStorage.draw(58, 129, 60, 280, image);
        campFire.draw(25, 203, -100, 321, image);
        barrack.draw(225, 100, 40, 240, image);
        attackButton.draw(224, 2094, -440, CANVAS_HEIGHT - 100, image6);
        trophy.draw(222, 956, -440, 0, image6);
        gemDisplay.draw(1678, 250, 200, 100, image6);
        shopClick.draw(1980, 2102, 240, CANVAS_HEIGHT - 100, image6);

        for (let i = 0; i<10; i++){
            this.tree(image5, 70, 254,  - ( i * 90), i * 50);
        }

        for (let i = 0; i<3; i++){
            this.tree(image5, 401, 111,  ( i * 30),  i * 190);
        }

        if (obstaclePosition.townHall){
            townHall.draw(860, 2016, -42, 220, image6);
        }

		if (this.collector && !this.attack){
			getMine.draw(20, 123, -25, 334, image);
        }
        this.displayScore();
        if (obstaclePosition.elixirCollector){
            elixirCollector.draw(32, 21, -42, 350, image);
        }
        if (obstaclePosition.goldCollector){
            goldCollector.draw(148, 194, 0, 325, image);
        }
    }

    horizontalWall = (n, x, y) => {
		for (var i=0;i<n; i++){
			wall.draw(758, 1938, x - (i * 10), y + (i * 5), image6);
		}

	}

	verticalWall = (n, x, y) => {
		for (var i=0;i<n; i++){
			wall.draw(758, 1938, x + (i * 10), y + (i * 5), image6);
		}
	}

    drawImageTile = (x, y) => {
        ctx.save();
        ctx.translate((x - y) * 60 / 2, (x + y) * 20 / 2);
        ctx.drawImage(image4, 336, 0, 60, 45, -200 / 2, 0, 60, 45);
        ctx.restore();
    }
    
    drawEdgeTileLeft = (x, y) => {
        ctx.save();
        ctx.translate((x - y) * 60 / 2, (x + y) * 30 / 2);
        ctx.drawImage(image4, 0, 0, 60, 45, -570, 360, 60, 45);
        ctx.restore();
    }
    
    drawEdgeTileTop = (x, y) => {
        ctx.save();
        ctx.translate((x - y) * 60 / 2, (x + y) * 30 / 2);
        ctx.drawImage(image4, 505, 0, 60, 45, -400, -140, 60, 45);
        ctx.restore();
    }
    
    drawEdgeTileRight = (x, y) => {
        ctx.save();
        ctx.translate((x - y) * 60 / 2, (x + y) * 30 / 2);
        ctx.drawImage(image4, 0, 0, 60, 45, 140, -132, 60, 45);
        ctx.restore();
    }

    displayScore = () => {
        ctx.clearRect(0, 0, 400, 50);
        goldDisplay.draw(1326, 2224, 150, 10, image6);
        elixirDisplay.draw(1764, 954, 150, 50, image6);
        ctx.font = "18px Georgia";
        ctx.fillStyle = '#fff';
        ctx.fillText(`${this.goldStorage}`, 240, 40);
        ctx.fillText(`${this.elixirStorage}`, 240, 80);
    }

    minerCollectorCollectTrue = () => {
        this.collector = true;
        this.draw();
    }
    
    fire = () => {
        this.fx += this.speed;
        this.fy -= this.speed;
            ctx.beginPath();
            ctx.drawImage(image6, 944, 230, 138, 128, this.fx, this.fy, 25, 15);
            ctx.fillStyle = '#000';
            ctx.fill();
            ctx.closePath();
    }

    tree = (image, sx, sy, dx, dy) => {
        ctx.drawImage(image, sx, sy, 105, 145, dx, dy, this.decorateWidth, this.decorateHeight);
    }


}



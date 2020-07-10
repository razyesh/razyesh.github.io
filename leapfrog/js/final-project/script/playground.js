/**
 * Playground is the actual Base or Village that is pre-defined on our set
 */

class PlayGround {
    constructor() {

        this.collector = true;
        this.elixirStorage = 1000;
        this.attack = false;
        this.fx = -5;
        this.fy = 323;

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
		this.horizontalWall(2, -45, 263);
		this.verticalWall(6, -65, 275);
		this.horizontalWall(6, 20, 320);
		this.verticalWall(2, 0, 310);
		this.verticalWall(2, 40, 270);
        townHall.draw(150, 73, -35, 225, image);
        canon.draw(101, 87, -35, 305, image);
        goldStorage.draw(58, 129, 60, 280, image);
        campFire.draw(25, 203, -80, 305, image);
        barrack.draw(225, 100, 60, 260, image);
		if (this.collector){
			getMine.draw(20, 123, -50, 353, image);
        }
        this.displayScore();
        if (obstaclePosition.elixirCollector){
            elixirCollector.draw(32, 21, -60, 365, image);
        }
        if (obstaclePosition.goldCollector){
            goldCollector.draw(148, 194, 35, 340, image);
        }
    }

    horizontalWall = (n, x, y) => {
		for (var i=0;i<n; i++){
			wall.draw(185, 50, x - (i * 10), y + (i * 5), image);
		}

	}

	verticalWall = (n, x, y) => {
		for (var i=0;i<n; i++){
			wall.draw(185, 50, x + (i * 10), y + (i * 5), image);
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

        ctx.clearRect(0, 0, 400, 110);
        ctx.font = "18px Georgia";
        var gradient = ctx.createLinearGradient(0, 0, 850, 0);
        gradient.addColorStop("0"," magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.fillStyle = gradient;
        getMine.draw(20, 123, 180, 85, image);
        ctx.fillText(`Elixir: ${this.elixirStorage}`, 200, 100);
    }

    minerCollectorCollectTrue = () => {
        this.collector = true;
        this.draw();
    }
    
    fire = () => {
        this.fx += 1;
        this.fy += 1;
        ctx.beginPath();
        ctx.arc(this.fx, this.fy, 5, 0, 2 * Math.PI);
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.closePath();
    }
}



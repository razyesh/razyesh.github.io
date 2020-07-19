/**
 * Playground is the actual Base or Village that is pre-defined on our set
 */

class PlayGround {
    constructor() {

        this.collector = true;
        this.elixirStorage = 7500000;
        this.goldStorage = 7500000;
        this.attack = false;
        this.fx = 20;
        this.fy = 210;
        this.speed = 2;
        this.decorateHeight = 50;
        this.decorateWidth = 25;
        this.isAttacking = false;
        this.count = 0;
        this.myTroopX = -60;
        this.myTroopY = -40;
        this.tempObstacle = obstaclePosition;
        this.upgrade = false;
        this.training = false;
    }


    // draw method simply draws different sprites on our village
    draw = () => {
        this.drawPlayGroundEdges();
        this.displayScore();
        this.drawWall();

        if (this.isAttacking){ 
            if (obstaclePosition.canon){
                canon.draw(101, 87, obstaclePosition['canon'].x, obstaclePosition['canon'].y, image);
            }
            if (obstaclePosition.archerTower){
                archerTower.draw(224, 1304, obstaclePosition['archerTower'].x, obstaclePosition['archerTower'].y, image6);
            }
    
            if (obstaclePosition.archerTower2){
                archerTower.draw(224, 1304, obstaclePosition['archerTower2'].x, obstaclePosition['archerTower2'].y, image6);
            }
            if (obstaclePosition.goldStorage){
                goldStorage.draw(58, 129, obstaclePosition['goldStorage'].x, obstaclePosition['goldStorage'].y, image);
            }
            if (obstaclePosition.campFire){
                campFire.draw(25, 203, obstaclePosition['campFire'].x, obstaclePosition['campFire'].y, image);
            }
            if (obstaclePosition.barrack){
                barrack.draw(225, 100, obstaclePosition['barrack'].x, obstaclePosition['barrack'].y, image);
            }
            endBattle.draw(1595, 82, -440, CANVAS_HEIGHT - 100, image6);
            if (obstaclePosition.townHall){
                townHall.draw(860, 2016, obstaclePosition['townHall'].x, obstaclePosition['townHall'].y, image6);
            }
    
            if (obstaclePosition.clanCastle){
                clanCastle.draw(1754, 1325, obstaclePosition['clanCastle'].x, obstaclePosition['clanCastle'].y, image6);
            }
            if (obstaclePosition.elixirCollector){
                elixirCollector.draw(32, 21, obstaclePosition['elixirCollector'].x, obstaclePosition['elixirCollector'].y, image);
            }
            if (obstaclePosition.goldCollector){
                goldCollector.draw(148, 194, obstaclePosition['goldCollector'].x, obstaclePosition['goldCollector'].y, image);
            }

            if (obstaclePosition.laboratory){
                laboratory.draw(2479, 1704, obstaclePosition['laboratory'].x, obstaclePosition['laboratory'].y, image6);
            }

            if (obstaclePosition.clanCastle){
                clanCastle.draw(1754, 1325, obstaclePosition['clanCastle'].x, obstaclePosition['clanCastle'].y, image);
            }

        } else if (!this.isAttacking) {
            baseTroop2.draw(1409, 1866, 60, 180, image6);
            baseTroop2.draw(1409, 1866, 60, 180, image6);

            this.playgroundObstacle();
        }
        trophy.draw(1989, 3237, -440, 0, image6);
        gemDisplay.draw(1883, 1196, 195, 110, image6);
        shopClick.draw(1980, 2102, 240, CANVAS_HEIGHT - 100, image6);
        warMapTrainTroop.draw(244, 1812, -440, CANVAS_HEIGHT - 210, image6);
        ctx.drawImage(image7, 0, 1428, 104, 352, -450, 160, 30, 130);
    }

    playgroundObstacle = () => {
        canon.draw(101, 87, -42, 305, image);
        archerTower.draw(224, 1304, -125, 235, image6);
        archerTower.draw(224, 1304, 30, 200, image6);
        goldStorage.draw(58, 129, -150, 310, image);
        campFire.draw(25, 203, 100, 200, image);
        barrack.draw(225, 100, 80, 260, image);
        attackButton.draw(246, 2108, -440, CANVAS_HEIGHT - 100, image6);
        townHall.draw(860, 2016, -42, 220, image6);
        clanCastle.draw(1754, 1325, -80, 200, image6);
        elixirCollector.draw(32, 21, -42, 350, image);

        goldCollector.draw(2499, 1972, 40, 300, image6);

        if (this.upgrade){
            console.log("yes");
            ctx.beginPath();
            ctx.drawImage(image7, 1517, 1501, 144, 142, - 20, 130, 20, 20);
            ctx.rect(10, 140, 40, 5);
            ctx.font = '14px Times New Roman'
            ctx.fillText('13d 23H', 10, 135);
            ctx.fillStyle = '#ebbd34';
            ctx.fill();
        }
        laboratory.draw(2479, 1704, 0, 150, image6);
        spellFactory.draw(3376, 1990, -180, 205, image6);
        elixirStorage.draw(2974, 2158, 130, 230, image6);
        builderShield.draw(2800, 3228, -150, 0, image6);
        builder.draw(3138, 748, -30, 180, image6);
        builder.draw(3138, 748, -120, 180, image6)
        settingMyBase.draw(2108, 1664, 290, CANVAS_HEIGHT - 260, image6);


        if (this.collector){
            getMine.draw(1721, 2440, -25, 334, image6);
            getMine.draw(2766, 1757, 40, 280, image6);
        }
    }

    drawPlayGroundEdges = () => {
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

        for (var x = 0; x < 17; x++) {
            for (var y = 0; y < 8; y++) {
                this.drawEdgeTileRight(x, y);
            }
        }
        for (var x = 0; x < 10; x++) {
            for (var y = 0; y < 20; y++) {
                this.drawEdgeTileTop(x, y);
            }
        }
        for (let i = 0; i<10; i++){
            this.tree(image5, 70, 254,  - ( i * 90), i * 50);
        }
    }

    drawWall = () => {
        this.horizontalWall(6, 40, 280);
		this.horizontalWall(5, -15, 250);
		this.verticalWall(6, -65, 275);
		this.horizontalWall(6, 20, 320);
		this.verticalWall(2, 0, 310);
        this.verticalWall(5, -5, 250);
        this.verticalWall(5, -80, 320);
        this.horizontalWall(6, -30, 290);
        this.verticalWall(4, -100, 250);
        this.horizontalWall(6, -110, 255);
        this.verticalWall(7, -150, 290);
        this.verticalWall(7, 50, 210);
        this.horizontalWall(7, 40, 210);
        this.horizontalWall(7, 110, 250);
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
        ctx.drawImage(image4, 733, 10, 57, 37, 130, -120, 60, 45);
        ctx.restore();
    }

    displayScore = () => {
        ctx.clearRect(0, 0, 400, 0);
        goldDisplay.draw(1344, 2238, 150, 10, image6);
        elixirDisplay.draw(1784, 968, 150, 60, image6);
        ctx.font = "18px Aerial";
        ctx.fillStyle = '#fff';
        ctx.fillText(`${this.goldStorage}`, 210, 45);
        ctx.fillText(`${this.elixirStorage}`, 210, 95);
    }

    minerCollectorCollectTrue = () => {
        this.collector = true;
        this.draw();
    }
    
    fire = () => {
        this.fx -= this.speed;
        this.fy -= this.speed;
        if (this.count === 0){
            
            ctx.beginPath();
            ctx.drawImage(image6, 1202, 284, 172, 33, this.fx, this.fy, 25, 15);
            ctx.closePath();
        }
    }

    tree = (image, sx, sy, dx, dy) => {
        ctx.drawImage(image, sx, sy, 105, 145, dx, dy, this.decorateWidth, this.decorateHeight);
    }


}



class PlayGround {
    constructor() {

    }

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
        townHall.draw(150, 73, -35, 245, image);
        for (var i = 0; i < 5; i++) {
            wall.draw(185, 50, -30 - (i * 10), 245 + (i * 5), image);
        }
        canon.draw(101, 87, -30, 330, image);
        goldStorage.draw(58, 129, 60, 280, image);
        campFire.draw(25, 203, -80, 305, image);
    }

    drawImageTile = (x, y) => {
        ctx.save();
        ctx.translate((x - y) * 60 / 2, (x + y) * 30 / 2);
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
        ctx.translate((x - y) * 60 / 2, (x + y) * 25 / 2);
        ctx.drawImage(image4, 505, 0, 60, 45, -400, -140, 60, 45);
        ctx.restore();
    }
    
    drawEdgeTileRight = (x, y) => {
        ctx.save();
        ctx.translate((x - y) * 60 / 2, (x + y) * 30 / 2);
        ctx.drawImage(image4, 0, 0, 60, 45, 140, -132, 60, 45);
        ctx.restore();
    }
}



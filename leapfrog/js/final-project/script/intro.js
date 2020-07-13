function introPlay() {
    ctx.drawImage(image2, 0, 4, 1128, 628, -450, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    document.getElementById('play').onclick = function (e) {
        document.getElementById('play').style.display = 'none';
        ctx.drawImage(image2, 54, 636, 1014, 588, -450, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillStyle = "#fff";
        ctx.font = "28px Arial";
        ctx.fillText("Loading", -100, 400);
        intro.play();
        setTimeout(init, 5000);
        
    }
}
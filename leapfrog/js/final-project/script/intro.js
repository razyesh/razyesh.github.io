function introPlay() {
    let loadWidth = 10;
    ctx.drawImage(image2, 0, 4, 1128, 628, -450, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    document.getElementById('play').onclick = function (e) {
        document.getElementById('play').style.display = 'none';
        ctx.drawImage(image2, 54, 636, 1014, 588, -450, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fillStyle = "#fff";
        ctx.font = "24px Arial";
        ctx.fillText("Loading", -100, 400);
        // ctx.rect(-100, 420, 150, 10);
        // ctx.stroke();
        loading = setInterval(function(e){
            if (loadWidth != 150){
                loadWidth += 10;
            }
            ctx.rect(-100, 420, loadWidth, 10)
            ctx.fillStyle = '#323aa8';
            ctx.fill();
        }, 500);
        intro.play();
        setTimeout(init, 5000);
        
    }
}
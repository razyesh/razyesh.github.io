

function introPlay() {
    ctx.drawImage(image2, 0, 4, 1128, 628, 0, 0, 958, 500);
    document.getElementById('play').onclick = function (e) {
        document.getElementById('play').style.display = 'none';
        ctx.drawImage(image2, 54, 636, 1014, 588, 0, 0, 958, 500);
        ctx.fillStyle = "#fff";
        ctx.font = "18px Arial";
        ctx.fillText("Loading", 350, 450);
        intro.play();
        init();
        
    }
}
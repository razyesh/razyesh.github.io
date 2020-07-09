let p1;
function init() {
    p1 = new PlayGround();
    p1.draw();
    canvas.addEventListener('mousedown', function(e){
        ctx.arc(-25, 355, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        p1.attack = true;
    })
    
    canvas.addEventListener('click', function (e) {
        if (e.clientY - 365 < 20 && e.clientY - 365 > 0) {
            if (p1.collector) {
                p1.elixirStorage += 500;
            }
            p1.collector = false;
            p1.draw();
        }
    })
    setInterval(p1.minerCollectorCollectTrue, 20000);

}
window.onload = function () {
    init();
}
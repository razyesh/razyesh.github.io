let p1;
function init() {
    p1 = new PlayGround();
    p1.draw();

    canvas.addEventListener('click', function (e) {
        if (e.clientY - 365 < 30 && e.clientY - 365 > 0) {
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
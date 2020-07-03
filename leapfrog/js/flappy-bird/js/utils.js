//drawing sprite images on our playground
function displaySprite(sprite, x, y) {
    ctx.drawImage(sprites, sprite.x, sprite.y, sprite.w, sprite.h,
                  x, y, sprite.scale*sprite.w, sprite.scale*sprite.h);
}


//function detecting whether the bird strike on any of the two pipe of ground
function detectStrike(box1, box2) {
    return box1.x < box2.x + box2.w &&
           box1.x + box1.w > box2.x &&
           box1.y < box2.y + box2.h &&
           box1.y + box1.h > box2.y;
}
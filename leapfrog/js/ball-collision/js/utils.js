/**
 * function to generate random color
 */

function colorGenerator(){
    return `rgb(${1 + Math.random() *100}, ${50 + Math.random() * 100}, ${100 + Math.random() * 100})`;
}

/**
 * 
 * @param {Float} speed The speed at which the particle is moving
 * @param {*} angle the angle at which the particle is colliding usually one dimension
 */

function rotate(speed, angle){
    const speedVelocity = {
        x: speed.x * Math.cos(angle) - speed.y * Math.sin(angle),
        y: speed.x * Math.sin(angle) + speed.y * Math.cos(angle)
    }
    return speedVelocity;
}

/**
 * 
 * @param {object} Ball particle 
 * @param {object} Ball nextParticle 
 */

function checkCollision(particle, nextParticle){
    const dx = particle.speed.x - nextParticle.speed.x;
    const dy = particle.speed.y - nextParticle.speed.y;
    
    const xs = nextParticle.positionX - particle.positionX;
    const ys = nextParticle.positionY - particle.positionY;
    if (dx * xs + dy * ys >= 0){
        const angle = -Math.atan2(nextParticle.positionY - particle.positionY, nextParticle.positionX - particle.positionX);
        const m1 = particle.mass;
        const m2 = nextParticle.mass;

        const u1 = rotate(particle.speed, angle);
        const u2 = rotate(nextParticle.speed, angle);

        // One Dimensional Newtonian equation
        const v1 = {
            x: u1.x * (m1-m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
            y: u1.y 
        }

        const v2 = {
            x: u2.x * (m1-m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
            y: u2.y
        }

        const vF1 = rotate(v1, -angle);
        const vF2 = rotate(v2, -angle);

        particle.speed.x = vF1.x;
        particle.speed.y = vF1.y;

        nextParticle.speed.x = vF2.x;
        nextParticle.speed.y = vF2.y;

    }
}
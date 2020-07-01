let count = 0;

function isCollide(a, b){
    aRect = a.getBoundingClientRect();
    bRect = b.getBoundingClientRect();
    if ((aRect.top == bRect.top && aRect.left == bRect.left) || (aRect.bottom < bRect.top+200 && aRect.left == bRect.left)){
        document.querySelector('.playground').style.opacity = 0;
        document.querySelector('.play-again').style.display = 'inline-block';
        // clearInterval(changeSpeed);
        if (document.querySelector('.before-start').style.display == 'none'){
            document.querySelector('.after-crash').style.display = 'inline-block';
                document.getElementById('result').innerHTML = localStorage.getItem('score');
                document.getElementById('highest').innerHTML = localStorage.getItem('highest-score');

        }

        return false;
    } else {
        return true;
    }

}
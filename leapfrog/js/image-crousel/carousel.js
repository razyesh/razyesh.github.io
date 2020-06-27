/**
 * @param {Number} LIMIT The width limit of carousel
 * @param {Number} currentIndex The current index of carousel
 * @param {function} slideRight To slide the image to right
 * @param {function} slideLeft To slide the image to left
 * @param {animator} imageSliderLeft To slide image to left on certain interval
 * @param {animator} imageSliderRight To slide image to right on certain interval 
 */

var currentIndex = 0;
var LIMIT = 400;
var leftswap = 0;
var sliderImages = document.querySelectorAll('.slide');
var imageWrapper = document.querySelector('.carousel-image-wrapper');
var UNIT = 'px';
var INITIALPOINT = "0px";
var FINALPOINT = "1200px"
var isMoving = false;


function slideRight() {
    currentIndex++;
    isMoving = true;
    if (currentIndex < sliderImages.length) {
        window.requestAnimationFrame(imageSliderRight);
    } else if (currentIndex == sliderImages.length) {
        currentIndex = 1;
        imageWrapper.style.left = INITIALPOINT;
        imageSliderRight();
    }
}


function slideLeft() {
    currentIndex--;
    isMoving = true;
    if (currentIndex < 0) {
        window.requestAnimationFrame(firstToEnd);
    } else if (currentIndex >= 0) {
        window.requestAnimationFrame(imageSliderLeft);
    }
}


function imageSliderRight() {
    var leftPx = parseInt(window.getComputedStyle(imageWrapper).left) - 30;
    imageWrapper.style.left = leftPx + UNIT;
    if (parseInt(leftPx) != -(LIMIT * currentIndex)) {
        if (parseInt(leftPx) < -(LIMIT * currentIndex)) {
            isMoving = false;
            imageWrapper.style.left = -(LIMIT * currentIndex) + UNIT;
        } else {
            window.requestAnimationFrame(imageSliderRight);
        }
    }
    radioActive("right");
}


function radioActive(status) {
    for (var i = 1; i <= sliderImages.length - 1; i++) {
        if (window.getComputedStyle(imageWrapper).left == -(LIMIT * (sliderImages.length - 1)) + UNIT || imageWrapper.style.left == INITIALPOINT) {
            document.querySelector('#radio0').checked = true;
        }
        if (imageWrapper.style.left == -(LIMIT * i) + UNIT) {
            if (status == "left") {
                document.querySelector(`#radio${i - 1}`).checked = true;
            }
            else {
                try {
                    document.querySelector(`#radio${i}`).checked = true;
                } catch (e){

                }
            }
        }
    }

}


function imageSliderLeft() {
    radioActive("left");
    var rightPx = parseInt(imageWrapper.style.left) + 30;
    imageWrapper.style.left = rightPx + UNIT;
    if (rightPx != -(LIMIT * currentIndex)) {
        if (parseInt(rightPx) > -(LIMIT * currentIndex)) {
            isMoving = false;

            imageWrapper.style.left = -(LIMIT * currentIndex) + UNIT;
        } else {
            window.requestAnimationFrame(imageSliderLeft);
        }
    }

}

function firstToEnd() {
    currentIndex = sliderImages.length - 2;
    document.querySelector(`#radio${sliderImages.length - 2}`).checked = true;
    if (window.getComputedStyle(imageWrapper).left == INITIALPOINT || imageWrapper.style.left == INITIALPOINT) {
        function end() {
            var rightPx = (parseInt(window.getComputedStyle(imageWrapper).left) - 100);
            imageWrapper.style.left = rightPx + UNIT;
            if (rightPx != -1200) {
                window.requestAnimationFrame(end);
            } else {
                isMoving = false;
            }
        }
        window.requestAnimationFrame(end)

    }
}


document.getElementById('next').onclick = function () {
    if (isMoving == false) {
        slideRight();

    }

}

document.getElementById('previous').onclick = function () {
    if (isMoving == false) {
        slideLeft();
    }
}

radioButton = document.querySelectorAll('.radio');
radioButton.forEach(onClickEvent);
function onClickEvent(item, index) {
    item.onclick = function () {
        document.querySelector('.carousel-image-wrapper').style.left = -(LIMIT * index) + "px";
    }
}

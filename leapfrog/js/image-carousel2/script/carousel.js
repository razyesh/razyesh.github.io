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

var imageWrapper = document.querySelector('.carousel-image-wrapper');
var UNIT = 'px';
var INITIALPOINT = "0px";
var isMoving = false;
var radioButton = document.querySelectorAll('.radio');



function Carousel(sliderImages) {
    this.animateTo = "";
    this.INITIALPOINT = "0px";
    this.sliderImages = sliderImages;
    var self = this;

    // setInterval(function(){
    //     carousel1.slideRight()
    // }, 3000)

    this.slideRight = function () {
        if (!isMoving) {
            currentIndex++;
            if (currentIndex < this.sliderImages.length) {
                isMoving = true;
                window.requestAnimationFrame(this.imageSliderRight);
            } else if (currentIndex == this.sliderImages.length) {
                currentIndex = 0;
                imageWrapper.style.left = LIMIT + UNIT;
                this.imageSliderRight();
                isMoving = false;
            }
             
        }
    }


    this.slideLeft = function () {
        if (!isMoving){
            currentIndex--;
            if (currentIndex < 0) {
                isMoving = true;
                window.requestAnimationFrame(this.firstToEnd);
            } else if (currentIndex >= 0) {
                isMoving = true;
                window.requestAnimationFrame(this.imageSliderLeft);
            }
        }
    }

    function radioActive(status) {
        for (var i = 1; i <= self.sliderImages.length -1; i++) {
            if (window.getComputedStyle(imageWrapper).left == -(LIMIT * (self.sliderImages.length)) + UNIT || imageWrapper.style.left == this.INITIALPOINT) {
                document.querySelector('#radio0').checked = true;
            }
    
            if (imageWrapper.style.left == -(LIMIT * i) + UNIT) {
                if (status == "left") {
                    document.querySelector(`#radio${i-1}`).checked = true;
                }
                else {
                    try {
                        document.querySelector(`#radio${i}`).checked = true;
                    } catch (e) {

                    }
                }
            }
        }

    }


    this.imageSliderRight = function () {
        function slider() {
            var leftPx = parseInt(window.getComputedStyle(imageWrapper).left) - 40;
            imageWrapper.style.left = leftPx + UNIT;
            radioActive("right");

            if (leftPx < -(LIMIT * currentIndex)) {
                isMoving = false;
                imageWrapper.style.left = -(LIMIT * currentIndex) + UNIT;
            }
            else {
                window.requestAnimationFrame(slider);
            }
        }
        window.requestAnimationFrame(slider);
    }


    this.imageSliderLeft = function () {
        function slider() {
            radioActive("left");
            var rightPx = parseInt(imageWrapper.style.left) + 30;
            imageWrapper.style.left = rightPx + UNIT;
            if (rightPx > -(LIMIT * currentIndex)) {
                isMoving = false;
                imageWrapper.style.left = -(LIMIT * currentIndex) + UNIT;
            }
            else {
                window.requestAnimationFrame(slider);
            }
        }
        window.requestAnimationFrame(slider)

    }


    this.firstToEnd = function () {
        currentIndex = self.sliderImages.length - 1;
        document.querySelector(`#radio${self.sliderImages.length - 1}`).checked = true;
        if (window.getComputedStyle(imageWrapper).left == INITIALPOINT || imageWrapper.style.left == INITIALPOINT) {
            function end() {
                var rightPx = (parseInt(window.getComputedStyle(imageWrapper).left) - 100);
                imageWrapper.style.left = rightPx + UNIT;
                if (rightPx != -(LIMIT * currentIndex)) {
                    window.requestAnimationFrame(end);
                } else {
                    isMoving = false;
                }
            }
            window.requestAnimationFrame(end)

        }
    }

    this.onClickEvent = function (item, index) {
        item.onclick = function () {
            document.querySelector('.carousel-image-wrapper').style.left = -(LIMIT * index) + "px";
        }
    }

}



var carousel1 = new Carousel(document.querySelectorAll('.slide'))
var carousel2 = new Carousel(document.querySelectorAll('.slide0'))



document.getElementById('next').onclick = function () {
    carousel1.slideRight();
}

// var slideMove = setInterval(function () { carousel1.slideRight() }, 3000);

document.getElementById('previous').onclick = function () {
    carousel1.slideLeft();
}

radioButton.forEach(carousel1.onClickEvent);


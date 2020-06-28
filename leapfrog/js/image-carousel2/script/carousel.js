/**
 * @param {Number} LIMIT The width limit of carousel
 * @param {Number} currentIndex The current index of carousel
 * @param {function} slideRight To slide the image to right
 * @param {function} slideLeft To slide the image to left
 * @param {animator} imageSliderLeft To slide image to left on certain interval
 * @param {animator} imageSliderRight To slide image to right on certain interval 
 */

var UNIT = 'px';
var INITIALPOINT = "0px";
var isMoving = false;
var radioButton = document.querySelectorAll('.radio');



function Carousel(sliderImages, imageWrapper, width) {
    this.animateTo = "";
    this.INITIALPOINT = "0px";
    this.sliderImages = sliderImages;
    var self = this;
    this.currentIndex = 0;
    this.imageWrapper = imageWrapper;
    this.width = parseInt(window.getComputedStyle(document.querySelector('.slide')).width);
    // setInterval(function(){
    //     carousel1.slideRight()
    // }, 3000)

    this.slideRight = function () {
        this.width = parseInt(window.getComputedStyle(document.querySelector('.slide')).width);
        if (!isMoving) {
            self.currentIndex++;
            if (self.currentIndex < this.sliderImages.length) {
                isMoving = true;
                window.requestAnimationFrame(this.imageSliderRight);
            } else if (self.currentIndex == this.sliderImages.length) {
                self.currentIndex = 0;
                imageWrapper.style.left = self.width + UNIT;
                this.imageSliderRight();
                isMoving = false;
            }
             
        }
    }


    this.slideLeft = function () {
        this.width = parseInt(window.getComputedStyle(document.querySelector('.slide')).width);

        if (!isMoving){
            self.currentIndex--;
            if (self.currentIndex < 0) {
                isMoving = true;
                window.requestAnimationFrame(this.firstToEnd);
            } else if (self.currentIndex >= 0) {
                isMoving = true;
                window.requestAnimationFrame(this.imageSliderLeft);
            }
        }
    }

    function radioActive(status) {
        for (var i = 1; i <= self.sliderImages.length -1; i++) {
            if (window.getComputedStyle(imageWrapper).left == -(self.width * (self.sliderImages.length)) + UNIT || imageWrapper.style.left == this.INITIALPOINT) {
                document.querySelector('#radio0').checked = true;
            }
    
            if (imageWrapper.style.left == -(self.width * i) + UNIT) {
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
            var leftPx = parseInt(window.getComputedStyle(imageWrapper).left) - 100;
            imageWrapper.style.left = leftPx + UNIT;
            radioActive("right");

            if (leftPx < -(self.width * self.currentIndex)) {
                isMoving = false;
                imageWrapper.style.left = -(self.width * self.currentIndex) + UNIT;
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
            var rightPx = parseInt(imageWrapper.style.left) + 101;
            imageWrapper.style.left = rightPx + UNIT;
            if (rightPx > -(self.width * self.currentIndex)) {
                isMoving = false;
                imageWrapper.style.left = -(self.width * self.currentIndex) + UNIT;
            }
            else {
                window.requestAnimationFrame(slider);
            }
        }
        window.requestAnimationFrame(slider)

    }


    this.firstToEnd = function () {
        self.currentIndex = self.sliderImages.length - 1;
        document.querySelector(`#radio${self.sliderImages.length - 1}`).checked = true;
        if (window.getComputedStyle(imageWrapper).left == INITIALPOINT || imageWrapper.style.left == INITIALPOINT) {
            function end() {
                var rightPx = (parseInt(window.getComputedStyle(imageWrapper).left) - 200);
                if (rightPx >= -(self.width * self.currentIndex)) {
                    self.imageWrapper.style.left = rightPx + UNIT;
                    window.requestAnimationFrame(end);
                } else {
                    isMoving = false;
                    self.imageWrapper.style.left = (this.width * sliderImages.length) + UNIT;

                }
            }
            window.requestAnimationFrame(end)

        }
    }

    this.onClickEvent = function (item, index) {
        item.onclick = function () {
            document.querySelector('.carousel-image-wrapper').style.left = -(self.width * index) + "px";
        }
    }

}



var carousel1 = new Carousel(document.querySelectorAll('.slide'), document.querySelector('.carousel-image-wrapper'));

document.getElementById('next1').onclick = function () {
    carousel1.slideRight();
}

document.getElementById('previous1').onclick = function () {
    carousel1.slideLeft();
}
radioButton.forEach(carousel1.onClickEvent);


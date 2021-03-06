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


function Carousel(sliderImages, imageWrapper, transition) {
    this.animateTo = "";
    this.INITIALPOINT = "0px";
    this.sliderImages = sliderImages;
    var self = this;
    this.imageWrapper = imageWrapper;
    this.currentIndex = 0;
    this.width = parseInt(window.getComputedStyle(document.querySelector('.slide')).width);
    this.isMoving = false;

    this.transitionTime = transition;

    this.slideRight = function () {
        this.width = parseInt(window.getComputedStyle(document.querySelector('.slide')).width);
        if (!self.isMoving) {
            self.currentIndex++;
            if (self.currentIndex < this.sliderImages.length) {
                self.isMoving = true;
                window.requestAnimationFrame(this.imageSliderRight);
            } else if (self.currentIndex == this.sliderImages.length) {
                self.currentIndex = 0;
                imageWrapper.style.left = self.width + UNIT;
                this.imageSliderRight();
                self.isMoving = false;
            }
             
        }
    }


    this.slideLeft = function () {
        this.width = parseInt(window.getComputedStyle(document.querySelector('.slide')).width);

        if (!self.isMoving){
            self.currentIndex--;
            if (self.currentIndex < 0) {
                self.isMoving = true;
                window.requestAnimationFrame(this.firstToEnd);
            } else if (self.currentIndex >= 0) {
                self.isMoving = true;
                window.requestAnimationFrame(this.imageSliderLeft);
            }
        }
    }



    this.imageSliderRight = function () {
        function slider() {
            var leftPx = parseInt(window.getComputedStyle(imageWrapper).left) - self.transitionTime;
            imageWrapper.style.left = leftPx + UNIT;

            if (leftPx < -(self.width * self.currentIndex)) {
                self.isMoving = false;
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
            var rightPx = parseInt(imageWrapper.style.left) + (self.transitionTime + 1);
            imageWrapper.style.left = rightPx + UNIT;
            if (rightPx > -(self.width * self.currentIndex)) {
                self.isMoving = false;
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
        document.querySelector(`#radio0${self.sliderImages.length - 1}`).checked = true;

        if (window.getComputedStyle(imageWrapper).left == INITIALPOINT || imageWrapper.style.left == INITIALPOINT) {
            function end() {
                var rightPx = (parseInt(window.getComputedStyle(imageWrapper).left) - 200);
                if (rightPx >= -(self.width * self.currentIndex)) {
                    self.imageWrapper.style.left = rightPx + UNIT;
                    window.requestAnimationFrame(end);
                } else {
                    self.isMoving = false;
                    self.imageWrapper.style.left = (this.width * sliderImages.length) + UNIT;

                }
            }
            window.requestAnimationFrame(end)

        }
    }

    this.onClickEvent = function (item, index) {
        item.onclick = function () {
            imageWrapper.style.left = -(self.width * index) + "px";
        }
    }


}





function transitionDefine1(){
    var formTransitionTime = document.forms['transitionForm']['transitionTime'].value;
    
    var slideWidth = window.getComputedStyle(document.querySelector('.slide')).width;
    if (formTransitionTime > parseInt(slideWidth)){
        document.getElementById('errorInfo').innerHTML = `Note the current width of this view is ${slideWidth}`;
    }
    
    document.getElementById('info').innerHTML = `The slide is floating at ${formTransitionTime}frame/milisec`;
    if (formTransitionTime){
        carousel1.transitionTime = formTransitionTime;
        

    }

}


//My carousel 1

var carousel1 = new Carousel(document.querySelectorAll('.slide'), document.querySelector('.carousel-image-wrapper'), 50);
var radioButton1 = document.querySelectorAll('.radio');
document.getElementById('next1').onclick = function () {
    carousel1.slideRight();
    document.querySelector(`#radio${carousel1.currentIndex}`).checked = true;
}

slidePlay = setInterval(function(){
    console.log(carousel1.holdTime)
    carousel1.slideRight();
    document.querySelector(`#radio${carousel1.currentIndex}`).checked = true;

}, 3000)

document.getElementById('previous1').onclick = function () {
    carousel1.slideLeft();
    document.querySelector(`#radio${carousel1.currentIndex}`).checked = true;
}
radioButton1.forEach(carousel1.onClickEvent);




//My carousel2
var carousel2 = new Carousel(document.querySelectorAll('.slide0'), document.querySelector('.carousel-image-wrapper2'), 20);
var radioButton2 = document.querySelectorAll('.radio1');
document.getElementById('next2').onclick = function () {
    carousel2.slideRight();
    document.querySelector(`#radio0${carousel2.currentIndex}`).checked = true;
}

setInterval(function(){
    carousel2.slideRight();
    document.querySelector(`#radio0${carousel1.currentIndex}`).checked = true;

}, 2000)


document.getElementById('previous2').onclick = function () {
    carousel2.slideLeft();
    document.querySelector(`#radio0${carousel2.currentIndex}`).checked = true;
}
radioButton2.forEach(carousel2.onClickEvent);



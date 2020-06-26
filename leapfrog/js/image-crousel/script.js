


/**
 * @param {Number} LIMIT The width limit of carousel
 * @param {Number} currentIndex The current index of carousel
 * @param {function} slideRight To slide the image to right
 * @param {function} slideLeft To slide the image to left
 * @param {animator} imageSliderLeft To slide image to left on certain interval
 * @param {animator} imageSliderRight To slide image to right on certain interval 
 */

class Carousel {

    constructor (LIMIT, sliderImages, imageWrapper){
        this.slideRight = this.slideRight.bind(this);
        this.slideLeft = this.slideLeft.bind(this);
        this.imageSliderRight = this.imageSliderRight.bind(this);
        this.imageSliderLeft = this.imageSliderLeft.bind(this);
        this.currentIndex = 0;
        this.LIMIT = LIMIT;
        this.leftswap = 0;
        this.sliderImages = sliderImages;
        this.imageWrapper = imageWrapper
        

    }

    slideRight() {
        this.currentIndex++;
        if (this.currentIndex < this.sliderImages.length) {
            window.requestAnimationFrame(this.imageSliderRight);
        } else if (this.currentIndex == this.sliderImages.length) {
            this.currentIndex = 1;
            this.imageWrapper.style.left = "0px";
            this.imageSliderRight();

        }
    }


    slideLeft() {
        this.currentIndex--;

        if (this.currentIndex >= 0) {
            window.requestAnimationFrame(this.imageSliderLeft);
        } else if (this.currentIndex < 0) {
            this.currentIndex = this.sliderImages.length - 1;
            this.leftswap = 1;
            this.imageWrapper.style.left = "-1200px";
            this.imageSliderLeft();

        }


    }

    imageSliderRight() {


        var leftPx = parseInt(window.getComputedStyle(this.imageWrapper).left) - 10;
        this.imageWrapper.style.left = leftPx + 'px';


        if (parseInt(leftPx) != -(this.LIMIT * this.currentIndex)) {
            window.requestAnimationFrame(this.imageSliderRight);
        }

        if (this.imageWrapper.style.left == "-400px") {
            document.querySelector('#radio1').checked = true;

        } else if (this.imageWrapper.style.left == "-800px") {
            document.querySelector('#radio2').checked = true;

        } else if (this.imageWrapper.style.left == "-1200px") {
            document.querySelector('#radio3').checked = true;
        } else if (this.imageWrapper.style.left == "-1600px"){
            document.querySelector('#radio0').checked = true;
        }
    }


    imageSliderLeft() {

        if (this.imageWrapper.style.left == "0px" || this.imageWrapper.style.left == "-10px") {
            document.querySelector('#radio0').checked = true;

        } else if (this.imageWrapper.style.left == "-400px" || this.imageWrapper.style.left == "-410px") {
            document.querySelector('#radio1').checked = true;

        } else if (this.imageWrapper.style.left == "-1200px") {
            document.querySelector('#radio3').checked = true;
        } else if (this.imageWrapper.style.left == "-800px" || this.imageWrapper.style.left == "-810px") {
            document.querySelector('#radio2').checked = true;
        } else if (this.imageWrapper.style.left == "-1600px"){
            document.querySelector('#radio3').checked = true;
        }



        if (this.leftswap != 1) {
            var rightPx = parseInt(window.getComputedStyle(this.imageWrapper).left) + 10;
            this.imageWrapper.style.left = rightPx + 'px';
            if (parseInt(rightPx) != -(this.LIMIT * this.currentIndex)) {
                window.requestAnimationFrame(this.imageSliderLeft);
            }
        } else {
            this.leftswap = 0;
            this.currentIndex = this.sliderImages.length - 2;
        }
    }

}


if (window.getComputedStyle(document.querySelector('.carousel-image-wrapper')).left == "0px") {
    document.querySelector('#radio0').checked = true;
}



carousel = new Carousel(400, document.querySelectorAll('.slide'), document.querySelector('.carousel-image-wrapper')) //Creation of New carousel
document.getElementById('next').onclick = function () {
    carousel.slideRight();
}
document.getElementById('previous').onclick = function () {
    carousel.slideLeft();
}




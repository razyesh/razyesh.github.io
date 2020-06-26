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
var imageWrapper = document.querySelector('.carousel-image-wrapper')


function slideRight() {
    currentIndex++;
    if (currentIndex < sliderImages.length) {
        window.requestAnimationFrame(imageSliderRight);
    } else if (currentIndex == sliderImages.length) {
        currentIndex = 1;
        imageWrapper.style.left = "0px";
        imageSliderRight();

    }
}


function slideLeft() {
    currentIndex--;

    if (currentIndex >= 0) {
        window.requestAnimationFrame(imageSliderLeft);
    } else if (currentIndex < 0) {
        currentIndex = sliderImages.length - 1;
        leftswap = 1;
        imageWrapper.style.left = "-1200px";
        imageSliderLeft();

    }


}

function imageSliderRight() {


    var leftPx = parseInt(window.getComputedStyle(imageWrapper).left) - 10;
    imageWrapper.style.left = leftPx + 'px';


    if (parseInt(leftPx) != -(LIMIT * currentIndex)) {
        window.requestAnimationFrame(imageSliderRight);
    }

    for (var i=1; i<=sliderImages.length;i++){
        if (window.getComputedStyle(imageWrapper).left == "0px" || window.getComputedStyle(imageWrapper).left == -(LIMIT*(sliderImages.length-1))+"px" ) {
            document.querySelector('#radio0').checked = true;
        }
        else if (imageWrapper.style.left == -(LIMIT*i) + "px") {
            document.querySelector(`#radio${i}`).checked = true;
            
        } 
    }
}


function imageSliderLeft() {

    for (var i=1; i<=sliderImages.length;i++){
    if (imageWrapper.style.left == "0px" || imageWrapper.style.left == "-10px") {
        document.querySelector('#radio0').checked = true;

    } else if (imageWrapper.style.left == -(LIMIT*i) + "px" || imageWrapper.style.left == -(LIMIT*i) - 10 + "px" ) {
        document.querySelector(`#radio${i}`).checked = true;
        
    } 
}


    if (leftswap != 1) {
        var rightPx = parseInt(window.getComputedStyle(imageWrapper).left) + 10;
        imageWrapper.style.left = rightPx + 'px';
        if (parseInt(rightPx) != -(LIMIT * currentIndex)) {
            window.requestAnimationFrame(imageSliderLeft);
        }
    } else {
        leftswap = 0;
        currentIndex = sliderImages.length - 2;
    }
}




if (window.getComputedStyle(document.querySelector('.carousel-image-wrapper')).left == "0px") {
    document.querySelector('#radio0').checked = true;
}




document.getElementById('next').onclick = function () {
    slideRight();
}
document.getElementById('previous').onclick = function () {
    slideLeft();
}

radioButton = document.querySelectorAll('.radio');
radioButton.forEach(onClickEvent);

function onClickEvent(item, index){
    item.onclick = function(){
        document.querySelector('.carousel-image-wrapper').style.left = -(LIMIT*index)+"px";
    }

}





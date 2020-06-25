
var sliderImages = document.querySelectorAll('.slide');

var currentIndex = 0;
var LIMIT = 400;
var end = 0;
imageWrapper = document.querySelector('.carousel-image-wrapper');

document.getElementById('first').style.left = "-400px";

function slideRight(){
    currentIndex++;
    if (currentIndex < sliderImages.length){
        window.requestAnimationFrame(imageSliderRight);
    } else if (currentIndex == sliderImages.length){
        currentIndex = 1;
        imageWrapper.style.left = "0px";
        imageSliderRight();

    }
}


function slideLeft(){
    currentIndex--;

    if (currentIndex >= 0){
        window.requestAnimationFrame(imageSliderLeft);
    } else if (currentIndex < 0 ){
        currentIndex = sliderImages.length - 1;
        imageWrapper.style.left = "-400px";

    }


}

function imageSliderRight(){
    leftPx = parseInt(window.getComputedStyle(imageWrapper).left) - 10 ;
    imageWrapper.style.left = leftPx + 'px';
    
    if (parseInt(leftPx) != -(LIMIT*currentIndex)){ 
            window.requestAnimationFrame(imageSliderRight);
    }
} 


function imageSliderLeft(){
    rightPx = parseInt(window.getComputedStyle(imageWrapper).left) + 10 ;
    imageWrapper.style.left = rightPx + 'px';
    
    if (parseInt(rightPx) != -(LIMIT*currentIndex) ){
        window.requestAnimationFrame(imageSliderLeft);
    }
}

if (currentIndex == 0 ){
    document.querySelector('#radio0').checked = true;
} 


document.getElementById('next').onclick = function(){
    console.log(currentIndex);
    slideRight();
}

document.getElementById('previous').onclick = function(){
    slideLeft();
}


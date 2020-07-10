//initiailization of canvas 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;


//initialization of Sprite Images for Intro and Playground
const image = new Image();
image.src = 'img/coc.png';

const image2 = new Image()
image2.src = 'img/intro.png'


const intro = new Audio()
intro.src = 'sound/coc-intro.mp3'

const image3 = new Image();
image3.src = 'img/char.png';

const image4 = document.getElementById('source2');

ctx.translate(CANVAS_WIDTH/2 + 50, 0);








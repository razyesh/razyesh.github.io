//initiailization of canvas 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;


//initialization of Sprite Images for Intro and Playground
const image = document.getElementById('source');

const image2 = new Image()
image2.src = 'img/intro.png'

const intro = new Audio()
intro.src = 'sound/coc-intro.mp3'



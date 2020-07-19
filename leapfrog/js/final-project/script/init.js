//initiailization of canvas 

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;


//initialization of Sprite Images for Intro and Playground
const image = new Image();
image.src = 'img/coc.png';

const image2 = new Image();
image2.src = 'img/intro.png';


const intro = new Audio();
intro.src = 'sound/coc-intro.mp3';
const coin_collect = new Audio();
coin_collect.src = 'sound/coins_collect_01.mp3';
const drag_fire = new Audio();
drag_fire.src = 'sound/dragon_fire.mp3';
const archer_attack = new Audio();
archer_attack.src = 'sound/archer_attack.mp3';


const image4 = document.getElementById('source2');

ctx.translate(CANVAS_WIDTH/2 + 50, 10);

const image5 = new Image();
image5.src = 'img/decorate.png';

const image6 = new Image();
image6.src = 'img/drag-edit.png';

images.player = new Image();
images.player.src = 'img/char.png';

const image7 = new Image();
image7.src = 'img/drag-edit1.png';


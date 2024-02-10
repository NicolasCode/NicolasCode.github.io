const BtnLeft = document.querySelector('.btn-left'),
      BtnRight = document.querySelector('.btn-right'),
      slider = document.querySelector('.slider-banner'),
      banner = document.getElementsByClassName('banner-section'),
      cont = document.querySelector('.cont');

let translate = 0;
let width = 100 /banner.length;
let counter = 0;
    
setInterval(() => {
    moveRight();
}, 10000);

slider.style.width = `${banner.length*100}%`;

BtnLeft.addEventListener('click',e => moveLeft());
BtnRight.addEventListener('click',e => moveRight());
    
let content = ` 1 / ${banner.length} `
cont.textContent = content;


function moveLeft() {
    counter--;
    if (counter < 0) {
        counter = banner.length-1;
    }
    
    content = ` ${counter+1} / ${banner.length} `
    cont.textContent = content;
    
    translate = width*counter;
    slider.style.transform = `translateX(-${translate}%)`;
    
}

function moveRight() {
    counter++;
    if (counter > banner.length-1) {
        counter = 0;
    }
    
    content = ` ${counter+1} / ${banner.length} `
    cont.textContent = content;
    
    translate = width*counter;
    slider.style.transform = `translateX(-${translate}%)`;
}



let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');

window.addEventlisrener('scooll',function(){
    let value = window.scrollY;

    wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
    wave1.style.backgroundPositionX = 300 + value * -4 + 'px';
    wave1.style.backgroundPositionX = 200 + value * 2 + 'px';
    wave1.style.backgroundPositionX = 100 + value * -2 + 'px';
})
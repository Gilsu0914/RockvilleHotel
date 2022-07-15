'use strict'

const toggleBtn = document.querySelector(`.navbar_toggleBtn`);
const menu = document.querySelector(`.navbar_menu`);

toggleBtn.addEventListener(`click`, ()=>{
    menu.classList.toggle(`active`);
});






const deluxClass = document.querySelector(".delux");
const suiteClass = document.querySelector(".suite");
const familyClass = document.querySelector(".family");
const presidentialClass = document.querySelector(".presidential");

const hideImage = () => {
    deluxClass.classList.remove('visible')
    suiteClass.classList.remove('visible')
    familyClass.classList.remove('visible')
    presidentialClass.classList.remove('visible')
}

const deluxBtn = document.getElementById("deluxBtn");
const suiteBtn = document.getElementById("suiteBtn");
const familyBtn = document.getElementById("familyBtn");
const presidentialBtn = document.getElementById("presidentialBtn");

deluxBtn.addEventListener('click', () => {
    hideImage()
    deluxClass.classList.add('visible')
});

suiteBtn.addEventListener('click', () => {
    hideImage()
    suiteClass.classList.add('visible')
});

familyBtn.addEventListener('click', () => {
    hideImage()
    familyClass.classList.add('visible')
});

presidentialBtn.addEventListener('click', () => {
    hideImage()
    presidentialClass.classList.add('visible')
});



document.querySelector(`.button2`).addEventListener(`click`,()=>{
    document.querySelector(`.container`).style.transform = `translate(-33.3%)`;
});

document.querySelector(`.button3`).addEventListener(`click`,()=>{
    document.querySelector(`.container`).style.transform = `translate(-66.6%)`;
});

document.querySelector(`.button1`).addEventListener(`click`,()=>{
    document.querySelector(`.container`).style.transform = `translate(0vw)`;
});




document.querySelector(`.button22`).addEventListener(`click`,()=>{
    document.querySelector(`.container2`).style.transform = `translate(-25%)`;
});

document.querySelector(`.button33`).addEventListener(`click`,()=>{
    document.querySelector(`.container2`).style.transform = `translate(-50%)`;
});

document.querySelector(`.button44`).addEventListener(`click`,()=>{
    document.querySelector(`.container2`).style.transform = `translate(-75%)`;
});

document.querySelector(`.button11`).addEventListener(`click`,()=>{
    document.querySelector(`.container2`).style.transform = `translate(0%)`;
});
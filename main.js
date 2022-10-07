'use strict'


//반응형 모바일 사이즈 메뉴 클릭
const toggleBtn = document.querySelector(`.navbar_toggleBtn`);
const menu = document.querySelector(`.navbar_menu`);
toggleBtn.addEventListener(`click`, ()=>{
    menu.classList.toggle(`active`);
});


//룸 종류별 버튼을 누르면 해당 사진과 설명만 보여주는 함수
const roomBtn = document.querySelectorAll(`.roomBtn`);
const roomContents = document.querySelectorAll(`.room_contents`);
let hideImage =()=>{ 
    for (let room_contents of roomContents ){
        room_contents.classList.remove(`visible`)
}}
let makeWhite = ()=>{
    for (let Btn of roomBtn){
        Btn.style.backgroundColor = "white";
    }
}
for(let i  = 0; i< roomBtn.length; i++){
    roomBtn[i].addEventListener(`click`, ()=>{
        hideImage();
        makeWhite();
        roomBtn[i].style.backgroundColor = "#da7f7c";
        roomContents[i].classList.add(`visible`) 
    })
}


//하단 버튼 캐로셀 동작
const topSlideBtn = document.querySelectorAll(`.TopBtn`);
for( let i = 0; i< topSlideBtn.length; i++ ){
    topSlideBtn[i].addEventListener('click', ()=>{
        if(topSlideBtn[i] == 0){
            document.querySelector(`.container`).style.transform = `translateX(0vw)`;
        }
        else if(topSlideBtn[i] != 0){
            let value = i * 33.3
            document.querySelector(`.container`).style.transform = `translateX(-${value}%)`
        }
    })
}

const bottomSlideBtn = document.querySelectorAll(`.DownBtn`);
for(let i = 0; i<bottomSlideBtn.length; i++){
    bottomSlideBtn[i].addEventListener(`click`, ()=>{
        let value = i * 25
        document.querySelector(`.container2`).style.transform = `translate(-${value}%)`;
    })
}
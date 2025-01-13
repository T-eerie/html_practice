const btnPopup = document.querySelector('.btnlogin-popup');
const cover_box = document.querySelector('.cover_box');
const loginlink = document.querySelector('.Login-link');
const registerlink = document.querySelector('.register-link');
const iconclose = document.querySelector('.icon-close');

function activateCoverBox(){
    cover_box.classList.add('active');
}
function deactivateCoverBox(){
    cover_box.classList.remove('active');
}
function activatePopup(){
    cover_box.classList.add('active-popup');
}
function deactivatePopup(){
    cover_box.classList.remove('active-popup');
}

registerlink.addEventListener('click', activateCoverBox);
loginlink.addEventListener('click', deactivateCoverBox);
btnPopup.addEventListener('click', activatePopup);
iconclose.addEventListener('click', deactivatePopup);
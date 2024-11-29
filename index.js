let btn = document.getElementById('botton');
let subject1 = document.getElementById('subject1');
let subject2 = document.getElementById('subject2');
let subject3 = document.getElementById('subject3');
let subject4 = document.getElementById('subject4');
let display = document.getElementById('display');
btn.addEventListener('click', () => {
    //alert('We are on')
    let average = (+subject1.value + +subject2.value + +subject3.value + +subject4.value)/4;
    display.innerText = `The average is: ${average}`;
})

let putme = document.getElementById('putme');
let display2 = document.getElementById('display2');
btn.addEventListener('click', () => {
    //alert('Still available')
    let aggregate = (+average.value + +putme.value)/2;
    display.innerText = `The aggregate is: ${aggregate}`;
})
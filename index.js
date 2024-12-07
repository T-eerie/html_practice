let btn = document.getElementById('button');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let display = document.getElementById('display');
btn.addEventListener('click', () => {
     //alert('We are on')
    let average = (+num1.value + +num2.value + +num3.value + +num4.value)/4;
    display.innerText = `The average is: ${average}`;
})

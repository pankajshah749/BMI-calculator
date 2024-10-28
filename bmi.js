// const heightinput = document.querySelector('.height')
// const weightinput = document.querySelector('.weight')

const from = document.querySelector('form')
const submitbutton = document.querySelector('.submitbutton')

from.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseFloat(document.querySelector(".height").value);
    const weight = parseFloat(document.querySelector(".weight").value);

    parseFloat

    const bmi =(weight/(height*height)).toFixed(3);
    const value = document.querySelector(".value");

    value.innerHTML = bmi;
    
});
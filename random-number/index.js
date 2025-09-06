const max = 6;
const min = 1;
let random;

const myBtn = document.getElementById("myBtn");
const label = document.getElementById("myLabel");

myBtn.onclick = function(){
    random = Math.floor((Math.random() * max) + min);
    label.textContent = random;
}

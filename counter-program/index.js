const decrease = document.getElementById("dec");
const increase = document.getElementById("inc");
const reset = document.getElementById("reset");
const zero = document.getElementById("zero");
let count = 0;

increase.onclick = function(){
    count++;
    zero.textContent = count;
    console.log(`increasing`)
}

decrease.onclick = function(){
    count--;
    zero.textContent = count;
}

reset.onclick = function(){
    count=0
    zero.textContent = count;
}
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
const value = document.getElementById("value");
let temp;

function convert(){
    if(toF.checked){
        temp = Number(value.value);
        temp = temp * 9 / 5  + 32;
        result.textContent = temp.toFixed(1) + " degree F" 
    }else if(toC.checked){
        temp = Number(value.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + " degree C" 
    }else{
        result.textContent = "Select a unit";
    }
}
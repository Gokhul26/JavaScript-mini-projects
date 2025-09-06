let disp = document.getElementById("myAge");
let btn = document.getElementById("but")

btn.onclick = function(){
    let myAge = document.getElementById("age").value;
    myAge = Number(myAge);

    if(myAge >= 18){
        disp.textContent = "You are eligible";
    } else {
        disp.textContent = "You are not eligible";
    }
}

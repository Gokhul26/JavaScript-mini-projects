const minNum = 1;
const maxNum = 100;

let random = Math.floor(Math.random() * (maxNum - minNum) );
console.log(random ,typeof random)

let running = true;
let attempts = 0;
let number;
while(running == true){
    number = window.prompt(`Guess the number from ${minNum} to ${maxNum}`);
    number = Number(number);

    if(number < minNum || number > maxNum){
        window.alert(" The number is not valid ");
    }else if(isNaN(number)){
        window.alert("this is not a number");
    }else{
        attempts++;
        if(number < random){
            window.alert("The number to low");
        }else if(number > random){
            window.alert("number too high");
        }else{
            window.alert(`The number ${number} is crct!!! Attempts: ${attempts}`);
            running = false;
        }
    }
}
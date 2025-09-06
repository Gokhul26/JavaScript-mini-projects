// console.log(`hello`);
// window.alert(`alert!!!!!!`)

let age = 20;
let myName = "Gokhul"
let isOnline = true;

let res = (1 + 2) + 3 * 2 - 1;
console.log(res)
// document.getElementById("h12").textContent = myName

document.getElementById("para1").textContent = `My age is ${age}`
console.log(`my age is ${age}`)
console.log(typeof isOnline)
console.log(typeof age)
console.log(typeof myName)


//easy way user input
let username;
// username = window.prompt("Enter your username");
// console.log(username)

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("uname").value;
    console.log(username)
    document.getElementById("h12").textContent = username
}

let x = "1";
x = Number(x);//type casting

const PI = 3.1415

let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum)

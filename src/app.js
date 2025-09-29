import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {





let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let quien = who[Math.floor(Math.random()* who.length)];


let action = ['ate', 'peed', 'crushed', 'broke'];
let quehizo = action [Math.floor(Math.random()* action.length)];


let what = ['my homework', 'my phone', 'the car'];
let quefue = what [Math.floor(Math.random()* what.length)];


let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
let cuando = when [Math.floor(Math.random()* when.length)];


//let newButton = document.createElement("button");
//newButton.innerText = "piensa";   
//document.getElementById("piensa").innerHTML = quien + quehizo + quefue + cuando;

let total = quien +" "+  quehizo + " " + quefue + " "+ cuando;

console.log(total);

document.getElementById("escusaboton").innerText = total











  console.log("Hello Rigo from the console!");
};






//newButton.addEventListener("click", function() {
//    alert("Haz hecho clic en el botón!");
//});   añadir boton con funcionalidad y cuando pulsa puede añdir funcion






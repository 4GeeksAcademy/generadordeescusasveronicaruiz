import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numeroAleatoriomath=(length)=>{
  return Math.floor(Math.random()* length)
}
window.onload = function() {



let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
// let quien = who[Math.floor(Math.random()* who.length)];
let quien = who[numeroAleatoriomath(who.length)];


let action = ['ate', 'peed', 'crushed', 'broke'];
// let quehizo = action [Math.floor(Math.random()* action.length)];
let queHizo = action[numeroAleatoriomath(action.length)];

let what = ['my homework', 'my phone', 'the car'];
// let quefue = what [Math.floor(Math.random()* what.length)];
let queFue = what[numeroAleatoriomath(what.length)];

let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
// let cuando = when [Math.floor(Math.random()* when.length)];
let cuando = when[numeroAleatoriomath(when.length)];


//let newButton = document.createElement("button");
//newButton.innerText = "piensa";   
//document.getElementById("piensa").innerHTML = quien + quehizo + quefue + cuando;

let total = quien +" "+  queHizo + " " + queFue + " "+ cuando;

console.log(total);


  console.log("Hello Rigo from the console!");
};
window.onload()





//newButton.addEventListener("click", function() {
//    alert("Haz hecho clic en el botón!");
//});   añadir boton con funcionalidad y cuando pulsa puede añdir funcion






//your code here

function setClock(){
	

const date = new Date();
const hr = date.getHours() % 12;
const mi = date.getMinutes();
const se = date.getSeconds();

const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const sec = document.querySelector(".second-hand");

const hourR = (hr * 30) + (0.5 * mi);
const minR = (mi * 6) + (0.1 * se);
const secR = se * 6;

hour.style.transform = `rotate(${hourR}deg)`;
hour.style.transform = `rotate(${minR}deg)`;
hour.style.transform = `rotate(${secR}deg)`;
}

setInterval(setClock,1000)

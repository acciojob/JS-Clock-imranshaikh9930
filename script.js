function setClock() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourHand = document.querySelector('.hour-hand');
  const minHand = document.querySelector('.min-hand');
  const secHand = document.querySelector('.second-hand');

  const hourRotation = (hour * 30) + (0.5 * minute); // 30 degrees per hour
  const minRotation = (minute * 6) + (0.1 * second); // 6 degrees per minute
  const secRotation = second * 6; // 6 degrees per second

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minHand.style.transform = `rotate(${minRotation}deg)`;
  secHand.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(setClock, 1000); // Update every second
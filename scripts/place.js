const temp = 22; // °C
const speed = 10; // km/h

function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

function displayWindChill() {
  const chillElement = document.getElementById("chill");
  if (temp <= 10 || speed <= 4.8) {
    chillElement.textContent = "N/A";
  } else {
    chillElement.textContent = `${calculateWindChill(temp, speed)} °C`;
  }
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

displayWindChill();

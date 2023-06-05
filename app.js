//Массив из изображений цифр [0-9]
const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

//Переменные для хранения предыдущего значения часов
let previousHours = '';
let previousMinutes = '';
let previousSeconds = '';

const hour1 = document.getElementById("hour1");
const hour2 = document.getElementById("hour2");
const minute1 = document.getElementById("minute1");
const minute2 = document.getElementById("minute2");
const second1 = document.getElementById("second1");
const second2 = document.getElementById("second2");


function onAnimationEnd(element) {
  element.classList.remove("animate__headShake");
}

function updateElement(element, value, number) {
  element.src = "images/" + value.toString().padStart(2, "0")[number] + ".jpg";
  element.parentElement.classList.add("animate__animated", "animate__headShake");

  element.parentElement.addEventListener("animationend", function () {
    onAnimationEnd(element.parentElement);
  });

}

function updateClock() {
  // Получаем текущее время
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Обновляем часы
  if (hours !== previousHours) {
    updateElement(hour1, hours, 0);
    updateElement(hour2, hours, 1);
  }

  // Обновляем минуты
  if (minutes !== previousMinutes) {
    updateElement(minute1, minutes, 0);
    updateElement(minute2, minutes, 1);
  }

  // Обновляем секунды
  if (seconds !== previousSeconds) {
    updateElement(second1, seconds, 0);
    updateElement(second2, seconds, 1);
  }

  // Обновляем предыдущие значения
  previousHours = hours;
  previousMinutes = minutes;
  previousSeconds = seconds;
}

// Обновляем время каждую секунду
setInterval(updateClock, 1000);

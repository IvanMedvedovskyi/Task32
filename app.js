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

function updateClock() {
  // Получаем текущее время
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Обновляем часы
  if (hours !== previousHours) {
    hour1.src = hours.toString().padStart(2, "0")[0] + ".jpg";
    hour2.src = hours.toString().padStart(2, "0")[1] + ".jpg";

    // Применяем класс анимации
    hour1.parentElement.classList.add("animate__animated", "animate__headShake");
    hour2.parentElement.classList.add("animate__animated", "animate__headShake");

    // Устанавливаем обработчик события окончания анимации
    hour1.parentElement.addEventListener("animationend", function () {
      onAnimationEnd(hour1.parentElement);
    });
    hour2.parentElement.addEventListener("animationend", function () {
      onAnimationEnd(hour2.parentElement);
    });
  }

  // Обновляем минуты
  if (minutes !== previousMinutes) {
    minute1.src = minutes.toString().padStart(2, "0")[0] + ".jpg";
    minute2.src = minutes.toString().padStart(2, "0")[1] + ".jpg";

    // Применяем класс анимации
    minute1.parentElement.classList.add("animate__animated", "animate__headShake");
    minute2.parentElement.classList.add("animate__animated", "animate__headShake");

    // Устанавливаем обработчик события окончания анимации
    minute1.parentElement.addEventListener("animationend", function () {
      onAnimationEnd(minute1.parentElement);
    });
    minute2.parentElement.addEventListener("animationend", function () {
      onAnimationEnd(minute2.parentElement);
    });
  }

  // Обновляем секунды
  if (seconds !== previousSeconds) {
    second1.src = seconds.toString().padStart(2, "0")[0] + ".jpg";
    second2.src = seconds.toString().padStart(2, "0")[1] + ".jpg";

    // Применяем класс анимации
    second1.parentElement.classList.add("animate__animated", "animate__headShake");
    second2.parentElement.classList.add("animate__animated", "animate__headShake");

    // Устанавливаем обработчик события окончания анимации
    second1.parentElement.addEventListener("animationend", function () {
      onAnimationEnd(second1.parentElement);
    });
    second2.parentElement.addEventListener("animationend", function () {
      onAnimationEnd(second2.parentElement);
    });
  }

  // Обновляем предыдущие значения
  previousHours = hours;
  previousMinutes = minutes;
  previousSeconds = seconds;
}

// Обновляем время каждую секунду
setInterval(updateClock, 1000);

//массив из изображений цифр [0-9]
const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

function updateClock() {
    //Получаем текущее время
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Обновление часов
    document.getElementById("hour1").src = hours.toString().padStart(2, "0")[0] + ".jpg";
    document.getElementById("hour2").src = hours.toString().padStart(2, "0")[1] + ".jpg";
  
    // Обновление минут
    document.getElementById("minute1").src = minutes.toString().padStart(2, "0")[0] + ".jpg";
    document.getElementById("minute2").src = minutes.toString().padStart(2, "0")[1] + ".jpg";
  
    // Обновление секунд
    document.getElementById("second1").src = seconds.toString().padStart(2, "0")[0] + ".jpg";
    document.getElementById("second2").src = seconds.toString().padStart(2, "0")[1] + ".jpg";
  }
  
  // Обновление времени каждую секунду
  setInterval(updateClock, 1000);
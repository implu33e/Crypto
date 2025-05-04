// Функция для открытия модального окна с картинкой
function openModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "flex"; // Показываем модальное окно
    modalImg.src = img.src; // Устанавливаем картинку в модальное окно
  }
  
  // Функция для закрытия модального окна
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Скрываем модальное окно
  }
  
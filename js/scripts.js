document.addEventListener('DOMContentLoaded', function() {
   

    // Обработчик для открытия ссылок в новом окне
    var externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            window.open(link.href, '_blank');
        });
    });

    // Обработчик для ссылок на место в документе
    var internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = link.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Обработчик для mailto ссылок
    var mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
    mailtoLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            window.location.href = link.href;
        });
    });
});

//Текст всплывает сверху
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const closeBtn = document.getElementById('close-btn');
    const logo = document.querySelector('.logo img'); // Найти элемент логотипа
    const welcomeHeading = document.getElementById('welcome-heading'); // Найти элемент заголовка

    if (hamburger && navMenu && closeBtn) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }

    // Добавить обработчик событий для логотипа
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html'; // Переход на главную страницу
        });
    }

    // Добавить класс анимации к заголовку после загрузки страницы
    if (welcomeHeading) {
        setTimeout(() => {
            welcomeHeading.classList.add('animate');
        }, 500); // Задержка в 500 мс перед началом анимации
    }
});



// scripts.js
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // Проверка наличия слайдов
    if (slides.length === 0) {
        return; // Прекратить выполнение функции, если слайдов нет
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}



// Находим все кнопки на странице
const buttons = document.querySelectorAll('.btn');

// Добавляем событие наведения для увеличения кнопок
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});




//открытие и закрытие меню
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const closeBtn = document.getElementById('close-btn');

    if (hamburger && navMenu && closeBtn) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const closeBtn = document.getElementById('close-btn');
    const logo = document.querySelector('.logo img'); // Найти элемент логотипа

    if (hamburger && navMenu && closeBtn) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }

    // Добавить обработчик событий для логотипа
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html'; // Переход на главную страницу
        });
    }
});



//проверка является ли устройство мобильным
document.addEventListener("DOMContentLoaded", function() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.getElementById('unity-game').style.display = 'none';
        document.getElementById('download-section').style.display = 'none';
        document.getElementById('mobile-message').style.display = 'block';
        document.getElementById('download-text').style.display = 'none';
    }
});




document.addEventListener('DOMContentLoaded', function () {
    var showMoreContainer = document.querySelector('.showMore');

    showMoreContainer.addEventListener('click', function (event) {
        var showMoreTrigger = findAncestor(event.target, 'showMoreTrigger');

        if (showMoreTrigger) {
            var tagTech = showMoreTrigger.nextElementSibling;
            var lines = tagTech.querySelectorAll('.line');

            // Adiciona ou remove a classe 'ativa' para mostrar ou ocultar o conteúdo
            tagTech.classList.toggle('ativa');

        }
    });

    // Função auxiliar para encontrar o ancestral com uma classe específica
    function findAncestor(element, className) {
        while ((element = element.parentElement) && !element.classList.contains(className));
        return element;
    }
});

var currentSlide = 0;
var slides = document.querySelectorAll('.carousel-projects .slide img');

function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }
    slides[index].classList.remove('hidden');
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentSlide);

    var prevButton = document.querySelector('.carousel-projects .button-carousel:nth-child(1)');
    var nextButton = document.querySelector('.carousel-projects .button-carousel:nth-child(2)');

    prevButton.addEventListener('click', function () {
        prevSlide();
    });

    nextButton.addEventListener('click', function () {
        nextSlide();
    });
});

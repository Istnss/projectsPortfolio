/*Page about me - .techstack */
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

/*Slide */
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

/*Btn prev n next */
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

/*Dark Mode*/ 
document.addEventListener('DOMContentLoaded', function () {
    // Obtém a referência para o botão de alternância do modo noturno
    var darkModeToggle = document.getElementById('dark-mode-toggle');

    // Obtém a referência para o elemento <body> do documento
    var body = document.body;

    // Verifica se há uma preferência de modo noturno armazenada no localStorage
    var isDarkModeEnabled = localStorage.getItem('darkModeEnabled');

    // Se houver uma preferência de modo noturno armazenada, aplique-a
    if (isDarkModeEnabled === 'true') {
        body.classList.add('darkmode'); // Adiciona a classe 'darkmode' ao corpo
        darkModeToggle.checked = true; // Marca o botão de alternância
    }

    // Adiciona um ouvinte de evento ao botão de alternância
    darkModeToggle.addEventListener('change', function () {
        // Atualiza a preferência no localStorage com base no estado do botão de alternância
        localStorage.setItem('darkModeEnabled', darkModeToggle.checked);

        // Atualiza a classe 'darkmode' no corpo conforme necessário
        if (darkModeToggle.checked) {
            body.classList.add('darkmode'); // Adiciona a classe 'darkmode' ao corpo
        } else {
            body.classList.remove('darkmode'); // Remove a classe 'darkmode' do corpo
        }
    });
});

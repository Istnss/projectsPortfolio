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
function adjustElementsForDarkMode(isDarkMode) {
    // Array de objetos contendo os IDs dos elementos e as respectivas imagens para o modo claro e escuro
    var elements = [
        { id: "iconNightLinkedin", lightSrc: "./img/linkedinLight.png", darkSrc: "./img/linkedinDark.svg" },
        { id: "iconNightGithub", lightSrc: "./img/githubLight.png", darkSrc: "./img/githubDark.png" },
        { id: "imgCat", lightSrc: "./img/iconHome.png", darkSrc: "img/catHome.gif" },
        { id: "nightmode", lightSrc: "./img/iconlamp.png", darkSrc: "./img/iconmoon.svg" },
        { id: "iconNightInstagram", lightSrc:  "./img/iconInstagramLight.png", darkSrc:"img/icon-instagram.svg" }
        // Adicione mais objetos conforme necessário
    ];

    elements.forEach(function (element) {
        var imgElement = document.getElementById(element.id);

        if (imgElement) {
            imgElement.src = isDarkMode ? element.lightSrc : element.darkSrc;
        }
    });
}

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
        adjustElementsForDarkMode(true);
    }

    // Adiciona um ouvinte de evento ao botão de alternância
    darkModeToggle.addEventListener('change', function () {
        // Atualiza a preferência no localStorage com base no estado do botão de alternância
        localStorage.setItem('darkModeEnabled', darkModeToggle.checked);

        // Atualiza a classe 'darkmode' no corpo conforme necessário
        if (darkModeToggle.checked) {
            body.classList.add('darkmode'); // Adiciona a classe 'darkmode' ao corpo
            adjustElementsForDarkMode(true);
        } else {
            body.classList.remove('darkmode'); // Remove a classe 'darkmode' do corpo
            adjustElementsForDarkMode(false);
        }
    });
});

/* Botao Download*/
function downloadResume(){
    var downloadLink = document.createElement('a');
    downloadLink.href = "http://drive.usercontent.google.com/uc?id=17mP-AjRpy0-lkEdJIbIgTmCb5SsXn5Kt&export=downloadLink";
    downloadLink.download = "resume_Isabela";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
    
   

/*Pagina projetos */
var elementDescription = document.querySelectorAll('.project-page');

elementDescription.forEach(function(project){
    project.addEventListener('mouseover', function(){
        project.querySelector('description').computedStyleMap.visibility = 'visible';
    });
    project.addEventListener('mouseout', function(){
        project.querySelector('description').computedStyleMap.visibility = 'hidden';
    });
});


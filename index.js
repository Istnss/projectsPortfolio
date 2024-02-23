document.addEventListener('DOMContentLoaded', function () {
    var showMoreContainers = document.querySelectorAll('.showMore');

    showMoreContainers.forEach(function (container) {
        container.addEventListener('click', function (event) {
            var showMoreTrigger = findAncestor(event.target, 'showMoreTrigger');

            if (showMoreTrigger) {
                var tagTech = showMoreTrigger.nextElementSibling;
                var lines = tagTech.querySelectorAll('.line');

                tagTech.classList.toggle('ativa');

                closeOtherContainers(container);
            }
        });
    });

    function findAncestor(element, className) {
        while ((element = element.parentElement) && !element.classList.contains(className));
        return element;
    }

    function closeOtherContainers(clickedContainer) {
        showMoreContainers.forEach(function (container) {
            if (container !== clickedContainer) {
                var tagTech = container.querySelector('.tagTech');
                if (tagTech.classList.contains('ativa')) {
                    tagTech.classList.remove('ativa');
                }
            }
        });
    }
});


var currentSlide = [0, 0]; 
var carouselSlides = document.querySelectorAll('.carousel-projects .slide');
var prevButtons = document.querySelectorAll('.carousel-projects .prev-button');
var nextButtons = document.querySelectorAll('.carousel-projects .next-button');

function showSlide(index, carouselIndex) {
    var slides = carouselSlides[carouselIndex].querySelectorAll('img');
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }
    slides[index].classList.remove('hidden');
}
function nextSlide(carouselIndex) {
    currentSlide[carouselIndex]++;
    var slidesLength = carouselSlides[carouselIndex].querySelectorAll('img').length;
    if (currentSlide[carouselIndex] >= slidesLength) {
        currentSlide[carouselIndex] = 0;
    }
    showSlide(currentSlide[carouselIndex], carouselIndex);
}
function prevSlide(carouselIndex) {
    currentSlide[carouselIndex]--;
    var slidesLength = carouselSlides[carouselIndex].querySelectorAll('img').length;
    if (currentSlide[carouselIndex] < 0) {
        currentSlide[carouselIndex] = slidesLength - 1;
    }
    showSlide(currentSlide[carouselIndex], carouselIndex);
}
document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < prevButtons.length; i++) {
        prevButtons[i].addEventListener('click', function (event) {
            var carouselIndex = Array.prototype.indexOf.call(prevButtons, event.target);
            prevSlide(carouselIndex);
        });
    }
    for (var i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener('click', function (event) {
            var carouselIndex = Array.prototype.indexOf.call(nextButtons, event.target);
            nextSlide(carouselIndex);
        });
    }
    for (var i = 0; i < carouselSlides.length; i++) {
        showSlide(currentSlide[i], i);
    }
});
/**/
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
/**/ 
function adjustElementsForDarkMode(isDarkMode) {
    var elements = [
        { id: "iconNightLinkedin", lightSrc: "./img/linkedinLight.png", darkSrc: "./img/linkedinDark.svg" },
        { id: "iconNightGithub", lightSrc: "./img/githubLight.png", darkSrc: "./img/githubDark.png" },
        { id: "imgCat", lightSrc: "./img/iconHome.png", darkSrc: "img/catHome.gif" },
        { id: "nightmode", lightSrc: "./img/iconlamp.png", darkSrc: "./img/iconmoon.svg" },
        { id: "iconNightInstagram", lightSrc:  "./img/iconInstagramLight.png", darkSrc:"img/icon-instagram.svg" }
    ];

    elements.forEach(function (element) {
        var imgElement = document.getElementById(element.id);

        if (imgElement) {
            imgElement.src = isDarkMode ? element.lightSrc : element.darkSrc;
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var darkModeToggle = document.getElementById('dark-mode-toggle');

    var body = document.body;

    var isDarkModeEnabled = localStorage.getItem('darkModeEnabled');

    if (isDarkModeEnabled === 'true') {
        body.classList.add('darkmode');
        darkModeToggle.checked = true; 
        adjustElementsForDarkMode(true);
    }
    darkModeToggle.addEventListener('change', function () {
        localStorage.setItem('darkModeEnabled', darkModeToggle.checked);
        if (darkModeToggle.checked) {
            body.classList.add('darkmode'); 
            adjustElementsForDarkMode(true);
        } else {
            body.classList.remove('darkmode'); 
            adjustElementsForDarkMode(false);
        }
    });
});
/**/
function downloadResume(){
    var downloadLink = document.createElement('a');
    downloadLink.href = "https://drive.usercontent.google.com/uc?id=17mP-AjRpy0-lkEdJIbIgTmCb5SsXn5Kt&export=downloadLink";
    downloadLink.download = "resume_Isabela";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
let elementoDescricao = document.querySelectorAll('.imageProject');

elementoDescricao.forEach(function(elemento){
    elemento.addEventListener('mouseover', function(){
        elemento.querySelector('description-project').computedStyleMap.visibility = 'visible';
    });
    elemento.addEventListener('mouseout', function(){
        elemento.querySelector('description-project').computedStyleMap.visibility = 'hidden';
    });
});


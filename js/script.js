window.onload = function() {
    const menuItems = document.querySelectorAll("nav a");

    menuItems.forEach(item => {
        if (item.href === window.location.href) {
            item.classList.add('active');
        } else {
            item.classList.add('inactive');
        }

        item.addEventListener("mouseover", function() {
            item.classList.add('hover');
        });

        item.addEventListener("mouseout", function() {
            item.classList.remove('hover');
        });
    });
};


(function() {
    function showLoadStats() {
        const loadTime = performance.now();

        const footerText = document.getElementById('footer__text');

        const loadStat = document.createElement('span');
        loadStat.style.fontSize = '14px';
        loadStat.style.color = '#888';
        loadStat.innerHTML = ` | Время загрузки: ${loadTime.toFixed(2)} мс`;

        footerText.appendChild(loadStat);
    }

    window.addEventListener('load', showLoadStats);
})();

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});

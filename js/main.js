window.addEventListener("load", function () {
    const videoLink = document.querySelector('.video__link');
    const video = document.querySelector('.video');

    videoLink.addEventListener("click", function (event) {
        event.preventDefault();
        let href = videoLink.getAttribute("href");
        event.currentTarget.style.display = "none";
        let frame = '<iframe width="560" height="315" src="' + href + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        let div = document.createElement('div');
        div.innerHTML = frame;
        video.appendChild(div);
    });

    const switchLang = document.querySelector('#switch');
    const switchList = document.querySelector('.user-nav__language-list');
    switchLang.addEventListener('click', function (event) {
        event.stopPropagation();
        switchList.classList.toggle('user-nav__language-list--active');
    })

    document.addEventListener('click', function (event) {
        switchList.classList.remove('user-nav__language-list--active');
    })
});

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition /* - topOffset */;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

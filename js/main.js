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
});

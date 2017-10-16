document.getElementsByClassName('link-down')[0].onclick = function () {
    scrollToEl(document.getElementsByClassName('link-down')[0], document.getElementById('about-me'), 2000);
};

function scrollToEl(element, to, duration) {
    let delta = to.offsetTop - window.scrollY;
    let perTick = delta / duration * 10;
    let iteration = delta / perTick;
    for (let i = 0; i < iteration; i++) {
        setTimeout(_ => {
            window.scrollTo(0, window.scrollY + perTick);
        }, 10 + 10 * i);
    }
}
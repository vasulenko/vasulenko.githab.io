function scrollFrom(event, target) {
    scrollToEl(event.target, document.getElementById(target), 800);
}

let header = document.getElementsByClassName('header')[0];
let arrowTop = document.getElementsByClassName('arrow__to-top')[0];
let stickly = false;
window.onscroll = (e) => {
    if (window.scrollY > document.getElementsByClassName('about-me')[0].offsetTop - 40) {
        if (!stickly) {
            header.classList.add('header--stickly');
            arrowTop.classList.add('arrow__to-top--visible');
            stickly = true;
        }
    }
    else {
        header.classList.remove('header--stickly');
        arrowTop.classList.remove('arrow__to-top--visible');
        stickly = false;
    }
};

function scrollToEl(element, to, duration) {
    let delta = to.offsetTop - window.scrollY - 15;
    let perTick = Math.floor(delta / duration * 10);
    let iteration = delta / perTick;
    for (let i = 0; i < iteration; i++) {
        setTimeout(_ => {
            window.scrollTo(0, window.scrollY + perTick);
        }, 10 * i);
    }
}
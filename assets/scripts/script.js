const hidden = document.querySelector('.hidden');

window.addEventListener("resize", resize);

function resize() {
    if (window.innerWidth > 576) {
        hidden.classList.remove('hidden');
    }
}
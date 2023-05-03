

window.addEventListener('keydown', function (e) {

    const AUDIO = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const KEY = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!AUDIO) return; // Impide que la funcion actue en todas las teclas, solo en las que tienen su correspondiente data-key
    AUDIO.currentTime = 0; // tiempo de reaccion.
    AUDIO.play();
    KEY.classList.add('playing');
});

const KEYS = document.querySelectorAll('.key');
KEYS.forEach(key => key.addEventListener('transitionend', removeTransition))
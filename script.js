const card = document.getElementById('birthdaycard');
const musicToggle = document.getElementById('musicToggle');
const birthdayAudio = document.getElementById('birthdayAudio');

card.addEventListener('click', function() {
    const isOpening = !card.classList.contains('open');
    card.classList.toggle('open', isOpening);

    if (isOpening) {
        playMusic();
    } else {
        stopMusic();
    }
});

musicToggle.addEventListener('click', function() {
    if (birthdayAudio.paused) {
        playMusic();
    } else {
        stopMusic();
    }
});

birthdayAudio.addEventListener('play', function() {
    musicToggle.textContent = 'Stop music';
});

birthdayAudio.addEventListener('pause', function() {
    musicToggle.textContent = 'Play music';
});

function playMusic() {
    birthdayAudio.play().catch(function() {
        musicToggle.textContent = 'Tap to play music';
    });
}

function stopMusic() {
    birthdayAudio.pause();
    birthdayAudio.currentTime = 0;
}

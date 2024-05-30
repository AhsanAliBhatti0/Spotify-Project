document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.control-button:nth-child(2)');

    playButton.addEventListener('click', () => {
        if (playButton.textContent === 'Play') {
            playButton.textContent = 'Pause';
            // Add code to play the song
        } else {
            playButton.textContent = 'Play';
            // Add code to pause the song
        }
    });
});

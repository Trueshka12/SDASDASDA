
document.addEventListener("DOMContentLoaded", function () {
    const volumeSlider = document.getElementById("volumeSlider");
    const audio = document.getElementById("audio");
    const toggleButton = document.getElementById("toggleButton");

    volumeSlider.addEventListener("input", function () {
        audio.volume = this.value;
    });

    toggleButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            toggleButton.innerHTML = "⏸";
        } else {
            audio.pause();
            toggleButton.innerHTML = "▶";
        }
    });

    toggleButton.innerHTML = audio.paused ? "▶" : "⏸";
});

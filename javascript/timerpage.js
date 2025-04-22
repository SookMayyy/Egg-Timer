function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const totalSeconds = parseInt(getQueryParam('time'));
let timeLeft = totalSeconds;

const display = document.getElementById('timer-display');

function updateTimer() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    display.textContent = `${minutes}:${seconds}`;
}

updateTimer();

const timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
        clearInterval(timerInterval);

        const alarmSound = new Audio("sounds/alarm.mp3");
        alarmSound.play();

        setTimeout(() => {
            window.location.href = "finishedpage.html";
        }, 2000); // delay the redirect to 2 sec
    }
}, 1000);

document.getElementById("back-to-start").addEventListener("click", () => {
    const clickSound = new Audio("sounds/click.mp3");
    clickSound.volume = 1.0;
    clickSound.currentTime = 0; // Reset to start
    clickSound.play().catch(err => console.error("Click sound failed:", err));

    setTimeout (() => {
        window.location.href = "index.html";
    }, 300);
});

// Play background music automatically when the page loads
const bgMusic = new Audio("sounds/bg-music.mp3"); // Use correct path
bgMusic.loop = true;
bgMusic.volume = 0.4;
bgMusic.play().catch(err => console.error("BG Music failed:", err));



// Add click event to all egg images
document.querySelectorAll('.egg-menu-image').forEach(img => {
    img.addEventListener('click', () => {
        const clickSound = new Audio("sounds/click.mp3");
        clickSound.volume = 1.0;
        clickSound.currentTime = 0; // Reset to start
        clickSound.play().catch(err => console.error("Click sound failed:", err));

        const time = img.getAttribute('data-time');

        // Wait 300ms before redirecting to allow sound to play
        setTimeout(() => {
            window.location.href = `timerpage.html?time=${time}`;
        }, 300);
    });
});

// Play background music automatically when the page loads
const bgMusic = new Audio("sounds/bg-music.mp3"); // Use correct path
bgMusic.loop = true;
bgMusic.volume = 0.4;
bgMusic.play().catch(err => console.error("BG Music failed:", err));

// Close button function
document.querySelector(".close-icon").addEventListener("click", () => {
    window.close();
})

// Minimize Button function
const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    // Minimize Button
    document.querySelector('.shrink-icon').addEventListener('click', () => {
        ipcRenderer.send('minimize-app'); // Send event to main process
    });
})
